import React from 'react'
const { fetchBlogPosts } = require('@common/lib')
import { BlogList } from '@components/blog/list'
const meta = {
  path: '/blog',
  title: 'Blockstack Blog'
}

class BlogPage extends React.PureComponent {
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
