'use strict'

import {Component}  from 'react'
import {Link} from 'react-router'

class Header extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <header className="container nav-header">
        <nav className="navbar">          
          <Link className="navbar-brand brand-bug" to="/">
            <img src="/images/logos/blockstack-bug-rev.svg" />
          </Link>
          <Link className="navbar-brand" to="/">
            <img src="/images/logos/blockstack-logo-landscape-rev.svg" />
          </Link>
          <ul className="nav navbar-nav">
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/docs" className="nav-link">
                Docs
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-link">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/papers" className="nav-link">
                Papers
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/videos" className="nav-link">
                Videos
              </Link>
            </li>
            <li className="nav-item dropdown pull-xs-right hidden-sm-down">
              <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                <i className="fa fa-github"></i>
                <span>Code</span>
              </a>
              <div className="dropdown-menu dropdown-menu-right">
                <Link to="https://github.com/blockstack/blockstack"
                      className="dropdown-item" target="_blank">
                  Resources
                </Link>
                <Link to="https://github.com/blockstack/blockstack-core"
                      className="dropdown-item" target="_blank">
                  Blockstack Core
                </Link>
                <Link to="https://github.com/blockstack/blockstack-cli"
                      className="dropdown-item" target="_blank">
                  Blockstack CLI
                </Link>
                <Link to="https://github.com/blockstack/blockstack-browser"
                      className="dropdown-item" target="_blank">
                  Blockstack Browser
                </Link>
                <Link to="https://github.com/blockstack/blockstack-explorer"
                      className="dropdown-item" target="_blank">
                  Blockstack Explorer
                </Link>
                <Link to="https://github.com/blockstack/blockstack-auth-js"
                      className="dropdown-item" target="_blank">
                  Blockstack Auth
                </Link>
                <Link to="https://github.com/blockstack/blockstack-profiles-js"
                      className="dropdown-item" target="_blank">
                  Blockstack Identity
                </Link>
                <Link to="https://github.com/blockstack/virtualchain"
                      className="dropdown-item" target="_blank">
                  Virtualchain
                </Link>
              </div>
            </li>
          </ul>
        </nav>
      </header>
    )
  }

}

export default Header