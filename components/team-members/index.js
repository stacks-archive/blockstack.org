import React from 'react'
import { teamMembers, founders, advisors } from '@common'
import { slugify } from '@common/lib'

import {
  StyledTeamMember,
  StyledTeamMembers
} from '@components/team-members/styled'

const TeamMember = ({ name, avatar, title, bio, blockstackId, ...rest }) => {
  const photoName = slugify(name)
  const photo = require(`../../assets/images/team/${photoName}.jpg`)

  return (
    <StyledTeamMember>
      <StyledTeamMember.Avatar src={photo} alt={name} />
      <h3>{name}</h3>
      {title ? <h5>{title}</h5> : null}
      <h6>
        {blockstackId.includes('.') ? blockstackId : `${blockstackId}.id`}
      </h6>
      <p>{bio}</p>
    </StyledTeamMember>
  )
}

const renderTeamMembers = (list) =>
  list.map((member, i) => <TeamMember {...member} key={i} />)

const TeamMembers = (props) => (
  <>
    <StyledTeamMembers>{renderTeamMembers(founders)}</StyledTeamMembers>
    <StyledTeamMembers>{renderTeamMembers(teamMembers)}</StyledTeamMembers>
    <StyledTeamMembers>{renderTeamMembers(advisors)}</StyledTeamMembers>
  </>
)

export default TeamMembers
