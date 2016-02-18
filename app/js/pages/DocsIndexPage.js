'use strict'

import {Component}      from 'react'
import {Link}           from 'react-router'
import DocumentTitle    from 'react-document-title'

import Header           from '../components/Header'
import Footer           from '../components/Footer'
import CardLink         from '../components/CardLink'

class DocsIndexPage extends Component {
  render() {
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
                  <div className="row">
                    <div className="col-md-4">
                      <CardLink href="/docs/installation" title="Installation"
                        body="Get started by installing and configuring Blockstack."
                        imageSrc="https://images.unsplash.com/photo-1454165205744-3b78555e5572?crop=entropy&fit=crop&fm=jpg&h=1250&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1650" />
                    </div>
                    <div className="col-md-4">
                      <CardLink href="/docs/basic-usage" title="Basic Usage"
                        body="Explore the basic usage of Blockstack, including looking up and registering names."
                        imageSrc="https://images.unsplash.com/photo-1454165205744-3b78555e5572?crop=entropy&fit=crop&fm=jpg&h=1250&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1650" />
                    </div>
                    <div className="col-md-4">
                      <CardLink href="/docs/extended-usage" title="Extended Usage"
                        body="Dig deeper with Blockstack usage. Learn how to transfer names and more."
                        imageSrc="https://images.unsplash.com/photo-1454165205744-3b78555e5572?crop=entropy&fit=crop&fm=jpg&h=1250&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1650" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <CardLink href="/docs/blockstack-vs-dns" title="Blockstack vs Traditional DNS"
                        body="Learn about how Blockstack DNS differs from traditional DNS."
                        imageSrc="https://images.unsplash.com/photo-1454165205744-3b78555e5572?crop=entropy&fit=crop&fm=jpg&h=1250&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1650" />
                    </div>
                    <div className="col-md-4">
                      <CardLink href="/docs/blockstack-vs-namecoin" title="Blockstack vs Namecoin"
                        body="Learn about how Blockstack DNS differs from Namecoin."
                        imageSrc="https://images.unsplash.com/photo-1454165205744-3b78555e5572?crop=entropy&fit=crop&fm=jpg&h=1250&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1650" />
                    </div>
                  </div>
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