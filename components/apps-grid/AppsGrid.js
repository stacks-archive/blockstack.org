import React, { Component } from 'react'
import AppCard from './components/AppCard.js'
import Card from '@components/card'
import { Box, Flex } from 'blockstack-ui'
import { Image } from '@components/image'

const cards = [
  {
    title: 'Graphite',
    icon: 'images/apps/graphite.png',
    link: 'https://www.graphitedocs.com/',
    description: 'Collaborative decentralized docs'
  },
  {
    title: 'Blockusign',
    icon: 'images/apps/blockusign.jpg',
    link: 'https://blockusign.co',
    description: 'Encrypted document signing and digital notary.'
  },
  {
    title: 'Recall',
    icon: 'images/apps/recall.jpg',
    link: 'https://app.recall.photos/',
    description: 'Your end-to-end encrypted and open-source photo vault app.'
  },
  {
    title: 'BlockVault',
    icon: 'images/apps/blockvault.png',
    link: 'https://blockvault.site/',
    description: 'Decentralized password manager for teams.'
  },
  {
    title: 'Sigle',
    icon: 'images/apps/sigle.png',
    link: 'https://www.sigle.io/',
    description: 'A beautiful decentralised and open source blog maker.'
  }
]

class AppsGrid extends Component {
  render() {
    return (
      <section className="app-grid blue-bg">
        <div className="hang-section-title">
          <div className="container">
            <div className="align-center pb-3 mb-1">
              <h3 className="p white">Live dapps built by our community</h3>
            </div>
          </div>
        </div>
        <div className="triangle-bg">
          <div className="container pb-4 bs-mtn-card">
            <div className="grid-flex collapse-3-2-1 v-spaced">
              {cards.map((app, index) => {
                return (
                  <div className="col" key={'app-card-' + index}>
                    <AppCard
                      appName={app.title}
                      appDescription={app.description}
                      appIcon={app.icon}
                      href={app.link}
                    />
                  </div>
                )
              })}
              <div className="col">
                <Box
                  href={this.props.links.liveApps}
                  is={Card}
                  display="flex"
                  alignItems="center"
                  className={
                    'p-2 app-card dark large-icon ' + this.props.className
                  }
                  target="_blank"
                  style={{ display: 'flex !important', alignItems: 'center' }}
                >
                  <Box pr={3}>
                    <Box size={70}>
                      <Image
                        style={{
                          maxWidth: '100%'
                        }}
                        className="icon"
                        noBlur
                        src="images/app-co-icon.png"
                      />
                    </Box>
                  </Box>

                  <Box>
                    <p className="underline-hover">
                      View all live{' '}
                      <Box display={['none', 'none', 'unset']} is="br" />
                      Blockstack dapps
                    </p>
                  </Box>
                </Box>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default AppsGrid
