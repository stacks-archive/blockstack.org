'use strict'

import {Component}   from 'react'
import {Link}        from 'react-router'
import DocumentTitle from 'react-document-title'
import request       from 'request'

import Header        from '../components/Header'
import Footer        from '../components/Footer'

class HomePage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      nameCount: 46000
    }

    this.updateNameCount = this.updateNameCount.bind(this)
  }

  componentDidMount() {
    const requestOptions = {
      url: 'https://resolver.onename.com/v2/namespaces',
      withCredentials: false
    }
    request(requestOptions, (error, response, body) => {
      if (!error && response.statusCode == 200) {
        this.updateNameCount(body)
        //console.log(body) // Show the HTML for the Google homepage.
      } else {
        console.log(error)
      }
    })
  }

  updateNameCount(response) {
    const jsonResponse = JSON.parse(response)
    if (jsonResponse.hasOwnProperty("namespaces")) {
      const namespaceData = jsonResponse.namespaces[0]
      if (namespaceData.hasOwnProperty("registrations")) {
        const nameCount = namespaceData.registrations
        this.setState({
          nameCount: nameCount
        })
      }
    }
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
                  <p className="lead hero-lead col-md-11">
                    Blockstack gives you fast, secure, and easy-to-use DNS, PKI,
                    and identity management on the blockchain.
                  </p>
                  <p className="no-padding col-md-6">
                    <Link to="/docs" role="button"
                      className="btn btn-lg btn-primary btn-block btn-hero">
                      Get Started
                    </Link>
                  </p>
                </div>
                <div className="col-sm-8 offset-sm-2 col-md-6 offset-md-0">
                  <img className="hero-img"
                    src="/images/visuals/hero-pip-install-blockstack.svg" />
                </div>
              </section>
            </div>
          </div>
          <section className="container-fluid stats-section">
            <div className="container bs-docs-featurette col-centered">
              <div className="col-centered col-md-10">
                <div className="row col-centered">
                  <div className="col-md-6 feature-panel">
                    <p className="lead bs-lead">
                      Names registered
                    </p>
                    <Link to="https://resolver.onename.com/v2/namespaces"
                      target="_blank" className="simple-link">
                      <h1 className="stats-count">{this.state.nameCount}</h1>
                    </Link>
                  </div>
                  <div className="col-md-6 feature-panel">
                    <p className="lead bs-lead">
                      Community members
                    </p>
                    <h1 className="stats-count">602</h1>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="container-fluid col-3-section">
            <div className="container bs-docs-featurette col-centered">
              <div className="col-centered">
                <div className="row col-centered">
                  <div className="col-md-4 feature-panel">
                    <div className="container wrap-mob-feat">
                      <img src="/images/icons/mini-decentralized.svg"
                        className="img-responsive" alt="Decentralized icon" />
                    </div>
                      <h4>Decentralized</h4>
                      <p className="lead bs-lead">
                        Enables applications without any central points of failure.
                      </p>
                  </div>
                  <div className="col-md-4 feature-panel">
                    <div className="container wrap-mob-feat">
                      <img src="/images/icons/open-source.svg"
                        className="img-responsive" alt="Open source icon" />
                    </div>
                    <h4>Open Source</h4>
                    <p className="lead bs-lead">
                      Built with code that is free to inspect, modify, and reuse.
                    </p>
                  </div>
                  <div className="col-md-4 feature-panel">
                    <div className="container wrap-mob-feat">
                      <img src="/images/icons/community-globe.svg"
                        className="img-responsive" alt="Community globe icon" />
                    </div>
                    <h4>Community-centric</h4>
                    <p className="lead bs-lead">
                      Maintained by developers united around a common software stack.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="container-fluid paper-section">
            <div className="container bs-docs-featurette col-centered">
              <div className="col-centered col-md-8">
                <div className="col-md-6 paper-wrap">
                    <Link to="https://github.com/blockstack/blockstack-papers" role="button" target="_blank"
                      className="btn btn-sm btn-primary btn-block btn-hero">
                      Read the paper
                    </Link>
                </div>
                <div className="col-md-6">
                  <p className="social-text">
                    <span className="social-type">Star Blockstack on GitHub:</span>
                    <iframe className="social-count"
                      src="https://ghbtns.com/github-btn.html?user=blockstack&repo=blockstack-server&type=star&count=true"
                      frameborder="0" scrolling="0" width="95px" height="20px">
                    </iframe>
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="container-fluid inverse-3col-section">
            <div className="container bs-docs-featurette col-centered">
              <div className="col-centered">
                <div className="row col-centered">
                  <div className="col-md-4 feature-panel">
                    <h4 className="inverse-heading">Forum</h4>
                    <p className="inverse-lead">
                      Learn from others on the forum
                    </p>
                    <p>
                      <Link to="https://forum.blockstack.org/" role="button" target="_blank"
                        className="btn btn-sm btn-outline-secondary m-b-2">
                        Join the Forum
                      </Link>
                    </p>
                  </div>
                  <div className="col-md-4 feature-panel">
                    <h4 className="inverse-heading">Slack</h4>
                    <p className="inverse-lead">
                      Live chat with other Blockstackers
                    </p>
                    <p>
                      <Link to="http://chat.blockstack.org/" role="button" target="_blank"
                        className="btn btn-sm btn-outline-secondary m-b-2">
                        Join the Slack Group
                      </Link>
                    </p>
                  </div>
                  <div className="col-md-4 feature-panel">
                    <h4 className="inverse-heading">Blog</h4>
                    <p className="inverse-lead">
                      Read articles posted by the community
                    </p>
                    <p>
                      <Link to="https://medium.com/blockstack-review" role="button" target="_blank"
                        className="btn btn-sm btn-outline-secondary m-b-2">
                        Read the Blog
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="bs-docs-featurette col-centered">
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
          <section className="foot-feature col-centered">
            <div className="container">
              <div className="row">
                <div className="container col-xs-11 col-centered">
                  <hgroup>
                    <h2 className="col-md-10 col-lg-8 col-centered action-title">
                      Get Started with Decentralized Applications
                    </h2>
                  </hgroup>
                  <div>
                    <Link to="/docs" role="button"
                      className="btn btn-lg btn-special btn-footer-max-width">
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
