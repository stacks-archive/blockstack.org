import React from 'react'
import { Section } from '@components/section/index'
import { Box, Flex } from 'blockstack-ui'
import { useHover } from 'use-events'

import ArrowUpRightIcon from 'mdi-react/ArrowUpRightIcon'
import DownloadIcon from 'mdi-react/DownloadIcon'
import Button from '@components/button'

const version = '0.37.0'

const items = [
  {
    platform: 'Web',
    description: 'No installation, recommended for most users',
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
    href: `https://github.com/blockstack/blockstack-browser/releases/download/v${version}/Blockstack-for-Windows-v${version}.msi`
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
      pb={4}
      mb={4}
      borderBottom="1px solid"
      borderColor="sky.50"
      alignItems="center"
      justifyContent={['space-between', 'flex-start', 'flex-start']}
      is="a"
      style={{
        textDecoration: 'none'
      }}
      href={href}
      target="_blank"
      flexDirection="row"
      {...bind}
      {...rest}
    >
      <Flex
        alignItems={['flex-start', 'flex-start', 'center']}
        flexDirection={['column', 'column', 'row']}
        flexGrow={1}
      >
        <Flex is="span" alignItems="center" minWidth={['20%']}>
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
        <Box is="span" flexShink={0} flexGrow={1}>
          <Section.Text fontSize={1} color="#637282">
            {description}
          </Section.Text>
        </Box>
      </Flex>
      <Box is="span">
        <Button
          minWidth="97px"
          minHeight={32}
          hovered={hovered}
          fontSize={1}
          py={1}
          px={3}
          variant="secondary"
        >
          {platform === 'Web' ? 'Open' : 'Download'}
        </Button>
      </Box>
    </Flex>
  )
}

const Install = (props) => (
  <Box pt={4} borderTop="1px solid" borderColor="sky.50">
    {items.map((item, key) => (
      <InstallItem {...props} key={key} {...item} />
    ))}
  </Box>
)

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
          pb: 4,
          justifyContent: 'flex-start',
          title: {
            is: 'h4',
            children: 'Blockstack Browser'
          },
          text: {
            pb: 0,
            pt: 2,
            fontSize: 16,
            children:
              'The Blockstack Browser allows you to create and manage Blockstack IDs and explore decentralized apps.'
          }
        }
      ]
    },
    {
      width: 1,
      pt: 5,
      children: <Install width={1} />
    },
    {
      justifyContent: 'flex-start',
      width: 1,
      panes: [
        {
          width: 1,
          pt: [5, 5, 7],
          title: {
            is: 'h4',
            children: 'Running a full node'
          },
          text: {
            fontSize: 2,
            pt: 3,
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
    }
  ]
}

export { Install, InstallItem, installSection }
