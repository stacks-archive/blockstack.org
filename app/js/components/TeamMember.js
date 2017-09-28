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
      <div className="col-md-6 m-b-50 text-center">
        <Link to={`https://explorer.blockstack.org/name/${profile.blockstackId}.id`}
          target="_blank">
          <Image src={profile.avatar} className="avatar-lg" style={{ marginBottom: '5px' }}
            fallbackSrc="https://s3.amazonaws.com/onename/avatar-placeholder.png" />
        </Link>
        <h5 className="text-center font-weight-bold" style={{ marginTop: '10px', marginBottom: '10px' }}>{profile.name}</h5>
        <p style={{ fontSize: '1rem' }}>
          {profile.bio}
        </p>
      </div>
    )
  }
}

TeamMember.propTypes = propTypes
export default TeamMember