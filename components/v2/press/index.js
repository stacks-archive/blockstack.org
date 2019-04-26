import React from 'react'
import { Box, Flex } from 'blockstack-ui'
import { useHover } from 'use-events'
import { transition } from '@common/theme'

const Press = ({ items, ...rest }) => {
  if (!items || !items.length) return null
  return (
    <Flex justifyContent="space-between" flexWrap="wrap" {...rest}>
      {items.map((item, key) => {
        const [hovered, bind] = useHover()
        return (
          <Box
            px={5}
            py={8}
            key={key}
            transform={hovered ? 'translateY(-5px)' : 'none'}
            borderRadius="8px"
            cursor={hovered ? 'pointer' : 'unset'}
            flexShrink={0}
            boxShadow={
              hovered
                ? '0px 16px 24px rgba(0, 0, 0, 0.04), 0px 1px 2px rgba(0, 0, 0, 0.08)'
                : '0px 2px 12px rgba(0, 0, 0, 0.04), 0px 1px 2px rgba(0, 0, 0, 0.08)'
            }
            width={[1, 'calc(50% - 16px)', 'calc(33.3333% - 16px)']}
            mb={5}
            transition={transition}
            {...bind}
          >
            <Box pb={5} opacity={0.5}>
              {item.publication}
            </Box>
            <Box fontWeight="500" color="ink" fontSize={3} lineHeight={3}>
              {item.title}
            </Box>
            <Box fontSize={1} pt={5} opacity={hovered ? 1 : 0.45}>
              Read article >
            </Box>
          </Box>
        )
      })}
    </Flex>
  )
}

export { Press }
