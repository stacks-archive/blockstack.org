'use strict'

import { Component }   from 'react'
import { Link }        from 'react-router'
import DocumentTitle   from 'react-document-title'

import Header          from '../components/Header'
import Footer          from '../components/Footer'
import CommunityMember from '../components/CommunityMember'
import { communityMembers } from '../data'

class AboutPage extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <DocumentTitle title="Blockstack - About">
        <div>
          <div className="container-fluid col-centered about-head-wrap">
            <Header />
          </div>
          <section className="m-b-5 m-t-5">
            <div className="container p-b-5 col-centered">
              <div className="container">
                <hgroup>
                  <h2 className="action-title">
                    About
                  </h2>
                </hgroup>
                <p>
                  First and foremost, Blockstack is a community.
                  It is a group of developers who are deeply committed to building decentralized applications and building out their underlying infrastructure.
                </p>
                <p>
                  Second, Blockstack is a software stack that provides applications with decentralized services, many of which are enabled by and are built on top of blockchain technology.
                  These services include decentralized naming, directories, identity, data storage, authentication, and more.
                </p>
                <p>
                  Decentralized naming and decentralized directories could be thought of as the unifying fabric for decentralized services.
                  This is why it is at the core of Blockstack software.
                </p>
                <p>
                  We have started and continued important discussions both in [the Blockstack Forum](http://forum.blockstack.org) and [the Blockstack Slack group](http://chat.blockstack.org) about the future of decentralized application development and the role Blockstack will play in this space going forward.
                  Progress is being made and issues are being resolved, and we are invite all who support the Blockstack mission to join the community and contribute.
                </p>
                <hgroup>
                  <h2 className="action-title">
                    Core Contributors
                  </h2>
                </hgroup>
                {communityMembers.map((communityMember) => {
                  return (
                    <CommunityMember
                      blockstackId={communityMember.blockstackId}
                      name={communityMember.name}
                      avatar={communityMember.avatar}
                      twitter={communityMember.twitter}
                      github={communityMember.github} />
                  )
                })}
              </div>
            </div>
            <Footer />
          </section>
        </div>
      </DocumentTitle>
    )
  }

}

export default AboutPage



