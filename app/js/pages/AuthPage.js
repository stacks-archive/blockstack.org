'use strict'

import { Component }   from 'react'
import { Link }        from 'react-router'
import DocumentTitle   from 'react-document-title'
import { decodeToken } from 'jsontokens'
import { makeAuthResponse, makeECPrivateKey, Person } from 'blockstack'
import queryString from 'query-string'

import Header          from '../components/Header'
import Footer          from '../components/Footer'

class AuthPage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      authRequest: null,
      appURI: null
    }

    this.signIn = this.signIn.bind(this)
    this.getAuthRequest = this.getAuthRequest.bind(this)
  }

  componentWillMount() {
    this.getAuthRequest()    
  }

  getAuthRequest() {
    const queryDict = queryString.parse(location.search)
    const BLOCKSTACK_HANDLER = "web+blockstack"

    if (queryDict.authRequest) {
      const authRequest = queryDict.authRequest.split(BLOCKSTACK_HANDLER + ":").join("")
      const requestPayload = decodeToken(authRequest).payload
      const appManifest = requestPayload.appManifest
      const appURI = appManifest.start_url

      this.setState({
        authRequest: authRequest,
        appURI: appURI
      })
    } else {
      // Do nothing      
    }
  }

  signIn() {
    const privateKey = makeECPrivateKey()
    const profile = new Person().profile()
    const authResponse = makeAuthResponse(privateKey, profile)
    window.location = this.state.appURI + '?authResponse=' + authResponse
  }

  render() {
    return (
      <DocumentTitle title="Sign In with Blockstack">
        <div>
          <div className="navbar-fixed-top bg-primary">
            <Header />
          </div>
          <section className="container-fluid spacing-container">
            <div className="container col-centered">
              <div className="container m-b-5" style={{ minHeight: '800px' }}>
                <h1>
                  Sign in with Blockstack
                </h1>
                <div>
                  <h4>
                    You're here because you clicked "Sign in with
                    Blockstack" and you don't have the Blockstack app.
                  </h4>
                  <p>
                    <Link to="/download" className="btn btn-outline-primary">
                      Download Blockstack
                    </Link>
                  </p>
                  
                  <p><i>
                    Note: If you already have Blockstack,
                    go to your settings page in the app and
                    enable the auth protocol handler,
                    then go to the app and try signing in again.
                  </i></p>
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </DocumentTitle>
    )
  }

}

export default AuthPage

/*
<h4>
  - or -
</h4>
<p>
  <Link className="btn btn-outline-primary" disabled>
    Quick Sign In
  </Link>
</p>



<p>
  <input className="form-control" value={this.state.portalUrl}
    onChange={this.onInputChange} />
</p>

<p>
  2. Click below to forward the auth request to your Blockstack App:
</p>

<p>
  <a href={`${this.state.portalUrl}/auth?authRequest=${this.state.authRequest}`}
    className="btn btn-outline-primary">
    Go to Blockstack App
  </a>
</p>


:
<div>
  <p>
    You were sent here with an invalid request.
    To get started with Blockstack, download the app.
  </p>
  <Link to="/download" className="btn btn-outline-primary">
    Downloads
  </Link>
</div>
}
*/