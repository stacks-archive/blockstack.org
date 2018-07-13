import React from 'react'
import Content from './about.md'

const ogImage = require('@assets/images/photos/blockstackteam-1.jpg')
export const meta = {
  path: '/about',
  title: 'About Blockstack',
  description:
    'Blockstack is an open-source project with core developers and contributors located around the world, from New York City to Hong Kong.',

  ogImage
}

class AboutPage extends React.PureComponent {
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

export default AboutPage
