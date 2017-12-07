'use strict'

import { Component }   from 'react'
import DocumentTitle   from 'react-document-title'
import { Link }        from 'react-router'
import marked          from 'marked'

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

  disableBodyScroll() {
    document.body.style.overflow = 'hidden';
  }

  enableBodyScroll() {
    document.body.style.overflow = 'auto';
  }

  setPage() {
    const sections = [
      {
        title: 'Blockstack Browser',
        pageNames: ['browser-installation']
      },
      {
        title: 'Blockstack CLI',
        pageNames: ['cli-installation', 'cli-basic-usage', 'cli-extended-usage'],
      },
      {
        title: 'Blockstack Explorer',
        pageNames: ['explorer-installation']
      }
    ]

    sections.forEach((section) => {
      let markup = ''
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
      <DocumentTitle title="Blockstack - Docs">
        { sections ?
        <div className="content-wrapper">
          <div className='sidebar-wrapper'>
            <aside onMouseEnter={this.disableBodyScroll} onMouseLeave={this.enableBodyScroll}>
              <div className="sidebar-header">
                <Link className="navbar-brand" to="/">
                  blockstack
                </Link>
                <Link className="tagline" to="/docs">docs</Link>
              </div>
              <div className="sidebar-links">
                <Link to="/">
                  Home
                </Link>
              </div>
              <div className="sidebar-links">
                <Link to="/tutorials">
                  › &nbsp;Tutorials
                </Link>
              </div>
              <div className="sidebar-links">
                <Link to="/videos">
                  › &nbsp;Videos
                </Link>
              </div>
              <div className="sidebar-links">
                <Link to="/papers">
                  › &nbsp;Papers
                </Link>
              </div>
              <div className="sidebar-links">
                <Link to="https://core.blockstack.org/" target="_blank">
                  › &nbsp;Core API
                </Link>
              </div>
              <div className="sidebar-links">
                <Link to="http://blockstack.github.io/blockstack.js/" target="_blank">
                  › &nbsp;blockstack.js
                </Link>
              </div>
              <div className="list-group">
                { sections.map((section, index) => {
                  return (
                    <div key={index}>
                      <h5 className="list-group-header list-group-header-d-sidebar">{section.title}</h5>
                      { section.subSections.map((section, index) => {
                        return (
                          <Link key={index}
                                href={`/docs/#${section.id}`}
                                className="list-group-item list-group-item-d">
                            {section.title}
                          </Link>
                        )
                      }) }
                    </div>
                  )
                })}
              </div>
            </aside>
          </div>
          <div className="sidebar-content-wrapper">
            <section>
              { sections.map((section) => {
                return section.subSections.map((section, index) => {
                        return (
                          <div key={index} id={`${section.id}`}
                               className="container-fluid col-centered segment-zone">
                            <h4>{section.title}</h4>
                            <div dangerouslySetInnerHTML={{
                              __html: section.body
                            }}></div>
                          </div>
                        )
                      })
              }) }
            </section>
          </div>
        </div> : null }
      </DocumentTitle>
    )
  }

}

export default DocsPage
