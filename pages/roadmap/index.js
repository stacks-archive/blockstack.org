import React from 'react'
import Content from './roadmap.md'
import { Section } from '@components/v2/section'

const meta = {
  path: '/roadmap',
  title: 'Blockstack Roadmap'
}

class DisclaimersPage extends React.PureComponent {
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
          <Content />
        </Section.Pane>
      </Section>
    )
  }
}

export default DisclaimersPage
