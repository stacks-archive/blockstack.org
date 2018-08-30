const createTextVersion = require('textversionjs')
const { parseString } = require('xml2js')
const { blogAuthors } = require('./')

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
      posts.push(post)
      postObject[post.urlSlug] = post
    })
  })

  return {
    posts,
    postObject
  }
}

module.exports = {
  getSlugFromRSS,
  getPostFromRSS,
  getAllPostsFromRSS
}
