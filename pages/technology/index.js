import React, { useState } from 'react'
import { Sections } from '@components/v2/sections'
import { Section, Text } from '@components/v2/section'
import { Grid } from '@components/v2/grid'
import { transition } from '@common/theme'
import { Box, Flex } from 'blockstack-ui'
import { Events } from '@components/v2/events'
import { Button } from '@components/button'
import { AppsList } from '@components/v2/apps-list'
import { PhotoGrid } from '@components/v2/photos-grid'
import { photos, apps, appBuildersGrid, usersGrid } from './data'
import { AuthGraphic } from '@components/v2/graphics/auth'
import { AppMiningGraphic } from '@components/v2/graphics/app-mining'
import { Codeblock } from '@components/v2/code'
import { useHover } from 'use-events'
import { useInViewAnimationStyles } from '@common/hooks'
import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
import { WrappedLink } from '@components/v2/link'

const resources = [
  {
    title: 'Build your app',
    items: [
      {
        label: 'Documentation',
        href: 'https://docs.blockstack.org'
      },
      {
        label: 'Forum',
        href: 'https://forum.blockstack.org'
      },
      {
        label: 'Weekly engineering calls',
        href: 'https://community.blockstack.org/engineering-weekly'
      }
    ]
  },
  {
    title: 'Learn about Blockstack',
    items: [
      {
        label: 'Whitepapers',
        path: '/papers'
      },
      {
        label: 'Ecosystem news',
        href: 'https://blog.blockstack.org'
      },
      {
        label: 'Ecosystem roadmap',
        path: '/roadmap'
      },
      {
        label: 'Stacks Improvement Proposals',
        href: 'https://github.com/blockstack/blockstack-core/tree/develop/sip'
      }
    ]
  }
]

const ResourceItem = ({ label, href, path, ...rest }) => {
  const [hovered, bind] = useHover()
  return (
    <WrappedLink path={path}>
      <Flex
        py={4}
        borderBottom="1px solid"
        borderColor="sky"
        alignItems="center"
        justifyContent="space-between"
        cursor={hovered ? 'pointer' : 'unset'}
        is={path || href ? 'a' : 'div'}
        href={path || href}
        target={href ? '_blank' : undefined}
        style={{ textDecoration: 'none' }}
        {...rest}
        {...bind}
      >
        <Box
          transition={transition}
          transform={hovered ? 'translateX(10px)' : 'none'}
        >
          <Section.Title is="h4">{label}</Section.Title>
        </Box>
        <Box transition={transition} opacity={hovered ? 1 : 0} color="white">
          <ArrowRightIcon />
        </Box>
      </Flex>
    </WrappedLink>
  )
}

const Resources = ({ data, ...rest }) => {
  return (
    <Flex
      flexDirection={['column', 'column', 'row']}
      justifyContent="space-between"
    >
      {data.map((section, sectionKey) => (
        <Box
          pb={[sectionKey === 0 ? 8 : 0, sectionKey === 0 ? 8 : 0, 0]}
          width={[1, 1, 'calc(50% - 12px)']}
          key={sectionKey}
        >
          <Box borderBottom="1px solid" borderColor="sky">
            <Section.Title is="h5" fontFamily="brand" fontWeight={400} pb={5}>
              {section.title}
            </Section.Title>
          </Box>
          {section.items.map((item, itemKey) => (
            <ResourceItem {...item} key={itemKey} />
          ))}
        </Box>
      ))}
    </Flex>
  )
}

