'use strict';

import React                       from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import CreateBrowserHistory        from 'history/lib/createBrowserHistory';

import App                         from './App';
import HomePage                    from './pages/HomePage';
import AboutPage                   from './pages/AboutPage';
import SummitPage                  from './pages/SummitPage';
import NotFoundPage                from './pages/NotFoundPage';

export default (
  <Router history={CreateBrowserHistory()}>
    <Route path="/" component={App}>

      <IndexRoute component={HomePage} />

      <Route path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/summit" component={SummitPage} />

      <Route path="*" component={NotFoundPage} />

    </Route>
  </Router>
);
