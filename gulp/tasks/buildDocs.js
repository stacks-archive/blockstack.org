'use strict';

import gulp   from 'gulp'
import config from '../config'
import fs     from 'fs'
import metaData from 'meta-tag-data'

const googleSiteVerification = 'U-V1sDR9guEOpzUdVlVGsBJuxfJd6c0SPRjeU8-_chk'

function createMetatagMarkup(url, title, description, image) {
  let metatagMarkup = '<meta charset="utf-8" />\n'
  metatagMarkup += `<title>Blockstack - ${title}</title>\n`

  let metadata = metaData('name', {
    'description': description,
    'viewport': 'width=device-width',
    'google-site-verification': googleSiteVerification,
    'twitter:card': 'summary',
    'twitter:site': '@blockstackorg',
    'twitter:title': title,
    'twitter:description': description,
    'twitter:image': image
  })
  metadata.forEach((datum) => {
    metatagMarkup += `<meta name="${datum.name}" content="${datum.content}" />\n`
  })
  let metadata2 = metaData('property', {
    'og:title': title,
    'og:type': 'website',
    'og:url': url,
    'og:image': image,
    'og:description': description
  })
  metadata2.forEach((datum) => {
    metatagMarkup += `<meta property="${datum.property}" content="${datum.content}" />\n`
  })

  return metatagMarkup
}

gulp.task('buildDocs', () => {
  let allDocs = {}

  let indexHtml = fs.readFileSync('app/index.html', 'utf8')

  let folderNames = ['articles', 'tutorials']

  folderNames.forEach((folderName) => {
    fs.readdirSync('app/docs/' + folderName).forEach((docFilename) => {
      let key = docFilename.split('.')[0].toLowerCase(),
          docProperties = {},
          docPage = fs.readFileSync('app/docs/' + folderName + '/' + docFilename, 'utf8'),
          pageSections = docPage.split('---')
      
      let description = '',
          image = '',
          title = '',
          url = 'https://blockstack.org/' + folderName + '/' + key

      if (pageSections.length === 3) {
        docProperties.markdown = pageSections[2]
        let propertyLines = pageSections[1].split('\n')
        propertyLines.map((propertyLine) => {
          if (propertyLine.split(': ').length >= 2) {
            let parts = propertyLine.split(': ')
            let propertyName = parts[0],
                propertyValue = parts.slice(1).join(': ')
            if (propertyName === 'description') {
              description = propertyValue
            }
            if (propertyName === 'image') {
              image = 'https://blockstack.org' + propertyValue
            }
            if (propertyName === 'title') {
              title = propertyValue
            }
            docProperties[propertyName] = propertyValue.trim()
          }
        })
      }
      allDocs[key] = docProperties

      let metatagMarkup = createMetatagMarkup(url, title, description, image)
      let modifiedIndex = indexHtml.replace('<meta charset="utf-8" />', metatagMarkup)
      fs.writeFileSync('build/docs-' + folderName + '-' + key + '.html', modifiedIndex)
    })
  })

  fs.writeFile('app/docs.json', JSON.stringify(allDocs), (err) => {
    if (err) {
      throw err
    }
  })
})