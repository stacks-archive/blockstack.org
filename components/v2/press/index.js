import React from 'react'
import { Box, Flex } from 'blockstack-ui'
import { useHover } from 'use-events'
import { transition } from '@common/theme'
import { Title, Text } from '@components/v2/section'
import { useSectionVariant } from '@common/hooks'
import ChevronRightIcon from 'mdi-react/ChevronRightIcon'
import {
  WiredLogo,
  WashingtonPostLogo,
  NytLogo,
  EconomistLogo,
  ForbesLogo,
  FortuneLogo
} from '@components/v2/vectors'

const Wrapper = ({ ...rest }) => <Box flexGrow={0} width={1} {...rest} />

const PublicationLogo = ({ publication, ...rest }) => {
  let Component = null
  let customWidth = undefined
  switch (publication) {
    case 'Wired':
      Component = WiredLogo
      customWidth = 78
      break
    case 'The New York Times':
      Component = NytLogo
      break
    case 'The Washington Post':
      Component = WashingtonPostLogo
      break
    case 'Forbes':
      Component = ForbesLogo
      customWidth = 82
      break
    case 'Fortune':
      Component = FortuneLogo
      customWidth = 82
      break
    case 'The Economist':
      Component = EconomistLogo
      customWidth = 78
      break
  }

  if (Component) {
    return (
      <Wrapper maxWidth={customWidth} {...rest}>
        <Component {...rest} />
      </Wrapper>
    )
  }
  return null
}

const Press = ({ items, ...rest }) => {
  if (!items || !items.length) return null
  const { text, variant } = useSectionVariant()

  return (
    <Flex justifyContent="space-between" flexWrap="wrap" {...rest}>
      {items.map((item, key) => {
        const [hovered, bind] = useHover()
        return (
          <Flex
            flexDirection="column"
            justifyContent="space-between"
            bg={
              variant === 'white'
                ? 'white'
                : variant === 'ink'
                ? 'ink.95'
                : 'blue'
            }
            px={5}
            pb={6}
            pt={6}
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
            <Box>
              <Flex
                opacity={hovered ? 1 : 0.75}
                transition={transition}
                alignItems="center"
                minHeight={80}
                pb={5}
                maxWidth={150}
              >
                <PublicationLogo
                  publication={item.publication}
                  color={text.body}
                />
              </Flex>
              <Title pr={6} is="h4">
                {item.title}
              </Title>
            </Box>
            <Text
              display="inline-flex"
              alignItems="center"
              fontSize={1}
              pt={5}
              mt="auto"
              justifySelf="flex-end"
              color={hovered ? text.hover : text.body}
              opacity={hovered ? 1 : 0.75}
              transition={transition}
            >
              <Box is="span">Read article</Box>
              <Box
                transition={transition}
                transform={`translate3d(${hovered ? 1 : -1}px,4px,0)`}
              >
                <ChevronRightIcon size="17px" />
              </Box>
            </Text>
          </Flex>
        )
      })}
    </Flex>
  )
}

export { Press }
