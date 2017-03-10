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
              <div className="container m-b-5" style={{ minHeight: '800px' }}>
                <div>
                  <h1>
                    Get Blockstack
                  </h1>
                  <p>
                    <a href={releasesLink} role="button">
                      View the Developer Releases
                   </a>
                  </p>
                </div>
                <section className="sec-light row">
                  <div className="col-md-4">
                    <h4>
                       Mac
                    </h4>
                    <p>
                      <a href="#" role="button"
                        className="btn btn-outline-primary btn-block disabled">
                        Coming Soon
                      </a>
                    </p>
                  </div>
                  <div className="col-md-4">
                    <h4>
                       Windows
                    </h4>
                    <p>
                      <a href="#" role="button"
                        className="btn btn-outline-primary btn-block disabled">
                        Coming Soon
                      </a>
                    </p>
                  </div>
                  <div className="col-md-4">
                    <h4>
                       Linux
                    </h4>
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



