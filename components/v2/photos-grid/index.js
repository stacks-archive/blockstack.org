import React from 'react'
import { Box, Flex } from 'blockstack-ui'
import { Image } from '@components/v2/image'

const PhotoItem = ({ src, backgroundPosition, backgroundSize, ...rest }) => {
  return (
    <Flex position="relative" width={1} {...rest}>
      <Box p={1} position="relative" width={1}>
        <Image
          bgImg={src}
          height={400}
          backgroundPosition={backgroundPosition}
          backgroundSize={backgroundSize}
        />
      </Box>
    </Flex>
  )
}

const PhotoGrid = ({ items, ...rest }) => {
  return (
    <Flex px={1} flexWrap="wrap" width="100%">
      {items.map(({ src, width = 1 / 3, ...photoProps }, key, arr) => (
        <PhotoItem
          width={[1, 1 / 2, 1 / 2, width]}
          src={src}
          key={key}
          {...photoProps}
        />
      ))}
    </Flex>
  )
}

export { PhotoGrid, PhotoItem }
