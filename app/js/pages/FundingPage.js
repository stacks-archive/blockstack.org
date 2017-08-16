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
                { /*<h1 className="text-white m-b-20">Blockstack Signature Fund</h1> */ }
                <p className="hero-lead text-white p-b-30">“Money is bringing everybody in, but the thing we are creating is larger than ourselves, < br/>
                larger than money. “ - Naval Ravikant at Blockstack Summit 2017</p>
                <div className="col-sm-9 col-md-7 col-centered m-b-45">
                  <Link to="/whitepaper.pdf" target="_blank" className="btn btn-electric-blue btn-block">
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
                      We partnered with thesis-driven VC’s thesis-driven VC's who're aligned with our vision of a decentralized internet like Lux Capital, Rising Tide, Compound, OpenOcean, and VersionOne to fund app developers and teams looking to build their apps on the new fully decentralized internet. App creators will benefit directly from the deep expertise and insight of these experienced investors.
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
                      <p className="hero-lead m-b-65">
                        — Jeremy Welch, Casa App Founder at Blockstack Summit 2017
                      </p>
                      <p className="lead-lg text-xs-center m-b-45">
                        There’s a lot of excitement about building decentralized applications, but we know it is still early days. At Blockstack we’ve created the core infrastructure to enable developers to build these applications, but we realize that to increase an app’s chances of success, it will require access to capital and tools to bootstrap networks.
                      </p>
                      <p className="lead-lg m-b-25">
                         We think in the long term it’s not just about raising a round or a token, but more about forging an ecosystem that keeps your application thriving. Here are just a few of the methods opening up to applications being built on Blockstack:
                      </p>
                      <p className="lead-lg col-md-10 col-centered m-b-65">
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
                    <h3 className="text-xs-center m-b-65">
                      The Signature Fund for Blockstack is a $25M fund aimed at growing an ecosystem of decentralized applications on Blockstack.
                    </h3>
                    <p className="lead-lg text-xs-center">
                      We partnered with thesis-driven VC’s thesis-driven VC's who're aligned with our vision of a decentralized internet like Lux Capital, Rising Tide, Compound, OpenOcean, and VersionOne to fund app developers and teams looking to build their apps on the new fully decentralized internet. App creators will benefit directly from the deep expertise and insight of these experienced investors.
                    </p>
                    <p className="lead-lg text-xs-center">
                      Additionally, those who apply will be first to hear 'x-prize' style prizes/bounties for large initiatives like building a decentralized microblogging platform, funded by investors like Naval Ravikant (founder, AngelList), Albert Wenger (managing partner, USV), and more
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
                      The Signature Fund for Blockstack is a $25M fund aimed at growing an ecosystem of decentralized applications on Blockstack.
                    </h3>
                    <p className="lead-lg text-xs-center">
                      We partnered with thesis-driven VC’s thesis-driven VC's who're aligned with our vision of a decentralized internet like Lux Capital, Rising Tide, Compound, OpenOcean, and VersionOne to fund app developers and teams looking to build their apps on the new fully decentralized internet. App creators will benefit directly from the deep expertise and insight of these experienced investors.
                    </p>
                    <p className="lead-lg text-xs-center">
                      Additionally, those who apply will be first to hear 'x-prize' style prizes/bounties for large initiatives like building a decentralized microblogging platform, funded by investors like Naval Ravikant (founder, AngelList), Albert Wenger (managing partner, USV), and more
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