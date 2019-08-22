import React, { useCallback } from 'react'
import { Section, Title } from '@components/section/index'
import { Box, Flex } from 'blockstack-ui'
import { useSpring, animated as a } from 'react-spring'
import { Image } from '@components/image/index'
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

const LinkElement = ({ url, ...rest }) => (
  <Box
    is="a"
    width={'100%'}
    height={'100%'}
    position="absolute"
    zIndex={99}
    href={url}
    target={url ? '_blank' : undefined}
    {...rest}
  />
)

const HeroCard = ({
  logo,
  title,
  url,
  bgPhoto,
  color = 'white',
  width,
  height,
  ...rest
}) => {
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
      height={height}
      width={width}
      {...rest}
    >
      {url && <LinkElement url={url} />}
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
          height="100%"
          bgImg={bgPhoto}
          imgix={{
            w: width,
            h: height,
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

const FirstRow = (props) => {
  return (
    <Box
      flexShrink={0}
      width={['calc(100vw - 32px)', 'calc(100vw - 32px)', 488]}
      mr={[0, 0, 5]}
      ml={['calc(35vw - 32px)', 'calc(35vw - 32px)', 0]}
    >
      <HeroCard
        logo="https://blockstack-www.imgix.net/logos/nyt-logo.png"
        bgPhoto="https://blockstack-www.imgix.net/photos/nyt-blockstack-team-photo.png"
        title="Tech Thinks It Has a Fix for the Problems It Created: Blockchain"
        url="https://www.nytimes.com/2018/04/01/technology/blockchain-uses.html"
        color="white"
        width={488}
        height={296}
        maxWidth={['calc(100vw - 32px)', 'calc(100vw - 32px)', 488]}
        mb={5}
      />
      <HeroCard
        width={488}
        height={336}
        maxWidth={['calc(100vw - 32px)', 'calc(100vw - 32px)', 488]}
        bgPhoto="https://blockstack-www.imgix.net/about-grid-conference.png"
      />
    </Box>
  )
}

const MainCard = (props) => (
  <HeroCard
    logo="https://blockstack-www.imgix.net/logos/tedx-logo.png"
    bgPhoto="https://blockstack-www.imgix.net/photos/muneeb-video-still.png"
    title="Welcome to the Decentralized Internet"
    url="https://www.youtube.com/watch?v=qtOIh93Hvuw"
    color="white"
    mr={5}
    width={400}
    height={480}
  />
)

const MobileHeroGrid = ({ ...rest }) => {
  return (
    <Box ml={['38%']} {...rest}>
      <Flex mb={5}>
        <HeroCard
          logo="https://blockstack-www.imgix.net/logos/tedx-logo.png"
          bgPhoto="https://blockstack-www.imgix.net/photos/muneeb-video-still.png"
          // title="Welcome to the Decentralized Internet"
          url="https://www.youtube.com/watch?v=qtOIh93Hvuw"
          color="white"
          width={220}
          height={260}
          mr={5}
        />
        <HeroCard
          logo="https://blockstack-www.imgix.net/wired-logo-full.png"
          // title="The decentralized internet is here, with some glitches"
          bgPhoto="https://blockstack-www.imgix.net/wired-bg.png"
          url="https://www.wired.com/story/the-decentralized-internet-is-here-with-some-glitches/"
          color="white"
          width={250}
          height={260}
          mr={5}
        />
        <HeroCard
          bgPhoto="https://blockstack-www.imgix.net/about-grid-conference.png"
          color="white"
          width={350}
          height={260}
        />
      </Flex>
      <Flex>
        <HeroCard
          bgPhoto="https://blockstack-www.imgix.net/photos/blockstack-team-couch.png"
          color="white"
          width={300}
          height={260}
          mr={5}
        />
        <HeroCard
          logo="https://blockstack-www.imgix.net/logos/nyt-logo.png"
          bgPhoto="https://blockstack-www.imgix.net/photos/nyt-blockstack-team-photo.png"
          // title="Tech Thinks It Has a Fix for the Problems It Created: Blockchain"
          url="https://www.nytimes.com/2018/04/01/technology/blockchain-uses.html"
          color="white"
          width={320}
          height={260}
          mr={5}
        />
        <HeroCard
          bgPhoto="https://blockstack-www.imgix.net/photos/photo-conference-001.jpg"
          color="white"
          width={350}
          height={260}
        />
      </Flex>
    </Box>
  )
}
const HeroGrid = ({ ...rest }) => {
  return (
    <Flex ml={['30%']} {...rest}>
      <MainCard />
      <FirstRow />
      <Box
        flexShrink={0}
        mr={5}
        ml={['calc(75vw - 32px)', 'calc(75vw - 32px)', 0]}
      >
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
        <Flex ml={['calc(35vw - 32px)', 'calc(35vw - 32px)', 0]}>
          <HeroCard
            logo="https://blockstack-www.imgix.net/forbes-logo.png"
            bgPhoto="https://blockstack-www.imgix.net/forbes-image.png"
            title="New Blockchain Fund With Winklevoss Backing Targets Facebook's Business Model"
            url="https://www.forbes.com/sites/michaeldelcastillo/2018/05/10/new-blockchain-fund-with-winklevoss-backing-targets-facebooks-business-model/#2be7a061541b"
            width={532}
            height={400}
            mr={5}
            maxWidth={['calc(100vw - 32px)', 'calc(100vw - 32px)', 532]}
          />
          <HeroCard
            bgPhoto="https://blockstack-www.imgix.net/photos/blockstack-team-couch.png"
            width={364}
            height={232}
            flexGrow={1}
          />
        </Flex>
      </Box>
      {/*<HeroCard width={400} height={300} bg="blue" />*/}
    </Flex>
  )
}

const HeroTitle = ({ ...rest }) => {
  return (
    <Section.Pane
      minHeight="25vh"
      pt={5}
      width={1}
      justifyContent="center"
      alignItems="center"
    >
      <Section.Title maxWidth={['80%', '100%', '90%']}>
        Blockstack is leading the way to a decentralized computing&nbsp;era
      </Section.Title>
    </Section.Pane>
  )
}

const AboutHero = ({ feature: Feature, ...rest }) => {
  return (
    <>
      <Box position="fixed" bg="ink" color="white" />
      <Section
        flexDirection="column"
        textAlign="center"
        variant="white"
        width={1}
        alignItems="center"
        justifyContent="center"
      >
        <HeroTitle />
      </Section>
      <Section noWrapper>
        <Feature />
      </Section>
    </>
  )
}

export { AboutHero }
