'use strict';

import gulp   from 'gulp'
import config from '../config'
import fs     from 'fs'

gulp.task('buildDocs', function() {
  var allDocs = {}

  fs.readdirSync('app/docs/').forEach(function(docFilename) {
    var key = docFilename.split('.')[0].toLowerCase()
    var docProperties = {}
    var docPage = fs.readFileSync('app/docs/' + docFilename, 'utf8')
    var pageSections = docPage.split('---')
    if (pageSections.length === 3) {
      docProperties.markdown = pageSections[2]
      var propertyLines = pageSections[1].split('\n')
      propertyLines.map(function(propertyLine) {
        console.log(propertyLine)
        if (propertyLine.split(': ').length === 2) {
          var parts = propertyLine.split(': ')
          var propertyName = parts[0],
              propertyValue = parts[1]
          docProperties[propertyName] = propertyValue.trim()
        }
      })
    }
    allDocs[key] = docProperties
  })

  fs.writeFile('app/docs.json', JSON.stringify(allDocs), function(err) {
    if (err) {
      throw err
    }
    console.log('data saved')
  })

})