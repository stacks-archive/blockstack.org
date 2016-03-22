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
                <Link to="/docs" className="nav-link">
                  Docs
                </Link>
              </li>
              <li className="nav-item dropdown hidden-sm-down">
                <a href="#" className="nav-link dropdown-toggle"
                   data-toggle="dropdown" role="button"
                   aria-haspopup="true" aria-expanded="false">
                  Overview
                </a>
                <div className="dropdown-menu">
                  <Link to="/docs/what-is-blockstack" className="dropdown-item">
                    What is Blockstack
                  </Link>
                  <Link to="/docs/how-blockstack-works" className="dropdown-item">
                    How Blockstack Works
                  </Link>
                  <Link to="/docs/blockstack-papers" className="dropdown-item">
                    Blockstack Papers
                  </Link>
                </div>
              </li>
              <li className="nav-item dropdown hidden-sm-down">
                <a href="#" className="nav-link dropdown-toggle"
                   data-toggle="dropdown" role="button"
                   aria-haspopup="true" aria-expanded="false">
                  CLI
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
                  Articles
                </a>
                <div className="dropdown-menu">
                  <Link to="/docs/blockstack-vs-dns" className="dropdown-item">
                    Blockstack vs DNS
                  </Link>
                  <Link to="/docs/blockstack-vs-namecoin" className="dropdown-item">
                    Blockstack vs Namecoin
                  </Link>
                  <Link to="/docs/extended-usage" className="dropdown-item">
                    Namespaces
                  </Link>
                  <Link to="/docs/light-clients" className="dropdown-item">
                    Light Clients
                  </Link>
                  <Link to="/docs/faq" className="dropdown-item">
                    FAQ
                  </Link>
                </div>
              </li>
              <li className="nav-item pull-xs-right hidden-sm-down">
                <Link to="https://github.com/blockstack" className="nav-link hidden-xs hidden-sm"
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

/*
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