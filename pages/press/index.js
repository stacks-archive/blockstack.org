import React from 'react'
import { Press } from '@components/press'
import { Section } from '@components/section'
import { press } from '../home/data'

const meta = {
  path: '/press',
  title: 'Press',
  notRichText: true
}

class PressPage extends React.PureComponent {
  static async getInitialProps(ctx) {
    return {
      meta
    }
  }

  render() {
    return (
      <Section>
        <Section.Pane width={1}>
          <Section.Title is="h2" pb={5}>
            {meta.title}
          </Section.Title>
          <Press items={press} />
        </Section.Pane>
      </Section>
    )
  }
}

export default PressPage
