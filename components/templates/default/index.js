import React from 'react'
import { StyledPageTop, StyledPageContent, StyledPageContainer } from './styled'
import {
  TriangleDotsHalf,
  TriangleDotsFull,
  TriangleDotsLarge
} from '@components/svgs'

import { Meta } from '@components/meta'

import * as gtag from '@common/lib/gtag'
import Router from 'next/router'

Router.onRouteChangeComplete = (url) => {
  gtag.pageview(url)
}

const getDisplayName = (WrappedComponent) =>
  WrappedComponent.displayName || WrappedComponent.name || 'Component'

const Title = ({ children }) => (
  <StyledPageTop.Title>
    <h1 className="h1 mb-3">{children}</h1>
    <TriangleDotsHalf
      style={{
        position: 'absolute',
        bottom: '-1px',
        transform: 'translateX(-400px)'
      }}
    />
    <TriangleDotsFull
      style={{
        position: 'absolute',
        top: '-120px',
        transform: 'translateX(80px)'
      }}
    />
  </StyledPageTop.Title>
)

const SubtitleDivider = () => (
  <div
    style={{
      width: '2px',
      height: '20px',
      margin: '0 20px',
      background: '#fff',
      opacity: 0.3
    }}
  />
)
const Subtitle = ({ children }) =>
  children ? (
    <h2 className="h4 grid-flex middle">
      {Array.isArray(children)
        ? children.reduce((prev, item, index) => {
            const itemEl = <div key={item}>{item}</div>
            if (index === children.length - 1) {
              return prev.concat([itemEl])
            }
            return prev.concat([
              itemEl,
              <SubtitleDivider key={`divider-${index}`} />
            ])
          }, [])
        : children}
    </h2>
  ) : null

const TopArea = ({ title, subtitle, button }) => (
  <StyledPageTop>
    <>
      <StyledPageTop.Wrapper>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </StyledPageTop.Wrapper>
    </>
  </StyledPageTop>
)

const Button = ({ button }) => {
  if (!button) {
    return null
  }
  const { label, href } = button
  return label && href ? (
    <StyledPageTop.Button href={href}>{label}</StyledPageTop.Button>
  ) : null
}
const PageTemplate = (Component, meta, pageProps) => {
  class PageTemplateWrapper extends React.PureComponent {
    render() {
      return (
        <>
          <TopArea {...meta} />
          <Meta {...meta} />
          <StyledPageContainer>
            <Button {...meta} />
            <StyledPageContent className="md-basic-template">
              <div
                className={`${
                  !meta.notRichText ? 'md-content rich-text' : 'md-content'
                }`}
              >
                <Component {...pageProps} {...this.props} />
              </div>
            </StyledPageContent>
            <TriangleDotsLarge
              style={{
                position: 'absolute',
                top: 0
              }}
            />
          </StyledPageContainer>
        </>
      )
    }
  }

  PageTemplateWrapper.displayName = `PageTemplateWrapper(${getDisplayName(
    Component
  )})`

  return PageTemplateWrapper
}

export default PageTemplate
