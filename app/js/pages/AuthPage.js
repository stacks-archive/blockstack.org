'use strict'

import { Component }   from 'react'
import { Link }        from 'react-router'
import DocumentTitle   from 'react-document-title'
import { decodeToken, SECP256K1Client, TokenSigner } from 'jsontokens'
import {
  makeAuthResponse, makeECPrivateKey, Person,
  getAuthRequestFromURL, redirectUserToApp, fetchAppManifest,
  publicKeyToAddress, makeDIDFromAddress, makeUUID4, nextMonth
} from 'blockstack'
import queryString from 'query-string'
import { ECPair, address as baddress, crypto as bcrypto } from 'bitcoinjs-lib'

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
    const authRequest = getAuthRequestFromURL()
    this.setState({
      authRequest: authRequest
    })

    /*
    fetchAppManifest(authRequest).then(appManifest => {

    }).catch((e) => {
      console.log(e.stack)
    })*/
  }

  signIn() {
    const privateKey = makeECPrivateKey()
    const profile = {
      '@type': 'Person',
      'name': 'Anonymous',
      'image': [
        {
          '@type': 'ImageObject',
          'name': 'avatar',
          'contentUrl': 'https://s3.amazonaws.com/onename/avatar-placeholder.png'
        }
      ]
    }
    const publicKey = SECP256K1Client.derivePublicKey(privateKey)
    const publicKeyBuffer = new Buffer(publicKey, 'hex')
    const address = baddress.toBase58Check(bcrypto.hash160(publicKeyBuffer), 0x00)
    const payload = {
      jti: makeUUID4(),
      iat: Math.floor(new Date().getTime()/1000), // JWT times are in seconds
      exp: Math.floor(nextMonth().getTime()/1000), // JWT times are in seconds
      iss: makeDIDFromAddress(address),
      public_keys: [publicKey],
      profile: profile,
      username: null
    }
    const tokenSigner = new TokenSigner('ES256k', privateKey)
    const authResponse = tokenSigner.sign(payload)
    redirectUserToApp(this.state.authRequest, authResponse)
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
                  <h4>
                    - or -
                  </h4>
                  <p>
                    <Link className="btn btn-outline-primary"
                          onClick={this.signIn}>
                      Quick Sign In
                    </Link>
                  </p>
                  
                  <p><i>
                    Note: If you already have Blockstack,
                    go to your settings page in Blockstack and
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