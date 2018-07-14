import React from 'react'
import Link from 'next/link'
import { connect } from 'redux-bundler-react'
import ReactMarkdown from 'react-markdown'

const ListItem = ({
  title,
  url,
  urlSlug,
  markup,
  description,
  image,
  date
}) => {
  return description ? (
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
      <ReactMarkdown source={description} />
      <Link
        prefetch
        as={`/blog/${urlSlug}`}
        href={`/blog/single?slug=${urlSlug}`}
      >
        <a>Read more</a>
      </Link>
    </div>
  ) : null
}

const BlogList = connect(
  'selectBlogPosts',
  ({ blogPosts }) => blogPosts.map((post, i) => <ListItem {...post} key={i} />)
)

export { BlogList }
