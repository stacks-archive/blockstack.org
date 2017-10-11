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
          <div className="container-fluid spacing-container">
            <div className="row">
              <div className="container container-md mx-auto m-b-100 p-b-100 p-t-85">
                <div className="row">
                  <div className="container-fluid">
                    <h2 className="text-center m-b-45">
                      Sign Up for Updates
                    </h2>
                  <div className="container-fluid">
                    <p>Join our mailing list to stay up to date with the Blockstack community. You'll hear about product launches, upcoming events, newly released applications and more.</p>
                    <MailchimpForm subscribeURL={subscribeURL} submitButtonText='Sign Up' />
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DocumentTitle>
    )
  }

}

export default SignUpPage