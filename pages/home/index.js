import React, { Component } from 'react'
import { headerHeight } from '@common/constants'
import { Section } from '@components/v2/section'
import { Box, Flex } from 'blockstack-ui'

const meta = {
  path: '/',
  title: 'Blockstack',
  template: 'NONE'
}

class HomePage extends React.PureComponent {
  static async getInitialProps(ctx) {
    return {
      meta
    }
  }
  render() {
    const { data } = this.props

    return (
      <Box bg="white" minHeight="100vh" pt={headerHeight}>
        <Section minHeight={'60vh'} variant="white">
          <Section.Pane>
            <Section.Title>
              Easily build blockchain apps that scale
            </Section.Title>
            <Section.Text>
              Get started with our{' '}
              <Section.Text is="a" href="">
                Zero-to-Dapp tutorial
              </Section.Text>
              ,{' '}
              <Section.Text is="a" href="">
                view our documentation
              </Section.Text>
              , or{' '}
              <Section.Text is="a" href="">
                visit our Github
              </Section.Text>
              .
            </Section.Text>
          </Section.Pane>
        </Section>
      </Box>
    )
  }
}

export default HomePage
