import { Component, PropTypes } from 'react'
import Image from './Image'

const propTypes = {
  src: PropTypes.string.isRequired,
  previewImageUrl: PropTypes.string
}

class EmbedYouTube extends Component {

	constructor(props) {
		super(props)

		this.state = {
			preview: this.props.previewImageUrl !== undefined,
		}

		this.playVideo = this.playVideo.bind(this)
	}

	playVideo() {
		this.setState({
			preview: false
		})
	}

	render() {

		const autoplay = this.props.previewImageUrl !== undefined ? '?autoplay=1' : ''

		return (
		  <div className="embed-responsive embed-responsive-16by9 cursor-pointer">
		   	{this.state.preview ?
        	<Image className="embed-responsive-item"
        		src={this.props.previewImageUrl}
        		fallbackSrc=""
        		retinaSupport={false} 
        		onClick={this.playVideo}/>
		   		:
			    <iframe
			      className="embed-responsive-item"
			      src={`${this.props.src}${autoplay}`}
			      frameBorder="0"
			      allowFullScreen>
			    </iframe>
		  	}
		  </div>
		)
	}

}

EmbedYouTube.propTypes = propTypes

export default EmbedYouTube
