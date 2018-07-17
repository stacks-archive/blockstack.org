import styled from 'styled-components'
import { colors } from '@common'

const topHeight = '300px'
const Wrapper = styled.div`
  max-width: 44rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Button = styled.a`
  position: absolute;
  font-family: 'Plex', monospace;
  width: 315px;
  height: 65px;
  top: -32.5px;
  color: white;
  background: #211f6d;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 93px;
  z-index: 25;
  &:hover {
    color: white !important;
    background-color: #151445;
  }
`

const Title = styled.div``
const StyledPageTop = styled.div`
  background: ${colors.blueMain};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 140px 0 100px 0;
  text-align: center;
  position: fixed;
  width: 100%;
  height: ${topHeight};
  h1,
  .h1,
  h2,
  .h2,
  h3,
  .h3,
  h4,
  .h4,
  h5,
  .h5,
  h6,
  .h6 {
    color: white;
  }
  * {
    &::selection {
      background: #fff; /* WebKit/Blink Browsers */
    }
    &::-moz-selection {
      background: #fff; /* Gecko Browsers */
    }
  }
`

const StyledPageContainer = styled.div`
  background: #fff;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  z-index: 5;
  position: relative;
  margin-top: ${topHeight};
`
const Sidebar = styled.aside`
  max-width: 200px;
  width: 200px;
  flex-grow: 1;
  height: 600px;
`

const StyledPageContent = styled.main`
  padding: 40px;
  width: 100%;
  max-width: 900px;
  margin-right: auto;
  margin-left: auto;
  position: relative;
  z-index: 20;
  @media (max-width: 600px) {
    padding: 20px 20px;
  }
  img {
    & + small {
      padding-top: 10px;
      opacity: 0.5;
      display: inline-block;
    }
  }
`

StyledPageTop.Wrapper = Wrapper
StyledPageTop.Button = Button
StyledPageTop.Title = Title
StyledPageContent.Sidebar = Sidebar

export { StyledPageTop, StyledPageContent, StyledPageContainer }
