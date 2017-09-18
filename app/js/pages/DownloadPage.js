'use strict'

import { Component }   from 'react'
import DocumentTitle   from 'react-document-title'
//import { UAParser }    from 'ua-parser-js'

import {installationLinks} from '../config'

class DownloadsPage extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    /*const parser = new UAParser()
    const result = parser.getResult()
    const browserName = result.browser.name
    const osName = result.os.name*/

    return (
      <DocumentTitle title="Install Blockstack">
        <div>
          <section className="container-fluid spacing-container">
            <div className="container col-centered">
              <div className="container m-b-5">
                <section className="sec-light row">
                  <div className="col-md-12">
                    <h1>
                      Install Blockstack
                    </h1>
                    <h3>Browser</h3>
                    <div>
                      <table className="table">
                        <tbody>
                          <tr>
                            <td>Developer alpha</td>
                            <td>
                              <a href={installationLinks.portalDevelopers} role="button"
                                className="btn btn-sm btn-outline-primary btn-block">
                                Releases on GitHub
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>macOS</td>
                            <td>
                              <a href="#" role="button"
                                className="btn btn-sm btn-outline-primary btn-block disabled">
                                Coming Soon
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>Linux</td>
                            <td>
                              <a href="#" role="button"
                                className="btn btn-sm btn-outline-primary btn-block disabled">
                                Coming Soon
                              </a>
                            </td>
                          </tr>
                          <tr style={{ display: 'none' }}>
                            <td>Windows</td>
                            <td>
                              <a href="#" role="button"
                                className="btn btn-sm btn-outline-primary btn-block disabled">
                                Coming Soon
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div>
                      <h3>Core Server + CLI</h3>
                      <p>
                        <a href={installationLinks.cliDevelopers} role="button"
                          className="btn btn-outline-primary btn-block">
                          Instructions on GitHub
                        </a>
                      </p>
                    </div>
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

export default DownloadsPage
