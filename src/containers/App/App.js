import React, { Component } from 'react'

import Card from '@components/Card'
import TopArea from '@components/TopArea'
import AppsGrid from '@components/AppsGrid'
import WhyBS from '@components/WhyBS'
import OurTechnology from '@components/OurTechnology'
import OurCommunity from '@components/OurCommunity'
import FundApp from '@components/FundApp'
import Mission from '@components/Mission'

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
