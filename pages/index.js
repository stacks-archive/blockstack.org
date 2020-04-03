import React from 'react'
import { Section, TextLink } from '@components/section'
import { Box, Flex } from 'blockstack-ui'
import { Button } from '@components/button'
import { Events } from '@components/events'
import { Sections } from '@components/sections'
import { Press } from '@components/press'
import { Videos } from '@components/videos'
import { CaseStudies } from '@components/case-studies'
import { meta, caseStudies, videos, press } from '@common/data/home'
import fetch from 'cross-fetch'
import { News } from '@components/articles'
import { PhotoGrid } from '@components/photos-grid'
import { AuthGraphic } from '@components/graphics/auth'
import { Image } from '@components/image'
import { useHover } from 'use-events'
import { Chrome } from '@components/device-chrome'
import { useSectionIsInViewport } from '@common/hooks'
import styled, { keyframes } from 'styled-components'

const moveHorizontally = keyframes`
  100% { 
    transform: translateX(-33.333333%);  
  }
`

const AnimatedDiv = styled(Flex)`
  animation: ${moveHorizontally} ${({ speed = 8 }) => speed}s linear infinite;
`

const SummitCard = ({ ...rest }) => {
  const [hovered, bind] = useHover()
  return (
    <Box
      width={[1, 1, '50%']}
      order={[1, 1, 2]}
      pb={[6, 6, 0]}
      pl={[0, 0, 6]}
      position="relative"
      {...bind}
    >
      <LinkElement target="_blank" href="https://summit.blockstack.org" />
      <Box
        p={6}
        boxShadow="0px 16px 40px rgba(0, 0, 0, 0.04), 0px 1px 2px rgba(0, 0, 0, 0.06)"
        borderRadius="8px"
      >
        <Image
          borderRadius="8px"
          src="https://blockstack-www.imgix.net/graphic-blockstack-summit.png"
        />
        <Box pt={6}>
          <Section.Title is="h3">4th annual Blockstack Summit</Section.Title>
          <Flex pb={4} mt={2} alignItems="center">
            <Box
              size={20}
              bg="ink"
              borderRadius="100%"
              mr={2}
              overflow="hidden"
            >
              <Box
                is="span"
                width="100%"
                height="100%"
                style={{
                  backgroundSize: '150%',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat'
                }}
                className={`flag-icon flag-icon-us`}
              />
            </Box>
            <Section.Text opacity={0.8} color="#33333E" fontSize="14px">
              San Francisco, October 23
            </Section.Text>
          </Flex>
          <Box>
            <Section.Text color="#33333E" fontSize="14px">
              One full day in San Francisco featuring Neal Stephenson, Naval
              Ravikant, Elizabeth Stark, Dave Morin, Muneeb Ali, Preethi
              Kasireddy, Daniela Perdomo, Balaji Srinivasan, and more.
            </Section.Text>
          </Box>
          <Flex justifyContent="flex-start" pt={6}>
            <Button
              hovered={hovered}
              href="https://summit.blockstack.org"
              target="_blank"
              variant="secondary"
            >
              Learn more
            </Button>
          </Flex>
        </Box>
      </Box>
    </Box>
  )
}

const photos = [
  {
    src: 'https://blockstack-www.imgix.net/landing-page-004.jpeg',
    alt:
      'A photo of a Andreas Antonopoulos giving a talk at the Blockstack Summit 2019.'
  },

  {
    src: 'https://blockstack-www.imgix.net/landing-page-001.jpeg',
    width: 1 / 4,
    backgroundPosition: 'center center',
    alt: 'Fireside chat at a Blockstack event.'
  },
  {
    src: 'https://blockstack-www.imgix.net/landing-page-002.jpeg',
    flexGrow: 1,
    alt: 'Naval Ravikant and Neal Stephenson at the Blockstack Summit 2019.'
  },
  {
    src: 'https://blockstack-www.imgix.net/landing-page-003.jpeg',
    alt: 'A photo of a speaker at the Blockstack Summit 2019.'
  },
  {
    src: 'https://blockstack-www.imgix.net/photos/photo-conference-001.jpg',
    alt: 'Photo of Edward Snowden at Blockstack Berlin.'
  },
  {
    src: 'https://blockstack-www.imgix.net/landing-page-005.jpeg',
    alt: 'A photo of people in the crowd at an event put on by Blockstack.'
  }
]

