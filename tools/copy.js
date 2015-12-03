/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import task from './lib/task';
import cp from './lib/copy';

/**
 * Copies static files such as robots.txt, favicon.ico to the
 * output (build) folder.
 */
export default task(async function copy() {
  await cp('static', 'build');

  await cp('bower_components/bootstrap/dist', 'build/bootstrap');
  await cp('bower_components/bootstrap/dist', 'build/bootstrap');
  await cp('bower_components/components-font-awesome/bower.json', 'build/font-awesome');
  await cp('bower_components/components-font-awesome/css', 'build/font-awesome/css');
  await cp('bower_components/components-font-awesome/fonts', 'build/font-awesome/fonts');
  await cp('bower_components/jquery/dist', 'build/jquery');
});
