import React from 'react'
import { Box, Flex } from 'blockstack-ui'
import { useHover } from 'use-events'
import { transition } from '@common/theme'
import { Title } from '@components/v2/section'
import { Image } from '@components/v2/image'
import { WiredLogo, ProductHuntLogo, IndiehackersLogo } from '@components/v2/vectors'

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

const CaseStudyItem = ({ title, publication, src, app, ...rest }) => {
  const [hovered, bind] = useHover()
  return (
    <Flex
      flexDirection="column"
      cursor={hovered ? 'pointer' : 'unset'}
      px={[0, 0, 5]}
      py={5}
      transition={transition}
      transform={`translate3d(0,${hovered ? -8 : 0}px,0)`}
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
        >
          <Box
            transform={`scale(${hovered ? 1.08 : 1})`}
            transition={transition}
            position="relative"
            width="100%"
          >
            <Image
              src={src}
              imgix={{
                w: 512,
                h: 612,
                fit: 'crop',
                crop: 'faces'
              }}
              borderRadius="8px"
            />
          </Box>
        </Box>
      </Flex>
      <Flex flexDirection="column" flexGrow={1} pt={7}>
        <Title
          is="h4"
          transition={transition}
          color={hovered ? 'blue' : 'ink'}
          pb={4}
        >
          {title}
        </Title>
        <Flex
          opacity={hovered ? 1 : 0.75}
          pt={5}
          alignItems="flex-end"
          flexGrow={1}
        >
          <PublicationLogo publication={publication} />
        </Flex>
      </Flex>
    </Flex>
  )
}

const CaseStudies = ({ items }) => (
  <Flex
    flexDirection={['column', 'column', 'row']}
    justifyContent="space-between"
  >
    {items.map((item, key) => {
      return (
        <CaseStudyItem
          width={['100%', '100%', `calc(${100 / items.length + '%'} - 16px)`]}
          key={key}
          {...item}
        />
      )
    })}
  </Flex>
)

export { CaseStudies, CaseStudyItem }
