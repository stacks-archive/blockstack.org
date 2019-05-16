import React from 'react'
import { Title, Text } from '@components/v2/section'
import { Box, Flex } from 'blockstack-ui'
import { transition } from '@common/theme'
import { useHover } from 'use-events'
import ChevronRightIcon from 'mdi-react/ChevronRightIcon'

const AppIcon = ({ ...rest }) => (
  <Box pr="4">
    <Box size={60} borderRadius="12px" is="img" display="block" {...rest} />
  </Box>
)

const AppItem = ({ item }) => {
  const [hovered, bind] = useHover()
  return (
    <Flex
      flexGrow={1}
      maxWidth={['100%', 'calc(50% - 12px)', 'calc(33.3333% - 12px)']}
      pb={4}
      transition={transition}
      transform={`translate3d(0,${hovered ? '-5px' : 0}, 0)`}
      cursor={hovered ? 'pointer' : 'unset'}
      is="a"
      href={item.href}
      style={{
        textDecoration: 'none'
      }}
      target="_blank"
      {...bind}
    >
      <Flex
        px={4}
        py={4}
        bg="ink.75"
        alignItems="center"
        justifyContent={item.arrow ? 'center' : 'unset'}
        borderRadius="12px"
        flexGrow={1}
      >
        {item.icon && (
          <AppIcon src={item.icon} alt={`App icon for ${item.name}`} />
        )}
        <Box>
          {item.name && (
            <Title is="h4" fontSize={2} color={hovered ? 'cyan' : 'white'}>
              {item.name}
            </Title>
          )}
          {item.desc && (
            <Text fontSize={1} lineHeight="1.45">
              {item.desc}
            </Text>
          )}
        </Box>
        {item.arrow ? (
          <Text>
            <ChevronRightIcon size={19} style={{ display: 'block' }} />
          </Text>
        ) : null}
      </Flex>
    </Flex>
  )
}

const AppsList = ({ items, ...rest }) => {
  return (
    <Flex flexWrap="wrap" justifyContent="space-between">
      {items.map((item, key) => {
        return <AppItem item={item} key={key} />
      })}
    </Flex>
  )
}

export { AppIcon, AppItem, AppsList }
