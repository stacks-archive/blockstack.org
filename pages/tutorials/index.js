import React from 'react'
import Content from './tutorials.md'

const meta = {
  path: '/tutorials',
  title: 'Tutorials'
}

class TutorialsPage extends React.PureComponent {
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

export default TutorialsPage
