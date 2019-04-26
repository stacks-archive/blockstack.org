import React from 'react'
import { Box, Flex } from 'blockstack-ui'
import PlayIcon from 'mdi-react/PlayCircleIcon'
import { useHover, useActive } from 'use-events'
import { transition } from '@common/theme'

const Gradient = ({ hovered, ...rest }) => (
  <Box
    size="100%"
    background="linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)"
    opacity={hovered ? 0.2 : '0.5'}
    position="absolute"
    left="0"
    right="0"
    zIndex={1}
    transition={transition}
    {...rest}
  />
)
const Solid = ({ hovered, ...rest }) => (
  <Box
    size="100%"
    bg="ink"
    opacity={hovered ? 0.05 : '0.15'}
    position="absolute"
    left="0"
    right="0"
    zIndex={1}
    transition={transition}
    {...rest}
  />
)
const Overlay = ({ hovered, ...rest }) => (
  <>
    <Gradient hovered={hovered} />
    <Solid hovered={hovered} />
  </>
)

const BottomDetails = ({ primary, subtitle, duration, ...rest }) => (
  <Flex
    width={1}
    px={6}
    pb={6}
    color="white"
    justifySelf="flex-end"
    justifyContent="space-between"
    position={primary ? 'absolute' : 'relative'}
    bottom={0}
    zIndex={2}
    {...rest}
  >
    <Box opacity={0.6}>{subtitle}</Box>
  </Flex>
)

const MainDetails = ({ primary, title, ...rest }) => {
  const [hovered, bind] = useHover()
  return (
    <Flex
      flexGrow={primary ? 1 : 'unset'}
      alignItems={primary ? 'center' : 'flex-start'}
      justifyContent="center"
      flexDirection="column"
      textAlign={primary ? 'center' : 'left'}
      color="white"
      position="relative"
      zIndex={2}
      width="100%"
      px={6}
      transition={transition}
      pb={!primary ? 4 : 0}
      {...rest}
    >
      <Box
        {...bind}
        transition={transition}
        transform={hovered ? (primary ? 'scale(1.1)' : 'scale(1.2)') : 'none'}
      >
        <PlayIcon size={primary ? 96 : 40} />
      </Box>
      <Box userSelect="none" pt={primary ? 5 : 3} fontSize={4} fontWeight="500">
        {title}
      </Box>
    </Flex>
  )
}

const VideoItemWrapper = ({ primary, image, ...rest }) => {
  return (
    <Flex
      minHeight={primary ? 720 : 480}
      width="100%"
      alignItems={primary ? 'center' : 'flex-start'}
      justifyContent={primary ? 'center' : 'flex-end'}
      borderRadius="8px"
      mb={5}
      position="relative"
      flexDirection="column"
      overflow="hidden"
      transition="1s all cubic-bezier(.19,1,.22,1)"
      style={{
        willChange: 'transform'
      }}
      {...rest}
    />
  )
}

const Image = ({ image, hovered, ...rest }) => (
  <Box
    position="absolute"
    size="100%"
    backgroundImage={`url(${image})`}
    backgroundSize="cover"
    backgroundPosition="center center"
    transition="1s all cubic-bezier(.19,1,.22,1)"
    transform={hovered ? 'scale(1.03)' : 'scale(1)'}
    style={{
      willChange: 'transform'
    }}
    {...rest}
  />
)
const VideoItem = ({
  hovered,
  active,
  title,
  image,
  primary,
  subtitle,
  duration,
  ...rest
}) => {
  return (
    <VideoItemWrapper
      cursor={hovered ? 'pointer' : 'unset'}
      transform={active ? 'scale(0.98)' : 'none'}
      primary={primary}
      {...rest}
    >
      <MainDetails title={title} primary={primary} />
      <BottomDetails
        duration={duration}
        primary={primary}
        subtitle={subtitle}
      />
      <Overlay hovered={hovered} />
      <Image hovered={hovered} image={image} primary={primary} />
    </VideoItemWrapper>
  )
}

const Videos = ({ items, ...rest }) => {
  return (
    <Flex py={8} width="100%" flexWrap="wrap" {...rest}>
      {items.map((item, key) => {
        const [hovered, hoverBind] = useHover()
        const [active, activeBind] = useActive()
        const bind = {
          ...hoverBind,
          ...activeBind
        }
        return (
          <VideoItem
            title={item.title}
            subtitle={item.subtitle}
            image={item.image}
            duration={item.duration}
            width={item.width}
            primary={key === 0}
            key={key}
            hovered={hovered}
            active={active}
            {...bind}
          />
        )
      })}
    </Flex>
  )
}

export { Videos }
