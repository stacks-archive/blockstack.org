'use strict';

import gulp   from 'gulp';
import config from '../config';

gulp.task('copyStyles', function() {
  return gulp.src([config.sourceDir + 'styles/*.css'])
    .pipe(gulp.dest(config.buildDir + 'css/'));
});
