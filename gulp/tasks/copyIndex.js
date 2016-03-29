'use strict';

import gulp   from 'gulp'
import config from '../config'
import fs     from 'fs'

gulp.task('copyIndex', function() {
  var indexHtml = fs.readFileSync('app/index.html', 'utf8')
  var metatagsHtml = fs.readFileSync('app/metatags.html', 'utf8')
  indexHtml = indexHtml.replace('<meta charset="utf-8" />', metatagsHtml)

  fs.writeFile('build/index.html', indexHtml, function(err) {
    if (err) {
      throw err
    }
  })
})