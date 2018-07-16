import React from 'react'
import styled from 'styled-components'
const MonoFont = styled.div`
  * {
    font-family: 'Plex', monospace !important;
  }
`
const NoTemplate = (Component) => {
  return class extends React.PureComponent {
    render() {
      return (
        <MonoFont>
          <Component />
        </MonoFont>
      )
    }
  }
}

export default NoTemplate
