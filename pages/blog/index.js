import React from 'react'
const meta = {
  path: '/blog',
  title: 'Blockstack Blog'
}

class BlogPage extends React.Component {
  static async getInitialProps(ctx) {
    let propsMeta = meta
    let post = null

    const {
      query: { slug }
    } = ctx

    return {
      meta: propsMeta,
      post,
      slug
    }
  }
  shouldComponentUpdate() {
    return false
  }

  componentDidMount() {
    window.location.replace('https://blog.blockstack.org')
  }

  render() {
    return (
      <>
        <h4>Redirecting...</h4>
      </>
    )
  }
}

export default BlogPage
