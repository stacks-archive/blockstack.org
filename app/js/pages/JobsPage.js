'use strict'

import {Component}      from 'react'
import {Link}           from 'react-router'
import DocumentTitle    from 'react-document-title'

import Header           from '../components/Header'
import Footer           from '../components/Footer'
import JobListing       from '../components/JobListing'
import { companiesHiring } from '../data'

class JobsPage extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <DocumentTitle title="Blockstack - Jobs">
        <div>
          <div className="container-fluid col-centered navbar-fixed-top bg-primary">
            <Header />
          </div>
          <section className="container-fluid spacing-container">
            <div className="container col-centered">
              <div className="container m-b-5">
                <h1>
                  Jobs
                </h1>
                <section className="sec-light">
                {companiesHiring.map((company, companyIndex) => {
                  return (
                    <div key={companyIndex} className="m-b-30">
                      <h3>{company.name}</h3>
                      <hr />
                      <div>
                      {company.jobs.map((jobListing, jobIndex) => {
                        return (
                          <JobListing key={jobIndex} title={jobListing.title}
                            description={jobListing.description}
                            url={jobListing.url} />
                        )
                      })}
                      </div>
                    </div>
                  )
                })}
                </section>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </DocumentTitle>
    )
  }
}

export default JobsPage
