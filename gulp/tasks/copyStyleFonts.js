'use strict';

import gulp   from 'gulp';
import config from '../config';


gulp.task('copyStyleFonts', function() {
  return gulp.src(
    [
      config.sourceDir + '../node_modules/slick-carousel/slick/fonts/slick.ttf',
      config.sourceDir + '../node_modules/slick-carousel/slick/fonts/slick.woff',
      config.sourceDir + '../node_modules/slick-carousel/slick/fonts/slick.svg',
      config.sourceDir + '../node_modules/slick-carousel/slick/fonts/slick.eot',
    ]
  ).pipe(gulp.dest(config.buildDir + 'css/fonts/'));
});
