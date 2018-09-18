import React from 'react'
import { StyledImage } from './styled'
const requireImage = require.context('@assets', true, /\.(png|jpg|jpeg|svg)$/)
const path = '/_next/'
const addPath = (src) => {
  if(!src.includes(path)){
      return path + src
  }
  return src
}
class Image extends React.Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef(this)
  }
  state = {
    ref: this.ref,
    loaded: false
  }
  componentDidMount() {
    require('lazysizes')
    window.lazySizesConfig.expand = 100
  }

  render() {
    const { src, alt, noBlur, ...rest } = this.props
    const internalLink = src && !src.includes('http')
    const localImage = internalLink
      ? requireImage(`./images${src.split('images')[1]}`)
      : null
    const source = internalLink ? addPath(localImage.src) : src
    const placeholder = internalLink ? localImage.placeholder : null

    const Placeholder = () =>
      !noBlur || !internalLink ? (
        <StyledImage.Placeholder>
          <img src={placeholder} alt={alt} />
          <img src={placeholder} alt={alt} />
        </StyledImage.Placeholder>
      ) : null

    return (
      <StyledImage {...localImage} noBlur={noBlur}>
        <StyledImage.Picture.Wrapper>
          <StyledImage.Picture {...rest}>
            <img data-src={source} alt={alt} className="lazyload" />
          </StyledImage.Picture>
          <Placeholder />
        </StyledImage.Picture.Wrapper>
      </StyledImage>
    )
  }
}

export { Image, addPath }
