import React from 'react'
import { teamMembers, founders, advisors } from './data'
import { slugify } from '@common/es6'
import { Image } from '@components/image'
import {
  StyledTeamMember,
  StyledTeamMembers
} from '@components/team-members/styled'

const TeamMember = ({ name, avatar, title, bio, blockstackId, ...rest }) => {
  const photoName = slugify(name)
  const photo = `images/team/${photoName}.jpg`

  return (
    <StyledTeamMember>
      <StyledTeamMember.Avatar>
        <Image src={photo} alt={name} />
      </StyledTeamMember.Avatar>
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
