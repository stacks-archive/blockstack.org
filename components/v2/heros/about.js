import React, { useCallback } from 'react'
import { Section, Title } from '@components/v2/section'
import { Box, Flex } from 'blockstack-ui'
import { useSpring, animated as a } from 'react-spring'
import { Image } from '@components/v2/image'
import { useInView } from 'react-intersection-observer'
import { useHover } from 'use-events'
import { transition } from '@common/theme'
import { useInViewAnimationStyles } from '@common/hooks'

const Gradient = ({ hovered, ...rest }) => (
  <Box
    opacity={hovered ? 0.5 : 0.35}
    transition={transition}
    backgroundImage="linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)"
    {...rest}
  />
)

const HeroCard = ({ logo, title, url, bgPhoto, color = 'white', ...rest }) => {
  const [isHovering, bind] = useHover()
  const hovered = url && isHovering
  return (
    <Box
      flexShrink={0}
      {...bind}
      transition={transition}
      transform={`translate3d(0,${hovered ? -10 : 0}px, 0)`}
      style={{
        willChange: 'transform'
      }}
      position="relative"
      cursor={hovered ? 'pointer' : 'unset'}
      boxShadow={
        hovered
          ? '0px 16px 24px rgba(0, 0, 0, 0.04), 0px 1px 2px rgba(0, 0, 0, 0.08)'
          : '0px 2px 12px rgba(0, 0, 0, 0.04), 0px 1px 2px rgba(0, 0, 0, 0.08)'
      }
      {...rest}
    >
      {title && (
        <>
          <Gradient
            position="absolute"
            left={0}
            right={0}
            width="100%"
            height={'60%'}
            bottom={0}
            zIndex={5}
            hovered={hovered}
          />
          <Box
            position="absolute"
            left={0}
            right={0}
            width="100%"
            height="100%"
            bottom={0}
            zIndex={5}
            transition={transition}
            bg={'ink'}
            opacity={hovered ? 0.1 : 0}
          />
        </>
      )}
      {logo && (
        <Box p={5} zIndex={9} position="absolute" left={0} top={0}>
          <Box is="img" width="50%" src={logo} />
        </Box>
      )}
      {bgPhoto && (
        <Image
          src={bgPhoto}
          imgix={{
            w: rest.width,
            h: rest.height,
            fit: 'crop',
            crop: 'faces'
          }}
        />
      )}
      {title && (
        <Box p={5} zIndex={9} position="absolute" left={0} bottom={0}>
          <Title color={color} is="h4">
            {title}
          </Title>
        </Box>
      )}
    </Box>
  )
}
const HeroGrid = ({ ...rest }) => {
  return (
    <Flex ml="30%" {...rest}>
      <HeroCard
        logo="https://blockstack-www.imgix.net/logos/tedx-logo.png"
        bgPhoto="https://blockstack-www.imgix.net/photos/muneeb-video-still.png"
        title="Welcome to the Decentralized Internet"
        url="#"
        color="white"
        mr={5}
        width={400}
        height={480}
      />
      <Box flexShrink={0} width={488} mr={5}>
        <HeroCard
          logo="https://blockstack-www.imgix.net/logos/nyt-logo.png"
          bgPhoto="https://blockstack-www.imgix.net/photos/nyt-blockstack-team-photo.png"
          title="Tech Thinks It Has a Fix for the Problems It Created: Blockchain"
          url="#"
          color="white"
          width={488}
          height={296}
          mb={5}
        />
        <HeroCard
          width={488}
          height={336}
          bgPhoto="https://blockstack-www.imgix.net/about-grid-conference.png"
        />
      </Box>
      <Box flexShrink={0} mr={5}>
        <Flex mb={5}>
          <HeroCard
            logo="https://blockstack-www.imgix.net/wired-logo-full.png"
            title="The decentralized internet is here, with some glitches"
            bgPhoto="https://blockstack-www.imgix.net/wired-bg.png"
            url="https://www.wired.com/story/the-decentralized-internet-is-here-with-some-glitches/"
            width={380}
            height={400}
            mr={5}
          />
          <HeroCard
            width={536}
            height={400}
            bgPhoto="https://blockstack-www.imgix.net/photos/photo-conference-001.jpg"
          />
        </Flex>
        <Flex>
          <HeroCard
            logo="https://blockstack-www.imgix.net/forbes-logo.png"
            bgPhoto="https://blockstack-www.imgix.net/forbes-image.png"
            title="New Blockchain Fund With Winklevoss Backing Targets Facebook's Business Model"
            url="https://www.forbes.com/sites/michaeldelcastillo/2018/05/10/new-blockchain-fund-with-winklevoss-backing-targets-facebooks-business-model/#2be7a061541b"
            width={532}
            height={400}
            mr={5}
          />
          <HeroCard
            bgPhoto="https://blockstack-www.imgix.net/photos/blockstack-team-couch.png"
            width={364}
            height={232}
            flexGrow={1}
          />
        </Flex>
      </Box>
      <HeroCard width={400} height={300} bg="blue" />
    </Flex>
  )
}

const HeroTitle = ({ ...rest }) => {
  return (
    <Section.Pane width={1} justifyContent="center" alignItems="center">
      <Section.Title maxWidth="80%">
        Blockstack is leading the&nbsp;way to a blockchain computing era
      </Section.Title>
    </Section.Pane>
  )
}

const HeroFeature = ({ transform, innerRef, ...rest }) => {
  const inViewAnimationStyles = useInViewAnimationStyles()

  return (
    <Box {...inViewAnimationStyles}>
      <div ref={innerRef}>
        <Box
          style={{
            overflowY: 'visible',
            overflowX: 'hidden'
          }}
          pt={5}
        >
          <Box is={a.div} style={{ transform }}>
            <HeroGrid />
          </Box>
        </Box>
      </div>
    </Box>
  )
}

const AboutHero = ({ ...rest }) => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 5, tension: 350, friction: 120 }
  }))
  const trans1 = (x, y) => `translate3d(${y / -15}%,0,0)`

  const [ref, inView, entry] = useInView({
    threshold: 0
  })

  const handleScroll = useCallback(
    (e) => {
      if (inView && typeof window !== 'undefined') {
        set({ xy: [window.scrollX, window.scrollY] })
      }
    },
    [inView]
  )

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [inView])

  return (
    <>
      <Box position="fixed" bg="ink" color="white" />
      <Section
        flexDirection="column"
        textAlign="center"
        minHeight={`calc(70vh - 112px)`}
        variant="white"
        width={1}
        alignItems="center"
        justifyContent="center"
      >
        <HeroTitle />
      </Section>
      <Section noWrapper>
        <HeroFeature transform={props.xy.interpolate(trans1)} innerRef={ref} />
      </Section>
    </>
  )
}

export { AboutHero }
