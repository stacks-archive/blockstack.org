'use strict'

import {Component}      from 'react'
import {Link}           from 'react-router'
import DocumentTitle    from 'react-document-title'

import Header           from '../components/Header'
import Footer           from '../components/Footer'
import EmbedSpeakerDeck from '../components/EmbedSpeakerDeck'
import EmbedYouTube     from '../components/EmbedYouTube'
import {talks}          from '../data'

class TalksPage extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <DocumentTitle title="Blockstack - Videos">
        <div>
          <div className="container-fluid col-centered navbar-fixed-top bg-primary">
            <Header />
          </div>
          <section className="container-fluid spacing-container">
            <div className="container-fluid col-centered">
              <div className="container-fluid m-b-5">
                <div className="container">
                  <h1>
                    Blockstack Videos
                  </h1>
                </div>
                { talks.map((talk, index) => {
                  return (
                    <div className="m-b-3" key={index}>
                      <div className="container">
                        <p>
                          <b>Date:</b> {talk.date}
                          <br/>
                          <b>Title:</b> {talk.title}
                          <br/>
                          <b>Event:</b> {talk.event}
                          <br/>
                          <b>Speaker:</b> {talk.speaker}
                          <br/>
                          <b>Location:</b> {talk.location}
                        </p>
                      </div>
                      <div className="row">
                        { talk.youtubeURL ?
                        <div className="col-md-6">
                          <EmbedYouTube src={talk.youtubeURL} />
                        </div>
                        : null }
                        { talk.speakerDeckID ?
                        <div className="col-md-6">
                          <EmbedSpeakerDeck
                            dataID={talk.speakerDeckID}
                            dataRatio="1.77777777777778" />
                        </div>
                        : null }
                      </div>
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
