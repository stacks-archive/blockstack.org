import { Component, PropTypes } from 'react'

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

    this.state = {
      src: this.props.src
    }

    this.onError = this.onError.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      this.setState({
        src: nextProps.src
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

export default Image