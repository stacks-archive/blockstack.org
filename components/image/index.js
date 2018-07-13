import React from 'react'
const prod = process.env.NODE_ENV === 'production'
const Image = ({ src, ...rest }) => (
  <picture>
    <source srcSet={require('@assets/' + src)} type="image/webp" />
    <source srcSet={require('@assets/' + src)} type="image/jpeg" />
    <img src={require('@assets/' + src)} />
  </picture>
)

export { Image }
