'use strict';

import gulp   from 'gulp'
import config from '../config'
import fs     from 'fs'

gulp.task('copyIndex', function() {
  var description = "Blockstack is a new decentralized internet of apps that let you control your data. " +
                    "With the Blockstack Browser, you can get started with decentralized applications. " +
                    "Free yourself of passwords and be less vulnerable to tracking and hacking.";
  var image = "https://blockstack.org/images/metatags/blockstack-site-snapshot.png"

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