import React from 'react'
import Content from '../../../common/markdown/privacy.md'
import { Section } from '@components/section'

const meta = {
  path: '/legal/privacy-policy',
  title: 'Privacy Policy',
}

class PrivacyPolicyPage extends React.PureComponent {
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

export default PrivacyPolicyPage
