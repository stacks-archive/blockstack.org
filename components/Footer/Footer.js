/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';
import './Footer.scss';
import Link from '../Link';

export default class extends Component {

  render() {
    return (
      <footer>
        <div className="container">
            <div className="col-md-2 foot-left-col hidden-xs hidden-sm">
              <ul className="list-unstyled">
                <li>
                  <div className="foot-logo">
                    <a href="/">
                      <img src="/images/blockstack-logo.svg" />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-xs-6 col-md-2">
              <ul className="foot-menu list-unstyled">
                <li>Community</li>
                <li>
                  <a href="/about.html">About</a>
                </li>
                <li>
                  <a href="https://forum.blockstack.org/" target="_blank">Forum</a>
                </li>
                <li>
                  <a href="http://chat.blockstack.org" target="_blank">Chat</a>
                </li>
                <li>
                  <a href="/summit.html">Events</a>
                </li>
              </ul>
            </div>
            <div className="col-xs-6 col-md-2">
              <ul className="foot-menu list-unstyled">
                <li>Social</li>
                <li>
                  <a href="#">Press</a>
                </li>
                <li>
                  <a href="https://www.twitter.com/blockstackorg" target="_blank">Twitter</a>
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UCvDtRhHLNDyKiY-iwhneNbw" target="_blank">YouTube</a>
                </li>
              </ul>
            </div>
            <div className="col-xs-6 col-md-2">
              <ul className="foot-menu list-unstyled">
                <li>Resources</li>
                <li>
                  <a href="https://github.com/blockstack" target="_blank">Github</a>
                </li>
                <li>
                  <a href="https://github.com/blockstack/wiki" target="_blank">Wiki</a>
                </li>
              </ul>
            </div>
        </div>
        <div className="container copy-foot">
          <ul className="midfoot">
            <li>
              <div className="social hidden-md hidden-lg container">
                <ul className="sm-social list-unstyled">
                  <li>
                    <a href="https://www.twitter.com/blockstackorg" target="_blank">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/channel/UCvDtRhHLNDyKiY-iwhneNbw" target="_blank">
                      <i className="fa fa-youtube-play"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/blockstack" target="_blank">
                      <i className="fa fa-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="copyright-push-left">
              <div className="copyright">
                This is an open sourced site hosted on GitHub. Patches, suggestions and comments are welcome.
              </div>
            </li>
            <li className="pull-right">
              <div className="social hidden-xs hidden-sm">
                <ul className="sm-social list-unstyled">
                  <li>
                    <a href="https://www.twitter.com/blockstackorg" target="_blank">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/channel/UCvDtRhHLNDyKiY-iwhneNbw" target="_blank">
                      <i className="fa fa-youtube-play">
                    </i></a>
                  </li>
                  <li>
                    <a href="https://github.com/blockstack" target="_blank">
                      <i className="fa fa-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="container base-foot">
            <p className="base-push-left">
              Made with <span className="glyphicon glyphicon-heart"></span> by the Blockstack community
            </p>
        </div>
      </footer>
    );
  }

}
