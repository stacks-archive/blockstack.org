import styled, { keyframes, css } from 'styled-components'

const fade = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`
const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`

const StyledPicture = styled.picture`
  display: block;
  position: relative;
  z-index: 20;

  img {
    display: block;
    &.lazyloaded {
      animation: ${fade} 0.25s linear forwards;
      animation-delay: 0.15s;
    }
    opacity: 0;
  }
`

const PictureWrapper = styled.div`
  position: relative;
  z-index: 12;
`

const Placeholder = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    &:last-of-type {
      position: absolute;
      top: 0;
      left: 0;
      transform: scale(1.04);
      transform-origin: center center;
    }
    &:first-of-type {
      position: relative;
      z-index: 9;
    }
    //width: calc(100% + 100px);
    min-width: calc(100%);
    //display: block;
    //transform: translate3d(0, -3%, 0);
    filter: blur(10px);
  }
`

const StyledImage = styled.div`
  position: relative;
  img {
    max-width: 100%;
  }

  .lazyloaded {
    & ~ ${Placeholder} {
      animation: ${fadeOut} 0.25s linear forwards;
      animation-delay: 0.2s;
    }
  }
  ${({ width, height, noBlur }) =>
    width &&
    height &&
    !noBlur &&
    css`
      width: ${width}px;
      max-width: 100%;

      ${PictureWrapper} {
        height: 0;
        width: 100%;
        min-width: 100%;
        padding-bottom: ${(height / width) * 100}%;
        picture {
          position: absolute;
          left: 0;
          top: 0;
        }
      }
    `};
`

StyledImage.Picture = StyledPicture
StyledImage.Picture.Wrapper = PictureWrapper
StyledImage.Placeholder = Placeholder

export { StyledImage }
