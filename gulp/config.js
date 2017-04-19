'use strict';

const config = {

  browserPort: 3000,
  UIPort: 3001,

  scripts: {
    src: './app/js/**/*.js',
    dest: './build/js/'
  },

  images: {
    src: './app/images/**/*.{jpeg,jpg,png,gif,svg}',
    dest: './build/images/'
  },

  styles: {
    src: './app/styles/**/*.css',
    dest: './build/css/'
  },

  docs: {
    src: './app/docs/**/*.md',
    dest: './build/docs/'
  },

  sourceDir: './app/',

  buildDir: './build/',

  testFiles: './tests/**/*.{js,jsx}',

};

export default config;