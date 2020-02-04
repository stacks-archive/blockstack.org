import React from 'react'
import { Meta } from '@components/meta'
import Router from 'next/router'

const trackPageView = ({ url }) => {
  typeof window !== 'undefined' && window.fathom('trackPageview', { url })
}

Router.onRouteChangeComplete = (url) => trackPageView({ url })

const TemplateWrapper = ({ meta, children, ...rest }) => {
  const customTemplate = meta.custom
  return customTemplate ? children : <>{children}</>
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
