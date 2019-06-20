import React from 'react'
import { Sections } from '@components/sections'
import { installSection } from '@components/install'
import { Section } from '@components/section'
import { Box } from 'blockstack-ui'
const meta = {
  path: '/install',
  title: 'Use Blockstack'
}

class InstallPage extends React.PureComponent {
  static async getInitialProps(ctx) {
    return {
      meta
    }
  }

  render() {
    return (
      <>
        <Section minHeight={0} py={undefined} pt={8}>
          <Section.Title is="h2">{meta.title}</Section.Title>
        </Section>
        <Box borderBottom="1px solid" borderColor="sky.25">
          <Sections sections={[installSection]} />
        </Box>
      </>
    )
  }
}

export default InstallPage
