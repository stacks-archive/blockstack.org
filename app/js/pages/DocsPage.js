'use strict'

import {Component}      from 'react'
import {Link}           from 'react-router'
import DocumentTitle    from 'react-document-title'
import marked           from 'marked'

import Header           from '../components/Header'
import Footer           from '../components/Footer'
import CardLink         from '../components/CardLink'
import docs             from '../../docs.json'

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
})

const propTypes = {
}

class DocsPage extends Component {

  constructor(props) {
    super(props)

    this.state = {}
    this.initHighlighting = this.initHighlighting.bind(this)
  }

  initHighlighting() {
    let blocks = document.querySelectorAll('pre code')
    Array.prototype.forEach.call(blocks, hljs.highlightBlock)
  }

  componentDidMount() {
    this.initHighlighting()
  }

  componentDidUpdate() {
    this.initHighlighting()
  }

  render() {
    let pageName = 'index'
    if (this.props.route.path !== '/docs') {
      pageName = this.props.routeParams.docSection
    }
    let markdown = docs['404']
    if (docs.hasOwnProperty(pageName)) {
      markdown = docs[pageName]
    }
    let createMarkup = function() {
      return {
        __html: marked(markdown)
      }
    }

    return (
      <DocumentTitle title="Blockstack - Documentation">
        <div>
          <div className="container-fluid col-centered about-head-wrap">
            <Header />
          </div>
          <section className="container-fluid sec-hook">
            <div className="bs-docs-featurette col-centered">
              <div className="col-md-8 col-md-offset-2">
                { pageName !== 'index' ?
                <div className="row">
                  <Link to="/docs" className="btn btn-outline-primary">
                   &lt; Back to docs
                  </Link>
                </div>
                : null }

                { createMarkup ?
                  <div dangerouslySetInnerHTML={createMarkup()}>
                  </div>
                : null }

                { pageName === 'index' ?
                <div style={{ marginTop: '40px' }}>
                  <div className="row">
                    <div className="col-md-4">
                      <CardLink href="/docs/installation" title="Installation"
                        body="Get started by installing and configuring Blockstack."
                        imageSrc="https://images.unsplash.com/photo-1454165205744-3b78555e5572?crop=entropy&fit=crop&fm=jpg&h=1250&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1650" />
                    </div>
                    <div className="col-md-4">
                      <CardLink href="/docs/usage" title="Usage"
                        body="Explore the basic usage of Blockstack, including looking up and registering names."
                        imageSrc="https://images.unsplash.com/photo-1454165205744-3b78555e5572?crop=entropy&fit=crop&fm=jpg&h=1250&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1650" />
                    </div>
                    <div className="col-md-4">
                      <CardLink href="/docs/app-developer-guide" title="App Developer Guide"
                        body="Explore the possibilities of apps you can build on the Blockstack system."
                        imageSrc="https://images.unsplash.com/photo-1454165205744-3b78555e5572?crop=entropy&fit=crop&fm=jpg&h=1250&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1650" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <CardLink href="/docs/namespaces" title="Namespaces"
                        body="Learn how namespaces work and how you can create your own."
                        imageSrc="https://images.unsplash.com/photo-1454165205744-3b78555e5572?crop=entropy&fit=crop&fm=jpg&h=1250&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1650" />
                    </div>
                    <div className="col-md-4">
                      <CardLink href="/docs/contributor-guide" title="Contributor Guide"
                        body="Find out how you can contribute to Blockstack development."
                        imageSrc="https://images.unsplash.com/photo-1454165205744-3b78555e5572?crop=entropy&fit=crop&fm=jpg&h=1250&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1650" />
                    </div>
                    <div className="col-md-4">
                      <CardLink href="/docs/technology" title="Technology"
                        body="Learn about how Blockstack works under the hood."
                        imageSrc="https://images.unsplash.com/photo-1454165205744-3b78555e5572?crop=entropy&fit=crop&fm=jpg&h=1250&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1650" />
                    </div>
                  </div>
                </div>
                : null }
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </DocumentTitle>
    )
  }

}

DocsPage.propTypes = propTypes

export default DocsPage
