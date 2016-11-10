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
          <div className="container-fluid col-centered navbar-fixed-top bg-primary">
            <Header />
          </div>
          <section className="m-t-5">
            <div className="container p-b-5 col-centered">
              <div className="container">
                <div className="m-b-3 p-t-1">
                  <hgroup>
                    <h1 className="action-title">
                      About
                    </h1>
                  </hgroup>
                </div>
                <div className="m-b-3">
                  <p>
                    Blockstack is a new internet for decentralized, server-less applications.
                    Building on Blockstack starts with single-page applications built in Javascript that
                    are downloaded onto user devices.
                    Developers plug into blockstack.js, which provides API’s for authenticating the user,
                    grabbing application data from the user, and storing new application data with the
                    user (encrypted and backed up to cloud storage).
                    The blockchain is utilized to maintain a cross-application identity system, securely
                    mapping user IDs to usernames, public keys, and data storage URIs.
                    Developers don’t have to worry about running servers, maintaining databases, or
                    building out user management systems, and decentralized, server-less applications
                    can be built more simply than their traditional counterparts.
                  </p>
                </div>
                <div>
                  <hgroup>
                    <h4 className="action-title m-b-3">
                      Main Contributors
                    </h4>
                  </hgroup>
                  <div>
                  {communityMembers.map((communityMember, index) => {
                    return (
                      <CommunityMember
                        key={index}
                        blockstackId={communityMember.blockstackId}
                        name={communityMember.name}
                        avatar={communityMember.avatar}
                        twitter={communityMember.twitter}
                        github={communityMember.github}
                        facebook={communityMember.facebook} />
                    )
                  })}
                  </div>
                </div>
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



