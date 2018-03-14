import { Component } from 'react'
import { Link } from 'react-router'
import PropTypes from 'prop-types'
import Image from '../components/Image'

class TalkPreview extends Component {
  static propTypes: {
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    event: PropTypes.string.isRequired,
    speaker: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="card card-media">
        <div className="row">
          <div className="col-md-5 m-b-25">
            <Link to={this.props.url}>
              <Image
                src={this.props.image}
                fallbackSrc={'/images/article-photos/chalkboard.jpg'}
                className="talk-preview-image"
              />
            </Link>
          </div>
          <div className="col-md-7 m-b-25">
            <p className="lead card-media-title" style={{ marginTop: '0' }}>
              {this.props.title}
            </p>
            <p className="card-text card-text-media">
              {this.props.speaker} - {this.props.event} - {this.props.date}
            </p>
            <div className="container-fluid">
              <div className="row">
                <Link to={this.props.url} className="btn btn-secondary btn-sm">
                  Watch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TalkPreview
