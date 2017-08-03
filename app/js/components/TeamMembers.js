import { Component, PropTypes } from 'react'
import { Link }                 from 'react-router'

import TeamMember                    from '../components/TeamMember'
import {teamMembers}                    from '../config'

class TeamMembers extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="sectionContainerLight section-spacing container-fluid">
        <div className="container">
          <section>
            <h2 className="h-primary text-center">
              Team
            </h2>
            <div className="post-content m-t-3">
              {teamMembers.chunk(2).map((teamMemberRow, index) => {
                return (
                  <div className="row" key={index}>
                    {teamMemberRow.map((teamMember, subIndex) => {
                      return (
                        <TeamMember key={subIndex} profile={teamMember} />
                      )
                    })}
                  </div>
                )
              })}
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default TeamMembers