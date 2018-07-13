import React from 'react'
import Link from 'next/link'

const ListItem = ({ title, url, urlSlug, markup, preview, image, date }) =>
  preview ? (
    <div style={{ maxWidth: '700px', paddingBottom: '80px' }}>
      <h6 style={{ margin: 0 }}>{date}</h6>
      <Link
        prefetch
        as={`/blog/${urlSlug}`}
        href={`/blog/single?slug=${urlSlug}`}
      >
        <a>
          <h3 style={{ margin: '20px 0 0 0' }}>{title}</h3>
        </a>
      </Link>
      <div>
        <p dangerouslySetInnerHTML={{ __html: preview }} />
      </div>
      <Link
        prefetch
        as={`/blog/${urlSlug}`}
        href={`/blog/single?slug=${urlSlug}`}
      >
        <a>Read more</a>
      </Link>
    </div>
  ) : null

const BlogList = ({ posts }) => (
  <div>{posts.map((post, i) => <ListItem {...post} key={i} />)}</div>
)

export { BlogList }
