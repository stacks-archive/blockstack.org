import { Component, PropTypes } from 'react'
import { Link }                 from 'react-router'

import Image                    from '../components/Image'

const propTypes = {
  blockstackId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  github: PropTypes.string,
  twitter: PropTypes.string,
  isCentered: PropTypes.bool
}

class CommunityMember extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    let extraWrapperClass = "text-xs-center"
    if (this.props.isCentered === false) {
      extraWrapperClass = ""
    }

    return (
      <div>
        <div className={`container no-padding ${extraWrapperClass}`}>
          <Link to={"https://onename.com/" + this.props.blockstackId} target="_blank">
            <Image
              src={this.props.avatar}
              fallbackSrc="https://s3.amazonaws.com/onename/avatar-placeholder.png"
              className="avatar-md" />
          </Link>
          <p style={{ marginBottom: '5px' }}>{this.props.name}</p>
          { this.props.twitter ?
          <Link to={"https://twitter.com/" + this.props.twitter}  target="_blank">
            <i className="fa fa-twitter fa-lg">
            </i>
          </Link>
          : null }
          { this.props.github ?
          <Link to={"https://github.com/" + this.props.github}  target="_blank">
            <i className="fa fa-github fa-lg">
            </i>
          </Link>
          : null }
          { this.props.facebook ?
          <Link to={"https://facebook.com/" + this.props.facebook}  target="_blank">
            <i className="fa fa-facebook fa-lg">
            </i>
          </Link>
          : null }
        </div>
      </div>
    )
  }
}

CommunityMember.propTypes = propTypes
export default CommunityMember