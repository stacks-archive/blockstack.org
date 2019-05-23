import React from 'react'
import { Box, Flex } from 'blockstack-ui'
import { useHover } from 'use-events'
import { transition } from '@common/theme'
import { Title } from '@components/v2/section'
import { Image } from '@components/v2/image'
import {
  WiredLogo,
  ProductHuntLogo,
  IndiehackersLogo
} from '@components/v2/vectors'
import { useMedia } from '@common/hooks'

const PublicationLogo = ({ publication }) => {
  if (publication === 'Indie Hackers') {
    return (
      <Box flexGrow={0} width={1} maxWidth="135px">
        <IndiehackersLogo />
      </Box>
    )
  }
  if (publication === 'Product Hunt') {
    return (
      <Box flexGrow={0} width={1} maxWidth="135px">
        <ProductHuntLogo />
      </Box>
    )
  }
  if (publication === 'Wired') {
    return (
      <Box flexGrow={0} width={1} maxWidth="105px">
        <WiredLogo />
      </Box>
    )
  }
  return null
}

const CaseStudyItem = ({ title, publication, src, app, href, ...rest }) => {
  const [hovered, bind] = useHover()
  const isMobile = useMedia(1)
  return (
    <Flex
      flexDirection={['row', 'row', 'column']}
      cursor={hovered ? 'pointer' : 'unset'}
      pt={[5]}
      pb={[7, 7, 5]}
      transition={transition}
      transform={`translate3d(0,${hovered ? -8 : 0}px,0)`}
      is="a"
      style={{ textDecoration: 'none' }}
      href={href}
      target="_blank"
      {...rest}
      {...bind}
    >
      <Flex
        width={['40%', '25%', '100%']}
        position="relative"
        flexShrink={0}
        mr={[5, 5, 0]}
        alignItems="flex-end"
      >
        <Box
          size={80}
          right={[5]}
          bottom={5}
          position="absolute"
          zIndex={10}
          is="img"
          src={app}
        />
        <Flex
          alignItems="center"
          overflow="hidden"
          width={1}
          boxShadow={
            hovered
              ? '0px 16px 24px rgba(0, 0, 0, 0.04), 0px 1px 2px rgba(0, 0, 0, 0.08)'
              : '0px 2px 12px rgba(0, 0, 0, 0.04), 0px 1px 2px rgba(0, 0, 0, 0.08)'
          }
          t
          transition={transition}
          borderRadius="8px"
          maxHeight={['300px', '190px', 'unset']}
        >
          <Box position="relative" width="100%">
            <Image
              src={src}
              imgix={{
                w: 512,
                h: 512,
                fit: 'crop',
                crop: 'faces'
              }}
              borderRadius="8px"
            />
          </Box>
        </Flex>
      </Flex>
      <Flex flexDirection="column" flexGrow={1} pt={5}>
        <Title
          is="h5"
          transition={transition}
          color={hovered ? 'blue' : 'ink'}
          fontSize={2}
          pb={[1, 1, 2]}
        >
          {title}
        </Title>
        <Flex
          opacity={hovered ? 1 : 0.75}
          pt={3}
          alignItems="flex-end"
          flexGrow={1}
        >
          <PublicationLogo publication={publication} />
        </Flex>
      </Flex>
    </Flex>
  )
}

const CaseStudies = ({ items, ...rest }) => (
  <Flex
    flexDirection={['column', 'row', 'row']}
    flexWrap="wrap"
    justifyContent="space-between"
    {...rest}
  >
    {items.map((item, key) => {
      return (
        <CaseStudyItem
          width={['100%', '100%', `calc(33.333% - 24px)`]}
          key={key}
          {...item}
        />
      )
    })}
  </Flex>
)

export { CaseStudies, CaseStudyItem }
