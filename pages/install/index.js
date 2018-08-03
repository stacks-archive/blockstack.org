import React from 'react'
import Content from './install.md'

const meta = {
  path: '/install',
  title: 'Use Blockstack',
}

class InstallPage extends React.PureComponent {
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

export default InstallPage
