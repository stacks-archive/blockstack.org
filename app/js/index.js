'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Routes from './Routes';
import configureDataStore from './datastore/index';

const store = configureDataStore();

if (process.env.NODE_ENV !== 'production') {
  // Enable React devtools
  window.React = React;
}

Object.defineProperty(Array.prototype, 'chunk', {
  value: function(chunkSize) {
    let temporal = [];
    for (let i = 0; i < this.length; i += chunkSize) {
      temporal.push(this.slice(i, i + chunkSize));
    }
    return temporal;
  },
});

render(
  <Provider store={store}>{Routes}</Provider>,
  document.getElementById('app'),
);
