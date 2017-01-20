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
              <section className="special-card">
                <div className="card w-75">
                  <h1>Sign up for Blocsktack newsletter</h1>
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



