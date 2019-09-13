import React from 'react'
import { Box, Flex } from 'blockstack-ui'
import { Image } from '@components/image'
import { useHover } from 'use-events'
import { Section } from '@components/section'
import { transition } from '@common/theme'
import ArrowRightIcon from 'mdi-react/ArrowRightIcon'

const Header = ({ type, ...rest }) => {
  return type === 'mobile' ? (
    <Flex height="48px" alignItems="center" justifyContent="center">
      <Box bg="#DFE2EC" height="4px" borderRadius="4px" width="48px" />
      <Box bg="#DFE2EC" height="4px" borderRadius="4px" width="4px" ml={2} />
    </Flex>
  ) : (
    <Flex height="40px" alignItems="center" px={3}>
      <Box size="8px" borderRadius="100%" bg="#C1C3CC" />
      <Box size="8px" borderRadius="100%" bg="#E1E3E8" ml={2} />
      <Box size="8px" borderRadius="100%" bg="#E1E3E8" ml={2} />
    </Flex>
  )
}

const HoverTooltip = ({ isClicked, name, ...rest }) => {
  const styles = {
    background: '#FFFFFF',
    border: '0.5px solid #E1E3E8',
    boxShadow:
      '0px 16px 40px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.06)',
    borderRadius: '8px',
    p: 4
  }

  return (
    <Flex
      borderRadius="8px"
      justifyContent="center"
      alignItems="center"
      position="absolute"
      width="100%"
      p={5}
      height="100%"
      zIndex={99}
      left={0}
      top={0}
      bg="rgba(0,0,0,0.05)"
      transition={transition}
      opacity={isClicked ? 1 : 0}
    >
      <Flex alignItems="center" justifyContent="center" {...styles}>
        <Box
          flexShink={0}
          mr={2}
          border="1px solid #E5E5EC"
          size={40}
          bg="white"
          borderRadius="8px"
        />
        <Box maxWidth={197} flexShrink={1}>
          <Section.Text fontSize="14px" lineHeight="20px" color="#222933">
            Discover 100s of private and secure apps like {name}.
          </Section.Text>
        </Box>
        <Box pl={2} transform="translateY(2px)">
          <ArrowRightIcon color="#A1A7B3" />
        </Box>
      </Flex>
    </Flex>
  )
}

const Viewport = ({ isClicked, isMobile, name, src, ...rest }) => {
  return (
    <Box borderRadius="8px" position="relative">
      <HoverTooltip isClicked={isClicked} name={name} />
      <Image
        display="block"
        noBlur
        imgix={{ w: isMobile ? 450 : 800, q: isMobile ? 45 : 65 }}
        src={`https://blockstack-www.imgix.net/home-hero/png/${src}-inner.png`}
        borderRadius="8px"
        {...rest}
      />
    </Box>
  )
}

const Footer = ({ ...rest }) => {
  return (
    <Flex pt={4} alignItems="center" justifyContent="center" {...rest}>
      <Box
        borderRadius="48px"
        size="48px"
        bg="white"
        border="2px solid #E1E3E8"
      />
    </Flex>
  )
}

const Chrome = ({
  inner: src,
  type = 'mobile',
  isMobile,
  width,
  name,
  ...rest
}) => {
  // const [hovered, bind] = useHover()
  const hovered = false
  const bind = {}
  const [isClicked, setClick] = React.useState(false)
  // const handleClick = () => (isClicked ? setClick(false) : setClick(true))
  const handleClick = () => console.log('not complete yet, do not display')
  return (
    <Box
      px={[2, 2, 4, 4]}
      pb={[2, 2, 4, 4]}
      mx={4}
      bg={['#F2F3F7', '#F2F3F7', hovered ? '#E7E8EB' : '#F2F3F7']}
      cursor={hovered ? 'pointer' : 'unset'}
      transform={[
        'unset',
        'unset',
        hovered ? 'translateY(-5px)' : 'unset',
        hovered ? 'translateY(-5px)' : 'unset'
      ]}
      borderRadius={[type === 'mobile' ? '40px' : '12px']}
      transition={transition}
      position="relative"
      onClick={handleClick}
      style={{
        willChange: 'transform'
      }}
      {...rest}
      {...bind}
    >
      <Header type={type} />
      <Viewport
        isMobile={isMobile}
        isClicked={isClicked}
        width={width}
        src={src}
        name={name}
      />
      {type === 'mobile' ? <Footer /> : null}
    </Box>
  )
}

export { Chrome }
