import React from 'react'
import { Sections } from '@components/v2/sections'
import { Section } from '@components/v2/section'
import { Grid } from '@components/v2/grid'
import { Box, Flex } from 'blockstack-ui'
import { Events } from '@components/v2/events'
import { Button } from '@components/button'
import { AppsList } from '@components/v2/apps-list'
import { PhotoGrid } from '@components/v2/photos-grid'
import { photos, apps, appBuildersGrid, usersGrid } from './data'
import { AuthGraphic } from '@components/v2/graphics/auth'

const sections = [
  {
    variant: 'ink',
    pt: '100px',
    panes: [
      {
        title: {
          is: 'h2',
          children:
            'Blockstack is a blockchain computing platform and app ecosystem that puts users in control of their identity and data.'
        }
      },
      [
        {
          title: {
            pb: 0,
            is: 'h4',
            children: '65 teams'
          },
          text: {
            children: `have built production apps on our infrastructure the past five months.`
          }
        },
        {
          title: {
            pb: 0,
            is: 'h4',
            children: '2,000 developers'
          },
          text: {
            children: `have attended our global hackathons and meetups in the past two months.`
          }
        }
      ],
      {
        width: 1,
        children: (
          <Box my={8} py={4}>
            <Box pb={7} textAlign="center" color="sky">
              Apps built on Blockstack
            </Box>
            <AppsList items={apps} />
          </Box>
        )
      }
    ]
  },
  {
    variant: 'white',
    align: 'center',
    panes: [
      {
        width: 1,
        maxWidth: ['100%', '100%', '60%'],
        mx: 'auto',
        title: {
          is: 'h2',
          children:
            'Everything you need, from authentication to data storage, ready and in production.'
        },
        text: {
          children:
            'We abstract the blockchain complexity so you can focus on building great apps. Our design principles: Keep auth and smart contracts on-chain, keep application user data off-chain, and wrap everything in an easy JavaScript API.'
        }
      }
    ]
  },
  {
    variant: 'white',
    bg: 'sky.10', // remove if changing variant
    panes: [
      {
        title: {
          is: 'h2',
          children: 'Developer tools'
        },
        text: {
          children:
            'Comprehensive programming libraries are available for a wide range of environments such as web, iOS, and Android. Our libraries are designed to require no additional language or protocol knowledge — any Javascript developer can build a Blockstack app in one hour.'
        }
      },
      {
        type: 'graphic',
        src: 'https://blockstack-www.imgix.net/dev-tools-graphic.png'
      }
    ]
  },
  {
    variant: 'white',
    panes: [
      {
        type: 'graphic',
        src: 'https://blockstack-www.imgix.net/id-graphic.png'
      },
      {
        title: {
          is: 'h2',
          children: 'Stacks blockchain'
        },
        text: {
          children:
            'Designed with security, scaleability, and speed in mind. We use tunable proof-of-work to allow developers to strike the right balance between speed and reliability. For app builders, we abstract all blockchain complexity into simple Javascript APIs.'
        }
      }
    ]
  },
  {
    variant: 'white',
    bg: 'sky.10', // remove if changing variant
    panes: [
      {
        title: {
          is: 'h2',
          children: 'Authentication'
        },
        text: {
          children:
            'Easily include user registration and authentication with Blockstack IDs. Profile security is enforced by the Stacks Blockchain and Blockstack Naming Service (BNS), leaving credentials and identity management in user’s hands.'
        }
      },
      {
        type: 'graphic',
        children: <AuthGraphic />
      }
    ]
  },
  {
    variant: 'white',
    panes: [
      {
        type: 'graphic',
        src: 'https://blockstack-www.imgix.net/no-graphic.png'
      },
      {
        title: {
          is: 'h2',
          children: 'Data storage'
        },
        text: {
          children:
            'Users assume responsibility of their data — it’s stored in a location of their choice and not on your servers. Zero database costs or server maintenance means you can focus on what you do best: improving the functionality of your app. '
        }
      }
    ]
  },
  {
    variant: 'white',
    panes: [
      {
        title: {
          is: 'h2',
          children: 'Smart contracts'
        },
        text: {
          children:
            'We’ve created a non-turing complete, Lisp smart contracting language; Allowing you to write and execute free from unexpected side effects, security issues, or fees. App builders can create side chains and app-specific tokens atop Blockstack’s platform.  '
        }
      },
      {
        type: 'graphic',
        src: 'https://blockstack-www.imgix.net/no-graphic.png'
      }
    ]
  },
  {
    variant: 'white',
    bg: 'sky.10', // remove if changing variant
    panes: [
      {
        pretitle: {
          children: 'App Mining'
        },
        title: {
          is: 'h2',
          children:
            'Every 30 days, we pay out $100K to the best Blockstack apps'
        },
        text: {
          children:
            'We’re honored to fund decentralized app pioneers with our App Mining program. Get paid the moment you launch your app — the better your app, the more you earn.'
        }
      },
      {
        type: 'graphic',
        src: 'https://blockstack-www.imgix.net/app-mining-graphic.png'
      }
    ]
  },
  {
    variant: 'white',
    flexDirection: 'column',
    justifyContent: 'center',
    py: 9,
    panes: [
      {
        width: 1,
        pb: 8,
        title: {
          is: 'h2',
          children: 'Blockstack is better for app builder'
        }
      },
      {
        width: 1,
        children: <Grid items={appBuildersGrid} />
      }
    ]
  },
  {
    variant: 'white',
    bg: 'sky.10', // remove if changing variant
    flexDirection: 'column',
    justifyContent: 'center',
    py: 8,
    panes: [
      {
        pb: 8,
        width: 1,
        title: {
          is: 'h2',
          children: 'Blockstack is better for your users'
        },
        text: {
          children: 'Learn more about using Blockstack'
        }
      },
      {
        width: 1,
        children: <Grid items={usersGrid} />
      }
    ]
  },
  {
    variant: 'white',
    align: 'center',
    minHeight: '380px',
    py: 8,
    panes: [
      {
        width: 1,
        title: {
          is: 'h2',
          children: 'Attend summits, hackathons, and workshops'
        },
        text: {
          children:
            'We host over 100 global events with 10,000+ developers, scientists and entrepreneurs each year.'
        }
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
    alignItems: 'flex-end',
    minHeight: 0,
    panes: [
      {
        pb: 6,
        title: {
          is: 'h2',
          pr: 5,
          pb: [0, 0, 5],
          children: 'Upcoming events'
        },
        actions: [
          {
            pt: 0,
            type: 'link',
            label: 'View all upcoming events',
            href: '#'
          }
        ]
      },
      {
        width: '100%',
        children: <Events />
      }
    ]
  },
  {
    variant: 'blue',
    align: 'center',
    justifyContent: 'center',
    minHeight: '400px',
    py: 8,
    panes: [
      {
        mx: 'auto',
        title: {
          is: 'h2',
          children: 'Ready to start building on Blockstack?'
        },
        actions: {
          mx: 'auto',
          pt: 5,
          items: [
            {
              type: 'button',
              label: 'Zero-to-dapp tutorial',
              href: 'https://angel.co/blockstack',
              target: '_blank'
            }
          ]
        }
      }
    ]
  }
]

const Hero = ({ ...rest }) => (
  <>
    <Section
      flexDirection="column"
      textAlign="center"
      minHeight={`calc(70vh - 112px)`}
      variant="ink"
      width={1}
      alignItems="center"
      justifyContent="center"
      pt="180px"
      bg="black"
    >
      <Section.Pane width={1} justifyContent="center" alignItems="center">
        <Section.Title pb={5} maxWidth={['100%', '100%', '80%']}>
          Easily build blockchain apps that scale
        </Section.Title>
        <Section.Text maxWidth={['100%', '100%', '50%']}>
          Get started with our Zero-to-Dapp tutorial, view our documentation, or
          visit our Github.
        </Section.Text>
        <Flex
          pt={5}
          width={1}
          justifyContent={['flex-start', 'flex-start', 'center']}
        >
          <Button width={[1, 1, 'unset']}>Tutorials</Button>
        </Flex>
      </Section.Pane>
      <Section.Pane
        pt={9}
        width={1}
        justifyContent="center"
        alignItems="center"
      >
        <Box
          mb={8}
          is="img"
          src="https://blockstack-www.imgix.net/tech-hero-graphic.png"
          width="100%"
          maxWidth="100%"
          display="block"
        />
      </Section.Pane>
    </Section>
  </>
)

const meta = {
  title: 'Technology',
  path: '/technology',
  theme: 'ink'
}

class TechnologyPage extends React.Component {
  static async getInitialProps(ctx) {
    return {
      meta
    }
  }
  render() {
    return (
      <>
        <Box borderBottom="1px solid #1A1A1A">
          <Hero />
        </Box>
        <Sections sections={sections} />
      </>
    )
  }
}

export default TechnologyPage
