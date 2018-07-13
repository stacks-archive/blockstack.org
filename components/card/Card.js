import React, { Component } from 'react'
import './Card.scss'
import Link from 'next/link'
class Header extends Component {
  render() {
    if (this.props.href && !this.props.internal) {
      return (
        <a
          href={this.props.href}
          target={this.props.target}
          className={'g-card link ' + this.props.className}
        >
          {this.props.children}
        </a>
      )
    }
    if (this.props.href && this.props.internal) {
      return (
        <Link href={this.props.href} prefetch>
          <a
            target={this.props.target}
            className={'g-card link ' + this.props.className}
          >
            {this.props.children}
          </a>
        </Link>
      )
    }

    return (
      <div className={'g-card ' + this.props.className}>
        {this.props.children}
      </div>
    )
  }
}

export default Header

//<a className="menu-icon" onClick={this.props.openMenu}>Menu</a>
