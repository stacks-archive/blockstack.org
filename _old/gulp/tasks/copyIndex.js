'use strict';

import gulp   from 'gulp'
import fs     from 'fs'

gulp.task('copyIndex', function() {
  var description = 'Blockstack is a new decentralized internet where users own their data and apps run locally.\
                     Take back control over your digital life. A browser is all you need to get started.';
  var image = 'https://blockstack.org/images/metatags/twitter-image.png'

  var indexHtml = fs.readFileSync('app/index.html', 'utf8')
  var metatagsHtml = fs.readFileSync('app/metatags.html', 'utf8')
  metatagsHtml = metatagsHtml.replace(/{description}/g, description)
  metatagsHtml = metatagsHtml.replace(/{image}/g, image)

  indexHtml = indexHtml.replace('<meta charset="utf-8" />', metatagsHtml)

  fs.writeFile('build/index.html', indexHtml, function(err) {
    if (err) {
      throw err
    }
  })
})