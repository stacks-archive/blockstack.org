'use strict';

import gulp        from 'gulp';
import runSequence from 'run-sequence';

gulp.task('prod', ['clean'], function(cb) {

  cb = cb || function() {};

  global.isProd = true;

  //process.env.NODE_ENV = 'production';

  runSequence([
    'makeBuildDir', 'copyStyles', 'copyimages', 'browserify', 'copyFonts',
    'copyIndex', 'copyIcons', 'copyFiles', 'buildDocs', 'buildBlog',
    'configFirebase'
  ], cb);

});