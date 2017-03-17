'use strict'

import { Component }   from 'react'
// import { Link }        from 'react-router'
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
  }

  render () {

    return(
      <DocumentTitle title="Blockstack - FAQ">
        <div>
          <div className="navbar-fixed-top bg-primary">
            <Header />
          </div>
          <section className="container-fluid spacing-container">
            <div className="container-fluid col-centered">
              <div className="container m-b-1">
                <h1>Frequently Asked Questions</h1>
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
