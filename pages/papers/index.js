import React from 'react'
import { Section } from '@components/section'
import { Documents } from '@components/documents'

const meta = {
  path: '/papers',
  title: 'Papers',
  ogTitle: 'Technical Whitepapers and SIPs'
}

const documents = [
  {
    name: 'The Blockstack Decentralized Computing Network',
    description: (
      <>
        Whitepaper Version 2.0
        <br />
        May 2019
      </>
    ),
    href: '/whitepaper.pdf'
  },
  {
    name: 'Blockstack 去中心化计算网络',
    description: (
      <>
        Blockstack技术白皮书 v2.0
        <br />
        May 2019
      </>
    ),
    href: '/whitepaper-ch.pdf'
  }
]

class PapersPage extends React.PureComponent {
  static async getInitialProps(ctx) {
    return {
      meta
    }
  }

  render() {
    return (
      <>
        <Section py={undefined} pt={[7, 7, 9]} pb={7} minHeight={0}>
          <Section.Pane width={1}>
            <Section.Title is="h2" pb={5}>
              {meta.title}
            </Section.Title>
            <Section.Text>
              Latest Stacks Improvement Proposals (SIPs) are available on{' '}
              <Section.Text
                is="a"
                href="https://github.com/blockstack/blockstack-core/tree/develop/sip"
                target="_blank"
              >
                GitHub
              </Section.Text>
              .
            </Section.Text>
          </Section.Pane>
        </Section>
        <Section py={7} minHeight={0} bg="#C3DBEE">
          <Section.Pane width={1}>
            <Documents items={documents} />
          </Section.Pane>
        </Section>
      </>
    )
  }
}

export default PapersPage
