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
  return bindActionCreators(Object.assign({}, StatsActions), dispatch)
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
                <h1>Careers</h1>
                <div className="row">
                  <div className="col-md-12 mb-4">
                    <img 
                      src="/images/photos/stratton.jpg" 
                      alt="Blockstack Stratton Team Retreat" 
                      style={{ width: '100%' }}
                    />
                  </div>
                  <div className="col-md-7">
                    <div className="mb-4">
                      <p>
                        Blockstack is a new internet for decentralized apps. Our open-source community of {' '}
                        {this.state.stats.meetupUsers.toLocaleString()}{' '} members globally is building protocols & 
                        tools that make it easy to build scalable decentralized apps.
                      </p>
                      <p>
                        Blockstack PBC, a <a href="https://blockstack.org/blog/public-benefit-corp">Public Benefit Corp</a>, 
                        was co-founded by Ryan Shea and Muneeb Ali to contribute to the development of the core open-source 
                        software. Blockstack PBC has offices in New York City, San Francisco, Hong Kong, and Toronto.
                      </p>
                      <p>
                        Blockstack PBC raised a $4M Series A in January 2017, and $50M in the{' '}
                        <a href="/blog/blockstack-token-sale-recap">
                          Blockstack Token Sale
                        </a>{' '}
                        in December 2017. We are grateful to have investors like Union Square Ventures, 
                        Lux Capital, Naval Ravikant, Winklevoss Capital, Digital Currency Group, Foundation Capital, 
                        Kevin Rose, and Michael Arrington amongst others. Our token sale had 800 Accredited Investors 
                        and 8000+ total participants.
                      </p>
                    </div>

                    <div className="mb-4">
                      <h3>Mission</h3>
                      <p>
                        Blockstack’s mission is to enable an open, decentralized internet which will benefit all internet users
                        by giving them more control over information and computation. We’re committed to always support the
                        decentralization of the Blockstack network and ensure that we build the network in a way that no
                        single entity, including Blockstack PBC, has control over it.
                        </p>
                    </div>

                    <div className="mb-4">
                      <img
                        src="/images/photos/blockstackteam-1.jpg"
                        alt="Blockstack team"
                        style={{ width: '100%' }}
                      />
                    </div>
                    <div className="mb-4">
                      <img
                        src="/images/photos/blockstackteam-3.jpg"
                        alt="Blockstack team"
                        style={{ width: '100%' }}
                      />
                      <small class="text-muted">Photo credit: The New York Times</small>
                    </div>

                    <div className="mb-4">
                      <h3>Benefits & Perks</h3>
                      <p>
                        Blockstack offers a competitive salary, generous equity,
                        employer-sponsored health insurance, free daily lunch, a
                        computer of your choice along with accessories to fit
                        your requirements, a professional development budget, a
                        casual workplace, and standard vacation + unlimited sick
                        days.
                      </p>
                    </div>

                    <div className="mb-4">
                      <h3>Blockstack Values</h3>
                      <p>
                        Blockstack is an open-source project with core
                        developers and contributors located around the world,
                        from New York City to Hong Kong. We believe the
                        community is one of our greatest assets, and the team
                        engages with users via Slack, Github, Twitter, and the
                        Blockstack Forum in order to build the best product
                        possible.
                      </p>
                      Blockstack Team Values: (voted and decided collaboratively
                      by the team)
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
                        We get a lot of applicants, and have historically hired
                        people who are proactively involved in our work and
                        mission of decentralizing the internet. Even a simple
                        pull request goes a long way in signaling interest in
                        the project. We hope you explore our{' '}
                        <a href="https://github.com/blockstack">Github</a>,{' '}
                        <a href="https://blockstack.org/whitepaper.pdf">
                          Whitepaper
                        </a>,{' '}
                        <a href="https://blockstack.org/install">Browser</a>,
                        and
                        <a href="https://docs.google.com/a/blockstack.com/forms/d/e/1FAIpQLSed5Mnu0G5ZMJdWs6cTO_8sTJfUVfe1sYL6WFDcD51_XuQkZw/viewform">
                          {' '}
                          Slack{' '}
                        </a>
                        prior to submitting your resume.
                      </p>
                      <p>
                        Read more about our engineering team on{' '}
                        <a
                          href="https://www.keyvalues.com/blockstack"
                          target="_blank"
                        >
                          Key Values
                        </a>.
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
