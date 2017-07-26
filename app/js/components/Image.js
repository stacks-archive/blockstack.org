import { Component, PropTypes } from 'react'
import isRetina from 'is-retina'

const propTypes = {
  src: PropTypes.string.isRequired,
  fallbackSrc: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
  onLoad: PropTypes.func,
  retinaSupport: PropTypes.bool
}

class Image extends Component {

  constructor(props) {
    super(props)

    let src = this.props.src
    if (this.props.retinaSupport && isRetina()) {
      src = src.replace('.jpg', '@2x.jpg').replace('.png', '@2x.png')
    }
    this.state = {
      src: src
    }

    this.onError = this.onError.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      let nextSrc = nextProps.src
      if (this.props.retinaSupport && isRetina()) {
        nextSrc = nextSrc.replace('.jpg', '@2x.jpg').replace('.png', '@2x.png')
      }
      this.setState({
        src: nextSrc
      })
    }
  }

  onError(event) {
    this.setState({
      src: this.props.fallbackSrc
    })
  }

  render() {
    return (
      <img src={this.state.src}
        style={this.props.style}
        className={this.props.className}
        onLoad={this.props.onLoad}
        onError={this.onError} />
    )
  }
}

Image.propTypes = propTypes
export default Image