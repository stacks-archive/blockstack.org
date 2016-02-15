'use strict'

import {Component}  from 'react'
import {Link} from 'react-router'

class Header extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <header className="container">
        <nav className="navbar">
          <div>
            <Link className="navbar-brand" to="/">
              <img src="/images/blockstack-logo.svg" />
            </Link>
            <ul className="nav navbar-nav">
              <li className="nav-item">
                <Link to="/docs" className="nav-link">Docs</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">About</Link>
              </li>
              <li className="nav-item pull-xs-right">
                <Link to="https://github.com/blockstack" className="nav-link"
                  target="_blank">
                  <i className="fa fa-github"></i>
                  <span>Github</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    )
  }

}

export default Header
