import React from 'react'
import { AboutHero } from '@components/v2/heros/about'
import { CardList } from '@components/v2/card-list'
import CheckIcon from 'mdi-react/CheckIcon'
import { Text } from '@components/v2/section'
import { Investors } from '@components/v2/investors'
import { PersonsList } from '@components/v2/advisors'
import { PhotoGrid } from '@components/v2/photos-grid'
import { Sections } from '@components/v2/sections'
import { Team } from '@components/v2/team'
import { photos1, photos2, ecosystemPartners, advisors } from './data'

const sections = [
  {
    variant: 'white',
    panes: [
      {
        justifyContent: 'flex-start',
        title: {
          is: 'h2',
          pb: [5, 5, 0],
          children: (
            <>
              Blockstack is pioneering&nbsp;the next evolution of&nbsp;computing
            </>
          )
        }
      },
      {
        panes: [
          {
            text: {
              children: `Blockstack is a decentralized computing platform that puts users in control of their data and identity. Apps built on Blockstack make data breaches and trust violations an antiquated notion.`
            }
          },
          {
            text: {
              children: (
                <>
                  Over 65 independent developer teams have built apps on our
                  platform. Open-source software is at the heart of everything
                  we do; we’re active on{' '}
                  <Text
                    is="a"
                    href="http://chat.blockstack.org/"
                    target="_blank"
                  >
                    Slack
                  </Text>
                  ,{' '}
                  <Text
                    is="a"
                    href="https://github.com/blockstack"
                    target="_blank"
                  >
                    GitHub
                  </Text>
                  ,{' '}
                  <Text
                    is="a"
                    href="https://twitter.com/blockstack"
                    target="_blank"
                  >
                    Twitter
                  </Text>
                  , and the{' '}
                  <Text
                    is="a"
                    href="https://forum.blockstack.org/"
                    target="_blank"
                  >
                    Blockstack Forum
                  </Text>
                  .
                </>
              )
            }
          }
        ]
      }
    ]
  },
  {
    variant: 'white',
    children: <PhotoGrid height={[300, 400, 640]} items={photos1} />
  },
  {
    variant: 'white',
    panes: [
      [
        {
          alignItems: 'flex-start',
          text: {
            children: `Blockstack PBC, a public benefit corporation at the heart of the Blockstack ecosystem, has raised $55M+ in capital to develop the core protocols and developer tools for the platform. We’re headquartered in New York City, with a globally distributed team that includes computer scientists from Princeton, Stanford, MIT and other top universities. `
          }
        },
        {
          text: {
            children: `After four years of research and development, we’ve deployed the initial version of our full-stack computing platform that can scale blockchain-based apps to millions of users today.`
          }
        }
      ],
      {
        justifyContent: 'flex-start',
        title: {
          is: 'h4',
          children: `Highlights`
        },
        list: {
          icon: CheckIcon,
          items: [
            'Founded in 2013 at Princeton',
            '$50M in funding',
            '4 years of research & development',
            '7,000+ active developers',
            '100+ apps launched on Blockstack'
          ]
        }
      }
    ]
  },
  {
    variant: 'white',
    children: <PhotoGrid height={[300, 400, 640]} items={photos2} />
  },
  {
    variant: 'white',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    panes: [
      {
        title: {
          is: 'h2',
          children: 'Our team'
        },
        text: {
          children:
            'Want to collaborate with the brightest minds in the industry? Join our team and build the future of blockchain computing.'
        },
        actions: [
          {
            type: 'link',
            label: 'Careers',
            path: '/careers'
          }
        ]
      },
      {
        width: 1,
        children: <Team />
      },
      {
        width: 1,
        flexDirection: ['column', 'column', 'row'],
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        panes: [
          {
            width: [1, 1, 'calc(33.33333% - 24px)'],
            title: {
              is: 'h4',
              pb: 3,
              children: 'Scientists and PHDs for a solid foundation'
            },
            text: {
              children:
                'Five distributed system PhDs. Two advisors with Presidential Career Awards. Over 13K research citations. Research published at USENIX ATC, DCCL. '
            }
          },
          {
            width: [1, 1, 'calc(33.33333% - 24px)'],
            title: {
              is: 'h4',
              pb: 3,
              children: 'Product designers, engineers, and growth experts'
            },
            text: {
              children:
                'Distributed systems and server virtualization, building and testing smart contracts, cryptocurrency mining, developer education and community building.'
            }
          },
          {
            width: [1, 1, 'calc(33.33333% - 24px)'],
            title: {
              is: 'h4',
              pb: 3,
              children: 'Attorneys and accounting professionals'
            },
            text: {
              children:
                'Deep legal and finance experience to ensure compliance in a new and rapidly changing regulatory environment.'
            }
          }
        ]
      }
    ]
  },
  {
    variant: 'white',
    panes: [
      {
        width: 1,
        title: {
          children: 'Blockstack PBC board and advisors'
        }
      },
      {
        width: 1,
        children: <PersonsList items={advisors} />
      }
    ]
  },
  {
    variant: 'white',
    panes: [
      {
        title: {
          is: 'h2',
          pb: [5, 5, 0],
          children: (
            <>Supported by the&nbsp;pioneers&nbsp;of decentralized computing</>
          )
        }
      },
      {
        text: {
          children:
            'We’ve raised $50M from industry leading advisors and investors'
        },
        actions: [
          {
            type: 'link',
            label: 'Invest',
            href: 'https://angel.co/blockstack',
            target: '_blank'
          }
        ]
      },
      {
        width: 1,
        children: <Investors />
      }
    ]
  },
  {
    variant: 'white',
    panes: [
      {
        width: 1,
        title: {
          is: 'h2',
          children: 'Ecosystem partners'
        }
      },
      {
        width: 1,
        children: <CardList items={ecosystemPartners} />
      }
    ]
  }
]

class AboutPage extends React.Component {
  static async getInitialProps(ctx) {
    return {
      meta: {
        title: 'About',
        path: '/about',
        custom: true,
        ogTitle: 'Leading the way to a blockchain computing era'
      }
    }
  }
  render() {
    return (
      <>
        <AboutHero />
        <Sections sections={sections} />
      </>
    )
  }
}

export default AboutPage
