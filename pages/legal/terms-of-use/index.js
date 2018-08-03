import React from 'react'
import Content from './terms-of-service.md'
const meta = {
  path: '/legal/terms-of-use',
  title: 'Terms of Use',
}

class TermsOfUsePage extends React.PureComponent {
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

export default TermsOfUsePage
