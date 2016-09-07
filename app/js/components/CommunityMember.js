import { Component, PropTypes } from 'react'
import { Link }                 from 'react-router'

import Image                    from '../components/Image'

class CommunityMember extends Component {
  static propTypes: {
    blockstackId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    github: PropTypes.string,
    twitter: PropTypes.string
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="col-md-3 text-xs-center m-b-30 no-padding">
        <Link to={"https://onename.com/" + this.props.blockstackId} target="_blank">
          <Image src={this.props.avatar} className="avatar-lg" />
        </Link>
        <h3 className="center">{this.props.name}</h3>
        { this.props.twitter ?
        <Link to={"https://twitter.com/" + this.props.twitter} target="_blank">
          <i className="fa fa-twitter fa-lg">
          </i>
        </Link>
        : null }
        { this.props.github ?
        <Link to={"https://github.com/" + this.props.github} target="_blank">
          <i className="fa fa-github fa-lg">
          </i>
        </Link>
        : null }
        { this.props.facebook ?
        <Link to={"https://facebook.com/" + this.props.facebook} target="_blank">
          <i className="fa fa-facebook fa-lg">
          </i>
        </Link>
        : null }
      </div>
    )
  }
}

export default CommunityMember