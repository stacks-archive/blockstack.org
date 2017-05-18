import {Component, cloneElement} from 'react'
import PropTypes from 'prop-types'

import Header             from './components/Header'
import Footer             from './components/Footer'
import TransparentHeader  from './components/TransparentHeader'

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
        <div>
          { location.pathname === '/' ?
            <TransparentHeader />
          :
            <Header />
          }
        </div>
        {this.renderChildren()}
        <Footer />
      </div>
    )
  }

}

App.propTypes = propTypes

export default App