import React from 'react'
import fetch from 'cross-fetch'
import Mission from './mission.md'
import Intro from './intro.md'
import Values from './values.md'
import { Jobs } from '@components/jobs'

const meta = {
  path: '/careers',
  title: 'Careers',
  template: 'secondary',
  button: {
    href: '#openings',
    label: 'View Openings'
  },
  description:
    'Blockstack is a new internet for decentralized apps that you access through the Blockstack Browser. With Blockstack, there is a new world of apps that let you own your data and maintain your privacy, security and freedom.'
}

const filterByDate = (a, b) => a.createdAt < b.createdAt

const fetchJobs = async () => {
  const res = await fetch(
    'https://api.lever.co/v0/postings/blockstack?mode=json'
  )
  if (res.status >= 400) {
    console.log('Bad response from server')
  }
  const jobsArr = await res.json()
  const DontSeeWhatYoureLookingForID = '5deebd50-43d3-45d1-afa2-55ccab0e812a'
  const lastItem = jobsArr.find(
    (listing) => listing.id === DontSeeWhatYoureLookingForID
  )
  const sortedByDateJobs = jobsArr
    .filter((listing) => listing.id !== DontSeeWhatYoureLookingForID)
    .sort(filterByDate)
  return [
    ...sortedByDateJobs,
    {
      ...lastItem
    }
  ]
}
const fetchStats = async () => {
  const res = await fetch('https://blockstack-site-api.herokuapp.com/v1/stats')
  if (res.status >= 400) {
    console.log('Bad response from server')
  }
  return res.json()
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
        <Jobs list={this.props.jobs} id="openings" />
      </div>
    )
  }
}

export default CareersPage
