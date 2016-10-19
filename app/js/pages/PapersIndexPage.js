'use strict'

import {Component}      from 'react'
import {Link}           from 'react-router'
import DocumentTitle    from 'react-document-title'

import Header           from '../components/Header'
import Footer           from '../components/Footer'
import ArticleIndex     from '../components/ArticleIndex'
import docs             from '../../docs.json'

class PapersIndexPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      papers: [
        {
          title: "Blockstack: A Global Naming and Storage System Secured by Blockchains",
          authors: "Muneeb Ali, Jude Nelson, Ryan Shea and Michael J. Freedman",
          publication: "Proc. USENIX Annual Technical Conference",
          url: "https://blockstack.org/blockstack.pdf",
          location: "Denver, CO",
          date: "June 2016"
        },
        {
          title: "Extending Existing Blockchains with Virtualchain",
          authors: "Jude Nelson, Muneeb Ali, Ryan Shea and Michael J. Freedman",
          publication: "Proc. Workshop on Distributed Cryptocurrencies and Consensus Ledgers",
          url: "https://blockstack.org/virtualchain.pdf",
          location: "Chicago, IL",
          date: "July 2016"
        },
        {
          title: "Bootstrapping Trust in Distributed Systems with Blockchains",
          authors: "Muneeb Ali, Jude Nelson, Ryan Shea and Michael J. Freedman:",
          publication: "Proc. USENIX Annual Technical Conference",
          url: "https://blockstack.org/blockstack-login.pdf",
          location: "Denver, CO",
          date: "June 2016"
        }
      ]
    }
  }

  render() {

    console.log(this.state.papers)

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
                    <div>
                      <h4>
                        {index+1}. {paper.title}
                      </h4>
                      <p>
                        {paper.authors}
                        <br />
                        {paper.publication}
                        <br />
                        {paper.location}, {paper.date}
                        <br />
                        [ <Link to={paper.url} target="_blank">PDF</Link> ]
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

export default PapersIndexPage
