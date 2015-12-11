'use strict';

import React              from 'react'

import Header             from './components/Header'
import Footer             from './components/Footer'

const propTypes = {
  params: React.PropTypes.object,
  query: React.PropTypes.object,
  children: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.object
  ])
}

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  renderChildren() {
    return React.cloneElement(this.props.children, {
      params: this.props.params,
      query: this.props.query
    })
  }

  render() {
    return (
      <div>
        {this.renderChildren()}
      </div>
    )
  }

}

App.propTypes = propTypes

export default App