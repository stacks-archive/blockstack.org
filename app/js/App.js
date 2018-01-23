'use strict';

import {Component, PropTypes, cloneElement} from 'react'

import Header             from './components/Header'
import Footer             from './components/Footer'
import Alert              from './components/Alert'

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
    let specialHeader = false
    let specialFooter = false
    const pathname = location.pathname.replace(/\/$/, '')
    if (location.pathname === '/' ||
        pathname === '/token' ||
        pathname === '/summit2017' ||
        pathname === '/funding' ||
        pathname === '/faq' ||
        pathname === '/docs') {
      specialHeader = true
    }
    if (pathname === '/faq' ||
        pathname === '/docs') {
      specialFooter = true
    }

    return (
      <div className={specialHeader ? 'app-landing' : 'app-common'}>
        { !specialHeader ?
        <div>
          <Alert />
          <Header />
        </div>
        : null }
        {this.renderChildren()}
        { !specialFooter ?
        <Footer />
        : null }
      </div>
    )
  }

}

App.propTypes = propTypes

export default App
