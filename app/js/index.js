'use strict'

import React        from 'react'
import { render }   from 'react-dom'
import { Provider } from 'react-redux'

import Routes             from './Routes'
import configureDataStore from './datastore/index'

const store = configureDataStore()

if (process.env.NODE_ENV !== 'production') {
  // Enable React devtools
  window.React = React
}

render(
  <Provider store={store}>
    {Routes}
  </Provider>,
  document.getElementById('app')
)