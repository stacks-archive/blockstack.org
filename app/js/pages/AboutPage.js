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
          <section className="m-t-5">
            <div className="container p-b-5 col-centered">
              <div className="container">
                <section className="m-t-100">
                  <div className="container col-centered blog-post">
                    <div className="container">
                      <div className="post-header">
                        <h1>
                          About
                        </h1>
                      </div>
                    </div>
                  </div>
                </section>
                <ContentSection className="m-b-3" markup="
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
              <TeamMembers />
              </div>
            </div>
          </section>
        </div>
      </DocumentTitle>
    )
  }

}

export default AboutPage



