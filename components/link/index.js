import Link from 'next/link'
import React from 'react'

const WrappedLink = ({ path, children }) =>
  path ? (
    <Link href={path} >
      {children}
    </Link>
  ) : (
    children
  )


export {WrappedLink}
