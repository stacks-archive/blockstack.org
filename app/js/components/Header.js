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
                <Link to="/articles/browser-beta" className="nav-link">
                  Browser
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/docs" className="nav-link">
                  CLI Docs
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/papers" className="nav-link">
                  Papers
                </Link>
              </li>

              <li className="nav-item dropdown pull-xs-right hidden-sm-down">
                <a href="#" className="nav-link dropdown-toggle"
                   data-toggle="dropdown" role="button"
                   aria-haspopup="true" aria-expanded="false">
                  <i className="fa fa-github"></i>
                  <span>Code</span>
                </a>
                <div className="dropdown-menu">
                  <Link to="https://github.com/blockstack/blockstack"
                        className="dropdown-item" target="_blank">
                    Overview
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
                    Blockstack Profiles
                  </Link>
                  <Link to="https://github.com/blockstack/virtualchain"
                        className="dropdown-item" target="_blank">
                    Virtualchain
                  </Link>
                </div>
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
              <li className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle"
                   data-toggle="dropdown" role="button"
                   aria-haspopup="true" aria-expanded="false">
                  Articles
                </a>
                <div className="dropdown-menu">
                  <Link to="/docs/how-blockstack-works" className="dropdown-item">
                    How Blockstack Core Works
                  </Link>
                  <Link to="/docs/blockstack-vs-dns" className="dropdown-item">
                    Blockstack Core vs DNS
                  </Link>
                  <Link to="/docs/blockstack-vs-namecoin" className="dropdown-item">
                    Blockstack Core vs Namecoin
                  </Link>
                  <Link to="/docs/light-clients" className="dropdown-item">
                    Blockstack Light Clients
                  </Link>
                  <Link to="/docs/blockchain-identity" className="dropdown-item">
                    Blockchain Identity
                  </Link>
                  <Link to="/docs/blockstack-profiles" className="dropdown-item">
                    Blockstack Profiles
                  </Link>
                  <Link to="/docs/identity-attestation" className="dropdown-item">
                    Identity Attestation
                  </Link>
                </div>
              </li>

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