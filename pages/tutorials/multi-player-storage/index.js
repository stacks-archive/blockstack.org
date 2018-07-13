import React from 'react'
import Content from './multi-player-storage.md'
const meta = {
  title: 'Multi-player Storage Tutorial',
  description:
    'Build a decentralized micro-blogging app using multi-player storage in Gaia.',
  image: '/images/tutorials/multi-player-storage.png',
  youtube: 'https://www.youtube.com/embed/w7Sa54H-CGg'
}

class TutorialsPage extends React.PureComponent {
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

export default TutorialsPage
