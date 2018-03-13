'use strict'

import { Component } from 'react'
import DocumentTitle from 'react-document-title'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { StatsActions } from '../datastore/Stats'
import LeverJobs from '../components/LeverJobs'
import { jobs } from '../config'

function mapStateToProps(state) {
  return {
    stats: state.stats,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    Object.assign({}, StatsActions),
    dispatch
  )
}

class CareersPage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      stats: this.props.stats,
    }
  }

  componentWillMount() {
    this.props.fetchStats()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.stats !== this.props.stats) {
      let stats = nextProps.stats
      if (stats.domains === 0) {
        stats.domains = 72000
      }
      this.setState({
        stats: stats,
      })
    }
  }

  render() {
    return (
      <DocumentTitle title="Blockstack - Careers">
        <div className="m-t-100 m-b-100">

          <section>
            <div className="container col-centered">
              <div className="container">
                <h1>
                  Careers
                </h1>
                <div className="row">
                  <div className="col-md-7">
                    <div className="mb-4">
                      <p>
                        Blockstack is a rapidly growing open source community with over {this.state.stats.meetupUsers.toLocaleString()} developers globally.
                        It was co-founded by Ryan Shea and Muneeb Ali in 2013 at Princeton and the core team is based in New York City and Hong Kong.
                      </p>
                      <p>
                        We raised a Series A in February 2017, and 50M in the <a href="/blog/blockstack-token-sale-recap">
                        Blockstack Token Sale</a> in November 2017.
                        We are grateful to have the confidence of investors including Union Square Ventures, Lux
                        Capital, Shana Fisher, Naval Ravikant, Winklevoss Capital, Digital Currency Group, Foundation
                        Capital, Kevin Rose, Michael Arrington, and Qasar Younis (former COO of Y Combinator).
                      </p>
                    </div>

                    <div className="mb-4">
                      <h3>
                        More about us:
                      </h3>
                      <ul>
                        <li>
                          We’re passionate about making the internet freer and safer for everyone and you should be, too.
                        </li>
                        <li>
                          We’re both an open source project and a startup, so transparency is important to us.
                        </li>
                        <li>
                          We’re located in a beautiful office in the lovely NoHo district of Manhattan, surrounded by some of the best cafes and restaurants in New York.
                        </li>
                      </ul>
                    </div>

                    <div className="mb-4">
                      <img src="/images/photos/blockstackteam-1.jpg" alt="Blockstack team" style={{ width: '100%' }} />
                    </div>
                    <div className="mb-4">
                      <img src="/images/photos/blockstackteam-2.jpg" alt="Blockstack team" style={{ width: '100%' }} />
                    </div>

                    <div className="mb-4">
                      <h3>
                        Benefits & Perks
                      </h3>
                      <p>
                        Blockstack offers a competitive salary, generous equity,  employer-sponsored health insurance, free daily lunch, a computer of your choice along with accessories to fit your requirements, a professional development budget, a casual workplace, and standard vacation + unlimited sick days.
                      </p>
                    </div>

                    <div className="mb-4">
                      <h3>
                        Blockstack Values
                      </h3>
                      <p>
                        Blockstack is an open-source project with core developers and contributors located around the world, from New York City to Hong Kong. We believe the community is one of our greatest assets, and the team engages with users via Slack, Github, Twitter, and the Blockstack Forum in order to build the best product possible.
                      </p>
                      Blockstack Team Values: (voted and decided collaboratively by the team)
                      <ul>
                        <li>Humility</li>
                        <li>Extreme Ownership</li>
                        <li>Collaborative Mindset</li>
                        <li>Possibilist</li>
                        <li>Mission-driven</li>
                      </ul>
                    </div>

                    <div className="mb-4">
                      <p>
                        We get a lot of applicants, and have historically hired people who are proactively
                        involved in our work and mission of decentralizing the internet. Even a simple pull
                        request goes a long way in signaling interest in the project. We hope you explore
                        our <a href="https://github.com/blockstack">Github</a>, <a href="https://blockstack.org/whitepaper.pdf">
                        Whitepaper</a>, <a href="https://blockstack.org/install">Browser</a>, and
                        <a href="https://docs.google.com/a/blockstack.com/forms/d/e/1FAIpQLSed5Mnu0G5ZMJdWs6cTO_8sTJfUVfe1sYL6WFDcD51_XuQkZw/viewform"> Slack </a>
                        prior to submitting your resume.
                      </p>
                      <p>
                        Read more about our engineering team on <a href="https://www.keyvalues.com/blockstack" target="_blank">Key Values</a>.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <LeverJobs />
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </DocumentTitle>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CareersPage)
