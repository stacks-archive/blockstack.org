'use strict';

import gulp        from 'gulp';
import runSequence from 'run-sequence';

gulp.task('dev', ['clean'], function(cb) {

  cb = cb || function() {};

  global.isProd = false;

  process.env.NODE_ENV = 'test';

  // Run all tasks once
  return runSequence([
    'makeBuildDir', 'copyStyles', 'compileScss', 'copyScripts', 'imagemin', 'browserify', 'copyFonts', 'copyIndex', 'copyIcons',
    'copyFiles', 'buildDocs', 'buildBlog', 'buildConstants', 'configFirebase'
  ], 'watch', cb);

});
