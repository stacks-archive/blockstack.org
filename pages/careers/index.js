import React from 'react'
import fetch from 'cross-fetch'
import { PhotoGrid } from '@components/photos-grid'
import { Jobs } from '@components/jobs'
import { Section } from '@components/section'
import Intro from './intro.md'
import Working from './working.md'
import { fetchJobs } from '@common/es6'

const doFetchJobs = async () => {
  try {
    return fetchJobs()
  } catch (error) {
    console.log(error)
  }
}

const photos1 = [
  {
    src:
      'https://blockstack-www.imgix.net/photos/blockstack-team-winter-2018.png',
    width: 1 / 2
  },
  {
    src: 'https://blockstack-www.imgix.net/photos/blockstack-team-couch.png',
    width: 1 / 2
  }
]
const photos2 = [
  {
    src:
      'https://blockstack-www.imgix.net/photos/nyt-blockstack-team-photo.png',
    width: 1 / 2
  },
  {
    src:
      'https://blockstack-www.imgix.net/photos/blockstack-team-summer-2018-retreat.jpg',
    width: 1 / 2
  }
]
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
  title: 'Careers at Blockstack',
  button: {
    href: '#openings',
    label: 'View Openings'
  }
}

class CareersPage extends React.PureComponent {
  static async getInitialProps(ctx) {
    const stats = await fetchStats()
    const jobs = await doFetchJobs()

    return {
      meta,
      stats,
      jobs
    }
  }

  render() {
    return (
      <div>
        <br />
        <Section alignItems="flex-start">
          <Section.Pane pr={[0, 0, 7]} alignItems="flex-start">
            <Section.Title is="h2" pb={5}>
              {meta.title}
            </Section.Title>
            <Section.Title is="h3" pb={[5, 5, 0]}>
              Blockstack enables a new generation of apps that empower users by
              putting them in control.
            </Section.Title>
          </Section.Pane>
          <Section.Pane>
            <Intro />
          </Section.Pane>
        </Section>
        <PhotoGrid items={photos1} />
        <Section>
          <Section.Pane width="100%">
            <Working />
          </Section.Pane>
        </Section>
        <PhotoGrid items={photos2} />
        <Section>
          <Section.Pane width="100%">
            <Jobs jobs={this.props.jobs} />
          </Section.Pane>
        </Section>
      </div>
    )
  }
}

export default CareersPage
