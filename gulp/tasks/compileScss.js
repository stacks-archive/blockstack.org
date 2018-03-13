'use strict';

import gulp from 'gulp';
const sass = require('gulp-sass');
import config from '../config';
import browserSync from 'browser-sync';

gulp.task('compileScss', function() {
  return gulp
    .src([config.sourceDir + 'styles/**/*.scss', config.sourceDir + 'styles/*.scss'])
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest(config.buildDir + 'css/'))
    .pipe(browserSync.stream());
});
