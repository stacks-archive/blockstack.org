'use strict';

import gulp                      from 'gulp'
import fs                        from 'fs'
import metaData                  from 'meta-tag-data'
import request                   from 'request'
import {parseString as parseXML} from 'xml2js'
import {getPostFromRSS}          from '../../app/js/utils/rssUtils'

function createMetatagMarkup(url, title, description, image) {
  let metatagMarkup = '<meta charset="utf-8" />\n'
  metatagMarkup += `<title>Blockstack - ${title}</title>\n`

  if (!image) {
    image = 'https://blockstack.org/images/metatags/twitter-image.png'
  }

  let metadata = metaData('name', {
    'description': description,
    'viewport': 'width=device-width',
    'twitter:card': 'summary_large_image',
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
  metatagMarkup += '<link rel="alternate" type="application/rss+xml" title="Blockstack Blog" href="https://blockstack-site-api.herokuapp.com/v1/blog-rss" />'

  return metatagMarkup
}

gulp.task('buildBlog', () => {
  function createBlogPostRecord(indexHtml, rssPost) {
    const post = getPostFromRSS(rssPost)
    const metatagMarkup = createMetatagMarkup(
      post.url, post.title, post.description, post.image)
    const modifiedIndex = indexHtml.replace('<meta charset="utf-8" />', metatagMarkup)
    fs.writeFileSync('build/blog-' + post.urlSlug + '.html', modifiedIndex)    
  }

  function createBlogRecords(indexHtml, rssJSON) {
    const firstChannel = rssJSON.rss.channel[0]
    firstChannel.item.map((post) => {
      createBlogPostRecord(indexHtml, post)
    })
  }

  const indexHtml = fs.readFileSync('app/index.html', 'utf8')
  const rssURL = 'https://blockstack-site-api.herokuapp.com/v1/blog-rss'
  request({
    url: rssURL,
    withCredentials: false
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      parseXML(body, (err, rssJSON) => {
        createBlogRecords(indexHtml, rssJSON)
      })
    } else {
      console.log(error)
    }
  })
})

function buildDocFile(indexHtml, folderName, docFilename) {
  let key = docFilename.split('.')[0].toLowerCase()
  let docProperties = {}
  if (folderName === '/') {
    folderName = ''
  }
  let pathname = 'app/docs' + folderName + '/' + docFilename
  let docPage = fs.readFileSync(pathname, 'utf8')
  let pageSections = docPage.split('---')
  
  let description = ''
  let image = ''
  let title = ''
  let url = 'https://blockstack.org/' + [folderName.replace(/^\/+/, ''), key].join('/')

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
  //allDocs[key] = docProperties
  let metatagMarkup = createMetatagMarkup(url, title, description, image)
  let modifiedIndex = indexHtml.replace('<meta charset="utf-8" />', metatagMarkup)
  fs.writeFileSync('build/docs-' + [folderName.replace(/^\/+/, ''), key].join('-') + '.html', modifiedIndex)

  return docProperties
}

gulp.task('buildDocs', () => {
  let allDocs = {}

  let indexHtml = fs.readFileSync('app/index.html', 'utf8')

  let folderNames = ['/tutorials', '/posts', '/']

  folderNames.forEach((folderName) => {
    fs.readdirSync('app/docs' + folderName).forEach((docFilename) => {
      if (docFilename.endsWith('.md')) {
        let docFilenameKey = docFilename.split('.')[0].toLowerCase()
        allDocs[docFilenameKey] = buildDocFile(indexHtml, folderName, docFilename)
      }
    })
  })

  fs.writeFile('app/docs.json', JSON.stringify(allDocs), (err) => {
    if (err) {
      throw err
    }
  })
})
