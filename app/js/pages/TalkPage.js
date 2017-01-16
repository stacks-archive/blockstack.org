'use strict'

import {Component}      from 'react'
import {Link}           from 'react-router'
import DocumentTitle    from 'react-document-title'

import Header           from '../components/Header'
import Footer           from '../components/Footer'
import Talk             from '../components/Talk'
import {talks}          from '../data'

class TalkPage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      talk: null
    }
    this.setTalk = this.setTalk.bind(this)
  }

  componentWillMount() {
    this.setTalk(this.props)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      this.setTalk(nextProps)
    }
  }

  setTalk(props) {
    if (props.routeParams.hasOwnProperty('slug')) {
      const slug = props.routeParams.slug
      if (talks.hasOwnProperty(slug)) {
        this.setState({
          talk: talks[slug]
        })
      }
    }
  }

  render() {
    const talk = this.state.talk,
          title = talk ? talk.title : 'Talk'
    return (
      <DocumentTitle title={`Blockstack - ${title}`}>
        <div>
          <div className="container-fluid col-centered navbar-fixed-top bg-primary">
            <Header />
          </div>
          { talk ?
          <section className="container-fluid spacing-container">
            <div className="container-fluid col-centered">
              <div className="container-fluid m-b-5">
                <div className="container">
                  <h1>
                    {talk.title}
                  </h1>
                </div>
                <div className="m-b-3">
                  <Talk
                    date={talk.date}
                    title={talk.title}
                    event={talk.event}
                    speaker={talk.speaker}
                    location={talk.location}
                    youtubeURL={talk.youtubeURL}
                    speakerDeckID={talk.speakerDeckID} />
                </div>
              </div>
            </div>
          </section>
          : null }
          <Footer />
        </div>
      </DocumentTitle>
    )
  }

}

export default TalkPage
