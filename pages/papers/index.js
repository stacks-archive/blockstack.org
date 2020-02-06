import React from 'react'
import { Section } from '@components/section'
import { Documents } from '@components/documents'

const meta = {
  path: '/papers',
  title: 'Papers',
  ogTitle: 'Technical Whitepapers and SIPs'
}

const languages = [
  { code: 'en', label: 'English', flag: 'gb' },
  { code: 'es', label: 'Español' },
  { code: 'ch', label: '中文', flag: 'cn' },
  { code: 'jp', label: '日本語', flag: 'jp' },
  { code: 'ko', label: '한국어', flag: 'kr' }
]

const documents = [
  {
    name: 'The Blockstack Decentralized Computing Network',
    description: (
      <>
        Whitepaper v2.0
        <br />
        May 2019
      </>
    ),
    href: '/whitepaper.pdf',
    language: 'en'
  },
  {
    name: 'PoX: Proof of Transfer Mining with Bitcoin',
    description: (
      <>
        PoX
        <br />
        Feb 2020
      </>
    ),
    href: '/pox.pdf',
    language: 'en'
  },
  {
    name: 'Stacks Token Economics',
    description: (
      <>
        Token Economics
        <br />
        Oct 2019
      </>
    ),
    href: '/tokenpaper.pdf',
    language: 'en'
  },
  {
    name: 'La Red Computacional Descentralizada de Blockstack',
    description: (
      <>
        Whitepaper Técnico de Blockstack&nbsp;v2.0
        <br />
        Mayo 2019
      </>
    ),
    href: '/whitepaper-es.pdf',
    language: 'es'
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
    href: '/whitepaper-ch.pdf',
    language: 'ch'
  },
  {
    name: 'ブロックスタック分散コンピューティングネットワーク',
    description: (
      <>
        テクニカルホワイトペーパー2.0
        <br />
        2019年 5月
      </>
    ),
    href: '/whitepaper-jp.pdf',
    language: 'jp'
  },
  {
    name: '블록스택 탈중앙 컴퓨팅 네트워크',
    description: (
      <>
        기술 백서 2.0
        <br />
        2019년 5월
      </>
    ),
    href: '/whitepaper-ko.pdf',
    language: 'ko'
  },
  {
    name: 'An Aggregation Algorithm for Blockstack',
    description: (
      <>
        App Mining paper
        <br />
        December 2018
      </>
    ),
    href:
      'https://blog.blockstack.org/app-mining-game-theory-algorithm-design/',
    language: 'en'
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
            <Documents languages={languages} items={documents} />
          </Section.Pane>
        </Section>
      </>
    )
  }
}

export default PapersPage
