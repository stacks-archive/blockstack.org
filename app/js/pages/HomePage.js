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
      domainCount: 68000,
      slackUserCount: 2300,
      meetupUserCount: 4923,
      forumUserCount: 250
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
      // Set the stats
      this.setState({
        slackUserCount: jsonResponse.slack_users,
        meetupUserCount: jsonResponse.meetup_users,
        forumUserCount: jsonResponse.forum_users,
        domainCount: jsonResponse.domains
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
              <section className="hero">
                <div>
                  <h1 className="hero-head">
                    Build on the New Internet
                  </h1>
                  <p className="lead hero-lead col-md-5 block">
                    Build decentralized, server-less apps where users control their data.
                  </p>
                  <p className="no-padding col-md-12">
                    <Link to="http://eepurl.com/cv8gQ1" role="button" target="_blank"
                      className="btn btn-secondary btn-block">
                      Join the Community
                    </Link>
                    <Link to="/docs" className="btn btn-outline-primary hidden-sm-down">
                      Install the Software
                    </Link>
                  </p>
                </div>
              </section>
            </div>
            <div className="container">
              <section>
                <div className="simple-featurette">
                  <div className="col-centered">
                    <div className="row col-centered">
                      <Link to="https://explorer.blockstack.org/names/id"
                            className="link-stats" target="_blank">
                        <div className="simple-panel">
                          <p className="lead simple-lead">
                            Domains registered
                          </p>
                          <p className="stats-count">
                            <span className="comment-hightlight">|</span>{this.state.domainCount}
                          </p>
                        </div>
                      </Link>
                      <Link to="http://chat.blockstack.org"
                            className="link-stats" target="_blank">
                        <div className="simple-panel">
                          <p className="lead simple-lead">
                            Slack members
                          </p>
                          <p className="stats-count">
                            <span className="comment-hightlight">|</span>{this.state.slackUserCount}
                          </p>
                        </div>
                      </Link>
                      <Link to="http://www.meetup.com/topics/blockstack/"
                            className="link-stats" target="_blank">
                        <div className="simple-panel">
                          <p className="lead simple-lead">
                            Meetup members
                          </p>
                          <p className="stats-count">
                            <span className="comment-hightlight">|</span>{this.state.meetupUserCount}
                          </p>
                        </div>
                      </Link>
                      <Link to="https://forum.blockstack.org/users?period=monthly"
                            className="link-stats" target="_blank">
                        <div className="simple-panel">
                          <p className="lead simple-lead">
                            Forum members
                          </p>
                          <p className="stats-count">
                            <span className="comment-hightlight">|</span>{this.state.forumUserCount}
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </DocumentTitle>
    )
  }
}

export default HomePage
