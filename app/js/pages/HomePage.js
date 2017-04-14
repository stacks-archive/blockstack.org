'use strict'

import {Component}   from 'react'
import {Link}        from 'react-router'
import DocumentTitle from 'react-document-title'
import request       from 'request'

import Image         from '../components/Image'
import Header        from '../components/Header'
import Footer        from '../components/Footer'

class HomePage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      domainCount: 70000,
      slackUserCount: 2500,
      meetupUserCount: 5000,
      forumUserCount: 300
    }

    this.updateStats = this.updateStats.bind(this)
  }

  componentDidMount() {
    // Get the number of Slack users
    request({
      url: "https://blockstack-site-api.herokuapp.com/v1/stats",
      withCredentials: false
    }, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        this.updateStats(body)
      } else {
        console.log(error)
      }
    })
  }

  updateStats(response) {
    const jsonResponse = JSON.parse(response)
    if (jsonResponse.hasOwnProperty("slack_users") &&
        jsonResponse.hasOwnProperty("meetup_users") &&
        jsonResponse.hasOwnProperty("forum_users") &&
        jsonResponse.hasOwnProperty("domains")) {
      
      let newSlackUsers = this.state.slackUserCount
      if (jsonResponse.slack_users !== 0) {
        newSlackUsers = jsonResponse.slack_users
      }

      // Set the stats
      this.setState({
        slackUserCount: newSlackUsers,
        meetupUserCount: jsonResponse.meetup_users,
        forumUserCount: jsonResponse.forum_users,
        domainCount: jsonResponse.domains
      })
    }
  }

  render() {
    return (
      <DocumentTitle title="Blockstack, building the decentralized internet">
        <div className="body-hero">
          <div className="col-centered block">
            <Header />
            <div className="container">
              <section className="hero">
                <h1 className="hero-head">
                  What will you build on the decentralized internet?
                </h1>
                <p className="lead hero-lead col-md-5 block">
                  Blockstack is a new decentralized internet where you own your data and apps run locally without remote servers.
                </p>
                <p className="no-padding col-md-12">
                  <Link to="/tutorials/hello-blockstack" role="button"
                    className="btn btn-lg btn-secondary btn-block">
                    Watch Tutorial
                  </Link>
                </p>
                <p className="no-padding col-md-12 hero-caption">
                  <Link to="/download" className="hero-caption-text">
                    Try the browser add-on. &nbsp; › &nbsp;
                    <span className="hero-caption-link">Download</span>
                  </Link>
                </p>
              </section>
            </div>
            <div className="section-even container-fluid">
              <div className="container">
                <section className="">
                  <h1 className="modern text-center">
                    Access the Decentralized Internet
                  </h1>
                  <p className="lead lead-centered col-md-10 block col-centered text-center">
                    Downloading Blockstack will give you access to a decentralized internet within your favorite browser. Claim your name, try out the first apps, lookup people in the public directory, make payments with globally-accepted currency, and connect your storage providers to host your user-owned data.
                  </p>
                </section>
              </div>
            </div>
            <div className="section-odd container-fluid">
              <div className="container">
                <section className="">
                  <p className="lead lead-centered col-md-10 block col-centered text-center">
                    The decentralized internet is powered by a technological breakthrough in consensus algorithms that lets you take back your safety, privacy, and property rights on the internet. You're free to experience the internet as it was truly meant to be.
                  </p>
                  <p className="lead lead-centered col-md-10 block col-centered text-center">
                    As a developer, you can build decentralized apps without having to set up any infrastructure or worry about hosting user data. The decentralized Blockstack network handles identity, DNS and public key distribution. You get your own private storage and authentication is between just you and your apps, with no 3rd parties.
                  </p>
                  <p className="lead lead-centered col-md-10 block col-centered text-center">
                    Blockstack is an open source project with <b>{this.state.domainCount}</b> users and core developers located in New York City and Hong Kong. Learn more about what Blockstack is <Link to="/about">here</Link>.
                  </p>
                </section>
              </div>
            </div>
            <div className="section-even container-fluid">
              <div className="container">
                <section className="">
                  <h1 className="modern text-center">
                    Build apps like these on the Blockstack network:
                  </h1>
                  <p className="lead lead-centered col-md-10 block col-centered text-center">
                    Censorship-resistant social network<br />
                    Cloud democracy with secure voting<br />
                    Peer-to-peer marketplace<br />
                  </p>
                  <p className="lead lead-centered col-md-10 block col-centered text-center">
                    As a developer, what you create is no longer limited by walled gardens, infrastructure maintainance, and concerns about user data security. Build apps that live on forever and publish them to the decentralized internet where they will run locally on your users' servers.
                  </p>
                </section>
              </div>
            </div>
            <div className="section-odd container-fluid">
              <div className="container">
                <section className="">
                  <p className="lead lead-centered col-md-10 block col-centered text-center">
                    <Image
                      src="/images/visuals/sign-in-with-blockstack.gif"
                      fallbackSrc="/images/visuals/sign-in-with-blockstack.gif"
                      retinaSupport={false} />
                  </p>
                  <p className="lead lead-centered col-md-10 block col-centered text-center">
                    Complete the step-by-step tutorial and see how easy it is to build an app with a decentralized identity system in a few lines of code and no servers.
                  </p>
                  <p className="lead lead-centered col-md-10 block col-centered text-center">
                    <Link to="/tutorials/hello-blockstack" role="button"
                      className="btn btn-outline-primary btn-block">
                      Hello Blockstack Tutorial
                    </Link>
                  </p>
                  <p className="lead lead-centered col-md-10 block col-centered text-center">
                    Want to learn more about building apps on blockstack? Tutorials on building serverless apps with “get” and “put” functions are coming soon, but in the meantime check out our Github repo and join the community
                  </p>
                </section>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </DocumentTitle>
    )
  }
}

export default HomePage
