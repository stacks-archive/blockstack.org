import React from 'react'
import Content from './what-is-blockstack.md'
export const meta = {
  path: '/what-is-blockstack',
  title: 'What is Blockstack?',
  template: 'secondary',
  description:
    "Blockstack is a new internet for decentralized apps where users own their data. Blockstack's platform helps entrepreneurs and engineers build these apps and deliver better end-user experiences.",
  button: {
    href: '/install',
    internal: true,
    label: 'Create your Blockstack ID'
  },
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
