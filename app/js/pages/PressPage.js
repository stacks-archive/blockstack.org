'use strict'

import {Component}      from 'react'
import DocumentTitle    from 'react-document-title'

import Image            from '../components/Image'
import PressItem        from '../components/PressItem'
import {press}          from '../../constants.json'

class PressPage extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <DocumentTitle title="Blockstack - Press">
        <div>
          <div className="container sectionWrap bg-white m-b-100">
            <div className="row">
              <div className="container">
                <div className="row">
                  <div className="container">
                    <h2 className="m-b-45">
                      Press
                    </h2>
                    <div className="row">
                      <div className="container-fluid">
                        <div className="row">
                          <div className="col-md-4">
                            <Image className="col3-img-lg"
                              src="/images/logos/new-york-times-logo.svg" style={{ marginTop: '15px' }}
                              fallbackSrc="/images/logos/new-york-times-logo.svg"
                              retinaSupport={false} />
                          </div>
                          <div className="col-md-8">
                            <div className="row">
                              <h4 className="container">
                                Beyond the Bitcoin Bubble
                              </h4>
                              <p className="container">
                                Jan 16, 2018
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="container-fluid">
                        <div className="row">
                          <div className="col-md-4">
                            <Image className="col3-img-lg"
                              src="/images/logos/new-york-times-logo.svg" style={{ marginTop: '15px' }}
                              fallbackSrc="/images/logos/new-york-times-logo.svg"
                              retinaSupport={false} />
                          </div>
                          <div className="col-md-8">
                            <div className="row">
                              <h4 className="container">
                                Beyond the Bitcoin Bubble
                              </h4>
                              <p className="container">
                                Jan 16, 2018
                              </p>
                            </div>
                          </div>
                        </div>
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

export default PressPage
