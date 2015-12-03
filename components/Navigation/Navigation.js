/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';
import { Link } from 'react-router';
import './Navigation.scss';

export default class extends Component {

  render() {
    return (
      <nav className="navbar navbar-top col-sm-10 col-centered">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/" onClick={Link.handleClick}>
              <img src="/images/blockstack-logo.svg" />
            </a>
          </div>
              
          <div className="collapse navbar-collapse"> 
            <ul className="nav navbar-nav nav-btn-head">
              <li>
                <a href="/about" onClick={Link.handleClick}>About</a>
              </li>
              <li>
                <a href="http://forum.blockstack.org" target="_blank" onClick={Link.handleClick}>Forum</a>
              </li>
              <li>
                <a href="https://blockstack.slack.com/" target="_blank" onClick={Link.handleClick}>Slack</a>
              </li>
              <li className="btn btn-head">
                <a href="http://chat.blockstack.org" target="_blank" onClick={Link.handleClick}>Get Invited!</a>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="https://github.com/blockstack" target="_blank" onClick={Link.handleClick}>
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