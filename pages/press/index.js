import React from 'react'
import { Press } from '@components/press'
import { Section } from '@components/section'
import { press } from '../../common/data/home'

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
          <Section.Title is="h2" pb={4}>
            {meta.title}
          </Section.Title>
          <Section.Text is="h3" pb={7}>
            For media and press inquiries, please contact <a href="mailto:press@blockstack.com">press@blockstack.com</a>
          </Section.Text>
          <Press items={press} />
        </Section.Pane>
      </Section>
    )
  }
}

export default PressPage
