'use strict'

import { Component } from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'
import marked from 'marked'

import docs from '../../docs.json'

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
})

class FAQpage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      questions: null,
    }

    this.setQuestions = this.setQuestions.bind(this)
  }

  componentWillMount() {
    this.setQuestions()
  }

  disableBodyScroll() {
    document.body.style.overflow = 'hidden'
  }

  enableBodyScroll() {
    document.body.style.overflow = 'auto'
  }

  setQuestions() {
    let questions = []
    let markdown = docs['faqs'].markdown
    let markdownParts = markdown.split(/### (.*)/g)
    markdownParts.splice(0, 1)

    for (let i = 0; i < markdownParts.length; i += 2) {
      questions.push({
        question: markdownParts[i],
        answer: marked(markdownParts[i + 1]),
      })
    }

    this.setState({ questions })
  }

  render() {
    const { questions } = this.state

    return (
      <DocumentTitle title="Blockstack - FAQ ">
        <div className="content-wrapper">
          <div className="sidebar-wrapper">
            <aside
              onMouseEnter={this.disableBodyScroll}
              onMouseLeave={this.enableBodyScroll}
            >
              <div className="sidebar-header">
                <Link className="navbar-brand" to="/">
                  blockstack
                </Link>
                <Link className="tagline" to="/faq">
                  faq
                </Link>
              </div>
              <div className="sidebar-links">
                <Link to="/">Home</Link>
              </div>
              <div className="list-group">
                <h5 className="list-group-header list-group-header-d-sidebar">
                  Frequently Asked Questions
                </h5>
                {questions.map((faq, index) => {
                  const refLink = faq.question
                    .toLowerCase()
                    .split(' ')
                    .join('_')
                  return index < 5 ? (
                    <Link
                      key={index}
                      href={`/faq/#${refLink}`}
                      className="list-group-item list-group-item-d"
                    >
                      {faq.question}
                    </Link>
                  ) : null
                })}
                <h5 className="list-group-header list-group-header-d-sidebar">
                  For Developers
                </h5>
                <h5 className="list-group-header list-group-header-d-sidebar">
                  For Users
                </h5>
                <h5 className="list-group-header list-group-header-d-sidebar">
                  Misc
                </h5>
              </div>
            </aside>
          </div>
          <div className="sidebar-content-wrapper">
            <section>
              {questions.map((faq, index) => {
                const refLink = faq.question
                  .toLowerCase()
                  .split(' ')
                  .join('_')
                return (
                  <div
                    key={index}
                    id={`${refLink}`}
                    className="container-fluid col-centered segment-zone"
                  >
                    <h4>{faq.question}</h4>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: faq.answer,
                      }}
                    />
                  </div>
                )
              })}
            </section>
          </div>
        </div>
      </DocumentTitle>
    )
  }
}

export default FAQpage
