'use strict';

import {Component, PropTypes, cloneElement} from 'react'

import Header             from './components/Header'
import Footer             from './components/Footer'

const propTypes = {
  params: PropTypes.object,
  query: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ])
}

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  renderChildren() {
    return cloneElement(this.props.children, {
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