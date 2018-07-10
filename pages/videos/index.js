import React from 'react'
import Content from './videos.md'
export const meta = {
  path: '/videos',
  title: 'Videos',
  description: ''
}

class VideosPage extends React.PureComponent {
  static async getInitialProps(ctx) {
    return {
      meta
    }
  }

  render() {
    return (
      <>
        <Content />
      </>
    )
  }
}

export default VideosPage
