import React from 'react'
import { StyledImage } from './styled'
const requireImage = require.context('@assets', true, /\.(png|jpg|jpeg|svg)$/)
const path = '/_next/webpack/'
const prodPath = '/_next/static/images/'
const addPath = (src) => {
  if (src.includes('_next') && src.includes(path)) {
    if (process.env.NODE_ENV === 'production') {
      return src.replace(path, '/_next/static/images/')
    } else {
      return src
    }
  } else {
    if (process.env.NODE_ENV === 'production') {
      return prodPath + src
    } else {
      return path + src
    }
  }
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
    const internalLink = !src.includes('http')
    const localImage = internalLink
      ? requireImage(`./images${src.split('images')[1]}`)
      : null
    const source = internalLink ? localImage.src : src
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
            <img data-src={addPath(source)} alt={alt} className="lazyload" />
          </StyledImage.Picture>
          <Placeholder />
        </StyledImage.Picture.Wrapper>
      </StyledImage>
    )
  }
}

export { Image }
