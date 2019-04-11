import React from 'react'
import { videoData } from './data'
import { List } from '@components/list'

const meta = {
  path: '/videos',
  title: 'Videos',
  description: ''
}

const items = videoData.map(
  ({ date, title, location, speaker, event, youtubeURL, image, ...rest }) => ({
    date,
    title,
    location,
    speaker,
    event,
    youtubeURL,
    image: {
      src: image,
      alt: title
    },
    ...rest,
    link: youtubeURL,
    children: (
      <>
        <h6 style={{ margin: '0 0 10px 0' }}>
          {date}
          {location ? ' | ' + location : null}
        </h6>

        <a
          href={youtubeURL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            margin: '20px 0 0 0',
            display: 'inline-block',
            border: 'none'
          }}
        >
          <h4 style={{ margin: 0 }}>{title}</h4>
        </a>
        <p style={{ margin: '10px 0 0 0' }}>
          {speaker ? speaker + ', ' : null}
          {event}
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
