import { Component, PropTypes } from 'react'
import {Link}           from 'react-router'

import Image            from '../components/Image'

class TutorialPreview extends Component {
  static propTypes: {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props.image)
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
          <h4 className="m-b-1">
            {this.props.title}
          </h4>
          <p className="m-b-1">
            {this.props.description}
          </p>
          <p className="m-b-1">
            <Link to={this.props.url}
                  className="btn btn-sm btn-outline-primary">
              Get Started
            </Link>
          </p>
        </div>
      </div>
    )
  }
}

export default TutorialPreview
