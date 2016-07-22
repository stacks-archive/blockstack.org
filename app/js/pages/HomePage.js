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
      nameCount: 60000,
      slackUserCount: 1100,
      meetupUserCount: 1109
    }

    this.updateNameCount = this.updateNameCount.bind(this)
  }

  componentDidMount() {
    // Get the number of names registered
    request({
      url: "https://resolver.onename.com/v2/namespaces",
      withCredentials: false
    }, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        this.updateNameCount(body)
      } else {
        console.log(error)
      }
    })
    // Get the number of Slack users
    request({
      url: "https://api.onename.com/v1/slack/blockstack",
      withCredentials: false
    }, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        this.updateSlackCount(body)
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

  updateSlackCount(response) {
    const jsonResponse = JSON.parse(response)
    if (jsonResponse.hasOwnProperty("user_count")) {
      const slackUserCount = jsonResponse.user_count
      this.setState({
        slackUserCount: slackUserCount
      })
    }
  }

  render() {
    return (
      <div>
        <div className="container-fluid col-centered bg-primary-gradient block">
          <Header />
          <div className="container hero-wrap">
            <section className="hero">
              <div className="col-xs-12 col-sm-12 col-md-6">
                <h1 className="hero-head">
                  The Blockchain Application Stack
                </h1>
                <p className="lead hero-lead col-md-11">
                  Build decentralized, server-less apps by plugging into
                  Blockstack's services for
                  identity, naming, storage, and authentication.
                </p>
                <p className="no-padding col-md-6">
                  <Link to="/docs" role="button"
                    className="btn btn-lg btn-primary btn-block">
                    Read the Docs
                  </Link>
                  <Link to="http://chat.blockstack.org/" target="_blank" role="button"
                    className="btn btn-lg btn-secondary btn-block">
                    Join the Slack
                  </Link>
                </p>
              </div>
              <div className="col-sm-8 offset-sm-2 col-md-6 offset-md-0 hidden-sm-down">
                <img className="hero-img"
                  src="/images/visuals/hero-pip-install-blockstack.svg" />
              </div>
            </section>
          </div>
        </div>
        <section className="container-fluid stats-section">
          <div className="container bs-docs-featurette col-centered">
            <div className="col-centered">
              <div className="row col-centered">
                <Link className="link-stats" to="http://stats.blockstack.org" target="_blank">
                  <div className="col-md-4 feature-panel">
                    <p className="lead bs-lead">
                      Identities registered
                    </p>
                    <h1 className="stats-count">{this.state.nameCount}</h1>
                  </div>
                </Link>
                <Link className="link-stats" to="http://blockstack.slackarchive.io/lounge/" target="_blank">
                  <div className="col-md-4 feature-panel">
                    <p className="lead bs-lead">
                      Slack group members
                    </p>
                    <h1 className="stats-count">{this.state.slackUserCount}</h1>
                  </div>
                </Link>
                <Link className="link-stats" to="http://www.meetup.com/topics/blockstack/" target="_blank">
                  <div className="col-md-4 feature-panel">
                    <p className="lead bs-lead">
                      Meetup group members
                    </p>
                    <h1 className="stats-count">{this.state.meetupUserCount}</h1>
                  </div>
                </Link>
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
                  <h4>Privacy-centric</h4>
                  <p className="lead bs-lead">
                    User information is tightly controlled by the user.
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
                  <Link to="/blockstack.pdf" role="button" target="_blank"
                    className="btn btn-outline-primary btn-block btn-hero">
                    Read the paper
                  </Link>
              </div>
              <div className="col-md-6">
                <p className="social-text">
                  <span className="social-type">Star Blockstack on GitHub:</span>
                  <iframe className="social-count"
                    src="https://ghbtns.com/github-btn.html?user=blockstack&repo=blockstack-server&type=star&count=true"
                    scrolling="0" width="95px" height="20px">
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
                  <h4 className="inverse-heading">Reddit</h4>
                  <p className="inverse-lead">
                    Post on the subreddit
                  </p>
                  <p>
                    <Link to="http://reddit.com/r/blockstack" role="button" target="_blank"
                      className="btn btn-sm btn-outline-secondary m-b-2">
                      Join the Subreddit
                    </Link>
                  </p>
                </div>
                <div className="col-md-4 feature-panel">
                  <h4 className="inverse-heading">Medium</h4>
                  <p className="inverse-lead">
                    Read posts by community members
                  </p>
                  <p>
                    <Link to="https://medium.com/blockstack-review" role="button" target="_blank"
                      className="btn btn-sm btn-outline-secondary m-b-2">
                      Follow the Medium Blog
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="bs-docs-featurette col-centered m-b-2">
            <div className="container col-centered">
              <div className="displayed-wrap container col-md-8 col-lg-8 col-centered">
                <h3 className="displayed">
                  Blockstack enables application building
                  in a more secure and resilient way by utilizing
                  a global database, with built-in identity services and DNS.
                </h3>
              </div>
              <div className="row works col-md-10 col-lg-8 col-centered">
                <div className="col-sm-11 feature-panel col-centered">
                    <h4 className="feat-pan">Community Overview</h4>
                    <p className="lead">
                      The Blockstack community is a group of blockchain developers,
                      companies and organizations coming together to define and
                      develop a set of software protocols and tools to serve as a
                      common identity and naming backend for blockchain-powered applications.
                      We welcome all developers and companies that are interested
                      in joining the consortium and contributing to Blockstack development.
                    </p>
                </div>
              </div>
              <div className="displayed-wrap container col-md-8 col-lg-8 col-centered">
                <h3 className="displayed">
                  Our mission is to enable apps to
                  remove central points of failure,
                  increase security and reliability,
                  and be more respectful of user data.
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
                    Start Using the Blockchain Application Stack
                  </h2>
                </hgroup>
                <div>
                  <Link to="/docs" role="button"
                    className="btn btn-lg btn-special">
                    View the Documentation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    )
  }
}

export default HomePage
