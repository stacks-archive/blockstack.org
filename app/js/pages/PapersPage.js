'use strict'

import {Component}      from 'react'
import {Link}           from 'react-router'
import DocumentTitle    from 'react-document-title'

import Header           from '../components/Header'
import Footer           from '../components/Footer'

class PapersPage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      papers: [
        {
          title: "Blockstack: A Global Naming and Storage System Secured by Blockchains",
          authors: "Muneeb Ali, Jude Nelson, Ryan Shea and Michael J. Freedman",
          publication: "USENIX Annual Technical Conference",
          url: "https://blockstack.org/blockstack.pdf",
          date: "June 2016",
        },
        {
          title: "Bootstrapping Trust in Distributed Systems with Blockchains",
          authors: "Muneeb Ali, Jude Nelson, Ryan Shea and Michael J. Freedman:",
          publication: "USENIX ;login: issue: Fall 2016, Vol. 41, No. 3",
          url: "https://blockstack.org/blockstack-login.pdf",
          date: "June 2016",
        },
        {
          title: "Extending Existing Blockchains with Virtualchain",
          authors: "Jude Nelson, Muneeb Ali, Ryan Shea and Michael J. Freedman",
          publication: "Workshop on Distributed Cryptocurrencies and Consensus Ledgers",
          url: "https://blockstack.org/virtualchain.pdf",
          date: "July 2016",
        },
      ]
    }
  }

  render() {
    return (
      <DocumentTitle title="Blockstack - Documentation">
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
                { this.state.papers.map((paper, index) => {
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
