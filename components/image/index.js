import React from 'react'
import { StyledPicture } from './styled'

const requireImage = require.context('@assets', true, /\.(png|jpg|jpeg|svg)$/)

const Image = ({ src, alt, ...rest }) => {
  const type = `image/${src.split('.')[1]}`
  const internalLink = !src.includes('http')
  const source = internalLink
    ? requireImage(`./images${src.split('images')[1]}`)
    : src
  return (
    <StyledPicture {...rest}>
      <source srcSet={source} type={type} />
      <img src={source} alt={alt} />
    </StyledPicture>
  )
}

export { Image }
