import React from 'react'
import Content from './managing-data-with-gaia.md'
const meta = {
  title: 'Managing Data with Gaia',
  description:
    'This series will focus on teaching you to think like a Blockstack developer working with Gaia.',
  image: '/images/tutorials/managing-data-with-gaia.png'
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
