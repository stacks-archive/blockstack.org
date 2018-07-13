import React from 'react'
import Mission from './mission.md'
import Intro from './intro.md'
import Values from './values.md'
import { Jobs } from '@components/jobs'

import { fetchJobs, fetchStats } from '@common/lib'

const meta = {
  path: '/careers',
  title: 'Careers',

  button: {
    href: '#openings',
    label: 'View Openings'
  },
  description:
    'Blockstack is a new internet for decentralized apps that you access through the Blockstack Browser. With Blockstack, there is a new world of apps that let you own your data and maintain your privacy, security and freedom.'
}

class CareersPage extends React.PureComponent {
  static async getInitialProps(ctx) {
    const jobs = await fetchJobs()
    const stats = await fetchStats()

    return {
      meta,
      jobs,
      stats
    }
  }

  render() {
    return (
      <div>
        <h4>
          Blockstack is a new internet for decentralized apps. Our open-source
          community of {this.props.stats.meetup_users} members globally is
          building protocols & tools that make it easy to build scalable
          decentralized apps.
        </h4>
        <br />
        <Intro />
        <Mission />
        <Values />
        <Jobs list={this.props.jobs} />
      </div>
    )
  }
}

export default CareersPage
