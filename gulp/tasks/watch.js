'use strict';

import gulp   from 'gulp';
import config from '../config';

gulp.task('watch', ['browserSync'], function() {

  // Scripts are automatically watched by Watchify inside Browserify task
  gulp.watch(config.styles.src,                 ['copyStyles']);
  gulp.watch(config.images.src,                 ['imagemin']);
  gulp.watch(config.docs.src,                   ['buildDocs']);
  gulp.watch(config.sourceDir + 'index.html',   ['copyIndex']);

});