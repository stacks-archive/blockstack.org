'use strict';

import gulp   from 'gulp'
import config from '../config'
import fs     from 'fs'
import metaData from 'meta-tag-data'

var googleSiteVerification = 'U-V1sDR9guEOpzUdVlVGsBJuxfJd6c0SPRjeU8-_chk'

gulp.task('buildDocs', function() {
  var allDocs = {}

  var indexHtml = fs.readFileSync('app/index.html', 'utf8')

  fs.readdirSync('app/docs/').forEach(function(docFilename) {
    var key = docFilename.split('.')[0].toLowerCase()
    var docProperties = {}
    var docPage = fs.readFileSync('app/docs/' + docFilename, 'utf8')
    var pageSections = docPage.split('---')
    var description = ''
    var image = ''
    var title = ''
    var url = 'https://blockstack.org/docs/' + key
    if (pageSections.length === 3) {
      docProperties.markdown = pageSections[2]
      var propertyLines = pageSections[1].split('\n')
      propertyLines.map(function(propertyLine) {
        if (propertyLine.split(': ').length === 2) {
          var parts = propertyLine.split(': ')
          var propertyName = parts[0],
              propertyValue = parts[1]
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

    var metatagMarkup = '<meta charset="utf-8" />\n'
    metatagMarkup += `<title>Blockstack - ${title}</title>\n`

    var metadata = metaData('name', {
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
    var metadata2 = metaData('property', {
      'og:title': title,
      'og:type': 'website',
      'og:url': url,
      'og:image': image,
      'og:description': description
    })
    metadata2.forEach((datum) => {
      metatagMarkup += `<meta property="${datum.property}" content="${datum.content}" />\n`
    })
    console.log(metatagMarkup)

    var modifiedIndex = indexHtml.replace('<meta charset="utf-8" />', metatagMarkup)
    fs.writeFileSync('build/index-' + key + '.html', modifiedIndex)
  })

  fs.writeFile('app/docs.json', JSON.stringify(allDocs), function(err) {
    if (err) {
      throw err
    }
  })
})