import { Component, PropTypes } from 'react'

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
        { this.props.youtubeURL && this.props.speakerDeckID ?
        <div className="row">          
          <div className="col-md-6">
            <EmbedYouTube src={this.props.youtubeURL} />
          </div>
          <div className="col-md-6">
            <EmbedSpeakerDeck
              dataID={this.props.speakerDeckID}
              dataRatio="1.77777777777778" />
          </div>
        </div>
        : null }
        { this.props.youtubeURL && !this.props.speakerDeckID ?
        <div className="row">          
          <div className="col-md-12">
            <EmbedYouTube src={this.props.youtubeURL} />
          </div>
        </div>
        : null }
      </div>
    )
  }
}

export default Talk


