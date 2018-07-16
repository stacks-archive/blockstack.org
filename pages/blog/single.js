import React from 'react'
import { BlogPost } from '@components/blog/post'
import { BadConnection } from '@components/blog/list'
import striptags from 'striptags'

const removeMarkdown = async (string) => striptags(string)

const meta = {
  path: '/blog',
  title: 'Blockstack Blog',
  template: 'secondary'
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
        ogImage: post.image,
        title: post.title,
        subtitle: post.date,
        description: await removeMarkdown(post.preview)
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
