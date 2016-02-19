'use strict'

import {Component}      from 'react'
import {Link}           from 'react-router'
import DocumentTitle    from 'react-document-title'

import Header           from '../components/Header'
import Footer           from '../components/Footer'
import CardLink         from '../components/CardLink'
import docs             from '../../docs.json'

class DocsIndexPage extends Component {
  render() {
    let docPageRows = [
      ['installation', 'basic-usage', 'extended-usage'],
      ['what-is-blockstack', 'blockstack-vs-dns', 'blockstack-vs-namecoin'],
      ['faq']
    ]

    return (
      <DocumentTitle title="Blockstack - Documentation">
        <div>
          <div className="container-fluid col-centered navbar-fixed-top bg-primary">
            <Header />
          </div>
          <section className="container-fluid spacing-container">
            <div className="container col-centered">
              <div className="container">
                <h1>Blockstack Docs</h1>
                <div style={{ marginTop: '40px' }}>
                  {docPageRows.map((docPageRow, rowIndex) => {
                    return (
                      <div className="row" key={rowIndex}>
                      {docPageRow.map((slug, columnIndex) => {
                        let docPage = docs[slug]
                        return (
                          <div className="col-md-4" key={columnIndex}>
                            <CardLink href={`/docs/${slug}`} title={docPage.title}
                              body={docPage.description} imageSrc={docPage.image} />
                          </div>
                        )
                      })}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </DocumentTitle>
    )
  }
}

export default DocsIndexPage
