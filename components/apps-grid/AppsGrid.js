import React, { Component } from 'react'
import AppCard from './components/AppCard.js'
import Card from '@components/card'
import { Box } from 'blockstack-ui'
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
                <Card
                  className="p-gutter app-card dark large-icon flex-center"
                  href={this.props.links.liveApps}
                >
                  <div>
                    <div className="grid-flex no-break middle">
                      <div className="col no-grow">
                        <div className="icon-wrap">
                          <Image
                            className="icon"
                            noBlur
                            src="images/app-co-icon.png"
                          />
                        </div>
                      </div>

                      <div className="col grow align-left">
                        <div className="app-desc">
                          <p className="underline-hover">
                            View all live{' '}
                            <Box display={['none', 'none', 'unset']} is="br" />
                            Blockstack dapps
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default AppsGrid
