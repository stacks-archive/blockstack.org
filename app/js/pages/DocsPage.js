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

    this.initHighlighting = this.initHighlighting.bind(this)
    this.getDocPage = this.getDocPage.bind(this)
    this.getPageProperties = this.getPageProperties.bind(this)
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

  getDocPage() {
    let pageName = '404'
    if (docs.hasOwnProperty(this.props.routeParams.docSection)) {
      pageName = this.props.routeParams.docSection
    }
    return docs[pageName]
  }

  getPageProperties() {
    let docPage = this.getDocPage()

    let pageProperties = {
      markdown: ''
    }

    let pageSections = docPage.split('---')
    if (pageSections.length === 3) {
      pageProperties.markdown = pageSections[2]
      let propertyLines = pageSections[1].split('\n')
      propertyLines.map((propertyLine) => {
        if (propertyLine.split(':').length === 2) {
          let [propertyName, propertyValue] = propertyLine.split(':')
          pageProperties[propertyName] = propertyValue.trim()
        }
      })
    }

    let markup = marked(pageProperties.markdown)
    markup = markup.replace('<a href="', '<a target="_blank" href="')
    pageProperties.markupInnerHTML = {
      __html: markup
    }

    return pageProperties
  }

  render() {
    const pageProperties = this.getPageProperties()

    return (
      <DocumentTitle title={`Blockstack - ${pageProperties.title}`}>
        <div>
          <div className="container-fluid col-centered navbar-fixed-top bg-primary">
            <Header />
          </div>
          <section className="container-fluid spacing-container">
            <div className="container col-centered">
              <div className="container">
                <p>
                  <Link to="/docs" className="btn btn-secondary btn-sm">
                   &lt; Back to Docs
                  </Link>
                </p>
                <div dangerouslySetInnerHTML={pageProperties.markupInnerHTML}>
                </div>
                { pageProperties.hasOwnProperty('nextUrl') && pageProperties.hasOwnProperty('nextLabel') ?
                <div className="row">
                  <div className="col-md-4">
                    <h3>Next Article</h3>
                    <CardLink href={pageProperties.nextUrl} title={pageProperties.nextLabel}
                      body={pageProperties.nextDescription}
                      imageSrc="https://images.unsplash.com/photo-1454165205744-3b78555e5572?crop=entropy&fit=crop&fm=jpg&h=1250&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1650" />
                  </div>
                </div>
                : null
                }
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
