'use strict'

import {Component}      from 'react'
import {Link}           from 'react-router'
import DocumentTitle    from 'react-document-title'

import Header           from '../components/Header'
import Footer           from '../components/Footer'

class IntroPage extends Component {
  
  render() {

    return (
      <DocumentTitle title="Blockstack - Intro">
        <div>
          <div className="container-fluid col-centered navbar-fixed-top bg-primary">
            <Header />
          </div>
          <section className="m-b-50 m-t-100">
            <div className="container col-centered blog-post">
              <div className="container">
                <div className="post-header">
                  <h1>
                    Intro to Blockstack
                  </h1>
                </div>
                <div className="post-content">
                  <p>
                    Blockstack is a new internet for decentralized, server-less applications.
                    Building on Blockstack starts with single-page applications built in Javascript that
                    are downloaded onto user devices.
                    Developers plug into blockstack.js, which provides API’s for authenticating the user,
                    grabbing application data from the user, and storing new application data with the
                    user (encrypted and backed up to cloud storage).
                    The blockchain is utilized to maintain a cross-application identity system, securely
                    mapping user IDs to usernames, public keys, and data storage URIs.
                    Developers don’t have to worry about running servers, maintaining databases, or
                    building out user management systems, and decentralized, server-less applications
                    can be built more simply than their traditional counterparts.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="foot-feature col-centered"
            style={{ paddingTop: '50px', paddingBottom: '50px' }}>
            <div className="container-fluid bs-docs-featurette col-centered">
              <div className="col-centered m-b-5">
                <div className="row col-centered">
                  <h2 className="col-md-10 col-lg-8 col-centered m-b-2">
                    How Blockstack Works
                  </h2>
                  <div className="text-xs-center">
                    <img src="/images/visuals/bsk-architecture-dark.svg"
                      className="img-fluid col-centered" alt="Blockstack layer diagram" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="container-fluid col-3-section">
            <div className="container bs-docs-featurette col-centered">
              <div className="col-centered">
                <div className="row col-centered">
                  <div className="col-md-12 feature-panel">
                    <h2 className="displayed">
                      How to Build on Blockstack
                    </h2>
                  </div>
                </div>
                <div className="row col-centered">
                  <div className="col-md-4 feature-panel">
                    <div className="container wrap-mob-feat">
                    </div>
                    <h4>1. Create a single-page web app w/ HTML, JS + CSS</h4>
                  </div>
                  <div className="col-md-4 feature-panel">
                    <div className="container wrap-mob-feat">
                    </div>
                    <h4>2. Install blockstack.js & plug into auth & storage functions</h4>
                  </div>
                  <div className="col-md-4 feature-panel">
                    <div className="container wrap-mob-feat">
                    </div>
                    <h4>3. Register a domain for the app, adding it to the directory</h4>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="container-fluid stats-section">
            <div className="container bs-docs-featurette col-centered">
              <div className="col-centered">
                <div className="row col-centered">
                  <Link className="link-stats" to="http://stats.blockstack.org" target="_blank">
                    <div className="col-md-4 feature-panel">
                      <p className="lead bs-lead">
                        Identities registered
                      </p>
                      <h1 className="stats-count">68544</h1>
                    </div>
                  </Link>
                  <Link className="link-stats" to="http://blockstack.slackarchive.io/lounge/" target="_blank">
                    <div className="col-md-4 feature-panel">
                      <p className="lead bs-lead">
                        Slack group members
                      </p>
                      <h1 className="stats-count">2312</h1>
                    </div>
                  </Link>
                  <Link className="link-stats" to="http://www.meetup.com/topics/blockstack/" target="_blank">
                    <div className="col-md-4 feature-panel">
                      <p className="lead bs-lead">
                        Meetup group members
                      </p>
                      <h1 className="stats-count">4512</h1>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <section className="container-fluid stats-section">
            <div className="bs-docs-featurette col-centered sponsors-2-subsection" id="learnmore">
              <div className="col-centered">
                <div className="row col-centered">
                 <div className="col-md-12 feature-panel">
                    <h2 className="displayed">
                      Who's on Blockstack?
                    </h2>
                  </div>
                </div>
                <div className="row col-sm-12 col-centered">
                  <div className="col-sm-4 feature-panel" style={{ marginTop: '15px' }}>
                    <div className="container wrap-mob-feat">
                      <Link to="http://democracyos.org/" target="_blank">
                        <img src="/images/logos/democracyos.svg" alt="DemocracyOS logo" width="240px"/>
                      </Link>
                    </div>
                  </div>
                  <div className="col-sm-4 feature-panel" style={{ marginTop: '15px' }}>
                    <div className="container wrap-mob-feat">
                      <Link to="https://microsoft.com/" target="_blank">
                        <img src="/images/logos/microsoft-logo.svg"
                        alt="Microsoft logo" width="160px"/>
                      </Link>
                    </div>
                  </div>
                  <div className="col-sm-4 feature-panel" style={{ marginTop: '0px' }}>
                    <div className="container wrap-mob-feat">
                      <Link to="http://openbazaar.org/" target="_blank">
                        <img src="/images/logos/openbazaar.svg" alt="OpenBazaar logo" width="180px"/>
                      </Link>
                    </div>
                  </div>

                </div>
                <div className="row col-sm-12 col-centered">
                  <div className="col-sm-4 feature-panel" style={{ marginTop: '0px' }}>
                    <div className="container wrap-mob-feat">
                      <Link to="http://bitseed.org/" target="_blank">
                        <img src="/images/logos/bitseed.svg" alt="Bitseed logo" width="128px"/>
                      </Link>
                    </div>
                  </div>
                  <div className="col-sm-4 feature-panel" style={{ marginTop: '30px' }}>
                    <div className="container wrap-mob-feat">
                      <Link to="http://trychord.com/" target="_blank">
                        <img src="/images/logos/chord.svg" alt="Chord logo" width="110px"/>
                      </Link>
                    </div>
                  </div>
                  <div className="col-sm-4 feature-panel" style={{ marginTop: '25px' }}>
                    <div className="container wrap-mob-feat">
                      <Link to="https://tierion.com/" target="_blank">
                        <img src="/images/logos/tierion.svg"
                        alt="Tierion logo" width="160px"/>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="row col-sm-12 col-centered">
                  <div className="col-sm-4 feature-panel" style={{ marginTop: '30px' }}>
                    <div className="container wrap-mob-feat">
                      <Link to="http://anyshare.coop/" target="_blank">
                        <img src="/images/logos/anyshare.svg" alt="Anyshare logo" width="180px"/>
                      </Link>
                    </div>
                  </div>
                  <div className="col-sm-4 feature-panel" style={{ marginTop: '-50px' }}>
                    <div className="container wrap-mob-feat">
                      <Link to="https://www.yours.network/" target="_blank">
                        <img src="/images/logos/yours_logo-transparent-01.png" alt="Yours Network logo" width="208px"/>
                      </Link>
                    </div>
                  </div>
                  <div className="col-sm-4 feature-panel" style={{ marginTop: '30px' }}>
                    <div className="container wrap-mob-feat">
                      <Link to="http://consent.global" target="_blank">
                        <img src="/images/logos/consent.svg" alt="Consent logo" width="120px"/>
                      </Link>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>
          <section>
            <div className="bs-docs-featurette col-centered m-b-2">
              <div className="container col-centered">
                <div className="row works col-md-10 col-lg-8 col-centered">
                  <div className="col-sm-11 feature-panel col-centered"
                    style={{ textAlign: 'left' }}>
                      <h4 className="feat-pan text-xs-center">Building a Hello World App</h4>
                      <p className="lead text-xs-center">
                        In this first Blockstack app tutorial, we'll take you through the process of building
                        the simplest Blockstack app where users login and are shown
                        a welcome message with their name and avatar.

                        You'll learn how to
                        (1) create a simple frontend web app with HTML, JS and CSS
                        (2) integrate blockstack.js for identity and authentication
                        (3) register a domain name for the app, listing it in the app directory.
                      </p>
                      <p className="lead text-xs-center">
                        <Link to="/docs/tutorial-hello-world" role="button"
                          className="btn btn-sm btn-outline-primary m-b-2 disabled">
                          Tutorial coming soon
                        </Link>
                      </p>
                  </div>
                </div>
              </div>
            </div>  
          </section>
          <Footer />
        </div>
      </DocumentTitle>
    )
  }

}

export default IntroPage
