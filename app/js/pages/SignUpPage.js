'use strict'

import { Component }   from 'react'
import { Link }        from 'react-router'
import DocumentTitle   from 'react-document-title'

import Header          from '../components/Header'
import Footer          from '../components/Footer'

class SignUpPage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      email: ''
    }

    this.onChange = this.onChange.bind(this)
  }

  onChange(event) {
    this.setState({
      email: event.target.value
    })
  }

  render() {
    const subscribeURL = "https://blockstack.us14.list-manage.com/subscribe/post?u=394a2b5cfee9c4b0f7525b009&amp;id=0e5478ae86"

    return (
      <DocumentTitle title="Join Blockstack">
        <div>
          <div className="navbar-fixed-top bg-primary">
            <Header />
          </div>
          <section className="container-fluid spacing-container">
            <div className="container col-centered">
              <div className="container m-b-5">
                <section className="sec-light" style={{ minHeight: '800px' }}>

                  <div className="row">
                    <div className="col-md-6 offset-md-3">
                      <h1>
                        Join the Community
                      </h1>
                      <div id="mc_embed_signup">
                        <form action={subscribeURL} method="post"
                              id="mc-embedded-subscribe-form"
                              name="mc-embedded-subscribe-form"
                              className="validate" target="_blank" noValidate>
                          <div id="mc_embed_signup_scroll">
                            <div className="mc-field-group" style={{ marginBottom: '10px' }}>
                              <label htmlFor="mce-EMAIL" style={{ display: 'none' }}>Email Address </label>
                              <input type="email" value={this.state.email} name="EMAIL"
                                className="form-control required email"
                                id="mce-EMAIL" placeholder="Email address"
                                onChange={this.onChange} />
                            </div>
                            <div id="mce-responses" className="clear">
                              <div className="response" id="mce-error-response"
                                style={{ display: 'none' }}></div>
                              <div className="response" id="mce-success-response"
                                style={{ display: 'none' }}></div>
                            </div>
                            <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                              <input type="text" name="b_394a2b5cfee9c4b0f7525b009_0e5478ae86" tabIndex="-1" value="" />
                            </div>
                            <div className="clear">
                              <input type="submit" value="Get Updates"
                                name="subscribe" id="mc-embedded-subscribe"
                                className="btn btn-outline-primary btn-block" />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>

                </section>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </DocumentTitle>
    )
  }

}

export default SignUpPage

/*
                  <Link to="http://eepurl.com/cv8gQ1" role="button" target="_blank"
                    className="btn btn-outline-primary btn-block">
                    Get Updates
                  </Link>
*/