'use strict';

import React  from 'react';
import {Link} from 'react-router';

class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="nav-animation-element col-centered">
        <nav className="navbar navbar-top col-sm-10 col-centered">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link className="navbar-brand" to="/">
                <img src="/images/blockstack-logo.svg" />
              </Link>
            </div>
                
            <div className="collapse navbar-collapse"> 
              <ul className="nav navbar-nav nav-btn-head">
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="http://forum.blockstack.org" target="_blank">Forum</Link>
                </li>
                <li>
                  <Link to="https://blockstack.slack.com/" target="_blank">Slack</Link>
                </li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <Link to="https://github.com/blockstack" target="_blank">
                    <div className="pull-left">
                      <i className="fa fa-github github-header"></i>
                    </div>
                    <div className="pull-right gitword">Github</div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }

}

export default Header;