import React from 'react'
import styled from 'styled-components'
import { Meta } from '@components/meta'
import * as gtag from '@common/lib/gtag'
import Router from 'next/router'

Router.onRouteChangeComplete = (url) => {
  gtag.pageview(url)
}

const MonoFont = styled.div`
  * {
    font-family: 'Plex', monospace !important;
  }
`
const NoTemplate = (Component, meta) => {
  return class extends React.PureComponent {
    render() {
      return (
        <MonoFont>
          <Meta {...meta} />
          <Component />
        </MonoFont>
      )
    }
  }
}

export default NoTemplate
