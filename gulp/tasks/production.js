'use strict';

import gulp        from 'gulp';
import runSequence from 'run-sequence';

gulp.task('prod', ['clean'], function(cb) {

  cb = cb || function() {};

  global.isProd = true;

  runSequence([
    'makeBuildDir', 'sass', 'copyStyles', 'imagemin', 'browserify', 'copyFonts',
    'copyIndex', 'copyIcons', 'copyFiles', 'buildDocs'
  ], cb);

});