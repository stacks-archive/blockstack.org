import { Component, PropTypes } from 'react'
import {Link}           from 'react-router'

import Image            from '../components/Image'

class TalkPreview extends Component {
  static propTypes: {
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    event: PropTypes.string.isRequired,
    speaker: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="row m-b-1">
        <div className="col-md-4">
          <Link to={this.props.url}>
            <Image src={this.props.image}
              fallbackSrc={'/images/article-photos/chalkboard.jpg'}
              className="talk-preview-image" />
          </Link>
        </div>
        <div className="col-md-8">
          <h4 className="m-t-0 m-b-1">
            {this.props.title}
          </h4>
          <p className="m-b-1">
            {this.props.speaker} - {this.props.event} - {this.props.date}
          </p>
          <p className="m-b-1">
            <Link to={this.props.url}
                  className="btn btn-sm btn-outline-primary">
              Watch
            </Link>
          </p>
        </div>
      </div>
    )
  }
}

export default TalkPreview
