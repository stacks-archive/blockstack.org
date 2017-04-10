'use strict'

import { Component }   from 'react'
import { Link }        from 'react-router'
import DocumentTitle   from 'react-document-title'
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
    let markdown = docs['faq'].markdown
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
          <div className="navbar-fixed-top bg-primary">
            <Header />
          </div>
          <section className="container-fluid spacing-container">
            <div className="container-fluid col-centered">
              <div className="container m-b-1">
                <div className="row m-t-30">
                  <div className="col-md-12">
                    <h1>Frequently Asked Questions</h1>
                  </div>
                </div>
                { questions.map((faq, index) => {
                  return (
                    <div key={ index } className="row m-b-1">
                      <div className="col-md-12">
                        <h3>{ faq.question }</h3>
                        <div dangerouslySetInnerHTML={{ __html: faq.answer }}>
                        </div>
                      </div>
                    </div>
                  )
                }) }
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </DocumentTitle>
    );
  }

}

export default FAQpage
