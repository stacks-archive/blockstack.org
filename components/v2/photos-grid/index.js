import React, { useState, useEffect } from 'react'
import { Box, Flex } from 'blockstack-ui'
import { useTransition, animated, config } from 'react-spring'
import { Image } from '@components/v2/image'

const MobileVersion = ({ items, ...rest }) => {
  const [index, set] = useState(0)
  const itemsWithKeys = items.map((item, key) => ({
    ...item,
    key
  }))
  const transitions = useTransition(itemsWithKeys[index], (item) => item.key, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses
  })

  const delay = itemsWithKeys.length > 3 ? 3200 : 4200
  useEffect(
    () =>
      void setInterval(
        () => set((state) => (state + 1) % itemsWithKeys.length),
        delay
      ),
    []
  )
  return (
    <Box position="relative" bg="ink.50" width={1} height={300}>
      {transitions.map(({ item, props, key }) => (
        <Box
          is={animated.div}
          key={key}
          size="100%"
          position="absolute"
          left={0}
          top={0}
          backgroundSize="cover"
          backgroundImage={`url(${item.src}?w=960&auto=format)`}
          backgroundPosition="center center"
          transform="translate3d(0,0,0)"
          style={{
            ...props
          }}
        />
      ))}
    </Box>
  )
}

const PhotoItem = ({
  src,
  alt,
  backgroundPosition,
  backgroundSize,
  height = 400,
  ...rest
}) => {
  return (
    <Flex position="relative" width={1} {...rest}>
      <Box p={1} position="relative" width={1}>
        <Image
          bgImg={src}
          alt={alt}
          height={height}
          imgix={{
            w: 1800
          }}
          backgroundPosition={backgroundPosition}
          backgroundSize={backgroundSize}
        />
      </Box>
    </Flex>
  )
}

const PhotoGrid = ({ items, height = 400, ...rest }) => {
  return (
    <>
      <Box display={['block', 'block', 'none']}>
        <MobileVersion items={items} />
      </Box>
      <Flex
        display={['none', 'none', 'flex']}
        px={1}
        flexWrap="wrap"
        width="100%"
        {...rest}
      >
        {items.map(({ src, alt, width = 1 / 3, ...photoProps }, key, arr) => (
          <PhotoItem
            width={[1, 1 / 2, 1 / 2, width]}
            src={src}
            key={key}
            alt={alt}
            height={height}
            {...photoProps}
          />
        ))}
      </Flex>
    </>
  )
}

export { PhotoGrid, PhotoItem }
