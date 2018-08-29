const generateRoutes = require('./routes')
const path = require('path')
const fs = require('fs')

const DESTINATION =
  process.env.DESTINATION || path.join(__dirname, '.', 'out', 'sitemap.xml')

let xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`

generateRoutes().then((r) => {
  const routes = Object.keys(r)

  routes.forEach((route) => {
    xml += '<url>'
    xml += `<loc>https://blockstack.org${route}</loc>`
    xml += `<changefreq>always</changefreq>`
    xml += `<priority>0.5</priority>`
    xml += '</url>'
  })

  xml += '</urlset>'

  fs.writeFileSync(DESTINATION, xml)

  console.log(`Wrote sitemap to ${DESTINATION}`)
})
