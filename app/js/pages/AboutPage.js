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
          <div className="container-fluid bg-white">
            <div className="row">
              <div className="container-fluid container-lg sectionWrap blog-post">
                <div className="row">
                  <div className="container">
                    <div className="row">
                      <div className="container-fluid">
                        <h2>
                          Our Mission
                        </h2>
                      </div>
                    </div>
                    <ContentSection className="" markup="
                      <p>
                        Blockstack is a new decentralized internet where you own your data and apps run
                        locally without remote servers.
                      </p>
                      <p>
                        Blockstack is an open source project with core developers and contributors
                        located around the world, from New York City to Hong Kong.
                      </p>
                      <p>
                        At Blockstack, we welcome developers and entrepreneurs of all kinds. Join our
                        community and build your own app or contribute to the core software.
                      </p>
                    "/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid bg-container-lightGray">
            <div className="row">
              <div className="container-fluid container-lg sectionWrap blog-post">
                <div className="row">
                  <div className="container">
                    <div className="row">
                      <div className="container-fluid">
                        <h2>
                          Blockstack Public Benefit Corp
                        </h2>
                      </div>
                    </div>
                    <ContentSection className="" markup="
                      <p>
                        Blockstack is a new decentralized internet where you own your data and apps run
                        locally without remote servers.
                      </p>
                      <p>
                        Blockstack is an open source project with core developers and contributors
                        located around the world, from New York City to Hong Kong.
                      </p>
                      <p>
                        At Blockstack, we welcome developers and entrepreneurs of all kinds. Join our
                        community and build your own app or contribute to the core software.
                      </p>
                    "/>
                  </div>
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



