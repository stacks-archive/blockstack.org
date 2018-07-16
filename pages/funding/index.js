import React from 'react'
import Content from './funding.md'

const meta = {
  path: '/tutorials',
  title: 'Funding'
}

class FundingPage extends React.PureComponent {
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

export default FundingPage
