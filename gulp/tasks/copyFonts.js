'use strict';

import gulp   from 'gulp';
import config from '../config';

gulp.task('copyFonts', function() {
  return gulp.src(
    [
      config.sourceDir + 'fonts/**/*',
      config.sourceDir + '../node_modules/font-awesome/fonts/*.{eot,svg,ttf,woff,woff2}'
    ]
  ).pipe(gulp.dest(config.buildDir + 'fonts/'));
});
