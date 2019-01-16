import React from 'react'
import Content from './content.md'
const ogImage = require('@assets/images/photos/blockstackteam-1.jpg')
const meta = {
  path: '/pbc',
  title: 'About Blockstack PBC',
  desc: 'Blockstack PBC, a Public Benefit Corp, upholds specific commitments to the greater public good in addition to stockholder interests. The mission of Blockstack PBC is to enable an open, decentralized internet.',
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
