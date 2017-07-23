'use strict'

import {Component}         from 'react'
import {Link}              from 'react-router'
import DocumentTitle       from 'react-document-title'

import MailchimpForm       from '../components/MailchimpForm'
import TransparentHeader   from '../components/TransparentHeader'

class TokenSalePage extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const subscribeURL = '//blockstack.us14.list-manage.com/subscribe/post?u=394a2b5cfee9c4b0f7525b009&amp;id=0e5478ae86'

    return (
      <DocumentTitle title="Blockstack - Token Sale">
        <div className="body-hero">
          <div className="col-centered block">
            <TransparentHeader />
            <div className="container">
              <section className="hero">
                <h1 className="hero-head summ-head">The Blockstack Token Sale</h1>
                <p className="lead hero-comm-des">A new internet for decentralized apps</p>
                <div className="row">
                  <div className="col-md-6 offset-md-3 m-t-2 m-b-3">
                    <MailchimpForm subscribeURL={subscribeURL} submitButtonText='Sign Up' />
                  </div>
                </div>
                <p className="text-xs-center m-t-2 m-b-5">
                  <Link to="/whitepaper.pdf" target="_blank" className="btn btn-special btn-lg">
                    Read the Whitepaper
                  </Link>
                </p>
              </section>
            </div>
          </div>
        </div>
      </DocumentTitle>
    )
  }

}

export default TokenSalePage
