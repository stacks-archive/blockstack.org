'use strict'

import {Component}   from 'react'
import {Link}        from 'react-router'
import DocumentTitle from 'react-document-title'

import Header        from '../components/Header'
import Footer        from '../components/Footer'

class HomePage extends Component {
  static propTypes: {
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <DocumentTitle title="Blockstack - Decentralized DNS for Blockchain Applications">
        <div>
          <div className="container-fluid col-centered bg-primary-gradient block">
            <Header />
            <div className="container hero-wrap">
              <section className="hero">
                <div className="col-xs-12 col-sm-12 col-md-6">
                  <h1 className="hero-head">
                    Decentralized DNS  for Blockchain Applications
                  </h1>
                  <p className="lead hero-lead">
                    Blockstack gives you fast, secure, and easy-to-use DNS, PKI,
                    and identity management on the blockchain.
                  </p>
                  <p className="hero-btn col-md-8">
                    <Link to="/docs" role="button"
                      className="btn btn-lg btn-primary">
                      Get Started
                    </Link>
                  </p>
                </div>
                <div className="col-xs-10 offset-xs-1 col-sm-8 offset-sm-2 col-md-6 offset-md-0">
                  <img src="/images/hero-pip-install-blockstack.svg" />
                </div>
              </section>
            </div>
          </div>
          <section className="container-fluid col-3-section">
            <div className="bs-docs-featurette col-centered" id="learnmore">
              <div className="col-centered">
                <div className="row col-sm-11 col-md-11 col-centered">
                  <div className="col-sm-4 feature-panel">
                    <div className="container wrap-mob-feat">
                      <img src="/images/icon-decentralized.svg"
                        className="img-responsive" alt="Decentralized icon" />
                    </div>
                      <h4>Decentralized</h4>
                      <p className="lead">
                        Enables applications without any central points of failure.
                      </p>
                  </div>
                  <div className="col-sm-4 feature-panel">
                    <div className="container wrap-mob-feat">
                      <img src="/images/icon-open-source.svg"
                        className="img-responsive" alt="Open source icon" />
                    </div>
                    <h4>Open Source</h4>
                    <p className="lead">
                      Built with code that is free to inspect, modify, and reuse.
                    </p>
                  </div>
                  <div className="col-sm-4 feature-panel">
                    <div className="container wrap-mob-feat">
                      <img src="/images/icon-community-globe.svg"
                        className="img-responsive" alt="Community globe icon" />
                    </div>
                    <h4>Community-centric</h4>
                    <p className="lead">
                      Maintained by developers united around a common software stack.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="bs-docs-featurette col-centered" id="learnmore">
              <div className="container col-centered">
                <div className="displayed-wrap container col-md-8 col-lg-8 col-centered">
                  <h3 className="displayed">
                    Our mission is to create common infrastructure for
                    developing decentralized applications.
                  </h3>
                </div>
                <div className="row works col-md-10 col-lg-8 col-centered">
                  <div className="col-sm-11 feature-panel col-centered">
                      <h4 className="feat-pan">Community Overview</h4>
                      <p className="lead">
                        The Blockstack community is a group of blockchain developers,
                        companies and organizations coming together to define and
                        develop a set of software protocols and tools to serve as a
                        common backend for blockchain-powered decentralized applications.
                        We welcome all developers and companies that are interested
                        in joining the consortium and contributing to Blockstack development.
                      </p>
                  </div>
                </div>
                <div className="displayed-wrap container col-md-8 col-lg-8 col-centered">
                  <h3 className="displayed">
                    With Blockstack, you'll be able to build apps with decentralized DNS,
                    identity, and data storage.
                  </h3>
                </div>
              </div>
            </div>  
          </section>
          <section className="feature-action col-centered">
            <div className="container">
              <div className="row">
                <div className="container col-xs-11 col-centered">
                  <hgroup className="push-40">
                    <h2 className="col-md-10 col-lg-8 col-centered">
                      Get Started with Decentralized Applications
                    </h2>
                  </hgroup>
                  <div>
                    <Link className="btn btn-lg btn-special btn-footer-max-width" to="/docs" role="button">
                      Getting Started
                    </Link>
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

export default HomePage
