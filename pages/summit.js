/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component, PropTypes } from 'react';
import Navigation from '../components/Navigation';

export default class extends Component {

  render() {
    return (
      <div>
        <div className="container-fluid col-centered summit-head-wrap">
          <header className="nav-animation-element col-centered">
            <Navigation />
          </header>
          <div className="slides col-sm-10 col-sm-offset-1 padding-top-20">
            <section className="hero col-centered">
              <div>
                <div className="col-xs-11 col-sm-10 col-sm-offset-1">
                  <div className="hero-logo hidden-sm hidden-md hidden-lg">
                    <a href="/">
                      <img src="/images/blockstack-logo.svg"/>
                    </a>
                  </div>
                  <h1 className="hero-head summ-head">Blockstack<br/>Summit 2015</h1>
                  <p className="lead hero-comm-des">The Open Source Blockchain Community</p>
                  <p className="date">September 12, 2015 - 9am-5pm</p>
                  <p className="hall">{"D'Agostino Hall, NYU, 108 W 3rd St, New York, NY"}</p>
                  <p className="hero-reg-btn">
                    <a href="http://blockstacksummit2015.eventbrite.com" target="_blank" className="btn btn-primary btn-lg">
                      Register for Blockstack Summit
                    </a>
                  </p>
                </div>
                <div className="img"></div>
              </div>
            </section>
          </div>
        </div>
        <section className="container-fluid gallery-contain summit-section">
          <div className="bs-docs-featurette col-centered" id="learnmore">
            <div className="col-centered profile-gallery">
              <h2 className="centered padding-bottom-20">Lightning Talks</h2>
              <div className="col-sm-11 feature-panel col-centered">
                <div className="col-centered table-wrap">
                  <div className="table-responsive ">
                  <table className="table table-striped table-hover">
                    <thead>
                      <tr>
                        <th>Time</th>
                        <th>Topic</th>
                        <th>Presenter</th>
                        <th>Company</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>10:00 - 10:05</td>
                        <td>Opening Speech</td>
                        <td>Lakshmi Subramanian, Ph.D</td>
                        <td><a href="http://cs.nyu.edu/web/index.html" target="_blank">New York University</a></td>
                      </tr>
                      <tr>
                        <td>10:25 - 10:30</td>
                        <td>Name registrations on the Bitcoin blockchain</td>
                        <td>Muneeb Ali</td>
                        <td><a href="http://onename.com/" target="_blank">Onename</a></td>
                      </tr>
                      <tr>
                        <td>10:31 - 10:36</td>
                        <td>Using the blockchain for devops</td>
                        <td>Jude Nelson</td>
                        <td><a href="http://www.cs.princeton.edu/" target="_blank">Princeton University</a></td>
                      </tr>
                      <tr>
                        <td>10:37 - 10:42</td>
                        <td>Open Bitcoin Privacy Project</td>
                        <td>Kristov Atlas</td>
                        <td><a href="http://www.openbitcoinprivacyproject.org/" target="_blank">Open Bitcoin Privacy Project</a></td>
                      </tr>
                      <tr>
                        <td>10:43 - 10:48</td>
                        <td>Chainpoint</td>
                        <td>Wayne Vaughan</td>
                        <td><a href="https://tierion.com/" target="_blank">Tierion</a></td>
                      </tr>
                      <tr>
                        <td>10:49 - 10:54</td>
                        <td>Bitcoin full node hardware</td>
                        <td>Jay Feldis</td>
                        <td><a href="http://bitseed.org/" target="_blank">Bitseed</a></td>
                      </tr>
                      <tr>
                        <td>10:55 - 11:00</td>
                        <td>Group Income: Voluntary Blockchain-Powered Basic Income</td>
                        <td>Greg Slepak</td>
                        <td><a href="https://okturtles.com/" target="_blank">okTurtles</a></td>
                      </tr>
                      <tr>
                        <td>11:01 - 11:06</td>
                        <td>Shared registry of creative works</td>
                        <td>Christopher Allen</td>
                        <td>Creativework.info</td>
                      </tr>
                      <tr>
                        <td>11:07 - 11:12</td>
                        <td>Canonical Content Identifiers</td>
                        <td>Jesse Walden</td>
                        <td><a href="http://mine.nyc" target="_blank">Mine</a></td>
                      </tr>
                      <tr>
                        <td>11:13 - 11:18</td>
                        <td>Open Bazaar</td>
                        <td>Chris Pacia</td>
                        <td><a href="http://ob1.io/" target="_blank">OB1</a></td>
                      </tr>
                      <tr>
                        <td>11:19 - 11:24</td>
                        <td>IPFS</td>
                        <td>Juan Benet</td>
                        <td><a href="http://ipfs.io/" target="_blank">IPFS</a></td>
                      </tr>
                      <tr>
                        <td>11:25 - 11:30</td>
                        <td>ZeroNet</td>
                        <td>John Light</td>
                        <td><a href="http://p2pconnects.us/" target="_blank">P2P Connects Us</a></td>
                      </tr>
                      <tr>
                        <td>11:31 - 11:36</td>
                        <td>Blockchain ID for decentralized authentication</td>
                        <td>Ryan Shea</td>
                        <td><a href="http://onename.com/" target="_blank">Onename</a></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container-fluid gallery-contain summit-section">
          <div className="bs-docs-featurette col-centered" id="learnmore">
            <div className="col-centered profile-gallery">
              <h2 className="centered padding-bottom-20">Workshop topics</h2>
              <div className="col-sm-11 feature-panel col-centered">
                <div className="col-centered topic-wrap">
                  <ul>
                    <li><p className="lead topic">Distributed hash tables</p></li>
                    <li><p className="lead topic">Blockchain scalability</p></li>
                    <li><p className="lead topic">Decentralized identity</p></li>
                    <li><p className="lead topic">Secure messaging</p></li>
                    <li><p className="lead topic">Smart contracts</p></li>
                    <li><p className="lead topic">Decentralized storage</p></li>
                    <li><p className="lead topic">Peer-to-peer reputation</p></li>
                    <li><p className="lead topic">Electronic voting</p></li>
                    <li><p className="lead topic">Blockstack governance</p></li>
                    <li><p className="lead topic">Peer-to-peer markets</p></li>
                    <li><p className="lead topic">Autonomous organizations</p><br/><br/></li>
                    <li><p className="lead topic"><i>Your topic here!</i></p></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container-fluid gallery-contain">
          <div className="bs-docs-featurette col-centered" id="learnmore">
            <div className="col-centered profile-gallery">
              <h2 className="centered padding-bottom-40">Blockstack Summit Q&A Panel Guests</h2>
              <div className="container-fluid col-md-12">
                <ul className="container-fluid col-md-12 list-unstyled">
                  <li className="col-md-3 profile-wrap">
                    <div className="profile2" alt="Albert Wenger, Partner at Union Square Ventures (USV)"></div>
                    <h3>Albert Wenger</h3>
                    <p>Partner at Union Square Ventures (USV)</p>
                  </li>
                  <li className="col-md-3 profile-wrap">
                    <div className="profile3" alt="Jalak Jobanputra, Founder of Future/Perfect Ventures"></div>
                    <h3>Jalak Jobanputra</h3>
                    <p>Founder of Future/Perfect Ventures</p>
                  </li>
                  <li className="col-md-3 profile-wrap">
                    <div className="profile4" alt="Naval Ravikant, Co-founder AngelList & Angel Investor"></div>
                    <h3>Naval Ravikant</h3>
                    <p>Co-founder AngelList & Angel Investor</p>
                  </li>
                  <li className="col-md-3 profile-wrap">
                    <div className="profile5" alt="William Mougayar, Angel Investor"></div>
                    <h3>William Mougayar</h3>
                    <p>Angel Investor</p>
                  </li>
                </ul>
              </div>
              <div className="container-fluid col-md-12">
                <ul className="col-md-12 list-unstyled">
                  <li className="container col-md-3 col-centered profile-wrap">
                    <div className="profile1" alt="JP Singh, Professor, Princeton University"></div>
                    <h3>JP Singh, <span className="gallery-spcl-txt">Ph.D,</span></h3>
                    <p>Panel Moderator,</p>
                    <p>Professor, Computer Science, Princeton University</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="bs-docs-featurette col-centered" id="learnmore">
            <div className="container col-centered">
              <div className="displayed-wrap container col-md-7 col-centered"><h2 className="displayed margin-bottom-20">We are excited to invite you to join us at our first community event, Blockstack Summit!</h2></div>
              <div className="row col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2 col-centered margin-bottom-80">
                <div className="col-sm-11 feature-panel col-centered">
                    <p className="lead">
                      Scheduled for September 12th in New York City, Blockstack Summit is a one-day technical event where attendees will be able to have high quality discussions and get real work done throughout the day alongside some of the most talented and influential developers working with decentralized applications and blockchain technology today. If you go to just one blockchain event for the rest of this year, let it be Blockstack Summit!
                    </p>
                    <p className="lead">
                      Attendees should bring their ideas, problems, and questions about decentralized application development so that we can all learn and benefit from the growing volume of wisdom in this burgeoning community. Presentations in the morning will be following a 5 minute Lightning Talk format, which will provide context for the discussions later in the day. The workshop will be following an “unconference” format, so all participants will have a chance to have their voices heard and ideas discussed.
                    </p>
                    <p className="lead">
                      To close out the inaugural Blockstack Summit, we are honored to be hosting a Q&A panel with four visionary leaders who have deep experience working with developers of disruptive technology. This is not a discussion to be missed!<br/><br/>
                      <a href="https://twitter.com/albertwenger" target="_blank">Albert Wenger</a>, Partner at Union Square Ventures (USV)<br/>
                      <a href="https://twitter.com/jalak" target="_blank">Jalak Jobanputra</a>, Founder of Future/Perfect Ventures<br/>
                      <a href="https://twitter.com/naval" target="_blank">Naval Ravikant</a>, Co-founder AngelList & Angel Investor<br/>
                      <a href="https://twitter.com/wmougayar" target="_blank">William Mougayar</a>, Angel Investor<br/><br/>
                      <a href="http://www.cs.princeton.edu/~jps/" target="_blank">JP Singh</a>, Panel Moderator, Professor, Princeton University</p>
                    <p className="lead margin-bottom-80">
                      Tickets for Blockstack Summit are limited, register today to reserve your spot.
                    </p>
                    <p className="centered margin-bottom-80">
                      <a href="http://blockstacksummit2015.eventbrite.com" target="_blank" className="btn btn-primary btn-lg center-btn">
                        Register for Blockstack Summit
                      </a>
                    </p>
                </div>
              </div>
            </div>
          </div>  
        </section>
        <section className="container-fluid sec-hook sponsor-divide summit-hook-section">
          <div className="bs-docs-featurette col-centered sponsors-subection" id="learnmore">
            <div className="col-centered">
              <h3 className="centered padding-bottom-60">Thanks to our sponsors</h3>
              <p className="lead lead-sponsors centered">Gold Sponsors</p>
              <div className="row col-sm-12 col-centered">
                <div className="col-sm-4 feature-panel featpan-g1">
                  <div className="container wrap-mob-feat">
                    <a href="http://chain.com/">
                      <img src="/images/chain-logo.svg" alt="Chain logo" width="138px"/>
                    </a>
                  </div>
                </div>
                <div className="col-sm-4 feature-panel featpan-g2">
                  <div className="container wrap-mob-feat">
                    <a href="https://www.itbit.com/">
                      <img src="/images/itbit-type-gray-logo.svg" alt="itBit logo" width="100px"/>
                    </a>
                  </div>
                </div>
                <div className="col-sm-4 feature-panel featpan-g3">
                  <div className="container wrap-mob-feat">
                    <a href="https://www.blockchain.info/">
                      <img src="/images/blockchain-info-blue.svg" alt="itBit logo" width="205px"/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container-fluid sec-hook summit-hook-section">
          <div className="bs-docs-featurette col-centered sponsors-2-subsection" id="learnmore">
            <div className="col-centered">
              <div className="row col-sm-12 col-centered">
                <div className="col-sm-4 feature-panel featpan-1">
                  <div className="container wrap-mob-feat">
                    <a href="http://onename.com/">
                      <img src="/images/onename-0609-logo.svg" alt="Onename Blockchain ID" width="130px"/>
                    </a>
                  </div>
                </div>
                <div className="col-sm-4 feature-panel featpan-2">
                  <div className="container wrap-mob-feat">
                    <a href="http://ob1.io/">
                      <img src="/images/ob1-logo.svg" alt="OB1 logo" width="90px"/>
                    </a>
                  </div>
                </div>
                <div className="col-sm-4 feature-panel featpan-3">
                  <div className="container wrap-mob-feat">
                    <a href="https://tierion.com/">
                      <img src="/images/tierion-logo.svg" alt="Tierion is the fastest way to record data in the blockchain and generate a blockchain receipt" width="160px"/>
                    </a>
                  </div>
                </div>
              </div>
              <div className="row col-sm-12 col-centered">
                <div className="col-sm-6 feature-panel featpan-4">
                  <div className="container wrap-mob-feat">
                    <a href="http://bitseed.org/">
                      <img src="/images/bitseed-logo.svg" alt="Bitseed, decentralized blockchain technology hardware company" width="128px"/>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 feature-panel featpan-5">
                  <div className="container wrap-mob-feat">
                    <a href="http://trychord.com/">
                      <img src="/images/chord-logo.svg" alt="Chord logo" width="110px"/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="feature-action col-centered">
          <div className="container">
            <div className="row">
              <div className="container col-xs-11 col-centered">
                <hgroup>
                  <h2 className="col-md-8 col-lg-6 col-centered action-title">
                    Build Something Bigger Than Yourself!
                  </h2>
                </hgroup>
                <div className="btn-wrap">
                  <a href="http://chat.blockstack.org" target="_blank" className="btn btn-lg btn-special center-btn" role="button">
                    Get invited to Slack!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

}
