import { Component } from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  dataID: PropTypes.string.isRequired,
  dataRatio: PropTypes.string.isRequired,
}

class EmbedSpeakerDeck extends Component {
  componentDidMount() {
    const script = document.createElement('script')
    script.src = '//speakerdeck.com/assets/embed.js'
    script.async = 1
    document.body.appendChild(script)
  }

  render() {
    return (
      <div>
        <div
          className="speakerdeck-embed"
          data-id={this.props.dataID}
          data-ratio={this.props.dataRatio}
        >
          Loading Slides ...
        </div>
      </div>
    )
  }
}

EmbedSpeakerDeck.propTypes = propTypes
export default EmbedSpeakerDeck
