'use strict'

import { Component }   from 'react'
import { Link }        from 'react-router'
import DocumentTitle   from 'react-document-title'

import Image           from '../components/Image'
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
        <div className="site-wrapper body-hero">
          <div className="col-centered block">
            <Header />
            <div className="container">
              <section className="hero">
                <div>
                  <h1 className="hero-head">
                    Build on the New Internet
                  </h1>
                  <p className="lead hero-lead col-md-5 block">
                    Build decentralized, server-less apps where users control their data.
                  </p>
                  <p className="no-padding col-md-12">
                    <Link to="http://eepurl.com/cv8gQ1" role="button" target="_blank"
                      className="btn btn-secondary btn-block">
                      Join the Community
                    </Link>
                    <Link to="/docs" className="btn btn-outline-primary hidden-sm-down">
                      Install the Software
                    </Link>
                  </p>
                </div>
              </section>
            </div>            
          </div>
        </div>
        <Footer />
      </div>
      </DocumentTitle>
    )
  }

}

export default SignUpPage



