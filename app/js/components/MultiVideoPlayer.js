import { Component } from 'react'
import { Link } from 'react-router'
import EmbedYouTube from './EmbedYouTube'
import PropTypes from 'prop-types'

const propTypes = {
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      previewImageUrl: PropTypes.string,
      thumbnailImageUrl: PropTypes.string,
    }),
  ).isRequired,
}

class MultiVideoPlayer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeVideoIndex: 0,
      initialState: true,
      preview: this.props.previewImageUrl !== undefined,
    }

    this.handleMiniVideoClick = this.handleMiniVideoClick.bind(this)
  }

  playVideo() {
    this.setState({
      preview: false,
    })
  }

  handleMiniVideoClick(e, videoIndex) {
    e.preventDefault()
    this.setState({
      initialState: false,
      activeVideoIndex: videoIndex,
    })
  }

  render() {
    return (
      <div>
        {this.props.videos.length > 0 && (
          <div>
            <div className="container container-md m-b-25">
              <div className="row">
                <EmbedYouTube
                  previewImageUrl={
                    this.props.videos[this.state.activeVideoIndex]
                      .previewImageUrl
                  }
                  src={this.props.videos[this.state.activeVideoIndex].src}
                  showPreview={this.state.initialState}
                  autoplay={!this.state.initialState}
                />
              </div>
            </div>
            <div className="container container-md">
              <div className="row">
                <div className="row">
                  {this.props.videos.map((video, index) => {
                    return (
                      <div className="col-4" key={index}>
                        <Link
                          className={`img-hover-scale
					              	${this.state.activeVideoIndex === index ? 'active' : ''}`}
                          onClick={(e) => this.handleMiniVideoClick(e, index)}
                          to="#"
                        >
                          <img
                            src={video.thumbnailImageUrl}
                            className="img-fluid"
                          />
                        </Link>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

MultiVideoPlayer.propTypes = propTypes

export default MultiVideoPlayer
