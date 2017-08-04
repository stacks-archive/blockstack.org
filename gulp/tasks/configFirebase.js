'use strict';

import fs                        from 'fs'
import gulp                      from 'gulp'
import {parseString as parseXML} from 'xml2js'
import request from 'sync-request'

import {getPostFromRSS}          from '../../app/js/utils/rssUtils'

gulp.task('configFirebase', () => {
  let firebaseJson = JSON.parse(fs.readFileSync('firebase.json'))

  /*
  * Configure Rewrites
  */
  let rewrites = []

  // create rewrites for docs
  const docFolderNames = ['posts', 'tutorials']
  docFolderNames.forEach((folderName) => {
    fs.readdirSync('app/docs/' + folderName + '/').forEach((docFilename) => {
      const key = docFilename.split('.')[0].toLowerCase()

      rewrites.push({
        'source': `/${folderName}/${key}`,
        'destination': `/docs-${folderName}-${key}.html`
      })
    })
  })

  // Create rewrites for blog
  const rssURL = 'https://blockstack-site-api.herokuapp.com/v1/blog-rss'
  const requestBody = request('GET', rssURL).body
  parseXML(requestBody, (err, blogRSSData) => {
    const firstChannel = blogRSSData.rss.channel[0]
    firstChannel.item.map((rssPost) => {
      const post = getPostFromRSS(rssPost)
      rewrites.push({
        'source': `/blog/${post.urlSlug}`,
        'destination': `/blog-${post.urlSlug}.html`
      })
    })
  })

  // Push the main index.html rewrite
  rewrites.push({
    'source': '**',
    'destination': '/index.html'
  })

  firebaseJson.hosting.rewrites = rewrites

  /*
  * Configure Redirects
  */
  const redirectRules = [
    {
      'source': '/docs/blockchain-identity',
      'destination': '/posts/blockchain-identity',
    },
    {
      'source': '/docs/blockchain-id',
      'destination': '/posts/blockchain-identity',
    },
    {
      'source': '/docs/what-is-blockstack',
      'destination': '/posts/blockstack-core',
    },
    {
      'source': '/docs/how-blockstack-works',
      'destination': '/whitepaper.pdf'
    },
    {
      'source': '/blockstack_whitepaper.pdf',
      'destination': '/whitepaper.pdf'
    },
    {
      'source': '/articles',
      'destination': '/blog'
    },
    {
      'source': '/posts',
      'destination': '/blog'
    },
    {
      'source': '/talks',
      'destination': '/videos'
    },
    {
      'source': '/browser',
      'destination': '/download'
    },
    {
      'source': '/articles/blockstack-core',
      'destination': '/papers'
    },
    {
      'source': '/articles/browser-beta',
      'destination': '/download'
    },
    {
      'source': '/articles/faq',
      'destination': '/faq'
    },
    {
      'source': '/faqs',
      'destination': '/faq'
    },
    {
      'source': '/articles/light-clients',
      'destination': '/papers'
    },
    {
      'source': '/articles/login-paper',
      'destination': '/papers'
    },
    {
      'source': '/docs/login-paper',
      'destination': '/papers'
    },
    {
      'source': '/docs/installation',
      'destination': '/tutorials'
    },
    {
      'source': '/tutorials/hello-world',
      'destination': '/tutorials/hello-blockstack',
    },
    {
      'source': '/tutorials/todo-spa',
      'destination': '/tutorials/todo-spa',
    },
    {
      'source': '/docs/cli-basic-usage',
      'destination': '/tutorials/cli-basics'
    },
    {
      'source': '/docs/cli-extended-usage',
      'destination': '/tutorials/cli-basics'
    },
    {
      'source': '/blockstack.pdf',
      'destination': '/blockstack_usenix16.pdf'
    },
    {
      'source': '/blockstack-login.pdf',
      'destination': '/blockstack_login16.pdf'
    },
    {
      'source': '/virtualchain.pdf',
      'destination': '/virtualchain_dccl16.pdf'
    },
    {
      'source': '/join',
      'destination': '/users'
    },
    {
      'source': '/newsletter',
      'destination': '/users'
    },
    {
      'source': '/summit',
      'destination': 'https://www.eventbrite.com/e/blockstack-summit-2017-tickets-35385366584'
    },
  ]

  let redirects = []

  redirectRules.forEach((rule) => {
    redirects.push({
      'source': rule.source,
      'destination': rule.destination,
      'type': 301
    })
  })

  firebaseJson.hosting.redirects = redirects

  fs.writeFileSync('firebase.json', JSON.stringify(firebaseJson, null, 2))
});
