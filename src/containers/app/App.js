import React, { Component } from 'react'

import Card from '@components//card'
import TopArea from '@components/top-area'
import AppsGrid from '@components/apps-grid'
import WhyBS from '@components/why-bs'
import OurTechnology from '@components/our-technology'
import OurCommunity from '@components/our-community'
import FundApp from '@components/fund-app'
import Mission from '@components//mission'

import './App.scss'

class App extends Component {
  render() {
    const { data } = this.props

    return (
      <div>
        <TopArea links={data.site.siteMetadata.bslinks} />
        <AppsGrid links={data.site.siteMetadata.bslinks} />
        <WhyBS />
        <OurTechnology />
        <OurCommunity links={data.site.siteMetadata.bslinks} />
        <FundApp links={data.site.siteMetadata.bslinks} />
        <Mission />
      </div>
    )
  }
}

export default App
