'use strict';

import { Component } from 'react';
import { Link } from 'react-router';
import DocumentTitle from 'react-document-title';

class NotFoundPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <DocumentTitle title="Blockstack - Page Not Found">
        <div>
          <section className="m-t-5">
            <div className="container p-b-5 col-centered">
              <div className="container">
                <div className="m-b-3 p-t-1">
                  <hgroup>
                    <h1 className="action-title">Page Does Not Exist</h1>
                  </hgroup>
                  <Link className="btn btn-lg btn-special" to="/">
                    Go Home
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </DocumentTitle>
    );
  }
}

export default NotFoundPage;
