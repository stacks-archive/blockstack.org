'use strict'

import {Component}      from 'react'
import {Link}           from 'react-router'
import DocumentTitle    from 'react-document-title'

import Header           from '../components/Header'
import Footer           from '../components/Footer'
import {papers}         from '../data'

class PapersPage extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <DocumentTitle title="Blockstack - Papers">
        <div>
          <div className="container-fluid col-centered navbar-fixed-top bg-primary">
            <Header />
          </div>
          <section className="container-fluid spacing-container">
            <div className="container col-centered">
              <div className="container m-b-5">
                <h1>
                  Blockstack Papers
                </h1>
                { papers.map((paper, index) => {
                  return (
                    <div className="m-b-3">
                      <h4 className="m-b-1">
                        {index+1}. {paper.title}
                      </h4>
                      <p className="m-b-0">
                        {paper.authors}
                      </p>
                      <p className="m-b-1">
                        {paper.publication} - {paper.date}
                      </p>
                      <p className="m-b-1">
                        <Link to={paper.url} target="_blank"
                              className="btn btn-sm btn-outline-primary">
                          PDF
                        </Link>
                      </p>
                    </div>
                  )
                }) }
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </DocumentTitle>
    )
  }

}

export default PapersPage
