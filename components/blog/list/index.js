import React from 'react'
import Link from 'next/link'
import Arrow from '@components/outline-arrow'

const ListItem = ({ title, url, urlSlug, preview, image, date }) => (
  <div style={{ maxWidth: '700px', paddingBottom: '80px' }}>
    <h6 style={{ margin: 0 }}>{date}</h6>
    <h3 style={{ margin: '20px 0 0 0' }}>{title}</h3>
    <p dangerouslySetInnerHTML={{ __html: preview }} />
    <Link
      prefetch
      as={`/blog/${urlSlug}`}
      href={`/blog/single?slug=${urlSlug}`}
    >
      <a>Read more</a>
    </Link>
  </div>
)

const BlogList = ({ posts }) => (
  <div>{posts.map((post, i) => <ListItem {...post} key={i} />)}</div>
)

export { BlogList }
