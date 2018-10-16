import React, { Component } from 'react'
import Link from 'next/link'
class Header extends Component {
  render() {
    return (
      <section className="fund-app py-4">
        <div className="container align-center">
          <h3 className="p main-color pb-3">Fund your dapp</h3>
          <p className="h2 main-color">
            We have funding available to support teams via{' '}
            <a href={this.props.links.appMining}>App Mining</a>,
            <a href={this.props.links.signatureFund}>Signature Fund</a>,{' '}
            <a href="https://contribute.blockstack.org/">
              Community Rewards Program
            </a>
            , and{' '}
            <Link href="/blog">
              <a>Active Bounties</a>
            </Link>
            .
          </p>
        </div>
      </section>
    )
  }
}

export default Header

//<a className="menu-icon" onClick={this.props.openMenu}>Menu</a>
