'use strict'

import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'

export default class DappRequestPage extends Component {
  render() {
    return (
      <DocumentTitle title="Blockstack - Request for Dapps">
        <div className="m-t-100 m-b-100">

          <section>
            <div className="container col-centered">
              <div className="container">
                <div className="row mb-5">
                  <div className="col-lg-7">
                    <h1>
                      Requests for Dapps
                    </h1>
                    <p>
                      There is no doubt some of the best dapps that will be created are ones that we can’t even imagine today.
                    </p>
                    <p>
                      That said, we’re very interested in the following dapps built using Blockstack. Below is a Request for Dapps, which outlines some of those ideas in general terms.
                    </p>
                    <p>
                      Please don’t feel that you need to work on one of these ideas just because we listed them. This list mostly exists to encourage you to apply if you’re already working on an idea in one of these areas.
                    </p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-9 col-md-8 order-12 order-md-1">
                    <div className="mb-4">
                      <section className="dapp-request-category mb-5">
                        <h3 id="personal-data-privacy">Personal Data Privacy</h3>
                        <p></p>
                        <ul className="pb-4">
                          <li>Private photos</li>
                          <li>Private email</li>
                          <li>Private chat</li>
                          <li>Private calendar</li>
                          <li>Private finance management</li>
                          <li>Private cryptocurrency taxes</li>
                        </ul>
                      </section>
                      <section className="dapp-request-category mb-5">
                        <h3 id="secure-collaboration">Secure Collaboration</h3>
                        <p></p>
                        <ul className="pb-4">
                          <li>Multi-user cryptocurrency wallet</li>
                          <li>Password manager</li>
                          <li>Document signing</li>
                          <li>Spreadsheets</li>
                          <li>Project management</li>
                        </ul>
                      </section>
                      <section className="dapp-request-category mb-5">
                        <h3 id="crypto-commerce">Crypto Commerce</h3>
                        <p></p>
                        <ul className="pb-4">
                          <li>Pay-to-subscribe as a patron</li>
                          <li>Pay-to-access photos, videos, audio and text</li>
                          <li>Pay-to-freelance</li>
                          <li>Pay-to-chat by the minute</li>
                          <li>Pay-to-exchange domains & digital assets</li>
                          <li>Pay-to-receive event tickets</li>
                          <li>Receive money for survey completion</li>
                          <li>Receive money for tweeting, blogging and research</li>
                          <li>Decentralized marketplace for physical goods</li>
                          <li> Decentralized ride-sharing</li>
                          <li> Decentralized home-sharing</li>
                          <li> Decentralized real estate marketplace</li>
                        </ul>
                      </section>
                      <section className="dapp-request-category mb-5">
                        <h3 id="crypto-governance">Crypto Governance</h3>
                        <p></p>
                        <ul className="pb-4">
                          <li>Voting systems for clubs and non-governmental organizations</li>
                          <li>Multi-party fund management</li>
                          <li>Multi-party cap table management</li>
                          <li>Multi-party constitution & official document management</li>
                          <li>Voting systems for small governments</li>
                        </ul>
                      </section>
                      <section className="dapp-request-category mb-5">
                        <h3 id="social-networks">Social Networks</h3>
                        <p></p>
                        <ul className="pb-4">
                          <li>Photosharing</li>
                          <li>Microblogging</li>
                          <li>Chat groups</li>
                          <li>Blogging</li>
                          <li>Video publishing</li>
                          <li>Browser extension social network</li>
                          <li>Decentralized encyclopedia</li>
                        </ul>
                      </section>
                      <section className="dapp-request-category mb-5">
                        <h3 id="developer-tools">Developer Tools</h3>
                        <p></p>
                        <ul className="pb-4">
                          <li>DAPP directory</li>
                          <li>DAPP metrics board</li>
                          <li>DAPP authenticator</li>
                          <li>DAPP name exchange</li>
                          <li>Payments for merged pull requests</li>
                          <li>Decentralized software hosting</li>
                          <li>Decentralized package managers</li>
                          <li>Decentralized server access provisioning</li>
                        </ul>
                      </section>
                      <section className="dapp-request-category mb-5">
                        <h3 id="digital-asset-games">Digital Asset Games</h3>
                        <p></p>
                        <ul className="pb-4">
                          <li>Digital land</li>
                          <li>Trading card games</li>
                          <li>Virtual pet games</li>
                          <li>Attribute-based fighting and racing games</li>
                        </ul>
                      </section>
                      <section className="dapp-request-category mb-5">
                        <h3 id="data-portability">Data Portability</h3>
                        <p></p>
                        <ul className="pb-4">
                          <li>Personal search engine</li>
                          <li>Shopping personalization system</li>
                          <li>Personal social network archiver</li>
                          <li>Personal reputation bank</li>
                        </ul>
                      </section>
                      <section className="dapp-request-category mb-5">
                        <h3 id="data-liability-protection">Data Liability Protection</h3>
                        <p></p>
                        <ul className="pb-4">
                          <li>Businesses subject to General Data Protection Regulation</li>
                          <li>Consumer-owned medical records</li>
                          <li>Apps that hold credit card info, SSNs, historical locations, etc.</li>
                          <li>Apps that hold medical data</li>
                        </ul>
                      </section>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 order-1 order-md-4 order-lg-3">
                    <div className="py-3 sticky">
                      <h4>Contents</h4>
                      <ol className="pl-3">
                        <li><a href="#personal-data-privacy">Personal Data Privacy</a></li>
                        <li><a href="#secure-collaboration">Secure Collaboration</a></li>
                        <li><a href="#crypto-commerce">Crypto Commerce</a></li>
                        <li><a href="#crypto-governance">Crypto Governance</a></li>
                        <li><a href="#social-networks">Social Networks</a></li>
                        <li><a href="#developer-tools">Developer Tools</a></li>
                        <li><a href="#digital-asset-games">Digital Asset Games</a></li>
                        <li><a href="#data-portability">Data Portability</a></li>
                        <li><a href="#data-liability-protection">Data Liability Protection</a></li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </DocumentTitle>
    )
  }
}
