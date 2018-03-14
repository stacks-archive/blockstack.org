'use strict'

import { Component } from 'react'
import DocumentTitle from 'react-document-title'

import Talk from '../components/Talk'
import { videos } from '../../constants.json'

class TalkPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      talk: null,
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
      videos.forEach((video) => {
        if (video.urlSlug === slug) {
          this.setState({
            talk: video,
          })
        }
      })
    }
  }

  render() {
    const talk = this.state.talk,
      title = talk ? talk.title : 'Talk'
    return (
      <DocumentTitle title={`Blockstack - ${title}`}>
        <div>
          {talk ? (
            <div className="container container-lg sectionWrap blog-post bg-white m-b-100">
              <div className="row">
                <div className="container">
                  <div className="row">
                    <div className="container">
                      <h2 className="m-b-25">{talk.title}</h2>
                    </div>
                  </div>
                  <div className="m-b-30">
                    <Talk
                      date={talk.date}
                      title={talk.title}
                      event={talk.event}
                      speaker={talk.speaker}
                      location={talk.location}
                      youtubeURL={talk.youtubeURL}
                      speakerDeckID={talk.speakerDeckID}
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </DocumentTitle>
    )
  }
}

export default TalkPage
