'use strict';

import React         from 'react';
import {Link}        from 'react-router';
import DocumentTitle from 'react-document-title';
import Header        from '../components/Header';

const propTypes = {
  currentUser: React.PropTypes.object
};

class NotFoundPage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <DocumentTitle title="Page Not Found">
        <div className="container-fluid col-centered about-head-wrap">
          <Header />
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
                <a href="/" className="btn btn-lg btn-special" role="button" onClick={Link.handleClick}>
                  Go Home
                </a>
              </div>
            </div>
          </div>
        </section>
      </DocumentTitle>
    );
  }

}

NotFoundPage.propTypes = propTypes;

export default NotFoundPage;