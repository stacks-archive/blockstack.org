import React from 'react'
import { BlogList } from '@components/blog/list'
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

  render() {
    return (
      <>
        <BlogList />
      </>
    )
  }
}

export default BlogPage
