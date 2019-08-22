import React, { useRef } from 'react'
import { Box, Flex } from 'blockstack-ui'
import { useSpring, config, animated } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import { Image } from '@components/image'
import { Video } from '@components/video'
import useComponentSize from '@rehooks/component-size'
import { useWindowSize } from 'react-use'

const Drag = ({ items, ...rest }) => {
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
      my={[5, 5, 8]}
      overflow="hidden"
      cursor="grab"
      maxWidth="100vw"
      pl={[5, 5, 9]}
      {...bind()}
      {...rest}
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
                <Video
                  noHover
                  hideOverlay
                  src={item.src}
                  ratio={item.ratio}
                  poster={item.poster}
                />
              )}
            </Box>
          ))}
        </div>
      </Flex>
    </Box>
  )
}

export { Drag }
