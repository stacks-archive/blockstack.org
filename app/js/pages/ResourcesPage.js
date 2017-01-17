'use strict'

import {Component}      from 'react'
import {Link}           from 'react-router'
import DocumentTitle    from 'react-document-title'

import Header           from '../components/Header'
import Footer           from '../components/Footer'
import TalkPreview      from '../components/TalkPreview'
import Paper            from '../components/Paper'
import {talks, papers}  from '../data'

class TalksPage extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <DocumentTitle title="Blockstack - Videos">
        <div>
          <div className="navbar-fixed-top bg-primary">
            <Header />
          </div>
          <section className="container-fluid spacing-container">
            <div className="container-fluid col-centered">
              <div className="container m-b-1">
                <h1>
                  Papers
                </h1>
                { papers.map((paper, index) => {
                  return (
                    <Paper key={index}
                      date={paper.date}
                      title={paper.title}
                      publication={paper.publication}
                      authors={paper.authors}
                      url={paper.url}
                      index={index} />
                  )
                }) }
              </div>
              <div className="container m-b-1">
                <h1>
                  Talks
                </h1>
                { Object.keys(talks).map((key, index) => {
                  const talk = talks[key]
                  return (
                    <TalkPreview
                      key={index}
                      url={'/resources/' + talk.urlSlug}
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
          <Footer />
        </div>
      </DocumentTitle>
    )
  }

}

export default TalksPage
