import React from 'react'
import { slugify } from '@common/es6'

const HashedTitle = ({ value, component: Component, ...rest }) => {
  return (
    <Component id={slugify(value)} {...rest}>
      <a href={`#${slugify(value)}`}>{value}</a>
    </Component>
  )
}

export { HashedTitle }
