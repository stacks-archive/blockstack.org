'use strict'

import React                       from 'react'
import {
  Router, Route, IndexRoute,
  browserHistory
} from 'react-router'

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
import IntroPage                   from './pages/IntroPage'
import BlogPostPage                from './pages/BlogPostPage'
import JobsPage                    from './pages/JobsPage'
import TalkPage                    from './pages/TalkPage'
import SignUpPage                  from './pages/SignUpPage'
import DownloadPage                from './pages/DownloadPage'
import AuthPage                    from './pages/AuthPage'

import docs                        from '../docs.json'

export default (
  <Router history={browserHistory} onUpdate={() => window.scrollTo(0, 0)}>
    <Route path="/" component={App}>

      <IndexRoute component={HomePage} />
      <Route path="/" component={HomePage} />

      <Route path="/about" component={AboutPage} />
      <Route path="/docs" component={DocsPage} />
      <Route path="/papers" component={PapersPage} />
      <Route path="/videos" component={TalksPage} />
      <Route path="/summit" component={SummitPage} />
      <Route path="/summit" component={SummitPage} />
      <Route path="/blog" component={BlogPage} />
      <Route path="/posts" component={BlogPage} />
      <Route path="/browser" component={BrowserPage} />
      <Route path="/intro" component={IntroPage} />
      <Route path="/jobs" component={JobsPage} />
      <Route path="/videos/:slug" component={TalkPage} />
      <Route path="/join" component={SignUpPage} />
      <Route path="/download" component={DownloadPage} />
      <Route path="/auth" component={AuthPage} />

      <Route path="/overview/:docSection" component={ArticlePage} />
      <Route path="/blog/:docSection" component={BlogPostPage} />
      <Route path="/posts/:docSection" component={ArticlePage} />
      <Route path="/articles/:docSection" component={ArticlePage} />
      <Route path="/papers/:docSection" component={ArticlePage} />
      <Route path="/tutorials/:docSection" component={ArticlePage} />
      <Route path="/docs/:docSection" component={ArticlePage} />

      <Route path="*" component={NotFoundPage} />

    </Route>
  </Router>
)
