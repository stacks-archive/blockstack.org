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

    return (
      <DocumentTitle title="Blockstack newsletter sign-up">
        <div>
          <div className="navbar-fixed-top bg-primary">
            <Header />
          </div>
          <section className="container-fluid spacing-container">
            <div className="container col-centered">
              <div className="container m-b-5">
                <h1>
                  Get Blockstack
                </h1>
                <section className="sec-light">
                  <div>
                    <h3>
                       Mac
                    </h3>
                    <a href={macDownloadLink} role="button"
                      className="btn btn-outline-primary btn-block">
                      Download
                    </a>
                  </div>
                  <div>
                    <h3>
                       Windows
                    </h3>
                    <a href="#" role="button"
                      className="btn btn-outline-primary-outline btn-block disabled">
                      Coming Soon
                    </a>
                  </div>
                  <div>
                    <h3>
                       Linux
                    </h3>
                    <a href="#" role="button"
                      className="btn btn-outline-primary-outline btn-block disabled">
                      Coming Soon
                    </a>
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



