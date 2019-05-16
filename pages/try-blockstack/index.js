import React from 'react'
import { Section, Text, Title } from '@components/v2/section'
import { Box, Flex } from 'blockstack-ui'
import { Button } from '@components/button'
import { Sections } from '@components/v2/sections'
import ArrowUpRightIcon from 'mdi-react/ArrowUpRightIcon'
const meta = {
  path: '/try-blockstack',
  title: 'Try Blockstack',
  custom: true
}

const items = [
  { platform: 'Web', description: 'No install. Recommended for most users' },
  { platform: 'MacOs', description: 'Requires Sierra 10.12+' },
  { platform: 'Windows', description: 'Requires Windows 10' },
  { platform: 'Linux', description: 'Advanced install' }
]

const InstallItem = ({ platform, description }) => {
  return (
    <Flex
      width={1}
      pb={3}
      mb={3}
      borderBottom="1px solid"
      borderColor="sky.50"
      alignItems="center"
      justifyContent="flex-start"
    >
      <Box pr={2} pt={1}>
        <ArrowUpRightIcon size={18} style={{ display: 'block' }} />
      </Box>
      <Box width="50%" pr={5} flexShink={0}>
        <Section.Title is="h3">Browser {platform}</Section.Title>
      </Box>
      <Box width="50%" flexShink={0}>
        <Section.Text fontSize={1}>{description}</Section.Text>
      </Box>
    </Flex>
  )
}
const Hero = ({ ...rest }) => (
  <>
    <Section
      flexDirection="column"
      textAlign="center"
      minHeight={`calc(70vh - 112px)`}
      variant="white"
      width={1}
      alignItems="center"
      justifyContent="center"
    >
      <Section.Pane width={1} justifyContent="center" alignItems="center">
        <Section.Title pb={[5, 5, 5]} maxWidth={['100%', '100%', '60%']}>
          Apps that protect your digital rights
        </Section.Title>
        <Section.Text maxWidth={['100%', '100%', '50%']}>
          Blockstack ID provides user-controlled login and storage that enable
          you to take back control of your identity and data. Creating a
          Blockstack ID is easy, free, and secure.
        </Section.Text>
        <Flex
          width={1}
          justifyContent={['flex-start', 'flex-start', 'center']}
          flexDirection={['column', 'column', 'row']}
          pt={5}
        >
          <Button width={[1, 1, 'unset']}>Create ID</Button>
        </Flex>
      </Section.Pane>
    </Section>
    <Box
      mb={8}
      is="img"
      src="https://blockstack-www.imgix.net/home-hero-temp.png?auto=format&w=1800"
      width="100%"
      maxWidth="100%"
      display="block"
    />
  </>
)

class HomePage extends React.Component {
  static async getInitialProps(ctx) {
    return {
      meta
    }
  }
  render() {
    const sections = [
      {
        variant: 'white',
        align: 'center',
        panes: [
          {
            width: 0.6,
            mx: 'auto',
            justifyContent: 'center',
            alignItems: 'center',
            title: {
              is: 'h2',
              pb: 5,
              children: 'Secure your data'
            },
            text: {
              children: `Online security and privacy are your basic rights. We provide an online identity with blockchain-based security and encryption protecting your data from big internet companies.`,
              pb: 5
            },
            actions: [
              {
                type: 'button',
                label: 'Create ID'
              }
            ]
          }
        ]
      },
      {
        variant: 'white',
        minHeight: '400px',
        py: 8,
        panes: [
          [
            {
              title: {
                is: 'h2',
                children: 'An online identity you control'
              }
            },
            {
              title: {
                is: 'h4',
                children:
                  'With the old internet, big companies control your login. '
              }
            },
            {
              text: {
                children:
                  'With Blockstack, you own your login. Under the hood, Blockstack uses blockchain to keep everything secure and private. We lock and encrypt your data with a secret key—you, and only you, have this key.'
              }
            }
          ],
          {
            type: 'graphic',
            src: 'https://blockstack-www.imgix.net/online-identity-graphic.png'
          }
        ]
      },
      {
        variant: 'white',
        minHeight: '400px',
        py: 8,
        panes: [
          {
            type: 'graphic',
            src: 'https://blockstack-www.imgix.net/blurred-items.png'
          },
          [
            {
              title: {
                is: 'h2',
                children: 'True data ownership'
              }
            },
            {
              title: {
                is: 'h4',
                children: 'With the old internet, big companies own your data. '
              }
            },
            {
              text: {
                children:
                  'With Blockstack, relax knowing your data is 100% your property. No terms. No conditions. No platform lock-in. All your photos, messages, health records, you name it—are stored stored in a private data locker that’s encrypted by default.'
              }
            }
          ]
        ]
      },
      {
        variant: 'white',
        minHeight: '400px',
        py: 8,
        panes: [
          [
            {
              title: {
                is: 'h2',
                children: 'Share, move, and connect data between apps'
              }
            },
            {
              title: {
                is: 'h4',
                children:
                  'With the old internet, each platform was a data island.'
              }
            },
            {
              text: {
                children:
                  'With Blockstack, you own the data, so you decide how data is used between apps. Simply give access to a new, or better, Blockstack app and your data will auto-magically be there.'
              }
            }
          ],
          {
            type: 'graphic',
            src: 'https://blockstack-www.imgix.net/share-data-graphic.png'
          }
        ]
      },
      {
        variant: 'blue',
        panes: [
          {
            pr: 0,
            title: {
              is: 'h2',
              children: 'Take back your digital rights'
            },
            text: {
              children: `Say goodbye to: Data breaches and leaks, internet companies selling your data, AI manipulating your social feeds, and ad targeting following you around.`
            }
          },
          [
            {
              justifyContent: 'center',
              alignItems: 'center',
              actions: [
                {
                  type: 'button',
                  label: 'Create ID',
                  href: '#'
                },
                {
                  type: 'button',
                  label: 'Sign in',
                  variant: 'secondary',
                  href: '#'
                }
              ]
            }
          ]
        ]
      },
      {
        variant: 'white',
        minHeight: '400px',
        py: 8,
        panes: [
          [
            {
              text: {
                children:
                  'The Blockstack Browser allows you to create and manage Blockstack IDs and explore decentralized apps.'
              }
            },
            {
              text: {
                children: `Developers can also run a full node by following instructions on GitHub.`
              }
            }
          ],
          {
            list: {
              isComponent: true,
              items: items.map((item, key) => (
                <InstallItem key={key} {...item} />
              ))
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
