import React from 'react'
import Photos from './photos.md'
import Intro from './intro.md'
import Working from './working.md'
import { PhotoGrid } from '@components/v2/photos-grid'
import { Jobs } from '@components/jobs'
import fetch from 'cross-fetch'
import { Section } from '@components/v2/section'
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

    return {
      meta,
      stats
    }
  }

  render() {
    return (
      <div>
        <br />
        <Section>
          <Section.Pane width="100%">
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
            <Jobs />
          </Section.Pane>
        </Section>
      </div>
    )
  }
}

export default CareersPage
