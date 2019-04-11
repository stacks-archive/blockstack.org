import React from 'react'
import { Box, Flex } from 'blockstack-ui'
import fetch from 'cross-fetch'
import { slugify } from '@common/es6'

const meta = {
  path: '/tutorials',
  title: 'Frequently Asked Questions',

  description:
    'Blockstack is a new internet for decentralized apps that you access through the Blockstack Browser. With Blockstack, there is a new world of apps that let you own your data and maintain your privacy, security and freedom.'
}

const prettyTitles = (category) => {
  if (category === 'general') {
    return 'General'
  }
  if (category === 'appusers') {
    return 'For App Users'
  }
  if (category === 'dappdevs') {
    return 'For Developers'
  }
  if (category === 'tokens') {
    return 'Token Related'
  }
  if (category === 'wallet') {
    return 'Wallet Related'
  }
}

const FAQSection = ({ items, ...rest }) => {
  return (
    <Box>
      {items.map((item, key) => (
        <Box id={slugify(item.question)} key={key}>
          <Box is="h3">{item.question}</Box>
          <Box>
            <Box dangerouslySetInnerHTML={{ __html: item.answer }} />
          </Box>
        </Box>
      ))}
    </Box>
  )
}

const TableOfContents = ({ items, category, ...rest }) => {
  return (
    <Flex flexDirection="column" alignItems="flex-start">
      <Box pb={3} is="h4">
        {prettyTitles(category)}
      </Box>
      {items.map((item, key) => (
        <Box
          flexGrow={0}
          mb={3}
          href={'#' + slugify(item.question)}
          key={key}
          is="a"
          display="inline"
        >
          {item.question}
        </Box>
      ))}
    </Flex>
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
        <Box>
          {categories.map((category, i) => (
            <TableOfContents
              items={this.props.faq[category]}
              key={category}
              category={category}
            />
          ))}
        </Box>
        {categories.map((category, i) => (
          <FAQSection items={this.props.faq[category]} key={category} />
        ))}
      </>
    )
  }
}

export default FAQPage
