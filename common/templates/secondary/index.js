import React from 'react'
import { StyledPageTop, StyledPageContent, StyledPageContainer } from './styled'
import {
  TriangleDotsHalf,
  TriangleDotsFull,
  TriangleDotsLarge
} from '@components/svgs'
function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}
const Title = ({ children }) => (
  <StyledPageTop.Title>
    <h1 className="h1">{children}</h1>
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
const Subtitle = ({ children }) =>
  children ? (
    <>
      <div className="h4 py-2">---</div>
      <h2 className="h4">{children}</h2>
    </>
  ) : null
const TopArea = ({ title, subtitle, button: { href, label } }) => (
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
  const { label, href } = button
  return label && href ? (
    <StyledPageTop.Button href={href}>{label}</StyledPageTop.Button>
  ) : null
}
const SecondaryPageTemplate = (Component, meta) => {
  class SecondaryPageTemplateWrapper extends React.PureComponent {
    render() {
      return (
        <>
          <TopArea {...meta} />

          <StyledPageContainer>
            <Button {...meta} />
            <StyledPageContent>
              <div className="md-content rich-text">
                <Component {...this.props} />
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

  SecondaryPageTemplateWrapper.displayName = `SecondaryPageTemplateWrapper(${getDisplayName(
    Component
  )})`

  return SecondaryPageTemplateWrapper
}

export default SecondaryPageTemplate
