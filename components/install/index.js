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
  href,
  ...rest
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
      {...rest}
    >
      <Flex alignItems="center" minWidth={['100%', '50%', '100%', '20%']}>
        <Box pr={5} flexShink={0}>
          <Section.Title
            style={{ whiteSpace: 'nowrap' }}
            color={hovered ? 'blue' : 'ink'}
            is="h5"
          >
            Browser {platform}
          </Section.Title>
        </Box>
      </Flex>
      <Box minWidth={['100%', '50%', '100%', '80%']} flexShink={0} flexGrow={1}>
        <Section.Text fontSize={1}>{description}</Section.Text>
      </Box>
    </Flex>
  )
}

const Install = (props) =>
  items.map((item, key) => <InstallItem {...props} key={key} {...item} />)

const installSection = {
  variant: 'white',
  minHeight: '400px',
  py: 8,
  width: 1,
  panes: [
    {
      justifyContent: 'flex-start',
      width: 1,
      panes: [
        {
          width: 1,
          pb: 0,
          justifyContent: 'flex-start',
          title: {
            is: 'h4',
            children: 'Blockstack Browser'
          },
          text: {
            pb: 0,
            children:
              'The Blockstack Browser allows you to create and manage Blockstack IDs and explore decentralized apps.'
          }
        },
        {
          width: 1,
          text: {
            fontSize: 2,
            pt: 4,
            pb: 5,
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
      width: 1,
      children: <Install width={1} />
    }
  ]
}

export { Install, InstallItem, installSection }
