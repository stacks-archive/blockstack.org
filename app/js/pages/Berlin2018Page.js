'use strict';

import React, { Component, Fragment } from 'react';
import Image from '../components/Image';
import { Helmet } from 'react-helmet';
import berlinData from '../datastore/berlin-event-data';

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
          <div className="event container p-b-90">
            <h1>Main Event</h1>
            {berlinData.map((speaker, i) =>
              Object.entries(speaker).map(([k, v]) => console.log(k, v)),
            )}
            <div className="event__speaker-grid">
              {berlinData.map(
                (speaker, i) =>
                  speaker.day === `March 2` && (
                    <div key={i} className="event__speaker">
                      <div className="event__speaker__avatar" />
                      <div>{speaker.name}</div>
                      <div>{speaker.talkTitle}</div>
                      <div>{speaker.company}</div>
                      <div>{speaker.jobTitle}</div>
                      <div>{speaker.twitter}</div>
                      <br /> <br />
                    </div>
                  ),
              )}
            </div>
          </div>
          <div>
            <h1>Pre Event Workshops</h1>
            {berlinData.map(
              (speaker, i) =>
                speaker.day === `March 1` && (
                  <div key={i}>
                    <div>{speaker.name}</div>
                    <div>{speaker.talkTitle}</div>
                    <div>{speaker.company}</div>
                    <div>{speaker.jobTitle}</div>
                    <div>{speaker.twitter}</div>
                    <br /> <br />
                  </div>
                ),
            )}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Berlin2018Page;
