import React, { Component } from 'react'
import Link from 'next/link'

class Card extends Component {
  render() {
    if (this.props.href && !this.props.internal) {
      return (
        <a
          href={this.props.href}
          target={this.props.target}
          className={'g-card link ' + this.props.className}
          style={this.props.style}
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
            style={this.props.style}
          >
            {this.props.children}
          </a>
        </Link>
      )
    }

    return (
      <div
        className={'g-card ' + this.props.className}
        style={this.props.style}
      >
        {this.props.children}
      </div>
    )
  }
}

export default Card

//<a className="menu-icon" onClick={this.props.openMenu}>Menu</a>
