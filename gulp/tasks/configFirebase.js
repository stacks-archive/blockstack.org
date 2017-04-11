'use strict';

import fs                        from 'fs'
import gulp                      from 'gulp'
import {parseString as parseXML} from 'xml2js'
import request from 'sync-request'

import config                    from '../config'
import {getPostFromRSS}          from '../../app/js/utils/rssUtils'

gulp.task('configFirebase', () => {
  let firebaseJson = JSON.parse(fs.readFileSync('firebase.json'))

  /*
  * Configure Rewrites
  */
  let rewrites = []

  // create rewrites for docs
  const docFolderNames = ['articles', 'tutorials', 'posts']
  docFolderNames.forEach((folderName) => {
    fs.readdirSync('app/docs/' + folderName + '/').forEach((docFilename) => {
      const key = docFilename.split('.')[0].toLowerCase()

      rewrites.push({
        "source": `/${folderName}/${key}`,
        "destination": `/docs-${folderName}-${key}.html`
      })
    })
  })

  // Create rewrites for blog
  const rssURL = "https://blockstack-site-api.herokuapp.com/v1/blog-rss"
  const requestBody = request('GET', rssURL).body
  parseXML(requestBody, (err, blogRSSData) => {
    const firstChannel = blogRSSData.rss.channel[0]
    firstChannel.item.map((rssPost) => {
      const post = getPostFromRSS(rssPost)
      rewrites.push({
        "source": `/blog/${post.urlSlug}`,
        "destination": `/blog-${post.urlSlug}.html`
      })
    })
  })

  // Push the main index.html rewrite
  rewrites.push({
    "source": "**",
    "destination": "/index.html"
  })

  firebaseJson.hosting.rewrites = rewrites

  /*
  * Configure Redirects
  */
  let redirectRules = [
    {
      "source": "/docs/blockchain-identity",
      "destination": "/posts/blockchain-identity",
    },
    {
      "source": "/docs/blockchain-id",
      "destination": "/posts/blockchain-identity",
    },
    {
      "source": "/docs/what-is-blockstack",
      "destination": "/posts/blockstack-core",
    },
    {
      "source": "/articles",
      "destination": "/posts"
    },
    {
      "source": "/talks",
      "destination": "/videos"
    },
    {
      "source": "/articles/browser-beta",
      "destination": "/browser"
    },
    {
      "source": "/articles/login-paper",
      "destination": "/papers"
    },
    {
      "source": "/docs/installation",
      "destination": "/docs"
    },
    {
      "source": "/posts",
      "destination": "/blog"
    }
  ]

  let redirects = []

  redirectRules.forEach((rule) => {
    redirects.push({
      "source": rule.source,
      "destination": rule.destination,
      "type": 301
    })
  })

  firebaseJson.hosting.redirects = redirects

  fs.writeFileSync('firebase.json', JSON.stringify(firebaseJson, null, 2))
});
