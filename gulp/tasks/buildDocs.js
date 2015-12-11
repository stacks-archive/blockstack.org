'use strict';

import gulp   from 'gulp'
import config from '../config'
import fs     from 'fs'

gulp.task('buildDocs', function() {
  var allDocs = {}

  fs.readdirSync('docs/').forEach(function(docFilename) {
    var key = docFilename.split('.')[0].toLowerCase()
    allDocs[key] = fs.readFileSync('docs/' + docFilename, 'utf8')
  })

  fs.writeFile('app/docs.json', JSON.stringify(allDocs), function(err) {
    if (err) {
      throw err
    }
    console.log('data saved')
  })

})