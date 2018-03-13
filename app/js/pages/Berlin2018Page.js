'use strict';

import React, { Component, Fragment } from 'react';
import DocumentTitle from 'react-document-title';
import Image from '../components/Image';
import { Helmet } from 'react-helmet';

class Berlin2018Page extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Blockstack Berlin: A Signature Fund Event</title>
          <meta
            name="description"
            content="Blockstack Berlin brought together top experts on data privacy, blockchain, information theory, and the decentralized community at large to imagine, learn about, and create decentralized applications."
          />
        </Helmet>
        <div className="feature-event-hero">
          <div className="col-centered block">
            <div className="container p-b-90">
              <section className="text-xs-center">
                <Image
                  className="blockstack-summit-2017-logo-md m-t-65 m-b-55"
                  src="/images/logos/blockstack-summit-logo-landscape-rev.svg"
                  retinaSupport={false}
                />
                <h1 className="text-white m-b-20">Blockstack Summit 2017</h1>
                <p className="hero-lead text-white p-b-100">
                  July 27th, 2017, Computer History Museum, Mountain View, CA
                </p>
              </section>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Berlin2018Page;
