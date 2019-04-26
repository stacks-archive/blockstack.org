import React from 'react'
import { Box, Flex } from 'blockstack-ui'
import { Title, Text } from '@components/v2/section'

const GridItem = ({ item }) => {
  const { title, text } = item
  return (
    <Box pb={7} width="calc(33.333% - 16px)">
      <Box mb={3} size={40} borderRadius="8px" bg="blue.10" />
      <Title {...title} fontSize={2} pb={3} />
      <Text {...text} fontSize={2} />
      <Box mt={4} color="blue" fontSize={1}>
        Learn more
      </Box>
    </Box>
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
