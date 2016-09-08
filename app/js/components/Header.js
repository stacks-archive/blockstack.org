'use strict'

import {Component}  from 'react'
import {Link} from 'react-router'

class Header extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <header className="container no-padding nav-header">
        <nav className="navbar">
          <div>
            <Link className="navbar-brand" to="/">
              <img src="/images/logos/blockstack.svg" />
            </Link>
            <ul className="nav navbar-nav">
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/articles" className="nav-link">
                  Articles
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/tutorials" className="nav-link">
                  Tutorials
                </Link>
              </li>

              <li className="nav-item pull-xs-right hidden-sm-down">
                <Link to="https://github.com/blockstack" className="nav-link hidden-xs hidden-sm"
                  target="_blank">
                  <i className="fa fa-github"></i>
                  <span>GitHub</span>
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

/*
<li className="nav-item dropdown hidden-sm-down">
  <a href="#" className="nav-link dropdown-toggle"
     data-toggle="dropdown" role="button"
     aria-haspopup="true" aria-expanded="false">
    Articles & Papers
  </a>
  <div className="dropdown-menu">
    <Link to="/docs/what-is-blockstack" className="dropdown-item">
      What is Blockstack
    </Link>
    <Link to="/docs/how-blockstack-works" className="dropdown-item">
      How Blockstack Works
    </Link>
    <Link to="/docs/blockstack-papers" className="dropdown-item">
      Blockstack USENIX Paper
    </Link>
    <Link to="/docs/virtualchain-paper" className="dropdown-item">
      Virtualchain Paper
    </Link>
    <Link to="/docs/login-paper" className="dropdown-item">
      ;login: Magazine Paper
    </Link>
  </div>
</li>
<li className="nav-item dropdown hidden-sm-down">
  <a href="#" className="nav-link dropdown-toggle"
     data-toggle="dropdown" role="button"
     aria-haspopup="true" aria-expanded="false">
    Developer Docs
  </a>
  <div className="dropdown-menu">
    <Link to="/docs/installation" className="dropdown-item">
      Installation
    </Link>
    <Link to="/docs/basic-usage" className="dropdown-item">
      Basic Usage
    </Link>
    <Link to="/docs/extended-usage" className="dropdown-item">
      Extended Usage
    </Link>
  </div>
</li>

<li className="nav-item dropdown hidden-sm-down">
  <a href="#" className="nav-link dropdown-toggle"
     data-toggle="dropdown" role="button"
     aria-haspopup="true" aria-expanded="false">
    Libraries
  </a>
  <div className="dropdown-menu">
    <Link to="/docs/blockstack-profiles-js" className="dropdown-item">
      Blockstack Profiles Javascript
    </Link>
    <Link to="/docs/blockstack-profiles-py" className="dropdown-item">
      Blockstack Profiles Python
    </Link>
    <Link to="/docs/pybitcoin" className="dropdown-item">
      Pybitcoin
    </Link>
  </div>
</li>
*/