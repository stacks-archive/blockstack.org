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
      nameCount: 63000,
      slackUserCount: 1200,
      meetupUserCount: 1501
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
                    <Link to="http://chat.blockstack.org" target="_blank" role="button"
                      className="btn btn-lg btn-primary btn-block">
                      Get Early Access
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
              <div className="row works col-centered deck-wrap-top">
                <div className="feat-img-top col-sm-6 p-b-2">
                    <div className="container wrap-mob-feat m-b-3">
                      <img src="/images/icons/icon-white-house-lrg.svg"
                        className="img-fluid m-x-auto" alt="control icon" />
                    </div>
                    <h4 className="text-xs-center">The web, once open, has been hijacked by the powerful few</h4>
                    <p className="lead text-xs-center">
                      The Internet was created as an open, permission-less, egalitarian frontier. It was a bastion of freedom and innovation.
                      But over time, power on the Internet started consolidating and a few large companies gained control.
                      This is not how it was meant to be.
                    </p>
                </div>
                <div className="feat-img-top col-sm-6 p-b-2">
                    <div className="container wrap-mob-feat m-b-3">
                      <img src="/images/icons/icon-decentralized.svg"
                        className="img-fluid m-x-auto" alt="Decentralized icon" />
                    </div>
                    <h4 className="text-xs-center">Decentralization leads to innovation, freedom and economic inclusion</h4>
                    <p className="lead text-xs-center">
                      Decentralization means more experimentation and permission-less innovation.                      
                      It means fewer control points & greater freedom for network participants.
                      It means more developers can bring products to market & compete with the giants.
                    </p>
                </div>
              </div>
              <div className="row works col-centered">
                <div className="feat-img-top col-sm-6 p-b-2">
                    <div className="container wrap-mob-feat m-b-3">
                      <img src="/images/icons/icon-info-hex.svg"
                        className="img-fluid m-x-auto" alt="Info security icon" />
                    </div>
                    <h4 className="text-xs-center">Users benefit from more options, availability, savings, & info security</h4>
                    <p className="lead text-xs-center">
                      Decentralization means more developers & competition,
                      yielding more options, better software, & lower prices.
                      It means owning software that runs on your device,
                      yielding more security/privacy & 
                      availability beyond any company's lifetime.
                    </p>
                </div>
                <div className="feat-img-top col-sm-6 p-b-2">
                    <div className="container wrap-mob-feat m-b-3">
                      <img src="/images/icons/icon-data-server-browse.svg"
                        className="img-fluid m-x-auto" alt="No database server icon" />
                    </div>
                    <h4 className="text-xs-center">Building great products shouldn't require managing servers, databases & ID systems</h4>
                    <p className="lead text-xs-center">
                      Building software should be simple.
                      With the decentralized app model,
                      developers don't have to manage servers or databases or build out user management systems.
                      Software runs on user devices & clients exchange information.
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
                <div className="col-sm-4 feature-panel feature-logo-1">
                  <div className="container wrap-mob-feat">
                    <Link to="http://democracyos.org/">
                      <img src="/images/logos/democracyos.svg" alt="DemocracyOS logo" width="240px"/>
                    </Link>
                  </div>
                </div>
                <div className="col-sm-4 feature-panel feature-logo-2">
                  <div className="container wrap-mob-feat">
                    <Link to="http://openbazaar.org/">
                      <img src="/images/logos/openbazaar.svg" alt="OpenBazaar logo" width="180px"/>
                    </Link>
                  </div>
                </div>
                <div className="col-sm-4 feature-panel feature-logo-3">
                  <div className="container wrap-mob-feat">
                    <Link to="https://tierion.com/">
                      <img src="/images/logos/tierion.svg"
                      alt="Tierion logo" width="160px"/>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="row col-sm-12 col-centered">
                <div className="col-sm-6 feature-panel feature-logo-4">
                  <div className="container wrap-mob-feat">
                    <Link to="http://bitseed.org/">
                      <img src="/images/logos/bitseed.svg" alt="Bitseed logo" width="128px"/>
                    </Link>
                  </div>
                </div>
                <div className="col-sm-6 feature-panel feature-logo-5">
                  <div className="container wrap-mob-feat">
                    <Link to="http://trychord.com/">
                      <img src="/images/logos/chord.svg" alt="Chord logo" width="110px"/>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="row col-sm-12 col-centered">
                <div className="col-sm-4 feature-panel feature-logo-1">
                  <div className="container wrap-mob-feat">
                    <Link to="http://anyshare.coop/">
                      <img src="/images/logos/anyshare.svg" alt="Anyshare logo" width="180px"/>
                    </Link>
                  </div>
                </div>
                <div className="col-sm-4 feature-panel feature-logo-2">
                  <div className="container wrap-mob-feat">
                    <Link to="https://www.microsoft.com/">
                      <img src="/images/logos/microsoft.png" alt="Microsoft logo" width="180px"/>
                    </Link>
                  </div>
                </div>
                <div className="col-sm-4 feature-panel feature-logo-3">
                  <div className="container wrap-mob-feat">
                    <Link to="http://consent.global">
                      <img src="/images/logos/consent.svg" alt="Consent logo" width="120px"/>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="row col-sm-12 col-centered">
                <div className="col-sm-6 feature-panel feature-logo-4">
                  <div className="container wrap-mob-feat">
                    <Link to="http://arcade.city/">
                      <img src="/images/logos/arcade-city.svg" alt="Arcade City logo" width="110px"/>
                    </Link>
                  </div>
                </div>
                <div className="col-sm-6 feature-panel feature-logo-4">
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
        <section className="container-fluid inverse-3col-section">
          <div className="container bs-docs-featurette col-centered m-t-2 m-b-2">
            <div className="col-centered">
              <div className="row col-centered">
                <div className="col-md-4 feature-panel-2">
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
                <div className="col-md-4 feature-panel-2">
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
                <div className="col-md-4 feature-panel-2">
                  <h4 className="inverse-heading">Reddit</h4>
                  <p className="inverse-lead">
                    Share and discuss on the subreddit
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
                <div className="col-md-4 offset-md-2 feature-panel-2">
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
                <div className="col-md-4 feature-panel-2">
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
