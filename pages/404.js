/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';
import Navigation from '../components/Navigation';

export default class extends Component {

  render() {
    return (
      <div>
        <div className="container-fluid col-centered about-head-wrap">
          <header className="nav-animation-element col-centered">
            <Navigation />
          </header>
        </div>
        <section className="feature-action col-centered">
          <div className="container">
            <div className="row">
              <div className="container col-xs-11 col-centered">
                <hgroup>
                  <h2 className="col-md-8 col-lg-6 col-centered action-title">
                    Page Does not Exist!
                  </h2>
                </hgroup>
                <a href="/" className="btn btn-lg btn-special" role="button">
                  Go Home
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

}
