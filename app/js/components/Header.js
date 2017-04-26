'use strict'

import {Component}  from 'react'
import {Link} from 'react-router'
import MobileNav from './MobileNav'

class Header extends Component {

  constructor(props) {
    super(props)

    this.toggleDropdown = this.toggleDropdown.bind(this);

    this.state = {
      isOpen: false,
    };
  }

  toggleDropdown() {
    this.setState((prevState) => {
      return { isOpen: !prevState.isOpen };
    });
  }

  render() {
    const { isOpen } = this.state;

    return (
      <header className="container navbar-wrapper">
        <nav className="navbar">
          <Link className="navbar-brand brand-bug" to="/">
            <img src="/images/logos/blockstack-bug-rev.svg" />
          </Link>
          <Link className="navbar-brand brand-logo" to="/">
            <img src="/images/logos/blockstack-logo-landscape-rev.svg" />
          </Link>
          <button
            type="button"
            className={isOpen ? 'navbar-toggle hamburger collapsed' : 'navbar-toggle hamburger'}
            onClick={this.toggleDropdown}
            data-toggle="collapse"
            data-target="#mobile-nav"
            aria-controls="dropdown"
            aria-expanded={isOpen}
          >
            <span className="icon-bar landing-sandwich-icon"></span>
            <span className="icon-bar landing-sandwich-icon"></span>
            <span className="icon-bar landing-sandwich-icon"></span>
          </button>
          <ul className="nav navbar-nav desktop-nav">
            <li className="nav-item">
              <Link to="/install" className="nav-link">
                Install
              </Link>
            </li>
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
            <li className="nav-item pull-xs-right hidden-sm-down">
              <Link to="https://github.com/blockstack" className="nav-link" target="_blank">
                <i className="fa fa-github"></i>
                <span>Code</span>
              </Link>
            </li>
          </ul>
        </nav>
        <MobileNav
          isOpen={ isOpen }
          toggleDropdown={this.toggleDropdown}
        />
      </header>
    )
  }

}

export default Header
