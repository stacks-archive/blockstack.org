'use strict';

import React            from 'react'
import {Link}           from 'react-router'
import DocumentTitle    from 'react-document-title'

import Header           from '../components/Header'
import Footer           from '../components/Footer'

const propTypes = {
};

class AboutPage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <DocumentTitle title="About">
        <div>
          <div className="container-fluid col-centered about-head-wrap">
            <Header />
            <div className="slides col-sm-10 col-sm-offset-1 padding-top-20">
              <section className="hero col-centered">
                <div>
                  <div className="col-xs-11 col-sm-10 col-sm-offset-1">
                    <div className="hero-logo hidden-sm hidden-md hidden-lg">
                      <Link to="/">
                        <img src="/images/blockstack-logo.svg"/>
                      </Link>
                    </div>
                    <h1 className="hero-head about-head">What is Blockstack?</h1>
                  </div>
                  <div className="img"></div>
                </div>
              </section>
            </div>
          </div>
          <section>
            <div className="bs-docs-featurette col-centered" id="learnmore">
              <div className="container col-centered">
                <div className="row col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2 col-centered">
                  <div className="col-sm-11 feature-panel col-centered">
                      <p className="lead margin-bottom-110 margin-top-110">
                        Blockstack is a community of developers who are working to create a complete, standardized, well-documented toolkit for building decentralized applications. Developers will be able to use this stack to create decentralized versions of popular online services like <Link to="http://www.openbazaar.org" target="_blank">Amazon</Link>, <Link to="https://github.com/dloa/alexandria-docs/blob/master/Alexandria-for-artists.md" target="_blank">Youtube</Link>, <Link to="http://twister.net.co/" target="_blank">Twitter</Link>, and <Link to="http://datt.co/" target="_blank">Reddit</Link>, or even a whole new way of <Link to="http://www.ipfs.io" target="_blank">publishing</Link> and <Link to="http://zeronet.io/" target="_blank">browsing</Link> websites. Many applications are using the same or similar components to achieve decentralization, and Blockstack is working to combine these tools into a simple yet powerful software stack for developers of decentralized applications to build with.
                      </p>
                  </div>
                </div>
              </div>
            </div>  
          </section>
          <section className="container-fluid sec-hook">
            <div className="bs-docs-featurette col-centered" id="learnmore">
              <div className="container col-centered">
                <div className="displayed-wrap container col-md-7 col-centered">
                  <h2 className="displayed margin-bottom-20">Building Community</h2>
                </div>
                <div className="row col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2 col-centered margin-bottom-80">
                  <div className="col-sm-11 feature-panel col-centered">
                    <p className="lead">
                      Since launching the Blockstack website a little over two months ago, an incredible amount of attention and support has poured into this community from talented and passionate developers and enthusiasts from all over the world. Developers from companies and projects such as <Link to="http://www.2way.io" target="_blank">2WAY.IO</Link>, <Link to="http://www.bitmarkets.org" target="_blank">Bitmarkets</Link>, <Link to="https://www.bitseed.org" target="_blank">Bitseed</Link>, <Link to="http://trychord.com" target="_blank">Chord</Link>, <Link to="http://www.creativework.info" target="_blank">creativework.info</Link>, <Link to="http://datt.co/" target="_blank">Datt</Link>, <Link to="https://fabric.fm/" target="_blank">Fabric</Link>, <Link to="http://www.mine.nyc" target="_blank">Mine</Link>, <Link to="https://nametiles.co/" target="_blank">Nametiles</Link>, <Link to="http://www.ob1.io" target="_blank">OB1</Link>, <Link to="http://www.okturtles.org" target="_blank">the okTurtles Foundation</Link>, <Link to="https://stampery.co/" target="_blank">Stampery</Link>, <Link to="https://www.tierion.com" target="_blank">Tierion</Link>, and <Link to="http://zeronet.io/" target="_blank">ZeroNet</Link> have joined the Blockstack community and are already contributing code and ideas. We have started and continued important discussions both in the <Link to="http://forum.blockstack.org" target="_blank">forum</Link> and <Link to="http://chat.blockstack.org" target="_blank">Slack</Link> about the future of decentralized application development and the role Blockstack will play in this space going forward. Progress is being made and issues are being resolved. We are invite all who support our mission to join our community and contribute to Blockstack!
                    </p>
                  </div>
                </div>
              </div>
            </div>  
          </section>
          <section className="container-fluid highlight-box">
            <div className="bs-docs-featurette col-centered" id="learnmore">
              <div className="col-centered">
                <div className="container-fluid col-sm-12 center-block">
                  <div className="container col-sm-4 feature-panel feat-block">
                    <Link to="http://chat.blockstack.org/" target="_blank">
                      <h3>Chat on Slack</h3>
                      <p className="lead feat-lead">
                        Chat with devs about Blockstack projects
                      </p>
                    </Link>
                  </div>
                  <div className="container col-sm-4 feature-panel feat-block">
                    <Link to="https://forum.blockstack.org/" target="_blank">
                      <h3>Join our forum</h3>
                      <p className="lead feat-lead">
                        Share Blockstack news with the community
                      </p>
                    </Link>
                  </div>
                  <div className="container col-sm-4 feature-panel feat-block">
                    <Link to="https://github.com/blockstack/" target="_blank">
                      <h3>Star on Github</h3>
                      <p className="lead feat-lead">
                        Contribute to open source Blockstack code on GitHub
                      </p>
                    </Link>
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
                  <div className="container-fluid btn-wrap">
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
    );
  }

}

AboutPage.propTypes = propTypes;

export default AboutPage;