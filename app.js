/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import 'babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment';
import Location from './lib/Location';
import Layout from './components/Layout';
import { googleAnalyticsId } from './config';

const routes = {}; // Auto-generated on build. See tools/lib/routes-loader.js

const route = async (path, callback) => {
  const handler = routes[path] || routes['/404'];
  const component = await handler();
  await callback(<Layout>{React.createElement(component)}</Layout>);
};

var ga = require('react-ga');

try {
  ga.initialize(googleAnalyticsId);
} catch(err) {
  console.log(err);
}

function logPageView(pathname) {
  try {
    ga.pageview(pathname);
  } catch(err) {
    console.log(err);
  }
}

function run() {
  const container = document.getElementById('app');
  Location.listen(location => {
    route(location.pathname, async (component) => ReactDOM.render(component, container, () => {
      logPageView(location.pathname);
    }));
  });
}

if (canUseDOM) {
// Run the application when both DOM is ready
// and page content is loaded
  if (window.addEventListener) {
    window.addEventListener('DOMContentLoaded', run);
  } else {
    window.attachEvent('onload', run);
  }
}

export default { route, routes };
