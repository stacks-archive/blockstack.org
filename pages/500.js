/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component, PropTypes } from 'react';
import Navigation from '../components/Navigation';

export default class extends Component {

  static propTypes = {
    error: PropTypes.instanceOf(Error),
  };

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
                    Error
                  </h2>
                </hgroup>
                <pre>{
                  this.props.error ?
                    this.props.error.message + '\n\n' + this.props.error.stack :
                    'A critical error occurred.'
                }</pre>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

}
