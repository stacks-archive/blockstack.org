import React from 'react'
const ogImage = require('@assets/images/photos/blockstackteam-1.jpg')
import Content from './about.md'

const meta = {
  path: '/about',
  title: 'About Blockstack',
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
