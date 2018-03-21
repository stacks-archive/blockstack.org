'use strict';

import gulp   from 'gulp';
import config from '../config';

gulp.task('copyStyles', function() {
  return gulp.src(
    [
      config.sourceDir + '../node_modules/bootstrap/dist/css/*',
      config.sourceDir + '../node_modules/font-awesome/css/*',
      config.sourceDir + '../node_modules/highlight.js/src/styles/sunburst.css',
      config.sourceDir + 'styles/*.css'
    ]
  ).pipe(gulp.dest(config.buildDir + 'css/'));
});
