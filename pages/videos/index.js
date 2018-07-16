import React from 'react'
import Content from './videos.md'
import { videoData } from './data'
import { List } from '@components/list'

export const meta = {
  path: '/videos',
  title: 'Videos',
  description: ''
}

const VideoItem = ({
  title,
  event,
  speaker,
  location,
  date,
  youtubeURL,
  urlSlug,
  image
}) => (
  <>
    <div
      style={{ display: 'flex', alignItems: 'center', paddingBottom: '20px' }}
    >
      <div
        style={{
          flexShrink: 0,
          paddingRight: '20px'
        }}
      >
        <a href={youtubeURL}>
          <img
            src={image}
            alt={title}
            style={{ width: '300px', display: 'block' }}
          />
        </a>
      </div>
      <div />
    </div>
    <hr />
  </>
)

const items = videoData.map(
  ({ date, title, location, speaker, event, youtubeURL, ...rest }) => ({
    date,
    title,
    location,
    speaker,
    event,
    youtubeURL,
    image: {
      src: rest.image,
      alt: title
    },
    ...rest,
    link: youtubeURL,
    children: (
      <>
        <h6 style={{ margin: '0 0 10px 0' }}>
          {date} | {location}
        </h6>
        <h4 style={{ margin: 0 }}>{title}</h4>
        <p style={{ margin: '10px 0 0 0' }}>
          {speaker}, {event}
        </p>
        <a
          href={youtubeURL}
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: '20px 0 0 0', display: 'inline-block' }}
        >
          Watch
        </a>
      </>
    )
  })
)

class VideosPage extends React.PureComponent {
  static async getInitialProps(ctx) {
    return {
      meta
    }
  }

  render() {
    return (
      <>
        <List items={items} />
      </>
    )
  }
}

export default VideosPage
