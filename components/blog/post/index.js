import React from 'react'
import Link from 'next/link'

const BlogPost = ({ post }) => (
  <>
    <div>
      <Link href="/blog" prefetch>
        <a>Blog</a>
      </Link>
      {' / '}
      {post.title}
    </div>
    <br />
    <br />
    <img src={post.image} alt={post.title} />
    <div dangerouslySetInnerHTML={{ __html: post.markup }} />
  </>
)

export {BlogPost}
