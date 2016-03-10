'use strict'

import {Component}      from 'react'
import {Link}           from 'react-router'
import DocumentTitle    from 'react-document-title'

import Header           from '../components/Header'
import Footer           from '../components/Footer'

const propTypes = {
}

class SummitPage extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <DocumentTitle title="Blockstack - Blockstack Summit">
        <div>
         <div className="container-fluid col-centered summit-head-wrap">
            <Header />
            <div className="m-b-3 docs-header-image-wrapper">
              <section>
                <div>
                  <div className="col-xs-11 col-sm-10 col-centered">
                    <h1 className="hero-head summ-head">Blockstack<br/>Summit 2015</h1>
                    <p className="lead hero-comm-des">The Open Source Blockchain Community</p>
                    <p className="date">September 12, 2015 - 9am-5pm</p>
                    <p className="hall">{"D'Agostino Hall, NYU, 108 W 3rd St, New York, NY"}</p>
                    <p className="hero-reg-btn">
                      <Link to="http://blockstacksummit2015.eventbrite.com" target="_blank" className="btn btn-special btn-lg">
                        Register for Blockstack Summit
                      </Link>
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
                        <td><Link to="http://cs.nyu.edu/web/index.html" target="_blank">New York University</Link></td>
                      </tr>
                      <tr>
                        <td>10:25 - 10:30</td>
                        <td>Name registrations on the Bitcoin blockchain</td>
                        <td>Muneeb Ali</td>
                        <td><Link to="http://onename.com/" target="_blank">Onename</Link></td>
                      </tr>
                      <tr>
                        <td>10:31 - 10:36</td>
                        <td>Using the blockchain for devops</td>
                        <td>Jude Nelson</td>
                        <td><Link to="http://www.cs.princeton.edu/" target="_blank">Princeton University</Link></td>
                      </tr>
                      <tr>
                        <td>10:37 - 10:42</td>
                        <td>Open Bitcoin Privacy Project</td>
                        <td>Kristov Atlas</td>
                        <td><Link to="http://www.openbitcoinprivacyproject.org/" target="_blank">Open Bitcoin Privacy Project</Link></td>
                      </tr>
                      <tr>
                        <td>10:43 - 10:48</td>
                        <td>Chainpoint</td>
                        <td>Wayne Vaughan</td>
                        <td><Link to="https://tierion.com/" target="_blank">Tierion</Link></td>
                      </tr>
                      <tr>
                        <td>10:49 - 10:54</td>
                        <td>Bitcoin full node hardware</td>
                        <td>Jay Feldis</td>
                        <td><Link to="http://bitseed.org/" target="_blank">Bitseed</Link></td>
                      </tr>
                      <tr>
                        <td>10:55 - 11:00</td>
                        <td>Group Income: Voluntary Blockchain-Powered Basic Income</td>
                        <td>Greg Slepak</td>
                        <td><Link to="https://okturtles.com/" target="_blank">okTurtles</Link></td>
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
                        <td><Link to="http://mine.nyc" target="_blank">Mine</Link></td>
                      </tr>
                      <tr>
                        <td>11:13 - 11:18</td>
                        <td>Open Bazaar</td>
                        <td>Chris Pacia</td>
                        <td><Link to="http://ob1.io/" target="_blank">OB1</Link></td>
                      </tr>
                      <tr>
                        <td>11:19 - 11:24</td>
                        <td>IPFS</td>
                        <td>Juan Benet</td>
                        <td><Link to="http://ipfs.io/" target="_blank">IPFS</Link></td>
                      </tr>
                      <tr>
                        <td>11:25 - 11:30</td>
                        <td>ZeroNet</td>
                        <td>John Light</td>
                        <td><Link to="http://p2pconnects.us/" target="_blank">P2P Connects Us</Link></td>
                      </tr>
                      <tr>
                        <td>11:31 - 11:36</td>
                        <td>Blockchain ID for decentralized authentication</td>
                        <td>Ryan Shea</td>
                        <td><Link to="http://onename.com/" target="_blank">Onename</Link></td>
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
          <section className="container-fluid stats-section">
            <div className="container bs-docs-featurette col-centered">
              <h2 className="centered padding-bottom-40">Blockstack Summit Q&A Panel Guests</h2>
              <div className="col-centered">
                <div className="row col-centered">
                  <div className="col-md-3 profile-wrap">
                    <div className="profile2" alt="Albert Wenger, Partner at Union Square Ventures (USV)"></div>
                    <h3>Albert Wenger</h3>
                    <p>Partner at Union Square Ventures (USV)</p>
                  </div>
                  <div className="col-md-3 profile-wrap">
                    <div className="profile3" alt="Jalak Jobanputra, Founder of Future/Perfect Ventures"></div>
                    <h3>Jalak Jobanputra</h3>
                    <p>Founder of Future/Perfect Ventures</p>
                  </div>
                  <div className="col-md-3 profile-wrap">
                    <div className="profile4" alt="Naval Ravikant, Co-founder AngelList & Angel Investor"></div>
                    <h3>Naval Ravikant</h3>
                    <p>Co-founder AngelList & Angel Investor</p>
                  </div>
                  <div className="col-md-3 profile-wrap">
                    <div className="profile5" alt="William Mougayar, Angel Investor"></div>
                    <h3>William Mougayar</h3>
                    <p>Angel Investor</p>
                  </div>
                </div>
              </div>
              <div className="col-centered">
                <div className="row col-centered">
                  <div className="col-md-3 col-centered profile-wrap">
                    <div className="profile1" alt="JP Singh, Professor, Princeton University"></div>
                    <h3>JP Singh, <span className="gallery-spcl-txt">Ph.D,</span></h3>
                    <p>Panel Moderator,</p>
                    <p>Professor, Computer Science, Princeton University</p>
                  </div>
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
                        <Link to="https://twitter.com/albertwenger" target="_blank">Albert Wenger</Link>, Partner at Union Square Ventures (USV)<br/>
                        <Link to="https://twitter.com/jalak" target="_blank">Jalak Jobanputra</Link>, Founder of Future/Perfect Ventures<br/>
                        <Link to="https://twitter.com/naval" target="_blank">Naval Ravikant</Link>, Co-founder AngelList & Angel Investor<br/>
                        <Link to="https://twitter.com/wmougayar" target="_blank">William Mougayar</Link>, Angel Investor<br/><br/>
                        <Link to="http://www.cs.princeton.edu/~jps/" target="_blank">JP Singh</Link>, Panel Moderator, Professor, Princeton University</p>
                      <p className="lead margin-bottom-80">
                        Tickets for Blockstack Summit are limited, register today to reserve your spot.
                      </p>
                      <p className="centered margin-bottom-80">
                        <Link to="http://blockstacksummit2015.eventbrite.com" target="_blank" className="btn btn-primary btn-lg center-btn">
                          Register for Blockstack Summit
                        </Link>
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
                      <Link to="http://chain.com/">
                        <img src="/images/logos/chain.svg" alt="Chain logo" width="138px"/>
                      </Link>
                    </div>
                  </div>
                  <div className="col-sm-4 feature-panel featpan-g2">
                    <div className="container wrap-mob-feat">
                      <Link to="https://www.itbit.com/">
                        <img src="/images/logos/itbit.svg" alt="itBit logo" width="100px"/>
                      </Link>
                    </div>
                  </div>
                  <div className="col-sm-4 feature-panel featpan-g3">
                    <div className="container wrap-mob-feat">
                      <Link to="https://www.blockchain.info/">
                        <img src="/images/logos/blockchain-info-blue.svg" alt="itBit logo" width="205px"/>
                      </Link>
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
                      <Link to="http://onename.com/">
                        <img src="/images/logos/onename.svg" alt="Onename Blockchain ID" width="130px"/>
                      </Link>
                    </div>
                  </div>
                  <div className="col-sm-4 feature-panel featpan-2">
                    <div className="container wrap-mob-feat">
                      <Link to="http://ob1.io/">
                        <img src="/images/logos/ob1.svg" alt="OB1 logo" width="90px"/>
                      </Link>
                    </div>
                  </div>
                  <div className="col-sm-4 feature-panel featpan-3">
                    <div className="container wrap-mob-feat">
                      <Link to="https://tierion.com/">
                        <img src="/images/logos/tierion.svg" alt="Tierion is the fastest way to record data in the blockchain and generate a blockchain receipt" width="160px"/>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="row col-sm-12 col-centered">
                  <div className="col-sm-6 feature-panel featpan-4">
                    <div className="container wrap-mob-feat">
                      <Link to="http://bitseed.org/">
                        <img src="/images/logos/bitseed.svg" alt="Bitseed, decentralized blockchain technology hardware company" width="128px"/>
                      </Link>
                    </div>
                  </div>
                  <div className="col-sm-6 feature-panel featpan-5">
                    <div className="container wrap-mob-feat">
                      <Link to="http://trychord.com/">
                        <img src="/images/logos/chord.svg" alt="Chord logo" width="110px"/>
                      </Link>
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
                    <Link to="http://chat.blockstack.org" target="_blank" className="btn btn-lg btn-special center-btn" role="button">
                      Get invited to Slack!
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </DocumentTitle>
    )
  }

}

SummitPage.propTypes = propTypes

export default SummitPage
