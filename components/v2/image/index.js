import React from 'react'
import { Box } from 'blockstack-ui'
import css from '@styled-system/css'

const ImageWrapper = ({ ...rest }) => (
  <Box
    css={css({
      'img.lazyloaded': {
        opacity: '1 !important',
        '& + div': {
          opacity: '0 !important'
        }
      }
    })}
    {...rest}
  />
)

const PreviewImage = ({ borderRadius, ...rest }) => (
  <Box
    overflow="hidden"
    transition="0.5s all ease-in-out 0.3s"
    borderRadius={borderRadius}
  >
    <Box
      transition="0.5s all ease-in-out 0.3s"
      width={1}
      is="img"
      display="block"
      maxWidth="100%"
      position="relative"
      zIndex={2}
      style={{
        filter: 'blur(10px)'
      }}
      borderRadius={borderRadius}
      {...rest}
    />
    <Box
      transition="0.5s all ease-in-out 0.3s"
      width={1}
      is="img"
      display="block"
      maxWidth="100%"
      position="absolute"
      zIndex={1}
      top={0}
      left={0}
      borderRadius={borderRadius}
      {...rest}
    />
  </Box>
)
const HighResImage = ({ ...rest }) => (
  <Box
    transition="0.5s all ease-in-out"
    opacity={0}
    position="absolute"
    left={0}
    top={0}
    width={1}
    is="img"
    display="block"
    maxWidth="100%"
    zIndex={3}
    {...rest}
  />
)

const Image = ({ src, imgix = {}, wrapper = {}, ...rest }) => {
  if (!src) return null
  let url = src
  if (src.url) {
    ;({ url } = src)
  }
  const isImgix = url.includes('imgix')
  if (!isImgix) {
    return (
      <Box width={1} {...wrapper}>
        <Box is="img" width={1} display="block" src={url} {...rest} />
      </Box>
    )
  }
  const { w = 800, h, fit = 'max', auto = 'format', ...imgixProps } = imgix

  const reductionAmount = 4
  const params = {
    fit,
    auto,
    ...imgixProps
  }
  const query = Object.keys(params)
    .map((key) => key + '=' + params[key])
    .join('&')

  const highRes = `${url}?w=${w}${h ? `&h=${h}` : ''}${
    query ? `&${query}` : ''
  }`
  const preview = `${url}?blur=100&w=${parseInt(w) / reductionAmount}${
    h ? `&h=${parseInt(h) / reductionAmount}` : ''
  }${query ? `&${query}` : ''}`

  return (
    <ImageWrapper width={1} position="relative" {...rest}>
      <HighResImage
        className="lazyload"
        data-expand="-100"
        data-src={highRes}
        borderRadius={rest.borderRadius}
      />
      <PreviewImage src={preview} borderRadius={rest.borderRadius} />
    </ImageWrapper>
  )
}

export { Image }
