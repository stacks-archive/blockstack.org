import React from 'react'
import { TeamMemberList } from '@components/team-members/index'
import { board } from './data'

const list = {
  items: board
}

const BoardList = ({ ...rest }) => <TeamMemberList list={list} />

export { BoardList }
