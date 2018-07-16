import React, { Component } from 'react'
import { bslinks } from '@common'
import TopArea from '@components/top-area'
import AppsGrid from '@components/apps-grid'
import WhyBS from '@components/why-bs'
import OurTechnology from '@components/our-technology'
import OurCommunity from '@components/our-community'
import FundApp from '@components/fund-app'
import Mission from '@components/mission'

const meta = {
  path: '/',
  title: 'Blockstack',
  template: 'NONE'
}

class HomePage extends React.PureComponent {
  static async getInitialProps(ctx) {
    return {
      meta
    }
  }
  render() {
    const { data } = this.props

    return (
      <div>
        <TopArea links={bslinks} />
        <AppsGrid links={bslinks} />
        <WhyBS />
        <OurTechnology />
        <OurCommunity links={bslinks} />
        <FundApp links={bslinks} />
        <Mission />
      </div>
    )
  }
}

export default HomePage
