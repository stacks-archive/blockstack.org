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
      meetupUserCount: 1407
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
        <div className="col-centered bg-primary-gradient block">
          <Header />
          <div className="container">
            <div className="container hero-wrap">
              <section className="hero">
                <div className="col-md-6 col-lg-5 no-padding">
                  <h1 className="hero-head">
                    The New <br/>
                    Decentralized Web
                  </h1>
                  <div className="container no-padding">
                    <div className="col-md-8 offset-md-2 col-md-7 offset-md-0 m-b-1 hidden-md-up">
                      <img className="container-fluid hero-img img-fluid"
                        src="images/visuals/silhouette-sm.svg" />
                    </div>
                  </div>
                  <p className="lead hero-lead col-md-11">
                    Build decentralized apps that run on user devices and put them in control of their data.
                  </p>
                  <p className="no-padding col-md-8">
                    <Link to="/docs" role="button"
                      className="btn btn-lg btn-primary btn-block">
                      Get Beta v0.1.0 Access!
                    </Link>
                  </p>
                  <p className="no-padding col-md-8" style={{ display: 'none' }}>
                    <Link to="/docs" className="nav-link">
                      Read the Docs
                    </Link>
                  </p>
                </div>
                <div className="container-fluid col-md-6 col-lg-7 hidden-sm-down">
                  <img className="hero-img img-fluid pull-md-right"
                    src="images/visuals/silhouette.svg" />
                </div>
              </section>
            </div>
          </div>
        </div>
        <section className="container-fluid stats-section">
          <div className="bs-docs-featurette col-centered m-b-5">
            <div className="container col-centered">
              <div className="row col-centered">
               <div className="col-md-12 feature-panel">
                  <h2 className="displayed">
                    Blockstack is Making the Decentralized Web Possible
                  </h2>
                </div>
              </div>
              <div className="row works col-centered">
                <div className="col-sm-6">
                    <div className="container wrap-mob-feat m-b-3">
                      <img src="/images/icons/icon-white-house-lrg.svg"
                        className="img-responsive" alt="Decentralized icon" />
                    </div>
                    <h4 className="text-xs-center">The web, once open, has been hijacked by the powerful few</h4>
                    <p className="lead">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
                <div className="col-sm-6">
                    <div className="container wrap-mob-feat m-b-3">
                      <img src="/images/icons/icon-decentralized.svg"
                        className="img-responsive" alt="Decentralized icon" />
                    </div>
                    <h4 className="text-xs-center">Decentralization enables greater developer inclusion, freedom, and innovation</h4>
                    <p className="lead">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
              </div>
              <div className="row works col-centered">
                <div className="col-sm-6">
                    <div className="container wrap-mob-feat m-b-3">
                      <img src="/images/icons/mini-decentralized.svg"
                        className="img-responsive" alt="Decentralized icon" />
                    </div>
                    <h4 className="text-xs-center">Users benefit from more options, availability, savings, & info security</h4>
                    <p className="lead">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
                <div className="col-sm-6">
                    <div className="container wrap-mob-feat m-b-3">
                      <img src="/images/icons/mini-decentralized.svg"
                        className="img-responsive" alt="Decentralized icon" />
                    </div>
                    <h4 className="text-xs-center">Building great products shouldn't require managing servers, databases & ID systems</h4>
                    <p className="lead">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
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
                  <img src="/images/visuals/blockstack-diagram.svg"
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
                <div className="col-sm-4 feature-panel featpan-1">
                  <div className="container wrap-mob-feat">
                    <Link to="http://democracyos.org/">
                      <img src="/images/logos/democracyos.svg" alt="DemocracyOS logo" width="240px"/>
                    </Link>
                  </div>
                </div>
                <div className="col-sm-4 feature-panel featpan-2">
                  <div className="container wrap-mob-feat">
                    <Link to="http://openbazaar.org/">
                      <img src="/images/logos/openbazaar.svg" alt="OpenBazaar logo" width="180px"/>
                    </Link>
                  </div>
                </div>
                <div className="col-sm-4 feature-panel featpan-3">
                  <div className="container wrap-mob-feat">
                    <Link to="https://tierion.com/">
                      <img src="/images/logos/tierion.svg"
                      alt="Tierion logo" width="160px"/>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="row col-sm-12 col-centered">
                <div className="col-sm-6 feature-panel featpan-4">
                  <div className="container wrap-mob-feat">
                    <Link to="http://bitseed.org/">
                      <img src="/images/logos/bitseed.svg" alt="Bitseed logo" width="128px"/>
                    </Link>
                  </div>
                </div>
                <div className="col-sm-6 feature-panel featpan-5">
                  <div className="container wrap-mob-feat">
                    <Link to="http://trychord.com/">
                      <img src="/images/logos/chord.svg" alt="Chord logo" width="110px"/>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="row col-sm-12 col-centered">
                <div className="col-sm-4 feature-panel featpan-1">
                  <div className="container wrap-mob-feat">
                    <Link to="http://anyshare.coop/">
                      <img src="/images/logos/anyshare.svg" alt="Anyshare logo" width="180px"/>
                    </Link>
                  </div>
                </div>
                <div className="col-sm-4 feature-panel featpan-2">
                  <div className="container wrap-mob-feat">
                    <Link to="https://www.microsoft.com/">
                      <img src="/images/logos/microsoft.png" alt="Microsoft logo" width="180px"/>
                    </Link>
                  </div>
                </div>
                <div className="col-sm-4 feature-panel featpan-3">
                  <div className="container wrap-mob-feat">
                    <Link to="http://consent.global">
                      <img src="/images/logos/consent.svg" alt="Consent logo" width="120px"/>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="row col-sm-12 col-centered">
                <div className="col-sm-6 feature-panel featpan-4">
                  <div className="container wrap-mob-feat">
                    <Link to="http://arcade.city/">
                      <img src="/images/logos/arcade-city.svg" alt="Arcade City logo" width="110px"/>
                    </Link>
                  </div>
                </div>
                <div className="col-sm-6 feature-panel featpan-4">
                  <div className="container wrap-mob-feat">
                    <Link to="https://www.yours.network/">
                      <img src="/images/logos/yours-network.svg" alt="Yours Network logo" width="110px"/>
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p className="lead text-xs-center">
                      <Link to="/docs/tutorial-hello-world" role="button"
                        className="btn btn-sm btn-outline-primary m-b-2">
                        Get Started
                      </Link>
                    </p>
                </div>
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
                  <h4 className="inverse-heading">Meetup</h4>
                  <p className="inverse-lead">
                    Join Meetup groups around the world
                  </p>
                  <p>
                    <Link to="http://www.meetup.com/topics/blockstack/" role="button" target="_blank"
                      className="btn btn-sm btn-outline-secondary m-b-2">
                      Find a Meetup Group
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
              </div>

              <div className="row col-centered">
                <div className="col-md-6 feature-panel">
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
                <div className="col-md-6 feature-panel">
                  <h4 className="inverse-heading">YouTube</h4>
                  <p className="inverse-lead">
                    Watch videos on the YouTube channel
                  </p>
                  <p>
                    <Link to="https://www.youtube.com/channel/UC3J2iHnyt2JtOvtGVf_jpHQ" role="button" target="_blank"
                      className="btn btn-sm btn-outline-secondary m-b-2">
                      Subscribe on YouTube
                    </Link>
                  </p>
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
