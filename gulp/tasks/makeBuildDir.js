'use strict';

import gulp   from 'gulp'
import config from '../config'
import fs     from 'fs'

gulp.task('makeBuildDir', function() {
  fs.mkdirSync('build')
})
