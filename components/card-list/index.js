import React from 'react'
import { Text, Title } from '@components/section/index'
import { Box, Flex } from 'blockstack-ui'
import { useHover } from 'use-events'
import { transition } from '@common/theme'
import ArrowTopRightIcon from 'mdi-react/ArrowTopRightIcon'

const Logo = ({ logo: Logo, src, ...rest }) =>
  src ? (
    <Box width="100%" display="block" is="img" src={src} {...rest} />
  ) : (
    <Logo {...rest} />
  )

const Card = ({ item, ...rest }) => {
  const [hovered, bind] = useHover()

  return (
    <Box
      transition={transition}
      transform={`translate3d(0,${hovered ? -8 : 0}px,0)`}
      willChange="transform"
      cursor={hovered ? 'pointer' : 'unset'}
      is="a"
      href={item.url}
      target="_blank"
      style={{
        textDecoration: 'none'
      }}
      pb={[7, 7, 0]}
      {...rest}
      {...bind}
    >
      <Flex
        boxShadow={
          hovered
            ? '0px 16px 24px rgba(0, 0, 0, 0.04), 0px 1px 2px rgba(0, 0, 0, 0.08)'
            : '0px 2px 12px rgba(0, 0, 0, 0.04), 0px 1px 2px rgba(0, 0, 0, 0.08)'
        }
        borderRadius="8px"
        height={192}
        width={1}
        bg={item.color}
        alignItems="center"
        justifyContent="center"
      >
        <Box
          willChange="transform"
          transition={transition}
          transform={`scale(${hovered ? 1.1 : 1})`}
          width={item.src ? '130px' : '72px'}
        >
          <Logo src={item.src} logo={item.logo} />
        </Box>
      </Flex>

      <Title is="h4" display="flex" alignItems="center" pt={4}>
        {item.name}

        <Box pl={2} opacity={hovered ? 1 : 0.5}>
          <ArrowTopRightIcon
            size="16px"
            style={{
              display: 'block'
            }}
          />
        </Box>
      </Title>

      <Box pt={1}>
        <Text fontSize={2}>{item.desc}</Text>
      </Box>
    </Box>
  )
}
const CardList = ({ items, ...rest }) => {
  return (
    <Flex
      py={[5, 5, 7]}
      flexWrap="wrap"
      flexDirection={['column', 'column', 'row']}
      justifyContent="space-between"
      {...rest}
    >
      {items.map((item, key) => (
        <Card item={item} key={key} width={[1, 1, 'calc(33.3333% - 24px)']} />
      ))}
    </Flex>
  )
}

export { Card, CardList }
