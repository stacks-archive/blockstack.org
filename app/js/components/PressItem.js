import { Component } from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

class PressItem extends Component {
  static propTypes: {
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    publication: PropTypes.string,
    url: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="m-b-50">
        <h4 className="m-b-1">{this.props.publication}</h4>
        <p className="m-b-1">
          <Link to={this.props.url} target="_blank">
            {this.props.title}
          </Link>
        </p>
        <p className="m-b-1">{this.props.date}</p>
        <p className="m-b-1" />
      </div>
    );
  }
}

export default PressItem;
