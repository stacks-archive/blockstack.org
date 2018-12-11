import React from 'react'
import Content from './content.md'
const ogImage = require('@assets/images/photos/blockstackteam-1.jpg')
const meta = {
  path: '/pbc',
  title: 'About Blockstack PBC',
  ogImage
}


class PBCPage extends React.PureComponent {
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

export default PBCPage
