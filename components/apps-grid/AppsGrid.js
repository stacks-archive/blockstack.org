import React, { Component } from 'react'
import AppCard from './components/AppCard.js'
import Card from '@components/card'
import Arrow from '@components/outline-arrow'
import './AppsGrid.scss'
import { Image } from '@components/image'
import styled from 'styled-components'
import { BigTriangle } from '@components/svgs'

const FloatingTriangle = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  opacity: 0.35;
  overflow: hidden;
  svg {
    display: block;
    transform: rotate(180deg) translateY(200px);
  }
`
const cards = [
  {
    title: 'Graphite',
    icon: 'images/app-graphite.png',
    link: 'https://github.com/Graphite-Docs/graphite',
    description: 'Collaborative decentralized docs'
  },
  {
    title: 'Hermes',
    icon: 'images/app-hermes.png',
    link: 'https://github.com/dhealy05/Hermes',
    description: 'Encrypted peer-to-peer chat'
  },
  {
    title: 'Fupio',
    icon: 'images/app-fupio.png',
    link: 'https://github.com/fupio/fupio',
    description: 'Social micro-blogging app with tags'
  },
  {
    title: 'Kanstack',
    icon: 'images/app-kanstack.png',
    link: 'https://github.com/hstove/kanstack',
    description: 'Decentralized Kanban sprint board'
  },
  {
    title: 'Dappy Wallet',
    icon: 'images/app-dappy.png',
    link: 'https://github.com/BCNetio/BlockStackWallet',
    description: 'Non-custodial decentralised wallet'
  }
]

class AppsGrid extends Component {
  render() {
    return (
      <section className="app-grid mb-2">
        <div className="div triangle up" />
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
                            View all live Blockstack dapps
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ml-1 view-arrow">
                    <div className="bs-outline-arrow">
                      <Arrow />
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
          <FloatingTriangle>
            <BigTriangle />
          </FloatingTriangle>
        </div>
      </section>
    )
  }
}

export default AppsGrid
