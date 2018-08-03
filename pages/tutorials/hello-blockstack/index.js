import React from 'react'
import Content from './hello-blockstack.md'
const meta = {
  title: 'Hello, Blockstack Tutorial',
  description: 'Tutorial on building a hello world application.',
  image: '/images/visuals/hello-blockstack-tutorial.png',
  youtube: 'https://www.youtube.com/embed/UbZ6PlX5rF8'
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
