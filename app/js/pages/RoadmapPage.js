'use strict'

import { Component }        from 'react'
import DocumentTitle        from 'react-document-title'

import {milestones}    from '../../constants.json'

class RoadmapPage extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <DocumentTitle title="Blockstack Roadmap">
        <div>
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
                        <h3>{milestone.date}{milestone.date.length > 0 && ':'} {milestone.title}</h3>
                        {milestone.parts.length > 1 ? 
                          milestone.parts.map((part, index) => {
                            return (
                              <p key={index}>
                                {part.title.length > 0 ? <strong>{part.title}:</strong> : ''}
                                {part.description}
                              </p>
                              )
                          })
                          : 
                          <p>{milestone.description}</p>
                        }
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </section>
        </div>
      </DocumentTitle>
    )
  }

}

export default RoadmapPage