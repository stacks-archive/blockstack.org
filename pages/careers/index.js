import React from 'react'
import Photos from './photos.md'
import Intro from './intro.md'
import Working from './working.md'
import { Jobs } from '@components/jobs'
import fetch from 'cross-fetch'
const fetchStats = async () => {
  try {
    const res = await fetch(
      'https://blockstack-site-api.herokuapp.com/v1/stats'
    )
    if (res.status >= 400) {
      console.log('Bad response from server')
    }
    return res.json()
  } catch (error) {
    console.log('error', error)
  }
}

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
    return (
      <div>
        <br />
        <Intro />
        <Photos />
        <Working />
        <Jobs />
      </div>
    )
  }
}

export default CareersPage
