import React from 'react'


export const meta = {
  path: '/tutorials',
  title: 'Funding',
  description:
    'Blockstack is a new internet for decentralized apps that you access through the Blockstack Browser. With Blockstack, there is a new world of apps that let you own your data and maintain your privacy, security and freedom.'
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
        FundingPage
      </>
    )
  }
}

export default FundingPage
