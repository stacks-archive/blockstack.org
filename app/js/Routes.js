'use strict'

import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './App'
import HomePage from './pages/HomePage'
import SummitPage from './pages/SummitPage'

import PapersPage from './pages/PapersPage'
import TalksPage from './pages/TalksPage'
import ArticlePage from './pages/ArticlePage'
import NotFoundPage from './pages/NotFoundPage'
import AboutPage from './pages/AboutPage'
import DocsPage from './pages/DocsPage'
import BlogPage from './pages/BlogPage'
import BrowserPage from './pages/BrowserPage'
import IntroPage from './pages/IntroPage'
import BlogPostPage from './pages/BlogPostPage'
import CareersPage from './pages/CareersPage'
import TalkPage from './pages/TalkPage'
import SignUpPage from './pages/SignUpPage'
import DevSignUpPage from './pages/DevSignUpPage'
import DownloadPage from './pages/DownloadPage'
import FAQPage from './pages/FAQPage'
import TutorialsPage from './pages/TutorialsPage'
import TutorialPage from './pages/TutorialPage'
import AuthPage from './pages/AuthPage'
import RoadmapPage from './pages/RoadmapPage'
import TokenSalePage from './pages/TokenSalePage'
import Summit2017Page from './pages/Summit2017Page'
import FundingPage from './pages/FundingPage'
import FundPage from './pages/FundPage'
import PressPage from './pages/PressPage'
import WhatIsBlockstack from './pages/WhatIsBlockstack'

export default (
  <Router history={browserHistory} onUpdate={() => window.scrollTo(0, 0)}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="/" component={HomePage} />

      <Route path="/signup" component={SignUpPage} />
      <Route path="/developers" component={DevSignUpPage} />
      <Route path="/install" component={DownloadPage} />

      <Route path="/intro" component={IntroPage} />

      <Route path="/what-is-blockstack" component={WhatIsBlockstack} />

      <Route path="/tutorials" component={TutorialsPage} />
      <Route path="/tutorials/:docSection" component={TutorialPage} />

      <Route path="/blog" component={BlogPage} />
      <Route path="/blog/:docSection" component={BlogPostPage} />

      <Route path="/papers" component={PapersPage} />

      <Route path="/videos" component={TalksPage} />
      <Route path="/videos/:slug" component={TalkPage} />

      <Route path="/about" component={AboutPage} />
      <Route path="/faq" component={FAQPage} />
      <Route path="/careers" component={CareersPage} />

      <Route path="/docs" component={DocsPage} />
      <Route path="/summit" component={SummitPage} />
      <Route path="/browser" component={BrowserPage} />

      <Route path="/posts/:docSection" component={ArticlePage} />
      <Route path="/docs/:docSection" component={ArticlePage} />
      <Route path="/legal/:docSection" component={ArticlePage} />

      <Route path="/auth" component={AuthPage} />

      <Route path="/roadmap" component={RoadmapPage} />
      <Route path="/token" component={TokenSalePage} />
      <Route path="/summit2017" component={Summit2017Page} />
      <Route path="/funding" component={FundingPage} />
      <Route path="/fund" component={FundPage} />

      <Route path="/press" component={PressPage} />

      <Route path="*" component={NotFoundPage} />
    </Route>
  </Router>
)
