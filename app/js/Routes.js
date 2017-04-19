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
import FAQPage                     from './pages/FAQPage'
import TutorialsPage               from './pages/TutorialsPage'
import TutorialPage                from './pages/TutorialPage'

export default (
  <Router history={browserHistory} onUpdate={() => window.scrollTo(0, 0)}>
    <Route path="/" component={App}>

      <IndexRoute component={HomePage} />
      <Route path="/" component={HomePage} />

      <Route path="/newsletter" component={SignUpPage} />
      <Route path="/install" component={DownloadPage} />

      <Route path="/intro" component={IntroPage} />

      <Route path="/tutorials" component={TutorialsPage} />
      <Route path="/tutorials/:docSection" component={TutorialPage} />

      <Route path="/blog" component={BlogPage} />
      <Route path="/blog/:docSection" component={BlogPostPage} />

      <Route path="/papers" component={PapersPage} />

      <Route path="/videos" component={TalksPage} />
      <Route path="/videos/:slug" component={TalkPage} />

      <Route path="/about" component={AboutPage} />
      <Route path="/faqs" component={FAQPage} />
      <Route path="/jobs" component={JobsPage} />

      <Route path="/docs" component={DocsPage} />
      <Route path="/summit" component={SummitPage} />
      <Route path="/browser" component={BrowserPage} />

      <Route path="/posts/:docSection" component={ArticlePage} />
      <Route path="/docs/:docSection" component={ArticlePage} />

      <Route path="*" component={NotFoundPage} />
    </Route>
  </Router>
)
