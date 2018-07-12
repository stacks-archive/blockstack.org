import React from 'react'
import fetch from 'cross-fetch'
import { getAllPostsFromRSS } from '@common/rss'
const meta = {
  path: '/blog',
  title: 'Blockstack Blog',
  template: 'secondary',
  description:
    'Blockstack is a new internet for decentralized apps that you access through the Blockstack Browser. With Blockstack, there is a new world of apps that let you own your data and maintain your privacy, security and freedom.'
}

class CareersPage extends React.PureComponent {
  static async getInitialProps(ctx) {
    const res = await fetch(
      'https://blockstack-site-api.herokuapp.com/v1/blog-rss'
    )
    if (res.status >= 400) {
      console.log('Bad response from server')
    }
    const blogText = await res.text()

    const blogData = getAllPostsFromRSS(blogText)

    return {
      meta,
      ...blogData
    }
  }

  render() {
    return <>Blog</>
  }
}

export default CareersPage
