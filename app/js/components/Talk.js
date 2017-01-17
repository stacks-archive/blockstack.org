import { Component, PropTypes } from 'react'
import {Link}           from 'react-router'

import EmbedSpeakerDeck from '../components/EmbedSpeakerDeck'
import EmbedYouTube     from '../components/EmbedYouTube'

class Talk extends Component {
  static propTypes: {
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    event: PropTypes.string.isRequired,
    speaker: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    youtubeURL: PropTypes.string.isRequired,
    speakerDeckID: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div className="container">
          <p>
            <b>Date:</b> {this.props.date}
            <br/>
            <b>Event:</b> {this.props.event}
            <br/>
            <b>Speaker:</b> {this.props.speaker}
            <br/>
            <b>Location:</b> {this.props.location}
          </p>
        </div>
        <div className="row">
          { this.props.youtubeURL ?
          <div className="col-md-6">
            <EmbedYouTube src={this.props.youtubeURL} />
          </div>
          : null }
          { this.props.speakerDeckID ?
          <div className="col-md-6">
            <EmbedSpeakerDeck
              dataID={this.props.speakerDeckID}
              dataRatio="1.77777777777778" />
          </div>
          : null }
        </div>
      </div>
    )
  }
}

export default Talk


