import React from 'react'
import { Section } from '@components/v2/section'
import { Box, Flex } from 'blockstack-ui'
import { Button } from '@components/button'
import { Events } from '@components/v2/events'
import { Sections } from '@components/v2/sections'
import { Press } from '@components/v2/press'
import { Videos } from '@components/v2/videos'
import { CaseStudies } from '@components/v2/case-studies'
import { meta, caseStudies, videos, press } from './data'
import fetch from 'cross-fetch'
import { News } from '@components/v2/articles'
import { PhotoGrid } from '@components/v2/photos-grid'
import { AuthGraphic } from '@components/v2/graphics/auth'
import { useTrail, animated } from 'react-spring'
import { useHover } from 'use-events'
import { transition } from '@common/theme'
import { apps } from './apps'
import { AppMiningGraphic } from '@components/v2/graphics/app-mining'

const columns = 7
const array = Array.from(Array(columns))

const appIconSize = [52, 52, 84]
const config = { mass: 18, tension: 3500, friction: 300 }

const AppIcon = ({ data: { website, name, imgixImageUrl }, ...rest }) => {
  const [hovered, bind] = useHover()
  return (
    <Box
      position="relative"
      mb={['80px', '80px', '180px']}
      cursor={hovered ? 'pointer' : 'unset'}
      {...bind}
      {...rest}
    >
      <Flex
        style={{ textDecoration: 'none' }}
        is="a"
        color="ink"
        href={website}
        flexDirection="column"
        alignItems="center"
      >
        <Box
          transition={transition}
          transform={`translate3d(0,${hovered ? -10 : 0}px,0)`}
          size={appIconSize}
        >
          <Box
            display="block"
            maxWidth="100%"
            width={1}
            borderRadius={['5px', '5px', '20px']}
            boxShadow="0px 2px 12px rgba(0, 0, 0, 0.04), 0px 1px 2px rgba(0, 0, 0, 0.08)"
            is="img"
            alt={`App Icon for ${name}`}
            src={imgixImageUrl + '?auto=format&w=96&h=96'}
          />
        </Box>
        <Box
          opacity={hovered ? 1 : 0}
          mt={4}
          bg="sky.25"
          px={3}
          py={1}
          borderRadius="20px"
          fontSize={1}
          transition={transition}
          transform={`translate3d(0,${hovered ? -10 : 10}px,0)`}
        >
          {name}
        </Box>
      </Flex>
    </Box>
  )
}

const AppColumn = ({ items, index, ...rest }) => {
  const transitions = useTrail(items.length, {
    config,
    from: { opacity: 0, transform: `translate3d(0, ${80}px,0)` },
    transform: 'translate3d(0,0px,0)',
    opacity: 1
  })
  return transitions.map((props, key) => (
    <AppIcon
      key={key}
      data={{
        name: items[key].name,
        website: items[key].website,
        imgixImageUrl: items[key].imgixImageUrl
      }}
      is={animated.div}
      style={props}
    />
  ))
}

const GraphicForHero = ({ apps, ...rest }) => {
  return (
    <Flex
      flexWrap="wrap"
      position={['relative', 'relative', 'absolute']}
      width={['100vw', '100vw', '50vw']}
      minWidth={['600px', '600px', '1000px']}
      height={['50vh', '50vh', '100vh']}
      top={[0, 0, '-150px']}
      overflow="hidden"
      left={[-80, -80, 0]}
      pt={['120px', '120px', '80px']}
      {...rest}
    >
      {array.map((column, key) => (
        <Flex
          flexShrink={0}
          transform={
            key % 2
              ? ['translateY(-6vh)', 'translateY(-6vh)', 'translateY(-120px)']
              : 'none'
          }
          flexGrow={1}
          justifyContent="flex-start"
          flexDirection="column"
          height={['100vh', '100vh', '140vh']}
          alignItems="center"
          key={key}
        >
          <AppColumn index={key + 1} items={apps[key]} />
        </Flex>
      ))}
    </Flex>
  )
}

