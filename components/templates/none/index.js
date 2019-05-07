import React from 'react'
import { Section } from '@components/v2/section'
import { Meta } from '@components/meta'
import * as gtag from '@common/lib/gtag'
import Router from 'next/router'

Router.onRouteChangeComplete = (url) => {
  gtag.pageview(url)
}

const TemplateWrapper = ({ meta, children, ...rest }) => {
  const customTemplate =
    meta.path === '/' || meta.path === '/about' || meta.path === '/technology'
  return customTemplate ? (
    children
  ) : (
    <>
      <Section variant="ink" minHeight="0px">
        <Section.Title>{meta.title}</Section.Title>
      </Section>
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
