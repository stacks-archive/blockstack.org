'use strict'

import {Component}      from 'react'
import {Link}           from 'react-router'
import DocumentTitle    from 'react-document-title'

import Header           from '../components/Header'
import Footer           from '../components/Footer'
import Talk             from '../components/Talk'
import {talks}          from '../data'

class TalksPage extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <DocumentTitle title="Blockstack - Talks">
        <div>
          <div className="container-fluid col-centered navbar-fixed-top bg-primary">
            <Header />
          </div>
          <section className="container-fluid spacing-container">
            <div className="container-fluid col-centered">
              <div className="container-fluid m-b-5">
                <div className="container">
                  <h1>
                    Blockstack Talks
                  </h1>
                </div>
                { Object.keys(talks).map((key, index) => {
                  const talk = talks[key]
                  return (
                    <div className="m-b-3" key={index}>
                      <Talk
                        date={talk.date}
                        title={talk.title}
                        event={talk.event}
                        speaker={talk.speaker}
                        location={talk.location}
                        youtubeURL={talk.youtubeURL}
                        speakerDeckID={talk.speakerDeckID} />
                    </div>
                  )
                }) }
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </DocumentTitle>
    )
  }

}

export default TalksPage
