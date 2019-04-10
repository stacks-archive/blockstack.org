import React, { Component } from 'react'
import Card from '@components/card'
import Arrow from '@components/outline-arrow'
import { Image } from '@components/image'
import { Box } from 'blockstack-ui'

class AppCard extends Component {
  render() {
    return (
      <Card
        className={'p-2 app-card ' + this.props.className}
        href={this.props.href}
        target="_blank"
      >
        <div className="grid-flex no-break tight-gutter top">
          <div className="col no-grow">
            <div className="icon-wrap">
              <Box p={2}>
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
            </div>
          </div>
          <div className="col grow">
            <div className="app-desc">
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
            </div>
          </div>
        </div>
        <div className="align-right pt-2">
          <div className="sm main-color">
            <div className="grid-flex no-break no-gutter right middle">
              <div className="col">
                <span className="main-color p sm view-text">Go to App</span>
              </div>
              <div className="col">
                <div className="ml-1 view-arrow">
                  <div className="bs-outline-arrow">
                    <Arrow />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    )
  }
}

export default AppCard
