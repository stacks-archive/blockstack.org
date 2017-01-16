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
      nameCount: 67000,
      slackUserCount: 2200,
      meetupUserCount: 4512
    }

    this.updateNameCount = this.updateNameCount.bind(this)
    this.updateSlackCount = this.updateSlackCount.bind(this)
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
      url: "https://blockstack-site-api.herokuapp.com/v1/slack-users",
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
      <DocumentTitle title="Blockstack, building the decentralized internet">
        <div className="site-wrapper body-hero">
          <div className="col-centered block">
            <Header />
            <div className="container">
              <div className="container">
                <section className="hero">
                  <div className="col-md-6 col-lg-5 no-padding">
                    <h1 className="hero-head">
                      Build on the New Internet
                    </h1>
                    <p className="lead hero-lead col-md-11">
                      Build decentralized, server-less apps that put users in control of their data.
                    </p>
                    <p className="no-padding col-md-8">
                      <Link to="http://eepurl.com/cv8gQ1" role="button" target="_blank"
                        className="btn btn-sm btn-secondary btn-block">
                        Join the Community
                      </Link>
                    </p>
                    <p className="no-padding col-md-8 hidden-sm-down">
                      <Link to="/docs" className="nav-link"
                        className="btn btn-sm btn-outline-secondary btn-block">
                        Install the CLI
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
        </div>
      </DocumentTitle>
    )
  }
}

export default HomePage
