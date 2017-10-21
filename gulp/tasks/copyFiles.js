'use strict';

import gulp   from 'gulp';
import config from '../config';

gulp.task('copyFiles', function() {
  return gulp.src(
    [
      config.sourceDir + 'docs/papers/*.pdf',
      config.sourceDir + '*.txt',
      config.sourceDir + 'help/*.pdf'
    ]
  ).pipe(gulp.dest(config.buildDir));
});