const code = `const App = props => {
  const session = new UserSession();
  const isUserSignedIn = session.isUserSignedIn();
  const isSignInPending = session.isSignInPending();

  useEffect(async () => {
    if (!isUserSignedIn && isSignInPending) {
      const { username } = await session.handlePendingSignIn();
      if (!username) {
        throw new Error("This app requires a username.");
      }
      window.location = "/kingdom/" + username;
    }
  }, [isUserSignedIn, isSignInPending]);

  return (
    <main role="main">
      {isUserSignedIn ? <SignedIn /> : <Landing />}
    </main>
  );
};`
const HeroGraphic = ({ ...rest }) => {
  const styles = useInViewAnimationStyles()
  const [inView, setInView] = useState('phone')
  const handleCodeInView = () => {
    if (inView === 'phone') {
      setInView('code')
    }
  }
  const handlePhoneInView = () => {
    if (inView === 'code') {
      setInView('phone')
    }
  }

  const phoneIsInView = inView === 'phone'
  const codeIsInView = inView === 'code'

  return (
    <Box {...rest} flexGrow={1} width={1} position="relative">
      <Box
        width={['320px', '320px', '415px']}
        position="relative"
        zIndex={phoneIsInView ? 2 : 1}
        pt={9}
        mt={[8, 8, 0]}
        {...styles}
      >
        <Box
          is="img"
          display="block"
          maxWidth="100%"
          src="https://blockstack-www.imgix.net/auth-phone-graphic-2.png"
        />
      </Box>
      <Box
        transform={[
          'translate3d(150px,12px,0)',
          'translate3d(150px,12px,0)',
          'translate3d(200px,12px,0)'
        ]}
        position="absolute"
        left={0}
        top={0}
        pt={[8, 8, 0]}
        zIndex={codeIsInView ? 2 : 1}
      >
        <Box
          bg="#111111"
          borderRadius="12px"
          border="1px solid"
          borderColor="ink.75"
          {...styles}
        >
          <Flex
            justifyContent="flex-start"
            px={7}
            borderBottom="1px solid"
            borderColor="ink.75"
          >
            <Box
              py={5}
              color="white"
              borderBottom="1px solid"
              borderColor="blue.50"
            >
              Zero-To-Dapp
            </Box>
          </Flex>
          <Box bg="ink" pb={6} pt={5} pl={8}>
            <Codeblock hideNumbers language="jsx" value={code} />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

const HeroContent = ({ ...rest }) => {
  return (
    <>
      <Section.Pane justifyContent="center" maxHeight="70vh">
        <Section.Title pb={5}>
          Easily build blockchain apps that scale
        </Section.Title>
        <Section.Text>
          Get started with our{' '}
          <Section.Text
            is="a"
            href={'https://docs.blockstack.org/develop/zero_to_dapp_1.html'}
            target="_blank"
          >
            Zero-to-Dapp tutorial
          </Section.Text>
          , view our{' '}
          <Section.Text
            is="a"
            href={'https://docs.blockstack.org'}
            target="_blank"
          >
            documentation
          </Section.Text>
          , or visit our{' '}
          <Section.Text
            is="a"
            href={'https://github.com/blockstack'}
            target="_blank"
          >
            GitHub
          </Section.Text>
          .
        </Section.Text>
        <Flex pt={5} width={1}>
          <Button
            href="https://docs.blockstack.org/browser/hello-blockstack.html"
            width={[1, 1, 'unset']}
          >
            Tutorials
          </Button>
        </Flex>
      </Section.Pane>
      <Section.Pane>
        <HeroGraphic />
      </Section.Pane>
    </>
  )
}

const sections = [
  {
    variant: 'ink',
    pt: '100px',
    panes: [
      {
        title: {
          is: 'h2',
          pb: [5,5,0],
          children:
            'Blockstack is a blockchain computing platform and app ecosystem that puts users in control of their identity and data.'
        }
      },
      [
        {
          title: {
            pb: 0,
            is: 'h4',
            children: '100 teams'
          },
          text: {
            children: `have built production apps on our infrastructure the past five months.`
          }
        },
        {
          title: {
            pb: 0,
            is: 'h4',
            children: '3,000 developers'
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
    variant: 'ink',
    panes: [
      {
        pb: [7, 7, 9],
        width: [1, 1, 0.6],
        pretitle: {
          children: 'Resources'
        },
        title: {
          is: 'h2',
          children:
            'Everything you need, from authentication to data storage, ready and in production.'
        }
      },
      {
        width: 1,
        children: <Resources data={resources} />
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
        src: 'https://blockstack-www.imgix.net/data-storage-graphic-2.png'
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
    bg: 'sky.10',
    panes: [
      {
        title: {
          is: 'h2',
          children: 'Smart contracts'
        },
        text: {
          children: `We've created a statically-analyzable Lisp-based smart contract language; Allowing you to write and execute smart contracts without unexpected fees, side effects, or security issues. App builders can create side-chains and app-specific tokens atop Blockstack's platform.`
        },
        comingSoon: true
      },
      {
        type: 'graphic',
        src: 'https://blockstack-www.imgix.net/smart-contract-graphic.png'
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
          children: 'Build an app and get paid instantly with App Mining'
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
    flexDirection: 'column',
    justifyContent: 'center',
    py: [9],
    panes: [
      {
        width: 1,
        pb: [5],
        title: {
          is: 'h2',
          pb: 5,
          children: 'Blockstack is better for app builders'
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
    py: [9],
    panes: [
      {
        width: 1,
        pb: 5,
        title: {
          is: 'h2',
          pb: 0,
          children: 'Blockstack is better for your users'
        },
        actions: {
          pt: 0,
          pb: [5],
          items: [
            {
              type: 'link',
              label: 'Learn more about using Blockstack',
              path: '/try-blockstack'
            }
          ]
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
            href: 'https://community.blockstack.org/events'
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
              href: 'https://docs.blockstack.org/develop/zero_to_dapp_1.html',
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
      minHeight={0}
      variant="ink"
      width={1}
      pt="180px"
      bg="black"
      alignItems="stretch"
      parentOverflow="hidden"
      justifyContent="flex-start"
    >
      <HeroContent />
    </Section>
  </>
)

const meta = {
  title: 'Technology',
  path: '/technology',
  theme: 'ink',
  ogTitle: 'Easily build blockchain apps that scale',
  custom: true
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
