import React from 'react'
import Content from './videos.md'
import { videoData } from './data'

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
      <div>
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
          style={{ margin: '20px 0 0 0', display: 'inline-block' }}
        >
          Watch
        </a>
      </div>
    </div>
    <hr />
  </>
)

class VideosPage extends React.PureComponent {
  static async getInitialProps(ctx) {
    return {
      meta
    }
  }

  render() {
    return <>{videoData.map((video, i) => <VideoItem {...video} key={i} />)}</>
  }
}

export default VideosPage
