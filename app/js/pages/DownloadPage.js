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
          <div className="container container-lg sectionWrap blog-post bg-white">
              <div className="container container-lg">
                <div className="row">
                  <div className="container">
                    <div className="row">
                      <h2 className="m-b-35">
                        Install Blockstack
                      </h2>
                    </div>
                  </div>
                  <div className="container container-md container-box bg-white ml-0 m-b-50">
                    <div className="container">
                      <div className="row">
                        <h4 className="m-b-35">
                          Browser
                        </h4>
                        <div className="container mx-auto">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="row">
                                <p className="lead-lg d-sm-block m-b-10">
                                  macOS
                                </p>
                              </div>
                            </div>
                            <div className="col-md-6 m-b-15">
                              <div className="row">
                                <a href={installationLinks.portalDevelopersMacOS} role="button"
                                  className="btn btn-secondary btn-block">
                                  Download
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="container mx-auto">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="row">
                                <p className="lead-lg d-sm-block m-b-10">
                                  Windows
                                </p>
                              </div>
                            </div>
                            <div className="col-md-6 m-b-15">
                              <div className="row">
                                 <a href={installationLinks.portalDevelopersWindows} role="button"
                                  className="btn btn-secondary btn-block">
                                  Download
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="container mx-auto">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="row">
                                <p className="lead-lg d-sm-block m-b-10">
                                  Linux
                                </p>
                              </div>
                            </div>
                            <div className="col-md-6 m-b-15">
                              <div className="row">
                                <a href={installationLinks.portalDevelopersLinux} role="button"
                                 className="btn btn-secondary btn-block">
                                 Download
                               </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="container m-b-50">
                    <div className="row">
                      <h4 className="">
                        Run a Full Node
                      </h4>
                      <div className="container mx-auto">
                        <div className="row">
                          <a href={installationLinks.cliDevelopers} role="button"
                            className="btn btn-secondary btn-block">
                            Instructions on GitHub
                          </a>
                        </div>
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

export default DownloadsPage

/*
                    <div>
                      <h3>Core Server + CLI</h3>
                      <p>
                        <a href={installationLinks.cliDevelopers} role="button"
                          className="btn btn-secondary btn-block">
                          Instructions on GitHub
                        </a>
                      </p>
                    </div>
*/
