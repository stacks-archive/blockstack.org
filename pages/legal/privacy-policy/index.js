import React from 'react'
import Content from './privacy.md'
const meta = {
  path: '/legal/privacy-policy',
  title: 'Privacy Policy',
}

class PrivacyPolicyPage extends React.PureComponent {
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

export default PrivacyPolicyPage
