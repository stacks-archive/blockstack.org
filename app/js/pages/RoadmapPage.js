'use strict'

import { Component }        from 'react'
import DocumentTitle        from 'react-document-title'

import Header          from '../components/Header'
import Footer          from '../components/Footer'
import {milestones}    from '../config'

class RoadmapPage extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <DocumentTitle title="Blockstack Roadmap">
        <div>
          <div className="navbar-fixed-top bg-primary">
            <Header />
          </div>
          <section className="container-fluid spacing-container">
            <div className="container col-centered">
              <div className="container m-b-5" style={{ minHeight: '800px' }}>
                <h1>
                  Roadmap
                </h1>
                <div>
                  {milestones.map((milestone, index) => {
                    return (
                      <div key={index}>
                        <h3>{milestone.date}: {milestone.title}</h3>
                        <p>{milestone.description}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </DocumentTitle>
    )
  }

}

export default RoadmapPage