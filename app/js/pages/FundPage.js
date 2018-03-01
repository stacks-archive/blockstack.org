'use strict'

import { Component } from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'
import Image from '../components/Image'
import Header from '../components/Header'
import EmbedYouTube from '../components/EmbedYouTube'


class FundPage extends Component {
  render() {
    return (
      <DocumentTitle title="Blockstack Funding">
        <div>
          <section className="jumbotron jumbotron-fluid text-center">
            <div className="container">
              <h1 className="page-heading mx-auto">
                Funding
              </h1>
              <p style={{ maxWidth: '410px' }} className="mb-5 mx-auto">
                Funding is aimed at growing an ecosystem of decentralized applications on Blockstack
              </p>

              <div className="p-b-50 p-t-30">
                <div className="row">
                  <div className="col-md-6">
                    <h2>dApp creators</h2>
                    <p style={{minHeight: '50px', maxWidth: '350px', margin: '0 auto 20px'}}>
                      Get funded to build on dApps on the decentralized internet.
                    </p>
                    <Link to="/about" className="btn btn-primary">Apply for funding</Link>
                  </div>
                  <div className="col-md-6">
                    <h2>dApp funders</h2>
                    <p style={{ minHeight: '50px', maxWidth: '350px', margin: '0 auto 20px' }}>
                      Accelerate the next generation of dApps as an investor by qualifying yourself here.
                    </p>
                    <Link to="/about" className="btn btn-primary">Apply to fund</Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="container-fluid p-t-50 bg-white">
            <div className="container">
              <h2 className="text-center">Request for dApps</h2>
              <div className="row">
                <div className="col-md-4">
                  <ul className="list-unstyled">
                    <li>Decentralized Facebook</li>
                    <li>Decentralized Twitter</li>
                    <li>Decentralized patron support platform</li>
                    <li>Multi-coin wallet</li>
                    <li>Crypto tax app</li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul className="list-unstyled">
                    <li>Password manager</li>
                    <li>Photo-sharing</li>
                    <li>Encrypted email</li>
                    <li>Digital marketplace for goods</li>
                    <li>Domain name exchange</li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul className="list-unstyled">
                    <li>Blogging app</li>
                    <li>Pay-to-tweet platform</li>
                    <li>Pay-per-survey platform</li>
                    <li>Meetup attendance platform</li>
                    <li>Coin operated file viewer</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid sectionWrap bg-white">
            <div className="row">
              <div className="container container-md">
                <p className="lead-lg">
                  Terms &amp; Conditions
                </p>
                <p className="terms-sm">
                  Thank you for your interest in Signature Fund. By submitting any information or materials to Blockstack regarding the Signature Fund program and application process (the "Program"), you (and the entity or business you represent) (collectively, "you") agree to be bound by the following terms:
                  </p>
                <p className="terms-sm">
                  <ul>
                    <li>
                      You acknowledge and agree that Blockstack will share all information you provide in connection with the Program(including product usage and spend data), to our VC partners in Signature Fund.
                      </li>
                    <li>
                      You should not submit or provide anything you consider confidential or proprietary as part of the Program. Due to the large number of submissions we receive, we cannot be responsible for maintaining submitted information or materials in confidence. Accordingly, you represent and agree that all information you provide in connection with the Program will be non-confidential, and you acknowledge and agree that such information will not be held in confidence or restricted from use or disclosure in any way.
                      </li>
                    <li>
                      There are a large number of applicants for Signature Fund. Accordingly, we make no promises or guarantees that you will receive funding or even be invited to apply. Blockstack, Signature Fund and its VC partners have no obligation or duty to you unless and until a definitive agreement regarding funding is executed and delivered by all relevant parties (if at all).
                      </li>
                    <li>
                      NOTWITHSTANDING ANYTHING TO THE CONTRARY, Blockstack, THE Signature Fund AND ITS VC PARTNERS WILL NOT BE RESPONSIBLE OR LIABLE, UNDER ANY LEGAL OR EQUITABLE THEORY, FOR ANY INDIRECT, INCIDENTAL, SPECIAL OR CONSEQUENTIAL DAMAGES OF ANY KIND OR FOR ANY AMOUNT IN THE AGGREGATE IN EXCESS OF FIFTY DOLLARS ($50).
                      </li>
                    <li>
                      These Signature Fund Submission Terms are governed by the laws of the State of New York.
                      </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </DocumentTitle>
    )
  }

}

export default FundPage
