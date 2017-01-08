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
      <div className="row">
        <div className="col-md-12">
          <h4>
            {this.props.title}
          </h4>
          <div className="row">
            <div className="col-md-9">
              <p>{this.props.description}</p>
            </div>
            <div className="col-md-3">
                <Link to={this.props.url} target="_blank"
                      className="btn btn-primary btn-sm">
                  Read More
                </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default JobListing