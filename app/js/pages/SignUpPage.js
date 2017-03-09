'use strict'

import { Component }   from 'react'
import { Link }        from 'react-router'
import DocumentTitle   from 'react-document-title'

import Header          from '../components/Header'
import Footer          from '../components/Footer'

class SignUpPage extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <DocumentTitle title="Blockstack newsletter sign-up">
        <div>
          <div className="navbar-fixed-top bg-primary">
            <Header />
          </div>
          <section className="container-fluid spacing-container">
            <div className="container col-centered">
              <div className="container m-b-5">
                <h1>
                  Join the Community
                </h1>
                <section className="sec-light">
                  <Link to="http://eepurl.com/cv8gQ1" role="button" target="_blank"
                    className="btn btn-outline-primary btn-block">
                    Get Updates
                  </Link>
                </section>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </DocumentTitle>
    )
  }

}

export default SignUpPage



