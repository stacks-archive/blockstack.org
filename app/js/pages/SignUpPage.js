'use strict'

import { Component }   from 'react'
import DocumentTitle   from 'react-document-title'

import MailchimpForm from '../components/MailchimpForm'

class SignUpPage extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const subscribeURL = '//blockstack.us14.list-manage.com/subscribe/post?u=394a2b5cfee9c4b0f7525b009&amp;id=0e5478ae86'

    return (
      <DocumentTitle title="Blockstack newsletter sign-up">
        <div>
          <section className="container-fluid spacing-container">
            <div className="container col-centered">
              <div className="container m-b-5">
                <section className="sec-light" style={{ minHeight: '600px' }}>
                  <div className="col-md-6 offset-md-3">
                    <h1>
                      Sign Up for Updates
                    </h1>
                    <p>Our browser isn't ready for the public yet but join our mailing list and we'll notify you about upcoming product launches.</p>
                    <MailchimpForm subscribeURL={subscribeURL} submitButtonText='Sign Up' />
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

export default SignUpPage