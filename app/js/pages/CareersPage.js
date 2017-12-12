'use strict'

import {Component}          from 'react'
import DocumentTitle        from 'react-document-title'
import {bindActionCreators} from 'redux'
import {connect}            from 'react-redux'

import {StatsActions}       from '../datastore/Stats'
import JobListing           from '../components/JobListing'
import { jobs }             from '../config'

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

                <div className="mb-4">
                  <h1>
                    Careers
                  </h1>
                </div>

                <div className="mb-4">
                <p>
                  Blockstack is a global, open source community with over {this.state.stats.meetupUsers.toLocaleString()} developers.
                  It was co-founded by Ryan Shea and Muneeb Ali in 2013 at Princeton and the core team is based in New York City and Hong Kong.
                </p>
                <p>
                  We recently raised a Series A and are grateful to have the confidence of investors like Union Square Ventures, Lux Capital, Shana Fisher, and Naval Ravikant.
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
                  <div className="row">
                    <div className="col-12">
                      <img src="/images/photos/blockstackteam.jpg" alt="Blockstack team" style={{ width: '100%' }} />
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h3>
                    Benefits & Perks
                  </h3>
                  <p>
                    Blockstack offers a competitive salary, generous equity, employer-sponsored health insurance, free daily lunch, a free computer along with accessories to fit your requirements, a professional development budget, and a casual workplace.
                  </p>
                </div>

                <div className="mb-4">
                  <h3>
                    Open Positions
                  </h3>
                  {jobs.map((jobListing, jobIndex) => {
                    return (
                      <JobListing key={jobIndex} title={jobListing.title}
                        description={jobListing.description}
                        url={jobListing.url} />
                    )
                  })}
                </div>

                <div className="mb-4">
                  <h3>
                    Contact Us
                  </h3>
                  <p>
                    Don't see what you're looking for? Send an email to careers@blockstack.org with how you'd like to help and we'd love to talk.
                  </p>
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
