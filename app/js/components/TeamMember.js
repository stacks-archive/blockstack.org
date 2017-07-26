import { Component, PropTypes } from 'react'
import { Link }                 from 'react-router'

import Image                    from '../components/Image'

const propTypes = {
  profile: PropTypes.object.isRequired
}

class TeamMember extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const profile = this.props.profile

    return (
      <div className="col-md-6 m-b-3">
        <Link to={`https://explorer.blockstack.org/name/${profile.blockstackId}.id`}
          target="_blank">
          <Image src={profile.avatar} className="avatar-lg"
            fallbackSrc="https://s3.amazonaws.com/onename/avatar-placeholder.png" />
        </Link>
        <h4 className="center" style={{ marginBottom: '5px' }}>{profile.name}</h4>
        <p>
          {profile.bio}
        </p>
      </div>
    )
  }
}

TeamMember.propTypes = propTypes
export default TeamMember