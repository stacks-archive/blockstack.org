import { Component } from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import Image from '../components/Image';

class TutorialPreview extends Component {
  static propTypes: {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
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
            <p className="lead card-media-title">{this.props.title}</p>
            <p className="card-text card-text-media">
              {this.props.description}
            </p>
            <div className="container-fluid">
              <div className="row">
                <Link
                  to={this.props.url}
                  className="btn btn-secondary btn-sm btn-block"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TutorialPreview;
