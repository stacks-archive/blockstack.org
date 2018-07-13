import React from 'react'

const NoTemplate = (Component) => {
  return class extends React.PureComponent {
    render() {
      return <Component />
    }
  }
}

export default NoTemplate
