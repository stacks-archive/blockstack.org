import React from 'react'
import Content from './disclaimers.md'
import { Section } from '@components/v2/section'

const meta = {
  path: '/legal/disclaimers',
  title: 'Disclaimers'
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
