'use strict';

import gulp   from 'gulp';
import config from '../config';

gulp.task('copyScripts', function() {
  return gulp.src(
    [
      config.sourceDir + '../node_modules/bootstrap/dist/js/bootstrap.min.js',
      config.sourceDir + '../node_modules/popper.js/dist/umd/popper.min.js',
      config.sourceDir + '../node_modules/highlight.js/src/highlight.js',
      config.sourceDir + '../node_modules/tether/dist/js/tether.min.js',
      config.sourceDir + '../node_modules/jquery/dist/jquery.min.js',
      config.sourceDir + '/js/utils/mixpanel.js'
    ]
  ).pipe(gulp.dest(config.buildDir + 'js/'));
});