const photos = [
  { src: 'https://blockstack-www.imgix.net/photos/photo-conference-001.jpg' },
  {
    src: 'https://blockstack-www.imgix.net/photos/photo-conference-004.jpg',
    width: 1 / 4,
    backgroundPosition: 'left center'
  },
  {
    src: 'https://blockstack-www.imgix.net/photos/photo-conference-003.jpg',
    flexGrow: 1
  },
  { src: 'https://blockstack-www.imgix.net/photos/photo-hackathon-001.jpg' },
  { src: 'https://blockstack-www.imgix.net/photos/photo-conference-002.jpg' },
  { src: 'https://blockstack-www.imgix.net/photos/photo-conference-006.png' }
]

const HeroContent = ({ apps, ...rest }) => {
  return (
    <>
      <Section.Pane
        width={['100%', '100%', '60%']}
        alignSelf="center"
        position="relative"
      >
        <Section.Title pb={[5, 5, 5]} maxWidth={['100%', '100%', '80%']}>
          Blockchain computing platform and app ecosystem
        </Section.Title>
        <Section.Text maxWidth={['100%', '100%', '80%']}>
          Blockstack apps protect your digital rights and are powered by the
          Stacks blockchain.
        </Section.Text>
        <Flex
          width={1}
          justifyContent={['flex-start']}
          flexDirection={['column', 'column', 'row']}
          pt={5}
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
        minHeight="calc(100vh - 112px - 325px)"
        parentOverflow="hidden"
        alignItems="flex-start"
        variant="white"
      >
        <HeroContent apps={apps} />
      </Section>
      <Box bg="#F4F4FC">
        <Box
          maxWidth="100%"
          minHeight={[225, 225, 325]}
          backgroundImage="url(https://blockstack-www.imgix.net/apps-pattern-high.png?auto=format&w=1800)"
          backgroundRepeat="repeat-x"
          backgroundPosition="top center"
          backgroundSize={['1300px', '1300px', '1500px']}
        />
      </Box>
    </>
  )
}

class HomePage extends React.Component {
  static async getInitialProps(ctx) {
    const feedData = await fetch(
      'https://blog.blockstack.org/wp-json/wp/v2/posts?per_page=20'
    )
    const usersData = await fetch(
      'https://blog.blockstack.org/wp-json/wp/v2/users?per_page=20'
    )
    const feed = await feedData.json()
    const users = await usersData.json()
    //
    // const appsData = await fetch('https://api.app.co/api/app-mining-apps')
    // const apps = await appsData.json()

    return {
      meta,
      feed,
      users,
      apps: transformApps(apps)
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
              children: 'Secure your data with Blockstack and get a universal login'
            },
            text: {
              children: `We give users their private data lockers and a universal login with blockchain-based security and encryption — protecting your data from big internet companies.`
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
            src: 'https://blockstack-www.imgix.net/blockstack-id-graphic.png'
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
              children: `Every month we pay out $100,000 to the best apps built on Blockstack. The better your app, the more you earn.`
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
        py: 8,
        panes: [
          {
            title: {
              is: 'h2',
              pr: 5,
              children: 'Attend summits, hackathons, and workshops'
            }
          },
          {
            text: {
              children: `We host over 100 global events with 10,000+ developers, scientists and entrepreneurs each year.`
            },
            actions: [
              {
                type: 'link',
                label: 'View all upcoming events',
                href: 'https://community.blockstack.org/'
              }
            ]
          },
          {
            width: '100%',
            children: <Events pt={8} />
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
        py: 8,
        minHeight: 0,
        alignItems: 'flex-start',
        panes: [
          {
            justifyContent: ['space-between', 'space-between', 'flex-start'],
            flexDirection: ['row', 'row', 'column'],
            alignItems: ['flex-end', 'flex-end', 'flex-start'],
            title: {
              is: 'h2',
              pr: 5,
              pb: 0,
              children: 'Latest news'
            },
            actions: [
              {
                type: 'link',
                label: 'View all news',
                href: 'https://blog.blockstack.org'
              }
            ]
          },
          {
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
