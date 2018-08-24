const { fetchBlogPosts } = require('./common/lib')

const path = require('path')
const fs = require('fs')

const DESTINATION =
  process.env.DESTINATION || path.join(__dirname, '.', 'out', 'sitemap.xml')

let xml = ''
xml += `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`

const staticPaths = [
  '/',
  '/about',
  '/blog',
  '/faq',
  '/careers',
  '/funding',
  '/install',
  '/papers',
  '/press',
  '/videos',
  '/what-is-blockstack',
  '/legal/disclaimers',
  '/legal/privacy-policy',
  '/legal/terms-of-use',
  '/tutorials',
  '/tutorials/hello-blockstack',
  '/tutorials/multi-player-storage',
  '/tutorials/todo-list'
]

fetchBlogPosts().then((data) => {
  const { posts } = data

  staticPaths.forEach((path) => {
    xml += '<url>'
    xml += `<loc>https://blockstack.org${path}</loc>`
    xml += `<changefreq>always</changefreq>`
    xml += `<priority>0.5</priority>`
    xml += '</url>'
  })

  posts.forEach((post) => {
    xml += '<url>'
    xml += `<loc>https://blockstack.org/blog/${post.urlSlug}</loc>`
    xml += `<changefreq>always</changefreq>`
    xml += `<priority>0.5</priority>`
    xml += '</url>'
  })
  xml += '</urlset>'

  fs.writeFileSync(DESTINATION, xml)

  console.log(`Wrote sitemap to ${DESTINATION}`)
})
