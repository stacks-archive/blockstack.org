import React from 'react'
import { Sections } from '@components/v2/sections'
import { Section, Title, Text } from '@components/v2/section'
import { Grid } from '@components/v2/grid'
import { Box, Flex } from 'blockstack-ui'
import { Events } from '@components/v2/events'
import { Button } from '@components/button'
import { transition } from '@common/theme'
import { useHover } from 'use-events'
import { PhotoGrid } from '@components/v2/photos-grid'

const photos = [
  { src: 'https://blockstack-www.imgix.net/photos/photo-conference-001.jpg' },
  { src: 'https://blockstack-www.imgix.net/photos/photo-conference-002.jpg' },
  { src: 'https://blockstack-www.imgix.net/photos/photo-conference-003.jpg' },
  { src: 'https://blockstack-www.imgix.net/photos/photo-conference-004.jpg' },
  { src: 'https://blockstack-www.imgix.net/photos/photo-conference-005.jpg' },
  { src: 'https://blockstack-www.imgix.net/photos/photo-hackathon-001.jpg' }
]

const AppIcon = ({ ...rest }) => (
  <Box pr="4">
    <Box size={60} borderRadius="12px" is="img" display="block" {...rest} />
  </Box>
)

const AppItem = ({ item }) => {
  const [hovered, bind] = useHover()
  return (
    <Flex
      flexGrow={1}
      maxWidth={['100%', 'calc(50% - 12px)', 'calc(33.3333% - 12px)']}
      pb={4}
      transition={transition}
      transform={`translate3d(0,${hovered ? '-5px' : 0}, 0)`}
      cursor={hovered ? 'pointer' : 'unset'}
      {...bind}
    >
      <Flex
        px={4}
        py={4}
        bg="ink.75"
        alignItems="center"
        borderRadius="12px"
        flexGrow={1}
      >
        {item.icon && (
          <AppIcon src={item.icon} alt={`App icon for ${item.name}`} />
        )}
        <Box>
          {item.name && (
            <Title is="h4" fontSize={2} color={hovered ? 'cyan' : 'white'}>
              {item.name}
            </Title>
          )}
          {item.desc && (
            <Text fontSize={1} lineHeight="1.45">
              {item.desc}
            </Text>
          )}
        </Box>
      </Flex>
    </Flex>
  )
}

const AppsList = ({ items, ...rest }) => {
  return (
    <Flex flexWrap="wrap" justifyContent="space-between">
      {items.map((item, key) => {
        return <AppItem item={item} key={key} />
      })}
    </Flex>
  )
}

const apps = [
  {
    name: 'Recall',
    desc: 'Safely store and access your photos',
    icon:
      'https://appco.imgix.net/apps/ae938da5-bb0c-4496-8720-2493f7b2e9a0?fit=clip&h=144&w=144'
  },
  {
    name: 'Sigle',
    desc: 'A beautiful decentralized & open source blog maker',
    icon:
      'https://appco.imgix.net/apps/43dc2f39-c790-4b58-9e67-927c2aafcae8?fit=clip&h=144&w=144'
  },
  {
    name: 'BitPatron',
    desc: 'The decentralized Patreon alternative',
    icon:
      'https://appco.imgix.net/apps/97e47302-26d9-4483-b015-aa47ebc6c6a4?fit=clip&h=144&w=144'
  },
  {
    name: 'Zinc',
    desc: 'Work based identity & reputation system',
    icon:
      'https://appco.imgix.net/apps/41f87fea-083e-4adf-b9b1-d6b7b1d6a8c8?fit=clip&h=144&w=144'
  },
  {
    name: 'Gladys',
    desc: 'Your open-source Home Automation Assistant',
    icon:
      'https://appco.imgix.net/apps/ec6a36e3-36d1-421c-861b-2b1f848da435?fit=clip&h=144&w=144'
  },
  {
    name: 'Blockusign',
    desc: 'Encrypted document signing and Digital Notary',
    icon:
      'https://appco.imgix.net/apps/2c06bf32-c8f1-47f4-8d14-e7f70a662961?fit=clip&h=144&w=144'
  },
  {
    name: 'Graphite',
    desc: 'Encrypted, shareable, decentralized personal data.',
    icon:
      'https://appco.imgix.net/apps/0ede3b38-c747-4613-bc8e-7c3a12689ba3?fit=clip&h=144&w=144'
  },
  {
    name: 'Debut',
    desc: 'Introduce yourself to the Blockstack community!',
    icon:
      'https://appco.imgix.net/apps/1ea81ed6-2526-4c59-b4b4-83305755def2?fit=clip&h=144&w=144'
  },
  {
    desc: 'View all Blockstack apps'
  }
]

const appBuildersGrid = [
  {
    title: {
      is: 'h4',
      children: 'Authentication'
    },
    text: {
      children:
        'Blockstack provides authentication that is created and managed independently from your app; completely avoid liability for user identity and activity.'
    }
  },
  {
    title: {
      is: 'h4',
      children: 'Data storage'
    },
    text: {
      children:
        'Blockstack provides flexible, free, encrypted storage for each user. Never mess with servers, scaling costs, or personal data liability again.'
    }
  },
  {
    title: {
      is: 'h4',
      children: 'App funding'
    },
    text: {
      children:
        'Get paid the month you launch with App Mining. Bootstrap your app development without compromising your users digital rights. '
    }
  },
  {
    title: {
      is: 'h4',
      children: 'Users'
    },
    text: {
      children:
        'Reach new users who are seeking privacy and data ownership — and are abandoning platforms such as Facebook and Google.'
    }
  },
  {
    title: {
      is: 'h4',
      children: 'Community'
    },
    text: {
      children:
        'Join thousands of open-source developers and app builders dedicated to building a better, decentralized internet.'
    }
  },
  {}
]
const usersGrid = [
  {
    title: {
      is: 'h4',
      children: 'User-owned identity'
    },
    text: {
      children:
        'With the old internet, big companies own your login. With Blockstack, you own your login. Under the hood, Blockstack uses blockchain to keep everything secure and private.'
    }
  },
  {
    title: {
      is: 'h4',
      children: 'True data ownership'
    },
    text: {
      children:
        'With the old internet, big companies own your data. With Blockstack, relax knowing your data is 100% private, and only you can grant access to apps or other users. Never worry about privacy breaches again.'
    }
  },
  {
    title: {
      is: 'h4',
      children: 'One ID, 100s of apps'
    },
    text: {
      children:
        'Discover a universe of new apps where your digital rights are respected. Share, swap, and connect data between apps however you want.'
    }
  }
]

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
            is: 'h4',
            children: '65 teams'
          },
          text: {
            children: `have built production apps on our infrastructure the past five months.`
          }
        },
        {
          title: {
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
        maxWidth: '60%',
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
        src: 'https://blockstack-www.imgix.net/auth-graphic.png'
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
          children: 'Upcoming events'
        },
        actions: [
          {
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
        <Section.Title maxWidth="80%">
          Easily build blockchain apps that scale
        </Section.Title>
        <Section.Text maxWidth="50%">
          Get started with our Zero-to-Dapp tutorial, view our documentation, or
          visit our Github.
        </Section.Text>
        <Flex pt={5}>
          <Button>Tutorials</Button>
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
