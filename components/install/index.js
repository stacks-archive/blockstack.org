import React from 'react'
import { Section } from '@components/section/index'
import { Box, Flex } from 'blockstack-ui'
import { useHover } from 'use-events'

import ArrowUpRightIcon from 'mdi-react/ArrowUpRightIcon'
import DownloadIcon from 'mdi-react/DownloadIcon'

const version = '0.36.3'

const items = [
  {
    platform: 'Web',
    description: 'No install. Recommended for most users',
    href: 'https://browser.blockstack.org/',
    icon: ArrowUpRightIcon
  },
  {
    platform: 'MacOS',
    description: 'Requires Sierra 10.12+',
    href: `https://github.com/blockstack/blockstack-browser/releases/download/v${version}/Blockstack-for-macOS-v${version}.dmg`
  },
  {
    platform: 'Windows',
    description: 'Requires Windows 10',
    href: `https://github.com/blockstack/blockstack-browser/releases/download/v${version}/Blockstack-for-win10-v${version}.msi`
  },
  {
    platform: 'Linux',
    description: 'Advanced install',
    href: `https://github.com/blockstack/blockstack-browser/releases/download/v${version}/Blockstack-for-Linux-v${version}.sh`
  }
]

const InstallItem = ({
  platform,
  description,
  icon: Icon = DownloadIcon,
  href
}) => {
  const [hovered, bind] = useHover()
  return (
    <Flex
      width={1}
      pb={3}
      mb={3}
      borderBottom="1px solid"
      borderColor="sky.50"
      alignItems="center"
      justifyContent="flex-start"
      is="a"
      style={{
        textDecoration: 'none'
      }}
      href={href}
      target="_blank"
      flexDirection={['column', 'row', 'column', 'row']}
      {...bind}
    >
      <Flex alignItems="center" minWidth={['100%', '50%', '100%', '50%']}>
        <Box
          opacity={hovered ? 1 : 0.5}
          color={hovered ? 'blue' : 'ink'}
          pr={2}
          pt={1}
        >
          <Icon size={18} style={{ display: 'block' }} />
        </Box>
        <Box pr={5} flexShink={0}>
          <Section.Title
            style={{ whiteSpace: 'nowrap' }}
            color={hovered ? 'blue' : 'ink'}
            is="h4"
          >
            Browser {platform}
          </Section.Title>
        </Box>
      </Flex>
      <Box minWidth={['100%', '50%', '100%', '50%']} flexShink={0} flexGrow={1}>
        <Section.Text fontSize={1}>{description}</Section.Text>
      </Box>
    </Flex>
  )
}

const Install = (props) =>
  items.map((item, key) => <InstallItem key={key} {...item} />)

const installSection = {
  variant: 'white',
  minHeight: '400px',
  py: 8,
  panes: [
    {
      justifyContent: 'flex-start',
      panes: [
        {
          justifyContent: 'flex-start',
          text: {
            children:
              'The Blockstack Browser allows you to create and manage Blockstack IDs and explore decentralized apps.'
          }
        },
        {
          text: {
            fontSize: 2,
            children: (
              <>
                Developers can also run a full node by{' '}
                <Section.Text
                  fontSize={2}
                  is="a"
                  href="https://github.com/blockstack/blockstack-core"
                  target="_blank"
                >
                  following instructions on GitHub
                </Section.Text>
                .
              </>
            )
          }
        }
      ]
    },
    {
      children: <Install />
    }
  ]
}

export { Install, InstallItem, installSection }
