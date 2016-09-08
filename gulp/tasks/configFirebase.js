'use strict';

import fs     from 'fs';
import gulp   from 'gulp';
import config from '../config';

gulp.task('configFirebase', () => {
  let firebaseJson = JSON.parse(fs.readFileSync('firebase.json'))

  let folderNames = ['articles', 'tutorials']
  let redirectRules = [
    {
      "source": "/docs/blockchain-id",
      "destination": "/docs/blockchain-identity",
    },
    {
      "source": "/docs/what-is-blockstack",
      "destination": "/articles/blockstack-core",
    }
  ]

  let rewrites = []
  let redirects = []

  folderNames.forEach((folderName) => {
    fs.readdirSync('app/docs/' + folderName + '/').forEach((docFilename) => {
      const key = docFilename.split('.')[0].toLowerCase()

      rewrites.push({
        "source": `/docs/${folderName}/${key}`,
        "destination": `/docs-${folderName}-${key}.html`
      })
    })
  })

  rewrites.push({
    "source": "**",
    "destination": "/index.html"
  })

  redirectRules.forEach((rule) => {
    redirects.push({
      "source": rule.source,
      "destination": rule.destination,
      "type": 301
    })
  })

  firebaseJson.rewrites = rewrites
  firebaseJson.redirects = redirects

  fs.writeFileSync('firebase.json', JSON.stringify(firebaseJson, null, 2))
});
