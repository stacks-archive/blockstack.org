'use strict'

import { Component }   from 'react'
import DocumentTitle   from 'react-document-title'
import {
  Link, Element, Events, scrollSpy
}                      from 'react-scroll'
import marked          from 'marked'

import Header          from '../components/Header'
import Footer          from '../components/Footer'
import docs            from '../../docs.json'

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

class DocsPage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      sections: null
    }

    this.setPage = this.setPage.bind(this)
  }

  componentDidMount() {
    this.setPage()
  }
  
  componentDidUpdate() {
    const codeBlocks = document.querySelectorAll('pre code')
    Array.prototype.forEach.call(codeBlocks, hljs.highlightBlock)
  }

  setPage() {
    const sections = [
      {
        title: 'Blockstack CLI',
        pageNames: ['cli-installation', 'cli-basic-usage', 'cli-extended-usage'],
      }
    ]

    sections.forEach((section) => {
      let markup = ""
      let subSections = []

      section.pageNames.forEach((pageName) => {
        let markdown = docs[pageName].markdown
        let markdownParts = markdown.split(/### (.*)/g)
        markdownParts.splice(0, 1)

        let currentMarkup = marked(markdown)
        markup = markup + currentMarkup

        let markupParts = currentMarkup.split(/(<h3.*<\/h3>)\n/g)
        markupParts.splice(0, 1)

        for (var i = 0, j = markupParts.length; i < j; i += 2) {
          let id = markupParts[i].split(/id="(.*)"/g)[1]
          let title = markdownParts[i]
          subSections.push({
            id: id,
            title: title,
            header: markupParts[i],
            body: markupParts[i+1]
          })
        }
      })

      section.markup = markup
      section.subSections = subSections
    })

    this.setState({
      sections: sections
    })
  }

  render() {
    const sections = this.state.sections
    return (
      <DocumentTitle title="Blockstack - About">
        <div>
          <div className="container-fluid col-centered navbar-fixed-top bg-primary">
            <Header />
          </div>
          <section className="m-t-5">
            <div className="container p-b-5 col-centered">
              { sections ?
              <div className="row">
                <div className="col-md-4 col-lg-3 sidebar hidden-sm-down">
                { sections.map((section, index) => {
                  return (
                    <div key={index}>
                      <h4>{section.title}</h4>
                      <ul className="nav nav-sidebar docs-ul">
                        <div className="btn-group-vertical docs-btn-group">
                        { section.subSections.map((section, index) => {
                          return (
                            <Link to={section.id} smooth={true} spy={true} offset={-250}
                              className="btn btn-secondary" key={index}>
                              {section.title}
                            </Link>
                          )
                        }) }
                        </div>
                      </ul>
                    </div>
                  )
                }) }
                </div>
                <div className="col-md-8 offset-md-4 col-lg-9 offset-lg-3 bitcoin-protocols-main">
                { sections.map((section, index) => {
                  return (
                    <div key={index}>
                      <h2>{section.title}</h2>
                      <div className="m-b-5">
                      { section.subSections.map((section, index) => {
                        return (
                          <Element name={section.id} className="element" key={index}>
                            <div dangerouslySetInnerHTML={{ __html: section.header + section.body }}>
                            </div>
                          </Element>
                        )
                      })}
                      </div>
                    </div>
                  )
                }) }
                </div>
              </div>
              : null }
            </div>
          </section>
        </div>
      </DocumentTitle>
    )
  }

}

export default DocsPage
