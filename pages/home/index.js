import React from 'react'
import { Section } from '@components/v2/section'
import { Box, Flex } from 'blockstack-ui'
import { Button } from '@components/button'
import { Events } from '@components/v2/events'
import { useHover } from 'use-events'
import { transition } from '@common/theme'

const meta = {
  path: '/',
  title: 'Blockstack'
}

const press = [
  {
    title: 'Tech Thinks It Has a Fix for the Problems It Created: Blockchain',
    publication: 'The New York Times'
  },
  {
    title:
      'Blockchain technology may offer a way to re-decentralise the internet',
    publication: 'The Economist'
  },
  {
    title: 'The new technology that aspires to #DeleteFacebook for good',
    publication: 'The Washington Post'
  }
]
/* bg */

const Press = ({ ...rest }) => {
  return (
    <Flex justifyContent="space-between">
      {press.map((item, key) => {
        const [hovered, bind] = useHover()

        return (
          <Box
            px={5}
            py={8}
            key={key}
            transform={hovered ? 'translateY(-5px)' : 'none'}
            borderRadius="8px"
            cursor={hovered ? 'pointer' : 'unset'}
            boxShadow={
              hovered
                ? '0px 16px 24px rgba(0, 0, 0, 0.04), 0px 1px 2px rgba(0, 0, 0, 0.08)'
                : '0px 2px 12px rgba(0, 0, 0, 0.04), 0px 1px 2px rgba(0, 0, 0, 0.08)'
            }
            maxWidth="calc(33.333% - 24px)"
            transition={transition}
            {...bind}
          >
            <Box pb={5} opacity={0.5}>
              {item.publication}
            </Box>
            <Box fontWeight="500" color="ink" fontSize={3} lineHeight={3}>
              {item.title}
            </Box>
            <Box fontSize={1} pt={5} opacity={hovered ? 1 : 0.45}>
              Read article >
            </Box>
          </Box>
        )
      })}
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
        <Section.Title maxWidth="80%">
          Blockchain computing platform and app ecosystem
        </Section.Title>
        <Section.Text maxWidth="50%">
          Blockstack apps protect your digital rights and are powered by the
          Stacks blockchain.
        </Section.Text>
        <Flex pt={5}>
          <Button>Create ID</Button>
          <Button variant="secondary">Build Apps</Button>
        </Flex>
      </Section.Pane>
    </Section>
    <Box
      mb={8}
      is="img"
      src="https://file-tefsjfdvfr.now.sh"
      width="100%"
      maxWidth="100%"
      display="block"
    />
  </>
)

const sections = [
  {
    variant: 'white',
    panes: [
      {
        title: {
          is: 'h2',
          children: 'Secure your identity and data with Blockstack ID'
        },
        text: {
          children: `We provide an online identity with blockchain-based security and
          encryption — protecting your data from big internet companies.`
        }
      },
      {
        type: 'graphic',
        src: 'https://file-qgpqpsyvye.now.sh/'
      }
    ]
  },
  {
    variant: 'white',
    bg: 'sky.10',
    panes: [
      {
        type: 'graphic',
        src: 'https://file-mmywyvbqys.now.sh/'
      },
      {
        title: {
          is: 'h2',
          children: 'Build blockchain-powered apps in as little as an hour'
        },
        text: {
          children: `Everything you need, from auth to data storage, ready and in
          production. 100% Javascript — zero backend development.`
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
          children: 'Build an app and get paid instantly with App Mining'
        },
        text: {
          children: `Every month we pay out $100,000 to the best apps built on Blockstack. The better your app, the more you earn.`
        }
      },
      {
        type: 'graphic',
        src: 'https://file-tjijlhuiuk.now.sh/'
      }
    ]
  },
  {
    variant: 'white',
    children: (
      <Box
        is="img"
        width="100%"
        maxWidth="100%"
        display="block"
        src="https://file-zuxgbttmpr.now.sh"
      />
    )
  },
  {
    variant: 'white',
    py: 8,
    alignItems: 'flex-start',
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
        }
      },
      {
        width: '100%',
        children: <Events pt={8} />
      }
    ]
  },
  {
    variant: 'white',
    panes: [
      {
        width: '100%',
        children: <Press />
      }
    ]
  }
]

const Content = ({ pane, isFirst, ...rest }) => (
  <>
    {pane.title && <Section.Title {...pane.title} />}
    {pane.text && <Section.Text {...pane.text} />}
    {pane.type === 'graphic' && (
      <Box py={8} pl={isFirst ? 0 : [0, 0, 8]} pr={isFirst ? [0, 0, 8] : 0}>
        <Box is="img" display="block" maxWidth="100%" src={pane.src} />
      </Box>
    )}
  </>
)

const Panes = ({ panes, ...rest }) => {
  return panes.map((pane, paneKey) => {
    const hasChildren = !!pane.children

    const { children, title, text, type, src, ...paneProps } = pane

    return (
      <Section.Pane key={paneKey} {...paneProps}>
        {hasChildren ? (
          pane.children
        ) : (
          <Content isFirst={paneKey === 0} pane={pane} />
        )}
      </Section.Pane>
    )
  })
}

const Sections = ({ ...rest }) => {
  return sections.map((section, sectionKey) => {
    const { variant, panes, children, ...sectionProps } = section
    return (
      <React.Fragment key={sectionKey}>
        {children ? (
          children
        ) : (
          <Section variant={variant} width={1} {...sectionProps}>
            <Panes panes={panes} />
          </Section>
        )}
      </React.Fragment>
    )
  })
}

class HomePage extends React.Component {
  static async getInitialProps(ctx) {
    return {
      meta
    }
  }
  render() {
    return (
      <>
        <Hero />
        <Sections />
      </>
    )
  }
}

export default HomePage
