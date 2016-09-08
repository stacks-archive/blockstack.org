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
                <hgroup>
                  <h3 className="action-title p-t-5">
                    About
                  </h3>
                </hgroup>
                <p>
                  Blockstack is a movement to build the decentralized web.
                  This movement is made of hackers, designers, and entrepreneurs from around the world
                  deeply committed to the future of the Internet and the World Wide Web as
                  bastions of innovation, freedom, and economic inclusion.
                  Blockstack is about pushing power to the edges with decentralized applications
                  and allowing users to be in control of their data, identities and software.
                </p>
                <p className="m-b-5">
                  Blockstack has protocols and software projects that when used together
                  are a powerful way for developers to build decentralized applications.
                  Blockstack Core provides decentralized naming, public key infrastructure, and storage.
                  Blockstack Auth provides support for decentralized identity and authentication.
                  Blockstack clients like the Blockstack CLI, Onename, and the Blockstack Browser
                  provide complete packages that hook into Blockstack Core and Blockstack Auth.
                </p>
                <hgroup>
                  <h4 className="action-title m-b-3">
                    Main Contributors
                  </h4>
                </hgroup>
                <div>
                {communityMembers.map((communityMember) => {
                  return (
                    <CommunityMember
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
            <Footer />
          </section>
        </div>
      </DocumentTitle>
    )
  }

}

export default AboutPage



