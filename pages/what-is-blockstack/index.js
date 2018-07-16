import React from 'react'
import Content from './what-is-blockstack.md'
const meta = {
  path: '/what-is-blockstack',
  title: 'What is Blockstack?',
  template: 'secondary',
  button: {
    href: '/install',
    internal: true,
    label: 'Create your Blockstack ID'
  }
}

class WhatIsBlockstackPage extends React.PureComponent {
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

export default WhatIsBlockstackPage
