'use strict'

import React                       from 'react'
import {Router, Route, IndexRoute} from 'react-router'
import CreateBrowserHistory        from 'history/lib/createBrowserHistory'

import App                         from './App'
import HomePage                    from './pages/HomePage'
import SummitPage                  from './pages/SummitPage'

import DocsIndexPage                    from './pages/DocsIndexPage'
import ArticlesIndexPage           from './pages/ArticlesIndexPage'

import ArticlePage                 from './pages/ArticlePage'
import NotFoundPage                from './pages/NotFoundPage'
import AboutPage                   from './pages/AboutPage'
import docs                        from '../docs.json'

export default (
  <Router history={CreateBrowserHistory()} onUpdate={() => window.scrollTo(0, 0)}>
    <Route path="/" component={App}>

      <IndexRoute component={HomePage} />

      <Route path="/" component={HomePage} />

      <Route path="/learn" component={ArticlesIndexPage} />
      <Route path="/docs" component={DocsIndexPage} />
      <Route path="/learn/:docSection" component={ArticlePage} />
      <Route path="/docs/:docSection" component={ArticlePage} />

      <Route path="/about" component={AboutPage} />
      <Route path="/summit" component={SummitPage} />

      <Route path="*" component={NotFoundPage} />

    </Route>
  </Router>
)
