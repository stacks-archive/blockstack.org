import React from 'react'
import { Box, Flex } from 'blockstack-ui'
import { Title, TextLink } from '@components/section'
import { transition } from '@common/theme'
import { useHover } from 'use-events'

const CardItem = ({ variant = 'white', href, ...rest }) => {
  const [hovered, bind] = useHover()

  return (
    <Flex
      flexDirection="column"
      justifyContent="space-between"
      bg={
        variant.toString() === 'white'
          ? 'white'
          : variant.toString() === 'ink'
          ? 'ink.95'
          : 'blue'
      }
      px={5}
      pb={6}
      pt={6}
      transform={hovered ? 'translateY(-5px)' : 'none'}
      borderRadius="8px"
      flexShrink={0}
      boxShadow={
        hovered
          ? '0px 16px 24px rgba(0, 0, 0, 0.04), 0px 1px 2px rgba(0, 0, 0, 0.08)'
          : '0px 2px 12px rgba(0, 0, 0, 0.04), 0px 1px 2px rgba(0, 0, 0, 0.08)'
      }
      width={[1, 'calc(50% - 16px)', 'calc(33.3333% - 16px)']}
      mb={5}
      transition={transition}
      is="a"
      href={href}
      target="_blank"
      style={{
        textDecoration: 'none'
      }}
      {...bind}
      {...rest}
    />
  )
}

const Jobs = ({ jobs, ...rest }) =>
  jobs && jobs.length ? (
    <Box {...rest}>
      <Title is="h2">Open Positions</Title>
      <Flex flexWrap="wrap" pt={5} justifyContent="space-between">
        {[...jobs, {}].map(({ text, hostedUrl, categories }, i) => {
          if (!categories)
            return (
              <Box width={[1, `calc(50% - 16px)`, `calc(33.33333% - 16px)`]} />
            )
          const { commitment, location, team } = categories
          return (
            <CardItem
              pr={5}
              pb={5}
              width={[1, `calc(50% - 16px)`, `calc(33.33333% - 16px)`]}
              key={i}
              href={hostedUrl}
              spacer={!text}
            >
              {team ? (
                <Title opacity={0.75} is="h6" color="ink.50">
                  {team}
                </Title>
              ) : null}
              {text ? (
                <Title is="h4" pt={1}>
                  {text}
                </Title>
              ) : null}
              {location ? (
                <Box pt={3}>
                  <Title is="h6" color="ink.50">
                    {location}
                  </Title>
                </Box>
              ) : null}
              {commitment ? (
                <Box pt={1}>
                  <Title is="h6" color="ink.50">
                    {commitment}
                  </Title>
                </Box>
              ) : null}
              <Box pt={5}>
                <TextLink
                  action={{
                    href: hostedUrl,
                    label: 'Learn more'
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </Box>
            </CardItem>
          )
        })}
      </Flex>
    </Box>
  ) : null

export { Jobs }
