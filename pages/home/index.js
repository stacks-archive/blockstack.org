import React, { Component } from 'react'
import { bslinks } from '@common'
import TopArea from '@components/top-area'
import AppsGrid from '@components/apps-grid'
import OurTechnology from '@components/our-technology'
import OurCommunity from '@components/our-community'
import { News } from '@components/news'
import fetch from 'cross-fetch'

const meta = {
  path: '/',
  title: 'Blockstack',
  template: 'NONE'
}

class HomePage extends React.Component {
  static async getInitialProps(ctx) {
    const feedData = await fetch(
      'https://blog.blockstack.org/wp-json/wp/v2/posts?per_page=100'
    )
    const usersData = await fetch(
      'https://blog.blockstack.org/wp-json/wp/v2/users?per_page=30'
    )
    const feed = await feedData.json()
    const users = await usersData.json()

    return {
      meta,
      feed,
      users
    }
  }
  render() {
    const { data, feed, users } = this.props

    return (
      <div>
        <TopArea links={bslinks} />
        <AppsGrid links={bslinks} />
        <OurTechnology />
        <OurCommunity links={bslinks} />
        <News items={feed} users={users} />
      </div>
    )
  }
}

export default HomePage
