const fetch = require('cross-fetch')
const createTextVersion = require('textversionjs')
const { parseString } = require('xml2js')
const { blogAuthors } = require('../')

const getSlugFromRSS = (url) => {
  // Handle URL
  let urlSlug = null
  if (url) {
    urlSlug = url.replace('https://blockstack.org/blog/', '').replace(/\/$/, '')
  }
  return urlSlug
}

const getPostFromRSS = (rssPost) => {
  const post = rssPost

  // Handle URL
  const url = post.link[0].replace('https://blockstack.org/', '')
  const urlSlug = getSlugFromRSS(post.link[0])

  // Handle title, description and creator
  const title = post.title[0]
  const preview = post.description[0]
  const description = createTextVersion(post.description[0])
  const blockstackID = post['dc:creator'][0]

  // Handle dates
  const date = new Date(Date.parse(post.pubDate))
  const datetimeString = date.toISOString()
  const dateString = date.toDateString()

  // Handle markup
  const markupFull = post['content:encoded'][0]
  let markupCleaned = null
  let image = null
  if (markupFull) {
    const srcSplit = markupFull.split('src="')
    if (srcSplit.length > 1) {
      image = srcSplit[1].split('" alt="')[0]
    }
    markupCleaned = markupFull.replace(/<img[^>]*>/, '')
    markupCleaned = markupCleaned.replace(/<img/g, '<img class="img-fluid"')
  }

  return {
    urlSlug: urlSlug,
    url: url,
    title: title,
    preview: preview,
    description: description,
    image: image,
    markupFull: markupFull,
    markup: markupCleaned,
    blockstackID: blockstackID,
    date: dateString,
    datetime: datetimeString
  }
}

const getAllPostsFromRSS = (rssXML) => {
  let posts = []
  let postObject = {}

  parseString(rssXML, (err, result) => {
    // parse XML string
    const firstChannel = result.rss.channel[0]
    const channelItems = firstChannel.item

    channelItems.map((rssPost) => {
      let post = getPostFromRSS(rssPost)
      if (blogAuthors.hasOwnProperty(post.blockstackID)) {
        post.creator = blogAuthors[post.blockstackID]
      } else {
        post.creator = blogAuthors['blockstack.id']
      }
      if (post.markup && post.markup.includes('http://mun')) {
        post.markup = post.markup.replace('http://mun', 'https://mun')
      }
      if (post.markupFull && post.markupFull.includes('http://mun')) {
        post.markupFull = post.markupFull.replace('http://mun', 'https://mun')
      }
      posts.push(post)
      postObject[post.urlSlug] = post
    })
  })

  return {
    posts,
    postObject
  }
}

const filterByDate = (a, b) => a.createdAt < b.createdAt
function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
}

const fetchJobs = async () => {
  try {
    const res = await fetch(
      'https://api.lever.co/v0/postings/blockstack?mode=json'
    )
    if (res.status >= 400) {
      console.log('Bad response from server')
    }
    const jobsArr = await res.json()
    const DontSeeWhatYoureLookingForID = '5deebd50-43d3-45d1-afa2-55ccab0e812a'
    const lastItem = jobsArr.find(
      (listing) => listing.id === DontSeeWhatYoureLookingForID
    )
    const sortedByDateJobs = jobsArr
      .filter((listing) => listing.id !== DontSeeWhatYoureLookingForID)
      .sort(filterByDate)
    return [
      ...sortedByDateJobs,
      {
        ...lastItem
      }
    ]
  } catch (error) {
    console.log('error', error)
  }
}
const fetchStats = async () => {
  try {
    const res = await fetch(
      'https://blockstack-site-api.herokuapp.com/v1/stats'
    )
    if (res.status >= 400) {
      console.log('Bad response from server')
    }
    return res.json()
  } catch (error) {
    console.log('error', error)
  }
}

const urls = [
  'https://blockstack-site-api.herokuapp.com/v1/blog-rss?page=1',
  'https://blockstack-site-api.herokuapp.com/v1/blog-rss?page=2',
  'https://blockstack-site-api.herokuapp.com/v1/blog-rss?page=3'
]

const fetchBlogPosts = async () => {
  let posts = []
  let postObject = {}

  await Promise.all(
    urls.map(async (url) => {
      const data = await fetchBlogPostsFromServer(url)
      posts = [...posts, ...data.posts]
      postObject = { ...postObject, ...data.postObject }
    })
  )
  const sortedByDatePosts = posts.sort(
    (a, b) => new Date(b.datetime) - new Date(a.datetime)
  )
  return {
    posts: sortedByDatePosts,
    postObject
  }
}
const fetchBlogPostsFromServer = async (url) => {
  try {
    const res = await fetch(url)
    if (res.status >= 400) {
      console.log('Bad response from server')
    }
    const blogText = await res.text()

    return getAllPostsFromRSS(blogText)
  } catch (error) {
    console.log('error', error)
  }
}

export {
  slugify,
  fetchBlogPosts,
  fetchStats,
  fetchJobs,
  getSlugFromRSS,
  getPostFromRSS,
  getAllPostsFromRSS
}
