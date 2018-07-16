import React from 'react'
import Content from './about.md'

const ogImage = require('@assets/images/photos/blockstackteam-1.jpg')
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