const HeroContent = ({ apps, ...rest }) => {
  return (
    <>
      <Section.Pane
        width={['100%']}
        alignSelf="center"
        position="relative"
        textAlign="center"
        justifyContent="center"
        alignItems="center"
        px={[5, 5, 0]}
      >
        <Section.Title
          pb={[5, 5, 5]}
          mx="auto"
          maxWidth={['100%', '100%', '600px']}
        >
          Software for a user owned internet
        </Section.Title>
        <Section.Text maxWidth={['100%', '100%', '544px']}>
          Blockstack apps give users direct ownership of their internet assets
          and protect user privacy.
        </Section.Text>
        <Flex
          width={1}
          justifyContent={['center']}
          flexDirection={['column', 'column', 'row']}
          pt={5}
          mx="auto"
        >
          <Button width={[1, 1, 'unset']} path="/try-blockstack">
            Try apps
          </Button>
          <Button
            width={[1, 1, 'unset']}
            mt={[3, 3, 0]}
            ml={[0, 0, 3]}
            variant="secondary"
            path="/technology"
          >
            Build apps
          </Button>
        </Flex>
      </Section.Pane>
      <Section.Pane position="relative" width={['100%', '100%', '40%']} />
    </>
  )
}

const renderApps = (items, isMobile) =>
  items.map(({ y, apps }, sectionKey) => (
    <Box
      key={sectionKey}
      transform={['none', 'none', `translateY(${y}px)`, `translateY(${y}px)`]}
    >
      {apps.map(({ slug, name, width, ...rest }, appKey) => (
        <Chrome
          isMobile={isMobile}
          inner={slug}
          key={appKey}
          width={width}
          name={name}
          {...rest}
        />
      ))}
    </Box>
  ))

const mobileHeroItems1 = [
  {
    y: 0,
    apps: [{ slug: 'dmail', name: 'dMail', width: 490, type: 'browser' }]
  },
  {
    y: 0,
    apps: [{ slug: 'recall', name: 'Recall', width: 264 }]
  },
  {
    y: 0,
    apps: [{ slug: 'sigle', name: 'Sigle', width: 530, type: 'browser' }]
  },
  {
    y: 0,
    apps: [{ slug: 'nomie', name: 'Nomie', width: 264 }]
  }
]
const mobileHeroItems2 = [
  {
    y: 0,
    apps: [{ slug: 'scannie', name: 'Scannie', width: 264 }]
  },
  {
    y: 0,
    apps: [{ slug: 'forms-id', name: 'Forms.id', width: 490, type: 'browser' }]
  },
  {
    y: 0,
    apps: [{ slug: 'afari', name: 'Afari', width: 264 }]
  },
  {
    y: 0,
    apps: [
      {
        slug: 'arcane-sheets',
        name: 'Arcane Sheets',
        type: 'browser',
        width: 488
      }
    ]
  }
]
const heroItems = [
  {
    y: 220,
    apps: [{ slug: 'dmail', name: 'dMail', width: 464, type: 'browser' }]
  },
  {
    y: 120,
    apps: [
      { slug: 'recall', name: 'Recall', width: 264 },
      { slug: 'nomie', name: 'Nomie', width: 264, mt: 6 }
    ]
  },
  {
    y: 25,
    apps: [
      { slug: 'afari', name: 'Afari', width: 264 },
      { slug: 'scannie', name: 'Scannie', width: 264, mt: 6 }
    ]
  },
  {
    y: 0,
    apps: [
      { slug: 'sigle', name: 'Sigle', width: 490, type: 'browser' },
      { slug: 'forms-id', name: 'Forms.id', width: 490, type: 'browser', mt: 6 }
    ]
  },
  {
    y: 115,
    apps: [
      {
        slug: 'arcane-sheets',
        name: 'Arcane Sheets',
        type: 'browser',
        width: 488
      },
      { slug: 'graphite', name: 'Graphite', type: 'browser', width: 488, mt: 6 }
    ]
  },
  {
    y: 180,
    apps: [{ slug: 'nomie', name: 'Nomie', width: 264 }]
  }
]

