'use strict'

import React                       from 'react'
import {Router, Route, IndexRoute} from 'react-router'
import CreateBrowserHistory        from 'history/lib/createBrowserHistory'

import App                         from './App'
import HomePage                    from './pages/HomePage'
import SummitPage                  from './pages/SummitPage'

import PapersPage                  from './pages/PapersPage'
import TalksPage                   from './pages/TalksPage'
import ArticlePage                 from './pages/ArticlePage'
import NotFoundPage                from './pages/NotFoundPage'
import AboutPage                   from './pages/AboutPage'
import DocsPage                    from './pages/DocsPage'
import BlogPage                    from './pages/BlogPage'
import BrowserPage                 from './pages/BrowserPage'
import OverviewPage                from './pages/OverviewPage'

import docs                        from '../docs.json'

export default (
  <Router history={CreateBrowserHistory()} onUpdate={() => window.scrollTo(0, 0)}>
    <Route path="/" component={App}>

      <IndexRoute component={HomePage} />

      <Route path="/" component={HomePage} />

      <Route path="/about" component={AboutPage} />
      <Route path="/docs" component={DocsPage} />
      <Route path="/papers" component={PapersPage} />
      <Route path="/talks" component={TalksPage} />
      <Route path="/summit" component={SummitPage} />
      <Route path="/summit" component={SummitPage} />
      <Route path="/posts" component={BlogPage} />
      <Route path="/browser" component={BrowserPage} />
      <Route path="/overview" component={OverviewPage} />

      <Route path="/overview/:docSection" component={ArticlePage} />
      <Route path="/posts/:docSection" component={ArticlePage} />
      <Route path="/articles/:docSection" component={ArticlePage} />
      <Route path="/papers/:docSection" component={ArticlePage} />
      <Route path="/tutorials/:docSection" component={ArticlePage} />
      <Route path="/docs/:docSection" component={ArticlePage} />

      <Route path="*" component={NotFoundPage} />

    </Route>
  </Router>
)
