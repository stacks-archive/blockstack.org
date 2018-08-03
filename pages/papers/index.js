import React from 'react'
import Content from './papers.md'

const meta = {
  path: '/papers',
  title: 'Papers',
}

class PapersPage extends React.PureComponent {
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

export default PapersPage
