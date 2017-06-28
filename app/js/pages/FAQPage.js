'use strict'

import { Component }   from 'react'
import DocumentTitle   from 'react-document-title'
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

class FAQpage extends Component {

  constructor (props) {
    super(props)

    this.state = {
      questions: null
    }

    this.setQuestions = this.setQuestions.bind(this)
  }

  componentWillMount() {
    this.setQuestions()
  }

  setQuestions() {
    let questions = []
    let markdown = docs['faqs'].markdown
    let markdownParts = markdown.split(/### (.*)/g)
    markdownParts.splice(0, 1)

    for (let i = 0; i < markdownParts.length; i += 2) {
      questions.push({
        question: markdownParts[i],
        answer: marked(markdownParts[i+1]),
      })
    }

    this.setState({
      questions
    })
  }

  render () {
    const { questions } = this.state

    return(
      <DocumentTitle title="Blockstack - FAQ">
        <div>
          <section className="container-fluid spacing-container">
            <div className="container-fluid col-centered">
              <div className="container m-b-1">
                <div>
                  <h1>Frequently Asked Questions</h1>
                </div>
                { questions.map((faq, index) => {
                  return (
                    <div key={ index }>
                      <h4>{ faq.question }</h4>
                      <div dangerouslySetInnerHTML={{ __html: faq.answer }}>
                      </div>
                    </div>
                  )
                }) }
              </div>
            </div>
          </section>
        </div>
      </DocumentTitle>
    );
  }

}

export default FAQpage
