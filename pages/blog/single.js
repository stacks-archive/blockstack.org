import React from 'react'
import { BlogPost } from '@components/blog/post'
import { BadConnection } from '@components/blog/list'

const meta = {
  path: '/blog',
  title: 'Blockstack Blog',
  template: 'secondary',
  description:
    'Blockstack is a new internet for decentralized apps that you access through the Blockstack Browser. With Blockstack, there is a new world of apps that let you own your data and maintain your privacy, security and freedom.'
}

class CareersPage extends React.PureComponent {
  static async getInitialProps(ctx) {
    const posts = await ctx.reduxStore.selectBlogPosts()

    let propsMeta = meta
    let post = null

    const {
      query: { slug }
    } = ctx

    if (slug) {
      post = posts.find((blogPost) => blogPost.urlSlug === slug)
      propsMeta = {
        ...meta,
        title: post.title,
        subtitle: post.date
      }
    }

    return {
      meta: propsMeta,
      post,
      posts,
      slug
    }
  }

  render() {
    return (
      <>
        {this.props.post ? <BlogPost post={this.props.post} /> : BadConnection}
      </>
    )
  }
}

export default CareersPage
