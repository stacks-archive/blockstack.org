import { Component, PropTypes } from 'react'

const propTypes = {
  src: PropTypes.string.isRequired,
}

class EmbedYouTube extends Component {

  constructor(props) {
    super(props)

    this.state = {
      height: 440
    }
  }

  componentDidMount() {
    const ratio = 440/672
    const iframeWrapper = this.refs.iframeWrapper
    const width = iframeWrapper.getBoundingClientRect().width
    const newHeight = width*ratio
    this.setState({
      height: newHeight
    })
  }

  render() {
    return (
      <div className="media-screen">
        <div className="container">
          <iframe
            ref="iframeWrapper"
            width="100%"
            height={this.state.height}
            src={this.props.src}
            frameBorder="0"
            allowFullScreen>
          </iframe>
        </div>
      </div>
    );
  }
}

EmbedYouTube.propTypes = propTypes
export default EmbedYouTube
