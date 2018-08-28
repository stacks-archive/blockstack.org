import React from 'react'
import Content from './roadmap.md'
const meta = {
  path: '/roadmap',
  title: 'Blockstack Roadmap'
}

class DisclaimersPage extends React.PureComponent {
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

export default DisclaimersPage
