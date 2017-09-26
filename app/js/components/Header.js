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
        { to: '/tutorials', label: 'Tutorials' },
        { to: '/blog', label: 'Blog' },
        { to: '/papers', label: 'Papers' },
        { to: '/videos', label: 'Videos' },
        { to: '/careers', label: 'Careers' },
        { to: 'https://github.com/blockstack', label: 'Code', mobile: false },
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

          <nav className="navbar navbar-expand-lg">
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
              <ul className="navbar-nav ml-md-auto">
                {this.state.navItems.map((navItem, index) => {
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
          </nav>

          <div className="mobile-nav collapse" id="mobile-nav">
            <ul className="nav-justified">
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
