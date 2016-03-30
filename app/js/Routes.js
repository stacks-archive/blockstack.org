'use strict'

import React                       from 'react'
import {Router, Route, IndexRoute} from 'react-router'
import CreateBrowserHistory        from 'history/lib/createBrowserHistory'

import App                         from './App'
import HomePage                    from './pages/HomePage'
import SummitPage                  from './pages/SummitPage'
import DocsPage                    from './pages/DocsPage'
import ArticlePage                 from './pages/ArticlePage'
import NotFoundPage                from './pages/NotFoundPage'
import docs                        from '../docs.json'

export default (
  <Router history={CreateBrowserHistory()} onUpdate={() => window.scrollTo(0, 0)}>
    <Route path="/" component={App}>

      <IndexRoute component={HomePage} />

      <Route path="/" component={HomePage} />
      <Route path="/docs" component={DocsPage} />
      <Route path="/docs/:docSection" component={ArticlePage} />
      <Route path="/about" component={ArticlePage} />
      <Route path="/summit" component={SummitPage} />

      <Route path="*" component={NotFoundPage} />

    </Route>
  </Router>
)
