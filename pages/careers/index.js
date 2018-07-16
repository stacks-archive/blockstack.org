import React from 'react'
import Mission from './mission.md'
import Intro from './intro.md'
import Values from './values.md'
import { Jobs } from '@components/jobs'

import { fetchStats } from '@common/lib'

const meta = {
  path: '/careers',
  title: 'Careers',
  button: {
    href: '#openings',
    label: 'View Openings'
  }
}

class CareersPage extends React.PureComponent {
  static async getInitialProps(ctx) {
    const stats = await fetchStats()

    return {
      meta,
      stats
    }
  }

  render() {
    const users =
      this.props.stats && this.props.stats.meetup_users
        ? this.props.stats.meetup_users
        : '13769'
    return (
      <div>
        <h4>
          Blockstack is a new internet for decentralized apps. Our open-source
          community of {users} members globally is building protocols & tools
          that make it easy to build scalable decentralized apps.
        </h4>
        <br />
        <Intro />
        <Mission />
        <Values />
        <Jobs />
      </div>
    )
  }
}

export default CareersPage
