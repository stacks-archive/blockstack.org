import React from 'react'
import { Box } from 'blockstack-ui'
import fetch from 'cross-fetch'
const meta = {
  path: '/tutorials',
  title: 'Frequently Asked Questions',

  description:
    'Blockstack is a new internet for decentralized apps that you access through the Blockstack Browser. With Blockstack, there is a new world of apps that let you own your data and maintain your privacy, security and freedom.'
}

const FAQSection = ({ items, ...rest }) => {
  return (
    <Box>
      {items.map((item, key) => (
        <Box key={key}>
          <Box is="h3">{item.question}</Box>
          <Box>
            <Box dangerouslySetInnerHTML={{ __html: item.answer }} />
          </Box>
        </Box>
      ))}
    </Box>
  )
}

const categories = ['general', 'appusers', 'dappdevs', 'tokens', 'wallet']

class FAQPage extends React.PureComponent {
  static async getInitialProps(ctx) {
    const res = await fetch('https://docs-api.blockstack.org')
    const data = await res.json()
    return {
      meta,
      faq: data
    }
  }

  render() {
    return (
      <>
        {categories.map((category, i) => (
          <FAQSection items={this.props.faq[category]} key={category} />
        ))}
      </>
    )
  }
}

export default FAQPage
