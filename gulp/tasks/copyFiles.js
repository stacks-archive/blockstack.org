'use strict';

import gulp   from 'gulp';
import config from '../config';

gulp.task('copyFiles', function() {
  return gulp.src(
    [
      config.sourceDir + 'files/*.pdf',
      config.sourceDir + '*.txt'
    ]
  ).pipe(gulp.dest(config.buildDir));
});
