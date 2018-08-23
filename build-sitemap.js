const { fetchBlogPosts } = require('./common/lib')

const path = require('path')
const fs = require('fs')

const DESTINATION =
  process.env.DESTINATION || path.join(__dirname, '.', 'out', 'sitemap.xml')

let xml = ''
xml += `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://blockstack.org/</loc>
        <changefreq>always</changefreq>
        <priority>0.5</priority>
    </url>
    <url>
        <loc>https://blockstack.org/about</loc>
        <changefreq>always</changefreq>
        <priority>0.5</priority>
    </url>
    <url>
        <loc>https://blockstack.org/blog</loc>
        <changefreq>always</changefreq>
        <priority>0.5</priority>
    </url>
    <url>
        <loc>https://blockstack.org/faq</loc>
        <changefreq>always</changefreq>
        <priority>0.5</priority>
    </url>
    <url>
        <loc>https://blockstack.org/careers</loc>
        <changefreq>always</changefreq>
        <priority>0.5</priority>
    </url>
    <url>
        <loc>https://blockstack.org/funding</loc>
        <changefreq>always</changefreq>
        <priority>0.5</priority>
    </url>
    <url>
        <loc>https://blockstack.org/install</loc>
        <changefreq>always</changefreq>
        <priority>0.5</priority>
    </url>
    <url>
        <loc>https://blockstack.org/papers</loc>
        <changefreq>always</changefreq>
        <priority>0.5</priority>
    </url>
    <url>
        <loc>https://blockstack.org/press</loc>
        <changefreq>always</changefreq>
        <priority>0.5</priority>
    </url>
    <url>
        <loc>https://blockstack.org/videos</loc>
        <changefreq>always</changefreq>
        <priority>0.5</priority>
    </url>
    <url>
        <loc>https://blockstack.org/what-is-blockstack</loc>
        <changefreq>always</changefreq>
        <priority>0.5</priority>
    </url>
    <url>
        <loc>https://blockstack.org/legal/disclaimers</loc>
        <changefreq>always</changefreq>
        <priority>0.5</priority>
    </url>
    <url>
        <loc>https://blockstack.org/legal/privacy-policy</loc>
        <changefreq>always</changefreq>
        <priority>0.5</priority>
    </url>
    <url>
        <loc>https://blockstack.org/legal/terms-of-use</loc>
        <changefreq>always</changefreq>
        <priority>0.5</priority>
    </url>
    <url>
        <loc>https://blockstack.org/tutorials</loc>
        <changefreq>always</changefreq>
        <priority>0.5</priority>
    </url>
    <url>
        <loc>https://blockstack.org/tutorials/hello-blockstack</loc>
        <changefreq>always</changefreq>
        <priority>0.5</priority>
    </url>
    <url>
        <loc>https://blockstack.org/tutorials/multi-player-storage</loc>
        <changefreq>always</changefreq>
        <priority>0.5</priority>
    </url>
    <url>
        <loc>https://blockstack.org/tutorials/todo-list</loc>
        <changefreq>always</changefreq>
        <priority>0.5</priority>
    </url>
`

fetchBlogPosts().then((data) => {
  const { posts } = data
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
