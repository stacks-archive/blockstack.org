import React, { Component } from 'react'
import Card from '@components/card'
import { Image } from '@components/image'
import { Box, Flex } from 'blockstack-ui'

class AppCard extends Component {
  render() {
    return (
      <Box
        is={Card}
        display="flex"
        alignItems="center"
        className={'p-2 app-card ' + this.props.className}
        href={this.props.href}
        target="_blank"
      >
        <Flex alignItems="center">
          <Box p={2} pr={3}>
            <Box
              size={64}
              overflow="hidden"
              borderRadius="15px"
              boxShadow="1px 4px 10px rgba(0,0,0,0.1)"
            >
              <Image
                style={{ maxWidth: '100%' }}
                noBlur
                className="icon"
                src={this.props.appIcon}
                alt={this.props.appName}
              />
            </Box>
          </Box>
          <Box lineHeight="30px">
            <p className="underline-hover">
              {this.props.appName ? (
                <span>
                  <strong>{this.props.appName}</strong>:{' '}
                </span>
              ) : (
                false
              )}
              {this.props.appDescription}
            </p>
          </Box>
        </Flex>
      </Box>
    )
  }
}

export default AppCard
