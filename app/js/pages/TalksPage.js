'use strict'

import {Component}      from 'react'
import {Link}           from 'react-router'
import DocumentTitle    from 'react-document-title'

import Header           from '../components/Header'
import Footer           from '../components/Footer'
import EmbedSpeakerDeck from '../components/EmbedSpeakerDeck'
import EmbedYouTube     from '../components/EmbedYouTube'

class TalksPage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      talks: [
        {
          title: "Welcome to the New Internet",
          event: "TEDxNewYork",
          speaker: "Muneeb Ali",
          location: "New York",
          date: "September 10, 2016",
          youtubeURL: "https://www.youtube.com/embed/qtOIh93Hvuw?list=PLvaRUGvjpFS2ciobOlOwMeVKDqO7S9ar6",
          speakerDeckID: "15d4861b7c1842bfbd7add80c99e1cf6",
        },
        {
          title: "Innovation & Inclusion w/ Decentralized Apps",
          event: "New Context Conference Fall 2016",
          speaker: "Ryan Shea",
          location: "San Francisco, CA",
          date: "November 4, 2016",
          youtubeURL: "https://www.youtube.com/embed/nknocjo7t00",
          speakerDeckID: "9a0dca48d9cc4da98e0d1b3094fe4ec1",
        },
        {
          title: "Decentralized, Server-less Applications with Blockstack",
          event: "All Things Open",
          speaker: "Ryan Shea",
          location: "Raleigh, NC",
          date: "October 27, 2016",
          youtubeURL: "https://www.youtube.com/embed/WveXpldGGa8",
          speakerDeckID: "434d4f23ad40417aadfe86643671a5bd",
        },
        {
          title: "Experiences with Building a Global PKI with Blockchains",
          event: "CITP Luncheon Speaker Series",
          speaker: "Muneeb Ali",
          location: "Princeton, NJ",
          date: "March 8, 2016",
          youtubeURL: "https://www.youtube.com/embed/sBJobY0Aqt0",
          speakerDeckID: "e7608b083c5d4ef68a199cd4f6b74026",
        },
      ]
    }
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
                { this.state.talks.map((talk, index) => {
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
