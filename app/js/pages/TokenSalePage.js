'use strict'

import {Component}      from 'react'
import {Link}           from 'react-router'
import DocumentTitle    from 'react-document-title'

import MailchimpForm from '../components/MailchimpForm'

class TokenSalePage extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const subscribeURL = '//blockstack.us14.list-manage.com/subscribe/post?u=394a2b5cfee9c4b0f7525b009&amp;id=0e5478ae86'

    return (
      <DocumentTitle title="Blockstack - Token Sale">
        <div>
          <div className="container-fluid col-centered summit-head-wrap">
            <div className="p-t-3 p-b-3" style={{
              color: 'white',
              position: 'relative',
              marginTop: '0px !important',
              height: '500px'
            }}>
              <section>
                <div>
                  <div className="col-xs-11 col-sm-10 col-centered">
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
                  </div>
                  <div className="img"></div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </DocumentTitle>
    )
  }

}

export default TokenSalePage
