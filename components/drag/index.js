import React, { useRef } from 'react'
import { Box, Flex } from 'blockstack-ui'
import { useSpring, config, animated } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import { Image } from '@components/image'
import { Video } from '@components/video'
import useComponentSize from '@rehooks/component-size'
import { useWindowSize } from 'react-use'

const Item = ({ ...rest }) => {
  return <Box>Item</Box>
}

const items = [
  {
    src: '/static/videos/about-hero-muneeb-tedx.mp4',
    width: ['200px', '300px', '300px', '600px'],
    ratio: '68.44%',
    type: 'video'
  },
  {
    src: 'https://blockstack-www.imgix.net/about-hero/04.png',
    width: ['200px', '300px', '300px', '600px'],
    type: 'image'
  },
  {
    src: 'https://blockstack-www.imgix.net/about-hero/03.png',
    width: ['200px', '300px', '300px', '720px'],
    type: 'image'
  },
  {
    src: 'https://blockstack-www.imgix.net/about-hero/01.png',
    width: ['200px', '300px', '300px', '622px'],
    type: 'image'
  },
  {
    src: '/static/videos/about-hero-snowden.mp4',
    width: ['200px', '300px', '300px', '622px'],
    type: 'video',
    ratio: '56.25%'
  },
  {
    src: 'https://blockstack-www.imgix.net/about-hero/02.png',
    width: ['200px', '300px', '300px', '576px'],
    type: 'image'
  }
]

const Drag = ({ ...rest }) => {
  const [{ x }, set] = useSpring(() => ({
    x: 0,
    config: { ...config.default, tension: 200, friction: 30 }
  }))
  let ref = useRef(null)
  let size = useComponentSize(ref)
  const { width } = useWindowSize()
  const bind = useDrag(({ delta: [dx], memo = x.getValue() }) => {
    if (!size || !width) return
    if (dx + memo <= 0) {
      const componentSize = size.width - width + 96
      if (componentSize && dx + memo <= componentSize * -1) {
        set({ x: componentSize * -1 })
      } else {
        set({ x: dx + memo })
      }
    } else {
      set({ x: 0 })
    }
    return memo
  })

  return (
    <Box
      width={1}
      my={8}
      overflow="hidden"
      cursor="grab"
      maxWidth="100vw"
      pl={[5, 5, 9]}
      {...bind()}
    >
      <Flex
        is={animated.div}
        style={{
          willChange: 'transform',
          transform: x.interpolate((x) => `translateX(${x}px)`)
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }} ref={ref}>
          {items.map((item, key) => (
            <Box
              flexShrink={0}
              mr={[5, 5, 9]}
              width={item.width}
              key={key}
              style={{
                userSelect: 'none',
                pointerEvents: 'none'
              }}
            >
              {item.type === 'image' ? (
                <Image src={item.src} />
              ) : (
                <Video noHover hideOverlay src={item.src} ratio={item.ratio} />
              )}
            </Box>
          ))}
        </div>
      </Flex>
    </Box>
  )
}

export { Drag }
