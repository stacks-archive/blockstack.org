/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';
import './Navigation.scss';
import Link from '../Link';

export default class extends Component {

  render() {
    return (
      <nav className="navbar navbar-top col-sm-10 col-centered">
        <div className="container-fluid">
          <div id="st-trigger-effects" className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-effect="st-effect-3">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/">
              <img src="/images/blockstack-logo.svg" />
            </a>
          </div>
              
          <div className="collapse navbar-collapse"> 
            <ul className="nav navbar-nav nav-btn-head">
              <li>
                <a href="/about.html">About</a>
              </li>
              <li>
                <a href="http://forum.blockstack.org" target="_blank">Forum</a>
              </li>
              <li>
                <a href="https://blockstack.slack.com/" target="_blank">Slack</a>
              </li>
              <li className="btn btn-head">
                <a href="http://chat.blockstack.org" target="_blank">Get Invited!</a>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="https://github.com/blockstack" target="_blank">
                  <div className="pull-left">
                    <i className="fa fa-github github-header"></i>
                  </div>
                  <div className="pull-right gitword">Github</div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }

}