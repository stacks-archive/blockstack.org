import React, { Component } from 'react'
import Card from '@components/card'
import Arrow from '@components/outline-arrow'
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
  overflow: hidden;
  svg {
    display: block;
    transform: rotate(180deg);
  }
`
import './OurTechnology.scss'

const cards = [
  {
    title: 'SDKs',
    link: 'https://github.com/blockstack/blockstack.js',
    description: 'Dev tools: Web, iOS, Android'
  },
  {
    title: 'Browser',
    link: 'https://github.com/blockstack/blockstack-browser',
    description: 'Auth and identity mgmt apps'
  },
  {
    title: 'Blockstack Naming Sys. ',
    link:
      'https://github.com/blockstack/blockstack-core/blob/master/docs/blockstack_naming_service.md',
    description: 'Discover apps and people'
  },
  {
    title: 'Gaia',
    link: 'https://github.com/blockstack/gaia',
    description: 'Decentralized, encrypted storage'
  },
  {
    title: 'Stacks',
    link:
      'https://forum.blockstack.org/t/new-features-enabled-by-a-layer-2-token/1327',
    description: 'Fast and scalable blockchain for decentralized apps'
  }
]

class OurTechnology extends Component {
  render() {
    return (
      <section className="our-technology blue-bg">
        <div className="triangle-bg pt-margin">
          <div className="container">
            <div className="align-center pb-3 mb-1">
              <p>Our technology (Block)stack</p>
            </div>
          </div>
          <div className="container narrow pt-3">
            <div className="g-card dark px-2 pb-2 align-center mb-tight-gutter pt-1px">
              <div className="grid-flex no-break no-gutter center">
                <div className="col">
                  <Image
                    noBlur
                    className="example-app-icon"
                    src="images/app-graphite.png"
                  />
                </div>
                <div className="col">
                  <Image
                    noBlur
                    className="example-app-icon"
                    src="images/app-hermes.png"
                  />
                </div>
                <div className="col">
                  <Image
                    noBlur
                    className="example-app-icon"
                    src="images/app-kanstack.png"
                  />
                </div>
                <div className="col">
                  <Image
                    noBlur
                    className="example-app-icon"
                    src="images/app-coinfort.png"
                  />
                </div>
              </div>
              <a href="https://app.co" target="_blank">
                <p
                  className="sm pt-2"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Image
                    noBlur
                    style={{ width: '28px', paddingRight: '4px' }}
                    src="images/app-co-icon.png"
                    alt="App.co"
                  />{' '}
                  App.co: Share your app with the world!
                </p>
              </a>
            </div>
          </div>
          <div className="container">
            <div>
              <div className="grid-flex tight-gutter center">
                <div className="col-8">
                  <div className="grid-flex tight-gutter center">
                    {cards.map((card, index) => {
                      if (index < 2) {
                        return (
                          <div
                            key={'tech-card-' + index}
                            className="col-6 pb-tight-gutter"
                          >
                            <Card
                              className="card stretch-height"
                              href={card.link}
                            >
                              <div className="p-2">
                                <div className="grid-flex tight-gutter no-break pb-1 middle">
                                  <div className="col grow">
                                    <p className="main-color underline-hover">
                                      {card.title}
                                    </p>
                                  </div>
                                  <div className="col no-grow">
                                    <div className="bs-outline-arrow">
                                      <Arrow />
                                    </div>
                                  </div>
                                </div>
                                <p className="sm">{card.description}</p>
                              </div>
                            </Card>
                          </div>
                        )
                      }
                    })}
                  </div>
                </div>
                <div className="col-12" />
                {cards.map((card, index) => {
                  const length = cards.length - 1
                  if (index > 1 && index !== length) {
                    return (
                      <div
                        key={'tech-card-' + index}
                        className="col-5 pb-tight-gutter"
                      >
                        <Card className="card stretch-height" href={card.link}>
                          <div className="p-2">
                            <div className="grid-flex tight-gutter no-break pb-1 middle">
                              <div className="col grow">
                                <p className="main-color underline-hover">
                                  {card.title}
                                </p>
                              </div>
                              <div className="col no-grow">
                                <div className="bs-outline-arrow">
                                  <Arrow />
                                </div>
                              </div>
                            </div>
                            <p className="sm">{card.description}</p>
                          </div>
                        </Card>
                      </div>
                    )
                  } else if (index === length) {
                    return (
                      <div key={'tech-card-' + index} className="col-12">
                        <Card className="card tech-long-card" href={card.link}>
                          <div className="p-2">
                            <div className="grid-flex no-break middle">
                              <div className="col no-grow">
                                <p className="main-color underline-hover">
                                  {card.title}
                                </p>
                              </div>
                              <div className="col arrow-col no-grow">
                                <div className="bs-outline-arrow">
                                  <Arrow />
                                </div>
                              </div>
                              <div className="col desc-col">
                                <p className="sm">{card.description}</p>
                              </div>
                            </div>
                          </div>
                        </Card>
                      </div>
                    )
                  }
                })}
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

export default OurTechnology
