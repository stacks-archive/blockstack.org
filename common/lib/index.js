const fetch = require('cross-fetch')
const { getAllPostsFromRSS } = require('../rss')
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

module.exports = { slugify, fetchBlogPosts, fetchStats, fetchJobs }
