import React from 'react'
import { Box, Flex } from 'blockstack-ui'
import { Title, Text } from '@components/v2/section'
import { TextLink } from '@components/v2/section'

const GridItem = ({ item }) => {
  const { title, text, icon: Icon, invert, href, path } = item

  return (
    <Flex
      flexDirection="column"
      pb={7}
      width={['100%', 'calc(50% - 16px)', 'calc(33.333% - 16px)']}
    >
      {Icon && (
        <Flex
          alignItems="center"
          justifyContent="center"
          color={invert ? 'white' : 'blue'}
          mb={3}
          size={40}
          borderRadius="8px"
          bg={invert ? 'blue' : 'blue.10'}
        >
          <Icon size={18} />
        </Flex>
      )}
      {title && <Title {...title} fontSize={2} pb={3} />}
      {text && <Text {...text} fontSize={2} />}
      {(href || path) && (
        <Flex flexGrow={1} alignItems="flex-end">
          <TextLink
            alignSelf="flex-end"
            flexGrow={0}
            mt={4}
            color="blue"
            fontSize={1}
            action={{ label: 'Learn more', href, path }}
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
