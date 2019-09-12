import React, { useEffect } from 'react'
import { Box } from 'blockstack-ui'
import css from '@styled-system/css'

const ImageWrapper = ({ ...rest }) => (
  <Box
    css={css({
      '.lazyloaded': {
        opacity: '1 !important',
        '& + div': {
          opacity: '0 !important'
        }
      }
    })}
    {...rest}
  />
)

const PreviewImage = ({ borderRadius, bgImg, src, alt, ...rest }) => {
  const srcProps = bgImg
    ? {
        backgroundImage: `url(${src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
      }
    : {
        src
      }

  return (
    <Box
      overflow="hidden"
      transition="0.5s all ease-in-out 0.3s"
      borderRadius={borderRadius}
    >
      <Box
        transition="0.5s all ease-in-out 0.3s"
        width={1}
        is={bgImg ? 'div' : 'img'}
        loading="lazy"
        title={bgImg ? alt : undefined}
        alt={!bgImg ? alt : undefined}
        display="block"
        maxWidth="100%"
        position="relative"
        height={bgImg ? '100%' : 'unset'}
        zIndex={2}
        style={{
          filter: 'blur(10px)'
        }}
        borderRadius={borderRadius}
        {...rest}
        {...srcProps}
      />
      <Box
        transition="0.5s all ease-in-out 0.3s"
        width={1}
        is={bgImg ? 'div' : 'img'}
        loading="lazy"
        title={bgImg ? alt : undefined}
        alt={!bgImg ? alt : undefined}
        display="block"
        maxWidth="100%"
        height={bgImg ? '100%' : 'unset'}
        position="absolute"
        zIndex={1}
        top={0}
        left={0}
        borderRadius={borderRadius}
        {...srcProps}
        {...rest}
      />
    </Box>
  )
}
const HighResImage = ({ bgImg, noBlur, alt, ...rest }) => (
  <Box
    transition="0.5s all ease-in-out"
    opacity={noBlur ? 1 : 0}
    position={noBlur ? 'relative' : 'absolute'}
    left={0}
    top={0}
    width={1}
    height={bgImg ? '100%' : 'unset'}
    backgroundSize={bgImg ? 'cover' : 'unset'}
    backgroundPosition="center center"
    is={bgImg ? 'div' : 'img'}
    loading="lazy"
    title={bgImg ? alt : undefined}
    alt={!bgImg ? alt : undefined}
    display="block"
    maxWidth="100%"
    zIndex={3}
    {...rest}
  />
)

const Image = ({
  src,
  bgImg,
  noBlur,
  imgix = {},
  wrapper = {},
  alt,
  backgroundSize = 'cover',
  backgroundPosition = 'center center',
  ...rest
}) => {
  if (!src && !bgImg) return null

  let url = src || bgImg

  if (src && src.url) {
    url = src.url
  } else if (bgImg && bgImg.url) {
    url = bgImg.url
  }

  const isImgix = url.includes('imgix')

  if (!isImgix) {
    return (
      <Box width={1} {...wrapper}>
        <Box
          is="img"
          loading="lazy"
          width={1}
          display="block"
          src={url}
          alt={alt}
          {...rest}
        />
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

  const srcProps = bgImg
    ? {
        ['data-bg']: highRes
      }
    : noBlur
    ? { src: highRes }
    : {
        ['data-src']: highRes
      }

  return (
    <ImageWrapper width={1} position="relative" {...rest}>
      <HighResImage
        className={!noBlur ? 'lazyload' : 'no-blur'}
        data-expand="-100"
        {...srcProps}
        borderRadius={rest.borderRadius}
        backgroundSize={backgroundSize}
        backgroundPosition={backgroundPosition}
        bgImg={bgImg}
        noBlur={noBlur}
        alt={alt}
      />
      {!noBlur ? (
        <PreviewImage
          src={preview}
          borderRadius={rest.borderRadius}
          backgroundPosition={backgroundPosition}
          backgroundSize={backgroundSize}
          bgImg={bgImg}
          alt={alt}
        />
      ) : null}
    </ImageWrapper>
  )
}

export { Image }
