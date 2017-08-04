import { Component, PropTypes } from 'react'
import {Link}        from 'react-router'

import Image         from '../components/Image'

class JobListing extends Component {
  static propTypes: {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="row m-b-1">
        <div className="col-md-3">
          {this.props.title}
        </div>
        <div className="col-md-6">
          {this.props.description}
        </div>
        <div className="col-md-3">
            <Link to={this.props.url} target="_blank"
                  className="btn btn-primary btn-sm">
              Read More
            </Link>
        </div>
      </div>
    )
  }
}

export default JobListing