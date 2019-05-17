import React from 'react'
import { Section, Text, Title } from '@components/v2/section'
import { Box, Flex } from 'blockstack-ui'

import ArrowUpRightIcon from 'mdi-react/ArrowUpRightIcon'

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
            children: `Developers can also run a full node by following instructions on GitHub.`
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
