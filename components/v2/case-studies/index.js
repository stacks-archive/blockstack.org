import React from 'react'
import { Box, Flex } from 'blockstack-ui'
import { useHover } from 'use-events'
import { transition } from '@common/theme'

import { Image } from '@components/v2/image'

const CaseStudyItem = ({ title, publication, src, app, ...rest }) => {
  const [hovered, bind] = useHover()
  return (
    <Flex
      flexDirection="column"
      flexGrow={1}
      cursor={hovered ? 'pointer' : 'unset'}
      px={[0, 0, 5]}
      py={5}
      {...rest}
      {...bind}
    >
      <Flex width={1} position="relative" alignItems="flex-end">
        <Box
          size={80}
          right={[-15, -15, -30]}
          bottom={-30}
          position="absolute"
          zIndex={10}
          is="img"
          src={app}
        />
        <Box
          borderRadius="8px"
          boxShadow={
            hovered
              ? '0px 16px 24px rgba(0, 0, 0, 0.04), 0px 1px 2px rgba(0, 0, 0, 0.08)'
              : '0px 2px 12px rgba(0, 0, 0, 0.04), 0px 1px 2px rgba(0, 0, 0, 0.08)'
          }
          transform={`scale(${hovered ? 1.03 : 1})`}
          transition={transition}
          position="relative"
          width="100%"
        >
          <Image
            src={src}
            imgix={{
              w: 512,
              h: 512,
              fit: 'crop',
              crop: 'faces'
            }}
            borderRadius="8px"
            overflow="hidden"
          />
        </Box>
      </Flex>
      <Flex flexDirection="column" flexGrow={1} pt={7}>
        <Box
          transition={transition}
          color={hovered ? 'blue' : 'ink'}
          fontWeight={600}
          pb={4}
        >
          {title}
        </Box>
        <Flex alignItems="flex-end" flexGrow={1}>
          {publication}
        </Flex>
      </Flex>
    </Flex>
  )
}

const CaseStudies = ({ items }) => (
  <Flex flexDirection={['column', 'column', 'row']}>
    {items.map((item, key) => {
      return (
        <CaseStudyItem
          width={['100%', '100%', 100 / items.length + '%']}
          key={key}
          {...item}
        />
      )
    })}
  </Flex>
)

export { CaseStudies, CaseStudyItem }
