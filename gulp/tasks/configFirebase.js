'use strict';

import fs     from 'fs';
import gulp   from 'gulp';
import config from '../config';

gulp.task('configFirebase', () => {
  let firebaseJson = JSON.parse(fs.readFileSync('firebase.json'))

  let rewrites = []
  let redirects = []

  fs.readdirSync('app/docs/').forEach((docFilename) => {
    const key = docFilename.split('.')[0].toLowerCase()

    rewrites.push({
      "source": `/docs/${key}`,
      "destination": `/docs-${key}.html`
    })
  })

  rewrites.push({
    "source": "**",
    "destination": "/index.html"
  })
  
  redirects.push({
    "source": "/docs/blockchain-id",
    "destination": "/docs/blockchain-identity",
    "type": 301
  })

  firebaseJson.rewrites = rewrites
  firebaseJson.redirects = redirects

  fs.writeFileSync('firebase.json', JSON.stringify(firebaseJson, null, 2))
});
