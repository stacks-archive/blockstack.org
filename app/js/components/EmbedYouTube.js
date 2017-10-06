import { Component, PropTypes } from 'react'
import Image from './Image'

const propTypes = {
  src: PropTypes.string.isRequired,
  previewImageUrl: PropTypes.string,
  showPreview: PropTypes.bool,
  autoplay: PropTypes.bool
}

class EmbedYouTube extends Component {

	constructor(props) {
		super(props)

		this.state = {
			preview: this.props.showPreview
		}

		this.playVideo = this.playVideo.bind(this)
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			preview: nextProps.showPreview
		})
	}

	playVideo() {
		this.setState({
			preview: false
		})
	}

	render() {

		const autoplay = (this.props.previewImageUrl || (this.props.autoplay)) ? '?autoplay=1' : ''

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
