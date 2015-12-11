'use strict';

import gulp        from 'gulp';
import runSequence from 'run-sequence';

gulp.task('dev', ['clean'], function(cb) {

  cb = cb || function() {};

  global.isProd = false;

  // Run all tasks once
  return runSequence([
    'sass', 'copyStyles', 'imagemin', 'browserify', 'copyFonts',
    'copyIndex', 'copyIcons'
  ], 'watch', cb);

});