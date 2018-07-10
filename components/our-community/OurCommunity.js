import React, { Component } from 'react'
import InlineSVG from 'svg-inline-react'
import Card from '@components/card'
import TriangleBg from '@components/triangle-bg'
import Arrow from '@components/outline-arrow'
import { DividerTwo } from '@components/divider'

import BsBerlin from '@assets/images/bs-berlin.png'

import './OurCommunity.scss'

class OurCommunity extends Component {
  render() {
    const cards = [
      {
        title: 'Meetups',
        link: this.props.links.meetup,
        description: '7000+ developers across 23 countries'
      },
      {
        title: 'Events',
        link: this.props.links.events,
        description: 'Bi-annual Global Summit and hackathons'
      },
      {
        title: 'Forum',
        link: this.props.links.forum,
        description:
          'Latest news and instant answers from our developer community'
      }
    ]

    return (
      <section>
        <div className="blue-bg bs-pb-card">
          <div className="container">
            <div className="text-color pt-4 pb-4 align-center">
              <div className="divider-2">
                <DividerTwo />
              </div>
            </div>
            <div className="align-center pb-3 mb-1">
              <p>Our community</p>
            </div>
          </div>
        </div>
        <div className="triangle-bg pb-4">
          <div className="container bs-mtn-card">
            <div>
              <div className="grid-flex tight-gutter center">
                {cards.map((card, index) => {
                  return (
                    <div
                      key={'community-card-' + index}
                      className="col-4 pb-tight-gutter"
                    >
                      <Card
                        className="card stretch-height min-height c-mtn-height"
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
                })}
                <div className="col-12">
                  <Card
                    className="card"
                    href="http://www.meetup.com/Blockstack-Berlin/"
                  >
                    <div className="grid-flex tight-gutter middle break-xlg">
                      <div className="col-4 logo-col">
                        <img
                          src={BsBerlin}
                          alt="Blockstack Berlin"
                          className="mx-auto"
                        />
                      </div>
                      <div className="col-8">
                        <div className="grid-flex tight-gutter middle">
                          <div className="col grow">
                            <div className="p-2 max-text-width">
                              <p className="sm">
                                Experts on privacy, blockchain, information
                                theory, and the decentralized community.
                              </p>
                            </div>
                          </div>
                          <div className="col no-grow">
                            <div className="p-2 pr-gutter">
                              <div className="p sm medium-weight underline-hover main-color">
                                Fri, March 2, 2018{' '}
                                <span className="bs-outline-arrow inline">
                                  <Arrow />
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
          <div className="container align-center pt-3 mt-2">
            <nav className="line-nav main-color">
              <ul>
                <li>
                  <a href={this.props.links.slack}>Slack</a>
                </li>
                <li>
                  <a href={this.props.links.github} target="_blank">
                    Github
                  </a>
                </li>
                <li>
                  <a href={this.props.links.appCo}>App.co</a>
                </li>
                <li>
                  <a href={this.props.links.blog}>Blog</a>
                </li>
                <li>
                  <a href={this.props.links.youtube}>YouTube</a>
                </li>
              </ul>
            </nav>
          </div>
          <TriangleBg className="bs-mt-card" direction="down" />
        </div>
      </section>
    )
  }
}

export default OurCommunity
