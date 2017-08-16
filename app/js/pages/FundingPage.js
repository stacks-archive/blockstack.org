'use strict'

import {Component}          from 'react'
import {Link}               from 'react-router'
import DocumentTitle        from 'react-document-title'
import {bindActionCreators} from 'redux'
import {connect}            from 'react-redux'

import {BlogActions}       from '../datastore/Blog'
import {StatsActions}      from '../datastore/Stats'
import Image               from '../components/Image'
import Header              from '../components/Header'
import TokenBanner         from '../components/TokenBanner'
import ContentSection      from '../components/ContentSection'
import VideosPresentation  from '../components/VideosPresentation'
import {featuredApps}      from '../config'


function mapStateToProps(state) {
  return {
    posts: state.blog.posts,
    stats: state.stats,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    Object.assign({}, BlogActions, StatsActions),
    dispatch
  )
}

class FundingPage extends Component {

  render() {
    return (
      <DocumentTitle title="Blockstack Signature Fund">
        <div className="video-special-hero">
          <div className="col-centered block">
            <TokenBanner />
            <Header transparent={true} />
            <div className="container-fluid p-b-90">
              <div className="row">
                <div className="container-fluid video-special-container">
                  <div class="embed-responsive embed-responsive-16by9 video-special">
                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/vQSbqwz4TPM" allowFullScreen></iframe>
                  </div>
                </div>
              </div>
              <section className="text-xs-center">
                <Image className="blockstack-signature-fund-logo-md m-t-55 m-b-45"
                  src="/images/logos/blockstack-signature-fund-logo-rev.svg"
                  retinaSupport={false} />
                <p className="lead-lg text-white col-md-8 col-centered p-b-10">
                  "Money is bringing everybody in, but the thing we are creating is larger than ourselves, larger than money."
                </p>
                <p className="hero-lead text-white p-b-30">
                  — Naval Ravikant at Blockstack Summit 2017
                </p>
                <div className="col-sm-9 col-md-7 col-centered m-b-65">
                  <Link to="https://goo.gl/forms/5jAfojqWiqe4vBzb2" target="_blank" className="btn btn-electric-blue btn-block">
                    Apply Here!
                  </Link>
                </div>
              </section>
            </div>
            <div className="sectionContainerLight section-spacing container-fluid">
              <section>
                <div className="containWrapper">
                  <div className="container sectionWrap">
                    <div className="col-md-10 col-centered">
                    <h3 className="text-xs-center m-b-65">
                      The Signature Fund for Blockstack is a $25M fund aimed at growing an ecosystem of decentralized applications on Blockstack.
                    </h3>
                    <p className="lead-lg text-xs-center">
                      We partnered with thesis-driven venture capital firms who are aligned with our vision of a decentralized internet like <a href="http://www.luxcapital.com">Lux Capital</a>, <a href="">Rising Tide</a>, <a href="">Compound</a>, <a href="http://openocean.vc/">OpenOcean</a>, and <a href="https://compound.vc/">VersionOne</a> to fund app developers and teams looking to build their apps on the new fully decentralized internet. App creators will benefit directly from the deep expertise and insight of these experienced investors.
                    </p>
                    <p className="lead-lg text-xs-center">
                      Additionally, those who apply will be first to hear 'x-prize' style prizes/bounties for large initiatives like building a decentralized microblogging platform, funded by investors like Naval Ravikant (founder, AngelList), Albert Wenger (managing partner, USV), and more
                    </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="feature-event-subhero-2">
              <div className="col-centered block">
                <div className="container summit-img-section">
                  <section className="text-xs-center p-b-80">
                  </section>
                </div>
              </div>
            </div>
            <div className="sectionContainerLight section-spacing container-fluid">
              <section>
                <div className="containWrapper">
                  <div className="container sectionWrap">
                    <div className="col-md-10 col-centered">
                      <h3 className="text-xs-center">
                        “Less white paper hype, more working code.”
                      </h3>
                      <p className="hero-lead p-b-65">
                        — Jeremy Welch, Casa App Founder at Blockstack Summit 2017
                      </p>
                      <p className="lead-lg text-xs-center m-b-95">
                        There’s a lot of excitement about building decentralized applications, but we know it is still early days. At Blockstack we’ve created the core infrastructure to enable developers to build these applications, but we realize that to increase an app’s chances of success, it will require access to capital and tools to bootstrap networks.
                      </p>
                      <p className="lead-lg m-b-25">
                         We think in the long term it’s not just about raising a round or a token, but more about forging an ecosystem that keeps your application thriving. Here are just a few of the methods opening up to applications being built on Blockstack:
                      </p>
                      <p className="lead-lg col-md-10 col-centered m-b-95">
                        <ul>
                          <li>VC-led Funding: Blockstack Apps will get access to and capital from some of the best minds in the space.</li>
                          <li>Token: Blockstack Apps will be able to offer tokens on top of the Blockstack ecosystem, just like ERC20 tokens on Ethereum.</li>
                          <li>Advanced Payments: Forward a percentage of your app’s subscription fees to specific names/addresses to incentivize app-building behavior.</li>
                        </ul>
                      </p>
                      <h4 className="font-weight-bold text-xs-center">
                        These are just the first steps to building an app ecosystem for the decentralized internet, and we expect tools to evolve and capabilities to grow.
                      </h4>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="sectionContainerLightGray section-spacing container-fluid">
              <section>
                <div className="containWrapper">
                  <div className="container sectionWrap">
                    <div className="col-md-10 col-centered">
                    <h3 className="text-xs-center m-b-45">
                      Why Apply?
                    </h3>
                    <p className="lead-lg text-xs-center col-md-10 col-centered">
                      These is an early step to building a sustainable, responsible ecosystem.
                      Just like building skyscraper, we are now pouring the concrete foundation.
                      There will be many more layers to come.
                    </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="sectionContainerLight section-spacing container-fluid">
              <section>
                <div className="containWrapper">
                  <div className="container sectionWrap">
                    <div className="col-md-10 col-centered">
                    <h3 className="text-xs-center m-b-65">
                      How to Apply
                    </h3>
                    <p className="lead-lg text-xs-center col-md-10 col-centered m-b-45">
                      You can apply as an individual or team by filling out the application form below or at the top of the page:
                    </p>
                    <div className="col-sm-9 col-md-7 col-centered m-b-45">
                      <Link to="https://goo.gl/forms/5jAfojqWiqe4vBzb2" target="_blank" className="btn btn-electric-blue btn-block">
                        Apply Here!
                      </Link>
                    </div>
                    <p className="lead-lg text-xs-center">
                      Once you apply, we’ll provide you with some starter materials to get started building apps on Blockstack.
                    </p>
                    <p className="lead-lg text-xs-center">
                      Members of the Blockstack team will reach out to you if there’s interest in working more closely to build a team (if needed) and a product using Blockstack. Projects will be selected for funding consideration and support.
                    </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="sectionContainerLightGray section-spacing container-fluid">
              <section>
                <div className="containWrapper">
                  <div className="container sectionWrap">
                    <div className="col-md-10 col-centered">
                    <h3 className="text-xs-center m-b-45">
                      What is Blockstack?
                    </h3>
                    <p className="lead-lg text-xs-center col-md-10 col-centered">
                      Blockstack is a new fully decentralized internet that comes with a full stack of open-source developer tools to build and bootstrap decentralized applications and protocol ecosystems.
                    </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="sectionContainerLight section-spacing container-fluid">
              <section>
                <div className="containWrapper">
                  <div className="container sectionWrap">
                    <p className="lead-lg text-xs-center col-md-10 col-centered m-b-45">
                      In Partnership with:
                    </p>
                    <div className="col-md-4 m-b-55">
                      <p className="text-center">
                        <Link to="https://compound.vc/" target="_blank">
                          <Image className="col-img partnerLogo" src="/images/logos/partner-logo-compound.svg"
                            retinaSupport={false} />
                        </Link>
                      </p>
                    </div>
                    <div className="col-md-4 m-b-55">
                      <p className="text-center">
                        <Link to="http://versionone.vc/" target="_blank">
                          <Image className="col-img partnerLogo" src="/images/logos/partner-logo-versionone.png"
                            retinaSupport={false} />
                        </Link>
                      </p>
                    </div>
                    <div className="col-md-4 m-b-55">
                      <p className="text-center">
                        <Link to="http://rtf.vc/" target="_blank">
                          <Image className="col-img partnerLogo" src="/images/logos/partner-logo-risingtide.png"
                            retinaSupport={false} />
                        </Link>
                      </p>
                    </div>
                    <div className="col-md-6 m-b-55">
                      <p className="text-center">
                        <Link to="http://www.luxcapital.com/" target="_blank">
                          <Image className="col-img partnerLogo-lux" src="/images/logos/partner-logo-lux.png"
                            retinaSupport={false} />
                        </Link>
                      </p>
                    </div>
                    <div className="col-md-6 m-b-55">
                      <p className="text-center">
                        <Link to="http://openocean.vc/" target="_blank">
                          <Image className="col-img partnerLogo" src="/images/logos/partner-logo-openocean.png"
                            retinaSupport={false} />
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="sectionContainerLightGray section-spacing container-fluid">
              <section>
                <div className="containWrapper">
                  <div className="container sectionWrap">
                    <div className="col-md-9 col-centered">
                    <p className="lead-lg">
                      Terms & Conditions
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
              </section>
            </div>
          </div>
        </div>
      </DocumentTitle>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(FundingPage)
