import { Component } from 'react'
import PropTypes from 'prop-types'
import EmbedSpeakerDeck from '../components/EmbedSpeakerDeck'
import EmbedYouTube from '../components/EmbedYouTube'

class Talk extends Component {
  static propTypes: {
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    event: PropTypes.string.isRequired,
    speaker: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    youtubeURL: PropTypes.string.isRequired,
    speakerDeckID: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        {this.props.youtubeURL && this.props.speakerDeckID ? (
          <div className="row">
            <div className="col-md-6">
              <EmbedYouTube src={this.props.youtubeURL} />
            </div>
            <div className="col-md-6">
              <EmbedSpeakerDeck
                dataID={this.props.speakerDeckID}
                dataRatio="1.77777777777778"
              />
            </div>
          </div>
        ) : null}
        {this.props.youtubeURL && !this.props.speakerDeckID ? (
          <div className="bg-white">
            <div className="container container-lg">
              <div className="row">
                <EmbedYouTube src={this.props.youtubeURL} />
              </div>
            </div>
          </div>
        ) : null}
        <div className="container m-t-20">
          <div className="row">
            <p
              style={{
                fontSize: '13px',
                marginBottom: '0',
                lineHeight: '1.25rem',
              }}
            >
              <b>Date:</b> {this.props.date}
            </p>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <p
              style={{
                fontSize: '13px',
                marginBottom: '0',
                lineHeight: '1.25rem',
              }}
            >
              <b>Event:</b> {this.props.event}
            </p>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <p
              style={{
                fontSize: '13px',
                marginBottom: '0',
                lineHeight: '1.25rem',
              }}
            >
              <b>Speaker:</b> {this.props.speaker}
            </p>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <p
              style={{
                fontSize: '13px',
                marginBottom: '0',
                lineHeight: '1.25rem',
              }}
            >
              <b>Location:</b> {this.props.location}
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Talk
