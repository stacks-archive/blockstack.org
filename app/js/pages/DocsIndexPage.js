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
    const docPageRows = [
      ['what-is-blockstack', 'installation', 'basic-usage'],
      ['extended-usage', 'blockstack-vs-dns', 'blockstack-vs-namecoin'],
      ['technology', 'namespaces', 'faq']
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

                <div className="card-deck-wrapper">
                  {docPageRows.map((docPageRow, rowIndex) => {
                    return (
                      <div className="card-deck m-b-3" key={rowIndex}>
                      {docPageRow.map((slug, columnIndex) => {
                        const docPage = docs[slug]
                        return (
                          <CardLink key={columnIndex} href={`/docs/${slug}`}
                            title={docPage.title} body={docPage.description}
                            imageSrc={docPage.image} cardsPerRow={3} />
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