'use strict'

import {Component}      from 'react'
import {Link}           from 'react-router'
import DocumentTitle    from 'react-document-title'

import Header           from '../components/Header'
import Footer           from '../components/Footer'
import CardLink         from '../components/CardLink'

class DocsIndexPage extends Component {
  render() {
    let cardRows = [
      [
        { href: "/docs/installation", title: "Installation",
          body: "Get started by installing and configuring Blockstack.",
          imageSrc: "https://images.unsplash.com/photo-1454165205744-3b78555e5572"},

        { href: "/docs/basic-usage", title: "Basic Usage",
          body: "Explore Blockstack usage, including looking up & registering names.",
          imageSrc: "https://images.unsplash.com/photo-1454165205744-3b78555e5572"},

        { href: "/docs/extended-usage", title: "Extended Usage",
          body: "Dig deeper with Blockstack usage, including name transfers and more.",
          imageSrc: "https://images.unsplash.com/photo-1454165205744-3b78555e5572"}
      ], [
        { href: "/docs/what-is-blockstack", title: "What is Blockstack?",
          body: "Learn about what Blockstack is and how it works.",
          imageSrc: "https://images.unsplash.com/photo-1454165205744-3b78555e5572"},

        { href: "/docs/blockstack-vs-dns", title: "Blockstack vs ICANN DNS",
          body: "Learn about how Blockstack DNS differs from traditional ICANN DNS.",
          imageSrc: "https://images.unsplash.com/photo-1454165205744-3b78555e5572"},

        { href: "/docs/blockstack-vs-namecoin", title: "Blockstack vs Namecoin",
          body: "Learn about how Blockstack DNS differs from Namecoin.",
          imageSrc: "https://images.unsplash.com/photo-1454165205744-3b78555e5572"}
      ], [
        { href: "/docs/faq", title: "FAQ",
          body: "A list of questions frequently asked about Blockstack.",
          imageSrc: "https://images.unsplash.com/photo-1454165205744-3b78555e5572"}
      ]
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
                  {cardRows.map((cardRow, rowIndex) => {
                    return (
                      <div className="row" key={rowIndex}>
                      {cardRow.map((card, cardIndex) => {
                        return (
                          <div className="col-md-4" key={cardIndex}>
                            <CardLink href={card.href} title={card.title}
                              body={card.body} imageSrc={card.imageSrc} />
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
