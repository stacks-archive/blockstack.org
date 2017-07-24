'use strict'

import {Component}         from 'react'
import {Link}              from 'react-router'
import DocumentTitle       from 'react-document-title'

import DarkForm            from '../components/DarkForm'
import TransparentHeader   from '../components/TransparentHeader'
import Image               from '../components/Image'

class TokenSalePage extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const subscribeURL = '//blockstack.us14.list-manage.com/subscribe/post?u=394a2b5cfee9c4b0f7525b009&amp;id=0e5478ae86'

    return (
      <DocumentTitle title="Blockstack - Token Sale">
        <div className="token-hero">
          <div className="col-centered block">
            <TransparentHeader />
            <div className="container">
              <section className="text-xs-center">
                <Image className="stacks-logo-sm m-t-85 m-b-55"
                        src="/images/logos/stacks-logo.svg"
                        retinaSupport={false} />
                <h1 className="text-white m-b-20">The Blockstack Token Sale</h1>
                <p className="hero-lead purple-50">Sign up to receive important information about the token sale</p>
                <div className="row">
                  <div className="col-md-9 col-centered m-t-2 m-b-3">
                    <DarkForm subscribeURL={subscribeURL} submitButtonText='Sign Up' />
                  </div>
                </div>
                <p className="text-xs-center m-t-2 m-b-150">
                  <Link to="/whitepaper.pdf" target="_blank" className="btn btn-outline-primary" 
                  style={{ color: '#95889c' }}>
                    Read the Whitepaper
                  </Link>
                </p>
              </section>
            </div>
            <div className="section-stats container-fluid">
              <div className="container">
                <section>
                  <div className="no-padding col-sm-12 col-md-4 text-center text-stats">
                    73,191 
                    <span className="text-stats-description">users registered</span>
                  </div>
                  <div className="no-padding col-sm-12 col-md-4 text-center text-stats">
                    3+ years
                    <span className="text-stats-description">In production</span>
                  </div>
                  <div className="no-padding col-sm-12 col-md-4 text-center text-stats">
                    6,574 
                    <span className="text-stats-description">community devs</span>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </DocumentTitle>
    )
  }

}

export default TokenSalePage
