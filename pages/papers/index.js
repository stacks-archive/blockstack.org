import React from 'react'
import { Section } from '@components/v2/section'
import { Documents } from '@components/v2/documents'

const meta = {
  path: '/papers',
  title: 'Papers'
}

const documents = [
  {
    name: 'Blockstack: A New Decentralized Internet',
    description: (
      <>
        Whitepaper Version 1.1
        <br />
        Oct 2017
      </>
    ),
    href: 'https://blockstack.org/whitepaper.pdf'
  },
  {
    name: 'Blockstack Token Whitepaper',
    description: (
      <>
        Token Whitepaper Version 1.2
        <br />
        Oct 2017
      </>
    ),
    href: 'https://blockstack.org/tokenpaper.pdf'
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
        <Section minHeight={0}>
          <Section.Pane width={1}>
            <Section.Title is="h2" pb={5}>
              {meta.title}
            </Section.Title>
            <Section.Text>
              Blockstack PBC has a draft of whitepaper 2.0 that is currently
              being reviewed by relevant experts. Stacks Improvement Proposals
              (SIPs) for the new consensus algorithm and smart contract language
              are respectively available as{' '}
              <Section.Text
                is="a"
                href="hhttps://github.com/blockstack/blockstack-core/blob/develop/sip/sip-001-burn-election.md"
                target="_blank"
              >
                SIP-001
              </Section.Text>{' '}
              and{' '}
              <Section.Text
                is="a"
                href="https://github.com/blockstack/blockstack-core/blob/develop/sip/sip-002-smart-contract-language.md"
                target="_blank"
              >
                SIP-002
              </Section.Text>
              .
            </Section.Text>
          </Section.Pane>
        </Section>
        <Section minHeight={0} bg="#C3DBEE">
          <Section.Pane width={1}>
            <Documents items={documents} />
          </Section.Pane>
        </Section>
      </>
    )
  }
}

export default PapersPage
