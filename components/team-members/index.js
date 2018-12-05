import React from 'react'
import { teamMembers, board, founders, advisors } from './data'
import { Type } from '@components/typography'
import { Box } from 'blockstack-ui'
import { slugify } from '@common/es6'
import { Image } from '@components/image'
import {
  StyledTeamMember,
  StyledTeamMembers
} from '@components/team-members/styled'

const TeamMember = ({ name, avatar, title, bio, blockstackId }) => {
  const photoName = slugify(name)
  const photo = `images/team/${photoName}.jpg`

  return (
    <StyledTeamMember>
      <StyledTeamMember.Avatar>
        <Image src={photo} alt={name} />
      </StyledTeamMember.Avatar>
      <h3>{name}</h3>
      {title ? <h5>{title}</h5> : null}
      {blockstackId ? (
        <h6>
          {blockstackId.includes('.') ? blockstackId : `${blockstackId}.id`}
        </h6>
      ) : null}
      <p>{bio}</p>
    </StyledTeamMember>
  )
}

const TeamMemberList = ({ list }) => (
  <>
    <Box pb={5}>
      <h3>{list.title}</h3>
    </Box>
    <StyledTeamMembers>
      {list.items.map((member, i) => (
        <TeamMember {...member} key={i} />
      ))}
    </StyledTeamMembers>
  </>
)

const lists = [
  {
    title: 'Advisory Board',
    items: board
  },
  {
    title: 'Team Members',
    items: teamMembers
  },
  {
    title: 'Advisors',
    items: advisors
  }
]

const TeamMembers = () =>
  lists.map((list, i) => <TeamMemberList list={list} key={i} />)

export default TeamMembers
