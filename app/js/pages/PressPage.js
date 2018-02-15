'use strict'

import {Component}      from 'react'
import {Link}           from 'react-router'
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
                    <h2 className="m-b-85">
                      Press
                    </h2>
                    <div className="row">

                      <div className="container-fluid m-b-50">
                        <a href="https://www.nytimes.com/2018/01/16/magazine/beyond-the-bitcoin-bubble.html" target="_blank" style={{ color: '#484848' }}>
                          <div className="row">
                            <div className="col-md-4 text-center">
                              <Image className="col3-img-lg m-b-45" style={{ maxWidth: '225px', minWidth: '200px' }}
                                src="/images/logos/new-york-times-logo.svg"
                                fallbackSrc=""
                                retinaSupport={false} />
                            </div>
                            <div className="col-md-8">
                              <div className="row">
                                <h3 className="container text-center left-align" style={{ fontSize: '1.5rem', lineHeight: '1.2' }}>
                                  Beyond the Bitcoin Bubble
                                </h3>
                                <p className="container text-center left-align" style={{ fontSize: '0.9375rem', marginTop: '-10px' }}>
                                  Jan 16, 2018
                                </p>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>


                      <div className="container-fluid m-b-50">
                        <a href="http://www.scmp.com/news/hong-kong/economy/article/2113521/new-internet-looks-keep-user-data-away-tech-giants-and-bypass" target="_blank" style={{ color: '#484848' }}>
                        <div className="row">
                          <div className="col-md-4 text-center">
                            <Image className="col3-img-lg m-b-45" style={{ maxWidth: '330px', paddingRight: '10px' }}
                              src="/images/logos/scmp-logo.svg"
                              fallbackSrc=""
                              retinaSupport={false} />
                          </div>
                          <div className="col-md-8">
                            <div className="row">
                              <h3 className="container text-center left-align" style={{ fontSize: '1.5rem', lineHeight: '1.2' }}>
                                ‘New internet’ looks to keep user data away from tech giants and bypass China censorship
                              </h3>
                              <p className="container text-center left-align" style={{ fontSize: '0.9375rem', marginTop: '-10px' }}>
                                Oct 1, 2017
                              </p>
                            </div>
                          </div>
                        </div>
                        </a>
                      </div>

                      <div className="container-fluid m-b-50">
                        <a href="https://www.forbes.com/sites/laurashin/2017/09/05/blockstack-on-how-to-take-control-from-google-facebook-and-amazon/" target="_blank" style={{ color: '#484848' }}>
                        <div className="row">
                          <div className="col-md-4 text-center">
                            <Image className="col3-img-lg m-b-45" style={{ maxWidth: '225px', minWidth: '0', width: '185px' }}
                              src="/images/logos/forbes-logo.svg"
                              fallbackSrc=""
                              retinaSupport={false} />
                          </div>
                          <div className="col-md-8">
                            <div className="row">
                              <h3 className="container text-center left-align" style={{ fontSize: '1.5rem', lineHeight: '1.2' }}>
                                Blockstack On Getting Independence From Google, Facebook And Amazon
                              </h3>
                              <p className="container text-center left-align" style={{ fontSize: '0.9375rem', marginTop: '-10px' }}>
                                Sep 5, 2017
                              </p>
                            </div>
                          </div>
                        </div>
                        </a>
                      </div>

                      <div className="container-fluid m-b-50">
                        <a href="https://www.wsj.com/articles/blockstack-launches-25-million-fund-for-blockchain-startups-1502883001" target="_blank" style={{ color: '#484848' }}>
                        <div className="row">
                          <div className="col-md-4 text-center">
                            <Image className="col3-img-lg m-b-45" style={{ maxWidth: '225px', minWidth: '0', width: '130px' }}
                              src="/images/logos/wsj-logo-BW.svg"
                              fallbackSrc=""
                              retinaSupport={false} />
                          </div>
                          <div className="col-md-8">
                            <div className="row">
                              <h3 className="container text-center left-align" style={{ fontSize: '1.5rem', lineHeight: '1.2' }}>
                                Blockstack Launches $25 Million Fund for Blockchain Startups
                              </h3>
                              <p className="container text-center left-align" style={{ fontSize: '0.9375rem', marginTop: '-10px' }}>
                                Aug 16, 2017
                              </p>
                            </div>
                          </div>
                        </div>
                        </a>
                      </div>

                      <div className="container-fluid m-b-50">
                        <a href="https://www.coindesk.com/investor-naval-ravikant-wants-disrupt-twitter-blockchain-xprize/" target="_blank" style={{ color: '#484848' }}>
                        <div className="row">
                          <div className="col-md-4 text-center">
                            <Image className="col3-img-lg m-b-45" style={{ maxWidth: '225px', minWidth: '200px' }}
                              src="/images/logos/coindesk-logo.svg"
                              fallbackSrc=""
                              retinaSupport={false} />
                          </div>
                          <div className="col-md-8">
                            <div className="row">
                              <h3 className="container text-center left-align" style={{ fontSize: '1.5rem', lineHeight: '1.2' }}>
                                Investor Naval Ravikant Wants to Disrupt Twitter With Blockchain 'XPRIZE'
                              </h3>
                              <p className="container text-center left-align" style={{ fontSize: '0.9375rem', marginTop: '-10px' }}>
                                Aug 16, 2017
                              </p>
                            </div>
                          </div>
                        </div>
                        </a>
                      </div>

                      <div className="container-fluid m-b-50">
                        <a href="http://observer.com/2017/05/hbo-silicon-valley-blockstack-consensus-2017/" target="_blank" style={{ color: '#484848' }}>
                        <div className="row">
                          <div className="col-md-4 text-center">
                            <Image className="col3-img-lg m-b-45" style={{ maxWidth: '225px', minWidth: '200px' }}
                              src="/images/logos/observer-logo-BW.svg"
                              fallbackSrc=""
                              retinaSupport={false} />
                          </div>
                          <div className="col-md-8">
                            <div className="row">
                              <h3 className="container text-center left-align" style={{ fontSize: '1.5rem', lineHeight: '1.2' }}>
                                Meet the Team Making This Season’s Pied Piper Product on ‘Silicon Valley’ Real
                              </h3>
                              <p className="container text-center left-align" style={{ fontSize: '0.9375rem', marginTop: '-10px' }}>
                                May 24, 2017
                              </p>
                            </div>
                          </div>
                        </div>
                        </a>
                      </div>

                      <div className="container-fluid m-b-50">
                        <a href="https://motherboard.vice.com/en_us/article/this-blockchain-startup-wants-to-end-corporate-dominance-of-the-internet" target="_blank" style={{ color: '#484848' }}>
                        <div className="row">
                          <div className="col-md-4 text-center">
                            <Image className="col3-img-lg m-b-45" style={{ maxWidth: '225px', minWidth: '185px' }}
                              src="/images/logos/vice-logo-bw.svg"
                              fallbackSrc=""
                              retinaSupport={false} />
                          </div>
                          <div className="col-md-8">
                            <div className="row">
                              <h3 className="container text-center left-align" style={{ fontSize: '1.5rem', lineHeight: '1.2' }}>
                                This Blockchain Startup Wants to End Corporate Dominance of the Internet
                              </h3>
                              <p className="container text-center left-align" style={{ fontSize: '0.9375rem', marginTop: '-10px' }}>
                                May 23, 2017
                              </p>
                            </div>
                          </div>
                        </div>
                        </a>
                      </div>

                      <div className="container-fluid m-b-50">
                        <a href="https://www.technologyreview.com/s/603352/one-startups-vision-to-reinvent-the-web-for-better-privacy/" target="_blank" style={{ color: '#484848' }}>
                        <div className="row">
                          <div className="col-md-4 text-center">
                            <Image className="col3-img-lg m-b-45" style={{ maxWidth: '185px', minWidth: '0' }}
                              src="/images/logos/mit-logo-BW.svg"
                              fallbackSrc=""
                              retinaSupport={false} />
                          </div>
                          <div className="col-md-8">
                            <div className="row">
                              <h3 className="container text-center left-align" style={{ fontSize: '1.5rem', lineHeight: '1.2' }}>
                                One Startup’s Vision to Reinvent the Web for Better Privacy
                              </h3>
                              <p className="container text-center left-align" style={{ fontSize: '0.9375rem', marginTop: '-10px' }}>
                                Jan 13, 2017
                              </p>
                            </div>
                          </div>
                        </div>
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

export default PressPage
