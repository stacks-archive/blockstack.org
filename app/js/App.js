'use strict';

import {Component, PropTypes, cloneElement} from 'react'

import Header             from './components/Header'
import Footer             from './components/Footer'
import TokenBanner         from './components/TokenBanner'


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
    let wrapperClass = 'app-common'
    if (location.pathname === '/') {
      wrapperClass = 'app-landing'
    }

    return (
      <div className={wrapperClass}>
        { (location.pathname !== '/' && location.pathname !== '/tokensale') ?
        <div>
          <TokenBanner />
          <Header />
        </div>
        : null }
        {this.renderChildren()}
        <Footer />
      </div>
    )
  }

}

App.propTypes = propTypes

export default App