const AnimatedWrapperPlaceholer = ({ children }) => <>{children}</>
const HeroGraphicWrapper = ({
  mobile,
  display,
  animatedWrapper: AnimatedWrapper = AnimatedWrapperPlaceholer,

  ...rest
}) => {
  const isInViewport = useSectionIsInViewport()

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      width="100%"
      height={!mobile ? ['392px', '492px', '592px', '792px'] : '294px'}
      maxWidth="100vw"
      px={5}
      overflow="hidden"
      bg="white"
      mt={!mobile ? 64 : undefined}
      borderBottom={!mobile ? '1px solid #F0F0F5' : undefined}
      position="relative"
      display={display}
    >
      <Box
        transition="1s opacity cubic-bezier(.19,1,.22,1) 0.5s"
        position="absolute"
        top={0}
        pt={!mobile ? 64 : undefined}
        opacity={isInViewport ? 1 : 0}
        transform={[
          `scale(0.5) translateX(-3.8%)`,
          `scale(0.5) translateX(-3.8%)`,
          `scale(0.8) translateX(-3.8%)`,
          `translateX(-3.8%)`
        ]}
        style={{
          transformOrigin: 'top center'
        }}
      >
        <Flex
          alignItems="flex-start"
          justifyContent="center"
          transition="1s transform cubic-bezier(.19,1,.22,1) 0.5s"
          transform={`translateY(${isInViewport ? 0 : -10}px)`}
        >
          <AnimatedWrapper
            {...rest}
            alignItems="flex-start"
            justifyContent="center"
          />
        </Flex>
      </Box>
    </Flex>
  )
}
const HeroGraphic = ({ items, mobile, ...rest }) => {
  return (
    <HeroGraphicWrapper mobile={mobile} {...rest}>
      {renderApps(items)}
      {mobile ? renderApps(items, mobile) : null}
      {mobile ? renderApps(items, mobile) : null}
    </HeroGraphicWrapper>
  )
}

const Hero = ({ ...rest }) => {
  return (
    <>
      <Section
        bg="white"
        py={undefined}
        px={0}
        mt={[64, 64, '120px']}
        parentOverflow="hidden"
        maxWidth="100%"
        justifyContent="center"
        alignItems="center"
        variant="white"
        position="relative"
        zIndex={99}
      >
        <HeroContent />
        <HeroGraphic display={['none', 'none', 'flex']} items={heroItems} />
        <Box
          maxHeight="560px"
          overflow="hidden"
          display={['block', 'block', 'none']}
          pt={6}
          width={1}
          borderBottom={'1px solid #F0F0F5'}
        >
          <Box width={1} pb={3}>
            <HeroGraphic
              animatedWrapper={(p) => <AnimatedDiv {...p} speed={20} />}
              display={['flex', 'flex', 'none']}
              items={mobileHeroItems1}
              mobile
            />
          </Box>
          <Box width={1}>
            <HeroGraphic
              animatedWrapper={(p) => <AnimatedDiv {...p} speed={15} />}
              display={['flex', 'flex', 'none']}
              items={mobileHeroItems2}
              mobile
            />
          </Box>
        </Box>
      </Section>
    </>
  )
}

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

class HomePage extends React.Component {
  static async getInitialProps(ctx) {
    const dataRes = await fetch('https://www-api.blockstack.sh/')
    const { feed, users } = await dataRes.json()
    return {
      meta,
      feed: feed.filter((post) => post.categories.find((cat) => cat === 145)),
      users
    }
  }

