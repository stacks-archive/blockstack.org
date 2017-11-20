'use strict'

import { Component }        from 'react'
import DocumentTitle        from 'react-document-title'

import ContentSection       from '../components/ContentSection'
import TeamMembers       from '../components/TeamMembers'

class AboutPage extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    return (
      <DocumentTitle title="Blockstack - About">
        <div>
          <div className="container-fluid container-lg sectionWrap bg-white">
            <div className="row">
              <div className="container">
                <section className="col-centered">
                  <div className="post-content">
                    <h2>
                      In Short
                    </h2>
                    <p className="mb-5">
                      Blockstack is a new internet for decentralized apps that you access through 
                      the <a href="/install">Blockstack Browser</a>. With Blockstack, there is a 
                      new world of apps that let you own your data and maintain your privacy, 
                      security and freedom.
                    </p>
                    <h2>
                      How It Works
                    </h2>
                    <p>
                      Blockstack uses the lower layers of the traditional internet and focuses on 
                      decentralizing the application layer. Blockstack provides key tools and 
                      infrastructure to developers enabling decentralized storage and decentralized 
                      authentication & identity. Developers build single-page applications in 
                      Javascript then plug into user-run APIs, which eliminates centralized points 
                      of control. Users run decentralized apps through the Blockstack browser and 
                      give explicit read/write permissions to their data. Information is encrypted 
                      and stored on users’ personal devices. There are no middlemen, no passwords, 
                      and no massive data silos to breach.
                    </p>
                    <p>
                      Get started by installing the <a href="/install">Blockstack Browser
                      </a> (available for Mac, Windows, and Linux).
                    </p>
                    <p className="mb-5">
                      There are many Blockstack apps already in production and more being built 
                      every day with the participation of the online open source community and in 
                      partnership with VC Bounties Programs. See more on that at <a href="/funding">
                      blockstack.org/funding</a>
                    </p>
                    <h2>
                      Stats
                    </h2>
                    <p>
                      <ul>
                        <li>3+ years in production </li>
                        <li>74,000+ domains registered </li>
                        <li>Over 7,000 members in the developer community </li>
                        <li>4,000+ Slack community members</li>
                        <li>7,000+ Meet-Up Members, with events spanning 23 cities in 12 countries</li>
                      </ul>
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
          <div className="container-fluid bg-light-gray">
            <div className="container-fluid container-lg sectionWrap blog-post">
              <div className="row">
                <div className="container">
                  <section className="col-centered">
                    <div className="post-content">
                      <h2>
                        Blockstack is a Public Benefit Corp
                      </h2>
                      <p className="mb-5">
                        Blockstack is both an open source project and a Public Benefit Corporation 
                        (PBC). Blockstack PBC, a Public Benefit Corp, upholds specific commitments 
                        to the greater public good in addition to stockholder interests. 
                        The mission of Blockstack PBC is to enable an open, decentralized internet. 
                        Blockstack PBC is committed to always keep the core Blockstack software 
                        open-source, and to support the decentralization of the Blockstack network. 
                        Blockstack PBC has historically taken the lead on Blockstack protocol 
                        development, but in the future will work with other parties to build a 
                        fully transparent and adaptable decentralized internet.  
                      </p>
                      <h2>
                        History
                      </h2>
                      <p className="mb-5">
                        Blockstack was started by Muneeb Ali and Ryan Shea in 2013. The first public 
                        launch of a registrar service (called the Onename App) was in March 2014 and 
                        the company went through Y Combinator in summer 2014. After YC, the company 
                        raised a Seed round led by Union Square Ventures. The company closed a Series 
                        A in January 2017, again led by Union Square Ventures, with investors including 
                        Lux Capital, Naval Ravikant, and Shana Fisher. Blockstack became a Public 
                        Benefit Corp in September 2017.
                      </p>
                      <h2>
                        Blockstack Values
                      </h2>
                      <p>
                        Blockstack is an open-source project with core developers and contributors 
                        located around the world, from New York City to Hong Kong. We believe the 
                        community is one of our greatest assets, and the team engages with users via 
                        Slack, Github, Twitter, and the Blockstack Forum in order to build the best 
                        product possible. 
                      </p>
                      <p>
                        Blockstack Team Values: (voted and decided collaboratively by the team)
                        <ul>
                          <li>Humility </li>
                          <li>Extreme Ownership </li>
                          <li>Collaborative Mindset </li>
                          <li>Possibilist</li>
                          <li>Mission-driven </li>
                        </ul>
                      </p>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid m-b-100">
            <div className="row">
              <div className="container">
                <div className="row">
                  <div className="container-fluid">
                    <TeamMembers />
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

export default AboutPage



