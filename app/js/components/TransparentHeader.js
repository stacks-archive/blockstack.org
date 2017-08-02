'use strict'

import {Component}  from 'react'
import {Link} from 'react-router'
import MobileNav from './MobileNav'

class TransparentHeader extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
    <div className="bg-transparent">
      <header className="container-fluid nav-header no-padding">
        <nav className="navbar">
          <Link className="navbar-brand brand-bug" to="/">
            <img src="/images/logos/blockstack-bug-rev.svg" />
          </Link>
          <Link className="navbar-brand brand-logo" to="/">
            <img src="/images/logos/blockstack-logo-landscape-rev.svg" />
          </Link>
          <button type="button" className="navbar-toggler collapsed hidden-md-up" data-toggle="collapse" data-target="#mobile-nav" aria-controls="dropdown" aria-expanded="false">
            <span className="navbar-toggler-icon"></span>
          </button>
          <ul className="nav navbar-nav pull-xs-right">
            <li className="nav-item">
              <Link to="/tutorials" className="nav-link">
                Tutorials
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
            <li className="nav-item">
              <Link to="/install" className="nav-link">
                Install
              </Link>
            </li>
            <li className="nav-item hidden-sm-down">
              <Link to="https://github.com/blockstack" className="nav-link" target="_blank">
                Code
              </Link>
            </li>
          </ul>
        </nav>
        <MobileNav />
      </header>
    </div>
    )
  }

}

export default TransparentHeader

          /*
          <button type="button" className="navbar-toggler collapsed hidden-md-up" data-toggle="collapse" data-target="#mobile-nav" aria-controls="dropdown" aria-expanded="false">
            <span className="navbar-toggler-icon"></span>
          </button>
          */