import React, { Component } from 'react'
import InlineSVG from 'svg-inline-react'

import Logo from '@assets/images/logo.svg'

import './Mission.scss'

class Header extends Component {
  render() {
    return (
      <div className="md-basic-template">
        <section className="mission py-4">
          <div className="container align-center">
            <p className="main-color pb-3">Our mission</p>
            <p className="main-color">
              Build an ecosystem that gives your users control over their
              fundamental digital rights: Identity, data-ownership, privacy, and
              security. Join us and help build the new internet.
            </p>
          </div>
        </section>
      </div>
    )
  }
}

export default Header

//<a className="menu-icon" onClick={this.props.openMenu}>Menu</a>
