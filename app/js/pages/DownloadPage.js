'use strict'

import { Component }   from 'react'
import { Link }        from 'react-router'
import DocumentTitle   from 'react-document-title'
import { UAParser }    from 'ua-parser-js'

import Header          from '../components/Header'
import Footer          from '../components/Footer'

class DownloadsPage extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const parser = new UAParser()
    const result = parser.getResult()
    const browserName = result.browser.name
    const osName = result.os.name
    const macDownloadLink = "https://github.com/blockstack/blockstack-portal/releases/download/v0.4.0/Blockstack-v0.4.app.zip"
    const releasesLink = "https://github.com/blockstack/blockstack-portal/releases"

    return (
      <DocumentTitle title="Blockstack newsletter sign-up">
        <div>
          <div className="navbar-fixed-top bg-primary">
            <Header />
          </div>
          <section className="container-fluid spacing-container">
            <div className="container col-centered">
              <div className="container m-b-5">
                <section className="sec-light row">
                  <div className="col-md-12">
                    <h1>
                      Downloads
                    </h1>
                    <p>Get the Blockstack browser add-on to access the decentralized internet.</p>
                    <h3>For Developers</h3>
                    <p>
                      <a href={releasesLink} role="button"
                        className="btn btn-outline-primary btn-block">
                        Try on GitHub
                      </a>
                    </p>
                    <h3>For Consumers</h3>
                  </div>
                </section>
                <section className="sec-light row">
                  <div className="col-md-4">
                    <h5>
                       Mac
                    </h5>
                    <p>
                      <a href={macDownloadLink} role="button"
                        className="btn btn-outline-primary btn-block disabled">
                        Coming Soon
                      </a>
                    </p>
                  </div>
                  <div className="col-md-4">
                    <h5>
                       Windows
                    </h5>
                    <p>
                      <a href="#" role="button"
                        className="btn btn-outline-primary btn-block disabled">
                        Coming Soon
                      </a>
                    </p>
                  </div>
                  <div className="col-md-4">
                    <h5>
                       Linux
                    </h5>
                    <p>
                      <a href="#" role="button"
                        className="btn btn-outline-primary btn-block disabled">
                        Coming Soon
                      </a>
                    </p>
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

export default DownloadsPage
