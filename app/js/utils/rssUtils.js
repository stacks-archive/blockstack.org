import createTextVersion from 'textversionjs'

export function getPostFromRSS(rssPost) {
  const post = rssPost

  const urlSlug = post.link[0].split('ghost.io/')[1].replace(/\/$/, "")
  const url = "https://blockstack.org/blog/" + urlSlug
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
  const markupCleaned = markupFull.replace(/<img[^>]*>/,"")

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