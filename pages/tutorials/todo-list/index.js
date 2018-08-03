import React from 'react'
import Content from './todo-list.md'
const meta = {
  title: 'Blockstack Todos',
  description:
    'Walk through creating a basic Todo application with Blockstack. Learn about Sign In flow and Gaia storage.',
  image: '/images/article-photos/chalkboard.jpg',
  youtube: 'https://www.youtube.com/embed/oyvg-h0obFw'
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
