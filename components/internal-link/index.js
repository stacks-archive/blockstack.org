import React from 'react'
import Link from 'next/link'
const InternalLink = ({ href, children, onClick, ...rest }) => (
  <div onClick={() => (onClick ? onClick() : null)}>
    <Link href={href} prefetch>
      <a {...rest}>{children}</a>
    </Link>
  </div>
)

export { InternalLink }
