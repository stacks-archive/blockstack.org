import React from 'react'
import Content from './disclaimers.md'
export const meta = {
  path: '/legal/disclaimers',
  title: 'Disclaimers',
  richText: true
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
