import React from 'react'
import { Section, TextLink } from '@components/section'
import { Box, Flex } from 'blockstack-ui'
import { Button } from '@components/button'
import { Events } from '@components/events'
import { Sections } from '@components/sections'
import { Press } from '@components/press'
import { Videos } from '@components/videos'
import { CaseStudies } from '@components/case-studies'
import { meta, caseStudies, videos, press } from '../../common/data/home'
import fetch from 'cross-fetch'
import { News } from '@components/articles'
import { PhotoGrid } from '@components/photos-grid'
import { AuthGraphic } from '@components/graphics/auth'
import { apps } from '../../common/data/apps'
import { AppMiningGraphic } from '@components/graphics/app-mining'
import { Image } from '@components/image'
import { useHover } from 'use-events'

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

const columns = 7

const photos = [
  {
    src: 'https://blockstack-www.imgix.net/photos/photo-conference-001.jpg',
    alt: 'Photo of Edward Snowden at Blockstack Berlin.'
  },
  {
    src: 'https://blockstack-www.imgix.net/photos/photo-conference-004.jpg',
    width: 1 / 4,
    backgroundPosition: 'left center',
    alt: 'Fireside chat at a Blockstack event.'
  },
  {
    src: 'https://blockstack-www.imgix.net/photos/photo-conference-003.jpg',
    flexGrow: 1,
    alt: 'A photo of a panel discussion at a Blockstack event.'
  },
  {
    src: 'https://blockstack-www.imgix.net/photos/photo-hackathon-001.jpg',
    alt: 'A photo of people coding at a Blockstack hackathon.'
  },
  {
    src: 'https://blockstack-www.imgix.net/photo-conference-people.png',
    alt: 'A photo of a crowd attending a talk at a Blockstack conference.'
  },
  {
    src: 'https://blockstack-www.imgix.net/photos/photo-conference-006.png',
    alt: 'A photo of people networking at an event put on by Blockstack.'
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
      >
        <Section.Title
          pb={[5, 5, 5]}
          mx="auto"
          maxWidth={['100%', '100%', '80%']}
        >
          Decentralized computing network and app ecosystem
        </Section.Title>
        <Section.Text maxWidth={['100%', '100%', '50%']}>
          Blockstack apps protect your digital rights and are powered by the
          Stacks blockchain.
        </Section.Text>
        <Flex
          width={1}
          justifyContent={['center']}
          flexDirection={['column', 'column', 'row']}
          pt={5}
          mx="auto"
        >
          <Button width={[1, 1, 'unset']} path="/try-blockstack">
            Create ID
          </Button>
          <Button
            width={[1, 1, 'unset']}
            mt={[3, 3, 0]}
            ml={[0, 0, 3]}
            variant="secondary"
            path="/technology"
          >
            Build Apps
          </Button>
        </Flex>
      </Section.Pane>
      <Section.Pane position="relative" width={['100%', '100%', '40%']} />
    </>
  )
}

const transformApps = (apps) => {
  const limit = columns
  return [
    apps.filter((a, i) => i < limit),
    apps.filter((a, i) => i > limit && i <= limit * 2),
    apps.filter((a, i) => i > limit * 2 && i <= limit * 3),
    apps.filter((a, i) => i > limit * 3 && i <= limit * 4),
    apps.filter((a, i) => i > limit * 4 && i <= limit * 5),
    apps.filter((a, i) => i > limit * 5 && i <= limit * 6),
    apps.filter((a, i) => i > limit * 6 && i <= limit * 7)
  ]
}

const Hero = ({ apps = [], ...rest }) => {
  return (
    <>
      <Section
        bg="#F4F4FC"
        py={undefined}
        mt={'120px'}
        parentOverflow="hidden"
        justifyContent="center"
        alignItems="center"
        variant="white"
        position="relative"
        zIndex={99}
      >
        <HeroContent apps={apps} />
      </Section>
      <Box bg="#F4F4FC" pt={7}>
        <Box
          maxWidth="100%"
          minHeight={[225, 225, 325]}
          backgroundImage="url(https://blockstack-www.imgix.net/apps-pattern-high.png?auto=format)"
          backgroundRepeat="repeat-x"
          backgroundPosition="top center"
          backgroundSize={['1300px', '1300px', '1500px']}
          title="A display of Blockstack apps."
        />
      </Box>
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
    const { feed, users, apps } = await dataRes.json()
    return {
      meta,
      feed,
      users,
      apps: transformApps(apps.apps)
    }
  }
  render() {
    const sections = [
      {
        variant: 'white',
        panes: [
          {
            title: {
              is: 'h2',
              children:
                'Secure your data with Blockstack and get a universal login'
            },
            text: {
              children: `We provide private data lockers and a universal login with blockchain-based security and encryption — protecting your data from big internet companies.`
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
        panes: [
          {
            width: [1, 1, 0.45, 0.5],
            pretitle: {
              children: 'App Mining'
            },
            title: {
              is: 'h2',
              children: 'Build an app and get paid monthly with App Mining'
            },
            text: {
              children: `Every month we pay out $200,000 to the best apps built on Blockstack. The better your app, the more you earn.`
            },
            actions: [
              {
                type: 'link',
                label: 'Learn more',
                href: 'https://app.co/mining' // external: href
              }
            ]
          },
          {
            width: [1, 1, 0.55, 0.5],
            type: 'graphic',
            children: <AppMiningGraphic />
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
              <Flex flexDirection={['column', 'column', 'row']} pt="96px">
                <Box width={[1, 1, '50%']} order={[2, 2, 1]} pr={[0, 0, 6]}>
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
                <SummitCard />
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
                <News items={this.props.feed} users={this.props.users} />
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
              children: 'Join the decentralized computing revolution'
            },
            text: {
              children:
                'Try over 100 apps built on Blockstack or build yours in less than an hour.'
            }
          },
          {
            actions: {
              justifyContent: 'center',
              items: [
                {
                  type: 'button',
                  label: 'Create ID',
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
        <Hero apps={this.props.apps} />
        <Sections sections={sections} />
      </>
    )
  }
}

export default HomePage
