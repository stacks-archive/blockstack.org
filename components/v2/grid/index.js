import React from 'react'
import { Box, Flex } from 'blockstack-ui'
import { Title, Text } from '@components/v2/section'
import { TextLink } from '@components/v2/sections'

const GridItem = ({ item }) => {
  const { title, text } = item
  return (
    <Flex
      flexDirection="column"
      pb={7}
      width={['100%', 'calc(50% - 16px)', 'calc(33.333% - 16px)']}
    >
      {text && <Box mb={3} size={40} borderRadius="8px" bg="blue.10" />}
      {title && <Title {...title} fontSize={2} pb={3} />}
      {text && <Text {...text} fontSize={2} />}
      {text && (
        <Flex flexGrow={1} alignItems="flex-end">
          <TextLink
            alignSelf="flex-end"
            flexGrow={0}
            mt={4}
            color="blue"
            fontSize={1}
            action={{ label: 'Learn more', href: '#' }}
          />
        </Flex>
      )}
    </Flex>
  )
}

const Grid = ({ items, ...rest }) => {
  if (!items || !items.length) return null
  return (
    <Flex flexWrap="wrap" justifyContent="space-between" {...rest}>
      {items.map((item, key) => {
        return <GridItem key={key} item={item} />
      })}
    </Flex>
  )
}

export { Grid, GridItem }
