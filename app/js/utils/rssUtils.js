import createTextVersion from 'textversionjs'

export function getSlugFromRSS(rssPost) {
  // Handle URL
  const url = rssPost.link[0]
  let urlSlug = null
  if (url) {
    urlSlug = url.replace("https://blockstack.org/blog/", "").replace(/\/$/, "")
  }
  return urlSlug
}

export function getPostFromRSS(rssPost) {
  const post = rssPost

  // Handle URL
  const url = post.link[0]
  const urlSlug = getSlugFromRSS(rssPost)

  // Handle title, description and creator
  const title = post.title[0]
  const preview = post.description[0]
  const description = createTextVersion(post.description[0])
  const blockstackID = post["dc:creator"][0]

  // Handle dates
  const date = new Date(Date.parse(post.pubDate))
  const datetimeString = date.toISOString()
  const dateString = date.toDateString()

  // Handle markup
  const markupFull = post["content:encoded"][0]
  const image = markupFull.split('src="')[1].split('" alt="')[0]
  let markupCleaned = null
  if (markupFull) {
    markupCleaned = markupFull.replace(/<img[^>]*>/,'')
    markupCleaned = markupCleaned.replace(/<img/g, '<img class="img-fluid"')
  }

  const data = {
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

  return data
}
