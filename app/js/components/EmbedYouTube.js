import { PropTypes } from 'react'

const propTypes = {
  src: PropTypes.string.isRequired,
}

const EmbedYouTube = ({ src }) => (
  <div className="media-screen">
    <div className="container no-padding">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          ref="iframeWrapper"
          className="embed-responsive-item"
          src={src}
          frameBorder="0"
          allowFullScreen>
        </iframe>
      </div>
    </div>
  </div>
)

EmbedYouTube.propTypes = propTypes

export default EmbedYouTube
