'use strict'

import {Component}      from 'react'
import DocumentTitle    from 'react-document-title'

import TalkPreview      from '../components/TalkPreview'
import {talks}          from '../config'

class TalksPage extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <DocumentTitle title="Blockstack - Videos">
        <div>
          <section className="container-fluid spacing-container">
            <div className="container-fluid col-centered">
              <div className="container m-b-1">
                <h1>
                  Videos
                </h1>
                { Object.keys(talks).map((key, index) => {
                  const talk = talks[key]
                  return (
                    <TalkPreview
                      key={index}
                      url={'/videos/' + talk.urlSlug}
                      date={talk.date}
                      title={talk.title}
                      event={talk.event}
                      speaker={talk.speaker}
                      location={talk.location}
                      image={talk.image} />
                  )
                }) }
              </div>
            </div>
          </section>
        </div>
      </DocumentTitle>
    )
  }

}

export default TalksPage
