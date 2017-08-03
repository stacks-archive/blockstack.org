'use strict'

import {Component}      from 'react'
import DocumentTitle    from 'react-document-title'

import JobListing       from '../components/JobListing'
import { jobs } from '../config'

class JobsPage extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <DocumentTitle title="Blockstack - Careers">
        <div className="m-t-100 m-b-100">

          <section>
            <div className="container col-centered">
              <div className="container">

                <div className="m-t-3 m-b-3">
                  <h1>
                    Careers
                  </h1>
                </div>

                <div className="m-t-3 m-b-3">
                <p>
                  Blockstack is a global, open source community with over 2,500 developers and over 70,000 users. It was co-founded by Ryan Shea and Muneeb Ali in 2013 at Princeton and the core team is based in New York City and Hong Kong.
                </p>
                <p>
                  We recently raised a $4M Series A and are grateful to have the confidence of investors like Union Square Ventures, Lux Capital, Shana Fisher, and Naval Ravikant.
                </p>
                </div>

                <div className="m-t-3 m-b-3">
                  <h3>
                    More about us:
                  </h3>
                  <ol>
                    <li>
                      We’re located in a cozy office in the lovely NoHo district of Manhattan.
                    </li>
                    <li>
                      We’re both an open source project and a startup, so transparency is important to us.
                    </li>
                    <li>
                      We’re passionate about making the internet freer and safer for everyone and you should be, too.
                    </li>
                  </ol>
                </div>

                <div className="m-t-3 m-b-3">
                  <div className="row">
                    <div className="col-md-6">
                      <img src="/images/resources/retreat-2.jpg" style={{ width: '100%' }} />
                    </div>
                    <div className="col-md-6">
                      <img src="/images/resources/retreat-1.jpg" style={{ width: '100%' }} />
                    </div>
                  </div>
                </div>

                <div className="m-t-3 m-b-3">
                  <h3>
                    Benefits & Perks
                  </h3>
                  <p>
                    Blockstack offers a competitive salary, employer sponsored health insurance, free daily lunch, a free computer along with accessories to fit your requirements, a professional development budget, a casual workplace, and the standard 2 weeks vacation plus 5 sick days and national holidays.
                  </p>
                </div>

                <div className="m-t-3 m-b-3">
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

                <div className="m-t-3 m-b-3">
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

export default JobsPage
