'use strict'

import { Component }   from 'react'
import DocumentTitle   from 'react-document-title'

import MailchimpForm from '../components/MailchimpForm'

class DevSignUpPage extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const subscribeURL = '//blockstack.us14.list-manage.com/subscribe/post?u=394a2b5cfee9c4b0f7525b009&id=696cc92791'

    return (
      <DocumentTitle title="Blockstack newsletter sign-up">
        <div>
          <section className="container-fluid spacing-container">
            <div className="container col-centered">
              <div className="container m-b-5">
                <section className="sec-light" style={{ minHeight: '600px' }}>
                  <div className="col-md-6 offset-md-3">
                    <h1>
                      Developer Sign Up
                    </h1>
                    <MailchimpForm subscribeURL={subscribeURL} />
                  </div>
                </section>
              </div>
            </div>
          </section>
        </div>
      </DocumentTitle>
    )
  }

}

export default DevSignUpPage