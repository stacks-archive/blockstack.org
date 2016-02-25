import { Component, PropTypes } from 'react'
import isRetina from 'is-retina'

class Image extends Component {
  static propTypes: {
    src: PropTypes.string.isRequired,
    fallbackSrc: PropTypes.string.isRequired,
    style: PropTypes.object,
    className: PropTypes.string,
    onLoad: PropTypes.func
  }

  constructor(props) {
    super(props)

    let src = this.props.src
    if (isRetina()) {
      src = src.replace('.jpg', '@2x.jpg')
    }
    this.state = {
      src: src
    }

    this.onError = this.onError.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      let nextSrc = nextProps.src
      if (isRetina()) {
        nextSrc = nextSrc.replace('.jpg', '@2x.jpg')
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
    if (isRetina()) {
      console.log('this is retina!')
    } else {
      console.log('this is not retina')
    }

    return (
      <img src={this.state.src}
        style={this.props.style}
        className={this.props.className}
        onLoad={this.props.onLoad}
        onError={this.onError} />
    )
  }
}

export default Image