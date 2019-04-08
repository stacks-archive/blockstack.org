import React from 'react'

import { Meta } from '@components/meta'
import * as gtag from '@common/lib/gtag'
import Router from 'next/router'

Router.onRouteChangeComplete = (url) => {
  gtag.pageview(url)
}

const NoTemplate = (Component, meta) => {
  return class extends React.PureComponent {
    render() {
      return (
        <>
          <Meta {...meta} />
          <Component />
        </>
      )
    }
  }
}

export default NoTemplate
