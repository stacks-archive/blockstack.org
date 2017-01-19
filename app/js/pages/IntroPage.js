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
                    Blockstack is a new decentralized internet.
                  </p>

                  <p>
                    With Blockstack, users control their data and apps run on their devices.
                    There are no middlemen, no passwords, no massive data silos to breach,
                    and no services tracking us around the internet.
                  </p>

                  <p>
                    The applications on blockstack are server-less and decentralized.

                    Developers start by building a single-page application in Javascript,

                    Then, instead of plugging the frontend into an API that they control,
                    they plug into an API run by the user.

                    Developers install a library called "blockstack.js" and
                    don't have to worry about running servers, maintaining databases,
                    or building out user managements systems.
                  </p>

                  <p>
                    Personal user APIs ship with the Blockstack app and
                    handle everything from identity and authentication
                    to data storage.

                    Applications can request permissions from users and then
                    gain read and write access to user resources.
                  </p>

                  <p>
                    Data storage is simple and reliable and uses existing cloud infrastructure.

                    Users connect with their Dropbox, Google Drive, etc and data is synced from
                    their local device up to the cloud.
                  </p>

                  <p>
                    Identity is user-controlled and utilizes the blockchain for secure management
                    of keys, devices and usernames.

                    When users login with apps, they are anonymous by default and use an
                    app-specific key, but their full identity can be revealed and proven
                    at any time.

                    Keys are for signing and encryption and can be changed
                    as devices need to be added or removed.
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
