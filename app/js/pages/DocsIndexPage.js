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
    const pageRows = [
      {
        title: 'Getting Started',
        items: ['what-is-blockstack', 'installation', 'basic-usage']
      },
      {
        title: 'Blockstack Articles',
        items: ['extended-usage', 'blockstack-vs-dns', 'blockstack-vs-namecoin']
      },
      {
        items: ['namespaces', 'how-blockstack-works', 'light-clients']
      }
    ]

    return (
      <DocumentTitle title="Blockstack - Documentation">
        <div>
          <div className="container-fluid col-centered navbar-fixed-top bg-primary">
            <Header />
          </div>
          <section className="container-fluid spacing-container">
            <div className="container col-centered">
              <div className="container m-b-5">
                {pageRows.map((pageRow, rowIndex) => {
                  return (
                    <div key={rowIndex}>
                      {pageRow.title ?
                      <h1>{pageRow.title}</h1>
                      : null }
                      <div className="card-deck-wrapper">
                        <div className="card-deck m-b-3">
                        {pageRow.items.map((slug, columnIndex) => {
                          const page = docs[slug]
                          return (
                            <CardLink key={columnIndex} href={`/docs/${slug}`}
                              title={page.title} body={page.description}
                              imageSrc={page.image} cardsPerRow={3} />
                          )
                        })}
                        </div>
                      </div>
                    </div>
                  )
                })}
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