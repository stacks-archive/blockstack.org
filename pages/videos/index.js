import React from 'react'
import { videoData } from './data'
import { List } from '@components/list'
import { Videos } from '@components/v2/videos'
import { videos } from '../home/data'
import { Section } from '@components/v2/section'

const meta = {
  path: '/videos',
  title: 'Videos',
  description: '',
  theme: 'ink'
}

class VideosPage extends React.PureComponent {
  static async getInitialProps(ctx) {
    return {
      meta
    }
  }

  render() {
    return (
      <Section variant="ink">
        <Section.Pane width={1}>
          <Section.Title is="h2" pb={5}>
            {meta.title}
          </Section.Title>
          <Videos items={videos} />
        </Section.Pane>
      </Section>
    )
  }
}

export default VideosPage
