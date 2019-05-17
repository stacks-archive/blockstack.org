import React from 'react'
import { Section } from '@components/v2/section'
import { Meta } from '@components/meta'
import * as gtag from '@common/lib/gtag'
import Router from 'next/router'

Router.onRouteChangeComplete = (url) => {
  gtag.pageview(url)
}

const TemplateWrapper = ({ meta, children, ...rest }) => {
  const customTemplate = meta.custom
  return customTemplate ? (
    children
  ) : (
    <>
      {children}
    </>
  )
}

class NoTemplate extends React.Component {
  render() {
    const { component: Component, meta, ...props } = this.props
    return (
      <TemplateWrapper meta={meta}>
        <Meta {...meta} />
        <Component {...props} />
      </TemplateWrapper>
    )
  }
}

export default NoTemplate
