/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import Link from '../components/Link';
import React, { Component, PropTypes } from 'react';
import Navigation from '../components/Navigation';

export default class extends Component {

  render() {
    return (
      <div>
        <div className="container-fluid col-centered about-head-wrap">
          <header className="nav-animation-element col-centered">
            <Navigation />
          </header>
          <div className="slides col-sm-10 col-sm-offset-1" style={{ paddingTop: '20px;' }}>
            <section className="hero col-centered">
              <div>
                <div className="col-xs-11 col-sm-10 col-sm-offset-1">
                  <div className="hero-logo hidden-sm hidden-md hidden-lg">
                    <a href="/" onClick={Link.handleClick}>
                      <img src="/images/blockstack-logo.svg"/>
                    </a>
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
                    <p className="lead" style={{ marginBottom: '110px', marginTop: '110px;' }}>
                      Blockstack is a community of developers who are working to create a complete, standardized, well-documented toolkit for building decentralized applications. Developers will be able to use this stack to create decentralized versions of popular online services like <a href="http://www.openbazaar.org" target="_blank" onClick={Link.handleClick}>Amazon</a>, <a href="https://github.com/dloa/alexandria-docs/blob/master/Alexandria-for-artists.md" target="_blank" onClick={Link.handleClick}>Youtube</a>, <a href="http://twister.net.co/" target="_blank" onClick={Link.handleClick}>Twitter</a>, and <a href="http://datt.co/" target="_blank" onClick={Link.handleClick}>Reddit</a>, or even a whole new way of <a href="http://www.ipfs.io" target="_blank" onClick={Link.handleClick}>publishing</a> and <a href="http://zeronet.io/" target="_blank" onClick={Link.handleClick}>browsing</a> websites. Many applications are using the same or similar components to achieve decentralization, and Blockstack is working to combine these tools into a simple yet powerful software stack for developers of decentralized applications to build with.
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
                <h2 className="displayed" style={{ marginBottom: '20px;'}}>Building Community</h2>
              </div>
              <div className="row col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2 col-centered" style={{ marginBottom: '80px;'}}>
                <div className="col-sm-11 feature-panel col-centered">
                  <p className="lead">
                    Since launching the Blockstack website a little over two months ago, an incredible amount of attention and support has poured into this community from talented and passionate developers and enthusiasts from all over the world. Developers from companies and projects such as <a href="http://www.2way.io" target="_blank" onClick={Link.handleClick}>2WAY.IO</a>, <a href="http://www.bitmarkets.org" target="_blank" onClick={Link.handleClick}>Bitmarkets</a>, <a href="https://www.bitseed.org" target="_blank" onClick={Link.handleClick}>Bitseed</a>, <a href="http://trychord.com" target="_blank" onClick={Link.handleClick}>Chord</a>, <a href="http://www.creativework.info" target="_blank" onClick={Link.handleClick}>creativework.info</a>, <a href="http://datt.co/" target="_blank" onClick={Link.handleClick}>Datt</a>, <a href="https://fabric.fm/" target="_blank" onClick={Link.handleClick}>Fabric</a>, <a href="http://www.mine.nyc" target="_blank" onClick={Link.handleClick}>Mine</a>, <a href="https://nametiles.co/" target="_blank" onClick={Link.handleClick}>Nametiles</a>, <a href="http://www.ob1.io" target="_blank" onClick={Link.handleClick}>OB1</a>, <a href="http://www.okturtles.org" target="_blank" onClick={Link.handleClick}>the okTurtles Foundation</a>, <a href="https://stampery.co/" target="_blank" onClick={Link.handleClick}>Stampery</a>, <a href="https://www.tierion.com" target="_blank" onClick={Link.handleClick}>Tierion</a>, and <a href="http://zeronet.io/" target="_blank" onClick={Link.handleClick}>ZeroNet</a> have joined the Blockstack community and are already contributing code and ideas. We have started and continued important discussions both in the <a href="http://forum.blockstack.org" target="_blank" onClick={Link.handleClick}>forum</a> and <a href="http://chat.blockstack.org" target="_blank" onClick={Link.handleClick}>Slack</a> about the future of decentralized application development and the role Blockstack will play in this space going forward. Progress is being made and issues are being resolved. We are invite all who support our mission to join our community and contribute to Blockstack!
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
                  <a href="http://chat.blockstack.org/" target="_blank" onClick={Link.handleClick}>
                    <h3>Chat on Slack</h3>
                    <p className="lead feat-lead">
                      Chat with devs about Blockstack projects
                    </p>
                  </a>
                </div>
                <div className="container col-sm-4 feature-panel feat-block">
                  <a href="https://forum.blockstack.org/" target="_blank" onClick={Link.handleClick}>
                    <h3>Join our forum</h3>
                    <p className="lead feat-lead">
                      Share Blockstack news with the community
                    </p>
                  </a>
                </div>
                <div className="container col-sm-4 feature-panel feat-block">
                  <a href="https://github.com/blockstack/" target="_blank" onClick={Link.handleClick}>
                    <h3>Star on Github</h3>
                    <p className="lead feat-lead">
                      Contribute to open source Blockstack code on GitHub
                    </p>
                  </a>
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
                  <a href="http://chat.blockstack.org" target="_blank" className="btn btn-lg btn-special center-btn" role="button" onClick={Link.handleClick}>
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
