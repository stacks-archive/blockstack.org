'use strict'

import {Component}  from 'react'
import {Link} from 'react-router'

class Header extends Component {
  static propTypes: {
    transparent: PropTypes.bool
  }

  constructor(props) {
    super(props)

    this.state = {
      navItems: [
        { to: '/install', label: 'Install' },
        { to: '/about', label: 'About' },
        { to: '/docs', label: 'Docs', dropdown: [
          {to: '/tutorials', label: 'Tutorials'},
          {to: '/papers', label: 'Papers'},
          {to: '/videos', label: 'Videos'},
          {to: 'http://blockstack.github.io/blockstack.js/', label: 'BlockstackJS'},
          {to: 'https://core.blockstack.org/', label: 'Core API'},
        ] },
        { to: '/blog', label: 'Blog' },
        { to: '/faq', label: 'FAQ' },
        { to: 'https://github.com/blockstack', label: 'GitHub', mobile: false },
      ]
    }
  }

  render() {
    let mobileNavItems = []

    this.state.navItems.map((navItem) => {
      if (navItem.mobile !== false) {
        mobileNavItems.push(navItem)
      }
    })

    return (
      <div className={ this.props.transparent ? 'bg-transparent' : 'bg-primary'}>
        <nav className="navbar navbar-expand-sm">
          <Link className="navbar-brand brand-bug" to="/">
            <img src="/images/logos/blockstack-bug-rev.svg" />
          </Link>
          <Link className="navbar-brand brand-logo" to="/">
            <img src="/images/logos/blockstack-logo-landscape-rev.svg" />
          </Link>
          <button type="button" className="navbar-toggler collapsed hidden-md-up" data-toggle="collapse" data-target="#mobile-nav" aria-controls="dropdown" aria-expanded="false">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-sm-auto">
              {this.state.navItems.map((navItem, index) => {
                if (!navItem.hasOwnProperty('dropdown')) {
                  return (
                    <li key={index} className="nav-item">
                      <Link to={navItem.to} className="nav-link">
                        {navItem.label}
                      </Link>
                    </li>
                  )
                } else {
                  return (
                    <li key={index} className="nav-item dropdown">
                      <a href="#" className="nav-link dropdown-toggle"
                        data-toggle="dropdown" role="button"
                        aria-haspopup="true" aria-expanded="false">
                        {navItem.label}
                      </a>
                      <div className="dropdown-menu">
                        { navItem.dropdown.map((dropdownItem, subindex) => {
                          return (
                            <Link to={dropdownItem.to} className="dropdown-item" key={subindex}>
                              {dropdownItem.label}
                            </Link>
                          )
                        })}
                      </div>
                    </li>
                  )
                }
              })}
            </ul>
          </div>
        </nav>
        <div className="mobile-nav collapse" id="mobile-nav">
          <ul className="navbar-nav">
            {mobileNavItems.map((navItem, index) => {
              return (
                <li key={index} className="nav-item">
                  { !navItem.to.startsWith('http') ? (
                    <Link to={navItem.to} className="nav-link">
                      {navItem.label}
                    </Link>
                  ) : (
                    <Link to={navItem.to} className="nav-link" target="_blank">
                      {navItem.label}
                    </Link>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }

}

export default Header

/*
                    { !navItem.to.startsWith('http') ? (
                      
                    ) : (
                      <Link to={navItem.to} className="nav-link" target="_blank">
                        {navItem.label}
                      </Link>
                    )}
*/