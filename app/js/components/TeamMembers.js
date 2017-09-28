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
      <div className="container-fluid sectionWrap bg-white">
        <div className="row">
          <div className="container container-lg">
            <div className="row">
              <div className="container-fluid">
                <h2 className="text-center m-b-65">
                  Team
                </h2>
                <div className="post-content">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TeamMembers