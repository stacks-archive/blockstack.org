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
                <Image className="stacks-logo-sm m-t-90 m-b-55"
                        src="/images/logos/stacks-logo.svg"
                        retinaSupport={false} />
                <h1 className="text-white">The Blockstack Token Sale</h1>
                <p className="hero-lead purple-50">Sign up to receive important information about the token sale</p>
                <div className="row">
                  <div className="col-md-9 col-centered m-t-2 m-b-3">
                    <DarkForm subscribeURL={subscribeURL} submitButtonText='Sign Up' />
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
