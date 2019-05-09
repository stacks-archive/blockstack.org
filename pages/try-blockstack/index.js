import React from 'react'
import { Section, Text, Title } from '@components/v2/section'
import { Box, Flex } from 'blockstack-ui'
import { Button } from '@components/button'
import { Sections } from '@components/v2/sections'
const meta = {
  path: '/try-blockstack',
  title: 'Try Blockstack'
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
        <Section.Title pb={[5, 5, 5]} maxWidth={['100%', '100%', '80%']}>
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
        panes: [
          {
            title: {
              is: 'h2',
              children: 'Your personal data is under attack'
            },
            text: {
              children: `We provide an online identity with blockchain-based security and
          encryption — protecting your data from big internet companies.`
            },
            actions: [
              {
                type: 'link',
                label: 'Learn more',
                href: '#'
              }
            ]
          },
          {
            type: 'graphic',
            src: 'https://file-qgpqpsyvye.now.sh/'
          }
        ]
      },
      {
        variant: 'white',
        panes: [
          {
            title: {
              is: 'h2',
              children: 'Secure your data'
            },
            text: {
              children: `Online security and privacy are your basic rights. We provide an online identity with blockchain-based security and encryption protecting your data from big internet companies.`
            },
            actions: [
              {
                type: 'button',
                label: 'Create ID'
              }
            ]
          },
          {
            type: 'graphic',
            src: 'https://file-tjijlhuiuk.now.sh/'
          }
        ]
      },
      {
        variant: 'blue',
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
                children: 'An online identity you control'
              }
            },
            {
              text: {
                children:
                  'Try over 100 apps built on Blockstack or build yours in less than an hour.'
              }
            }
          ],
          {
            actions: {
              justifyContent: 'center',
              items: [
                {
                  type: 'button',
                  label: 'Create ID'
                },
                {
                  type: 'button',
                  label: 'Build apps',
                  variant: 'secondary'
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