  render() {
    const { users, feed } = this.props
    const sections = [
      {
        variant: 'white',
        panes: [
          {
            title: {
              is: 'h2',
              children:
                'Secure your data with Blockstack apps and get a universal login'
            },
            text: {
              children: `Blockstack apps use private data lockers and a universal login with blockchain-based security and encryption—protecting your data from big internet companies.`
            },
            actions: [
              {
                type: 'link',
                label: 'Learn more',
                path: '/try-blockstack' // is internal, use path instead of href
              }
            ]
          },
          {
            type: 'graphic',
            src:
              'https://blockstack-www.imgix.net/home-try-blockstack-graphic.png',
            alt:
              'An example interface showing a user of Blockstack and their apps.'
          }
        ]
      },
      {
        variant: 'white',
        bg: 'sky.10',
        panes: [
          {
            children: <AuthGraphic />
          },
          {
            title: {
              is: 'h2',
              children: 'Build blockchain-powered apps in as little as an hour'
            },
            text: {
              children: `Everything you need, from auth to data storage, ready and in
          production. 100% Javascript — zero backend development.`
            },
            actions: [
              {
                type: 'link',
                label: 'Learn more',
                path: '/technology' // is internal, use path instead of href
              }
            ]
          },
          {
            width: 1,
            pt: 8,
            children: <CaseStudies pt={[8, 8, 0]} items={caseStudies} />
          }
        ]
      },
      {
        variant: 'white',
        children: (
          <Box width="100%" maxWidth="100%">
            <PhotoGrid items={photos} />
          </Box>
        )
      },

      {
        variant: 'white',
        py: '128px',
        panes: [
          {
            width: 1,
            maxWidth: 544,
            justifyContent: 'center',
            alignItems: 'center',
            mx: 'auto',
            textAlign: 'center',
            title: {
              is: 'h2',
              pb: [5, 5, 4],
              children: 'Learn more at summits, hackathons, and workshops'
            },
            text: {
              maxWidth: 544,
              children: `We host over 100 global events with 10,000+ developers, scientists and entrepreneurs each year.`
            }
          },
          {
            width: '100%',
            children: (
              <Flex
                maxWidth="700px"
                mx="auto"
                flexDirection={['column', 'column', 'row']}
                pt="96px"
              >
                <Box width={1}>
                  <Events />
                  <Box pt={2}>
                    <TextLink
                      fontSize="14px"
                      action={{
                        label: 'View all events',
                        href: 'https://community.blockstack.org/events'
                      }}
                    />
                  </Box>
                </Box>
              </Flex>
            )
          }
        ]
      },
      {
        variant: 'ink',
        maxWidth: '1224px',
        panes: [
          {
            width: '100%',
            py: 8,
            children: <Videos items={videos} />
          }
        ]
      },
      {
        variant: 'white',
        py: 128,
        minHeight: 0,
        alignItems: 'flex-start',
        panes: [
          {
            justifyContent: 'flex-start',
            flexDirection: 'column',
            alignItems: 'flex-start',
            width: ['100%', '100%', '30%'],
            title: {
              is: 'h2',
              pr: 5,
              pb: 0,
              children: 'Latest news'
            },
            actions: {
              pt: [0],
              items: [
                {
                  type: 'link',
                  label: 'View all news',
                  href: 'https://blog.blockstack.org'
                }
              ]
            }
          },
          {
            width: ['100%', '100%', '70%'],
            children: (
              <Box pt={[5, 5, 0]}>
                <News items={feed} users={users} />
              </Box>
            )
          },
          {
            width: 1,
            children: <Press pt={8} items={press} />
          }
        ]
      },
      {
        variant: 'blue',
        minHeight: '400px',
        py: 8,
        panes: [
          {
            title: {
              is: 'h2',
              children: 'Join the user owned internet'
            },
            text: {
              children:
                'Try over 420 apps built on Blockstack or build yours in less than an hour.'
            }
          },
          {
            actions: {
              justifyContent: 'center',
              items: [
                {
                  type: 'button',
                  label: 'Try apps',
                  path: '/try-blockstack'
                },
                {
                  type: 'button',
                  label: 'Build apps',
                  variant: 'secondary',
                  path: '/technology'
                }
              ]
            }
          }
        ]
      }
    ]

    return (
      <>
        <Hero />
        <Sections sections={sections} />
      </>
    )
  }
}

export default HomePage
