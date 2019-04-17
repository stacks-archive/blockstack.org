import React from 'react'

import { Meta } from '@components/meta'
import * as gtag from '@common/lib/gtag'
import Router from 'next/router'

Router.onRouteChangeComplete = (url) => {
  gtag.pageview(url)
}


class NoTemplate extends React.Component {
    render() {
      const {component: Component, meta, ...props} = this.props
      return (
        <>
          <Meta {...meta} />
          <Component {...props} />
        </>
      )
    }
  }

export default NoTemplate
