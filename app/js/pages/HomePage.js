'use strict'

import {Component}   from 'react'
import {Link}        from 'react-router'
import DocumentTitle from 'react-document-title'
import request       from 'request'

import Header        from '../components/Header'

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
                <div>
                  <h1 className="hero-head">
                    What will you build on the decentralized internet?
                  </h1>
                  <p className="lead hero-lead col-md-5 block">
                    Blockstack is a new decentralized internet where you own your data and your apps run locally without remote servers
                  </p>
                  <p className="no-padding col-md-12">
                    <Link to="/download" role="button"
                      className="btn btn-secondary hidden-sm-down">
                      Browser Add-on
                    </Link>
                    <Link to="/blog/hello-blockstack-tutorial" role="button"
                      className="btn btn-outline-primary btn-block">
                      Watch Tutorial
                    </Link>
                  </p>
                </div>
              </section>
            </div>
            <div className="section-even container-fluid">
              <div className="container">
                <section className="">
                  <p className="lead lead-centered col-md-10 block col-centered text-center">
                    The decentralized internet is powered by a technological breakthrough in consensus algorithms which allows you to take back your rights to ownership, privacy, and safety and to experience the internet as it was truly meant to be.
                  </p>
                  <p className="lead lead-centered col-md-10 block col-centered text-center">
                    As a developer, you can build decentralized apps without having to set up any infrastructure or worry about hosting user data. The decentralized Blockstack network handles identity, auth, storage, and replaces DNS and TLS.
                  </p>
                  <p className="lead lead-centered col-md-10 block col-centered text-center">
                    Blockstack is an open source project with [insert live number of users*] users and core developers located in New York City and Hong Kong. Learn more about what Blockstack here.
                  </p>
                </section>
              </div>
            </div>
            <div className="section-odd container-fluid">
              <div className="container">
                <section className="">
                  <h1 className="hero-head">
                    Unlock the Decentralized Internet
                  </h1>
                  <p className="lead lead-centered col-md-10 block col-centered text-center">
                    Downloading Blockstack will give you access to a decentralized internet within a regular browser. Claim your name, try out the first apps, lookup names like “werner.id”, connect storage of your user-owned data, and add universally accepted currency.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </DocumentTitle>
    )
  }
}

export default HomePage
