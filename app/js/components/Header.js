'use strict'

import {Component}  from 'react'
import {Link} from 'react-router'

class Header extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <header className="nav-animation-element col-centered">
        <nav className="navbar navbar-top col-sm-10 col-centered">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link className="navbar-brand" to="/">
                <img src="/images/blockstack-logo.svg" />
              </Link>
            </div>
                
            <div className="collapse navbar-toggleable-xs"> 
              <ul className="nav navbar-nav nav-btn-head">
                <li className="nav-item">
                  <Link to="/docs" className="nav-link">Docs</Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">About</Link>
                </li>
              </ul>

              <ul className="nav navbar-nav pull-xs-right">
                <li className="nav-item">
                  <Link to="https://github.com/blockstack" className="nav-link"
                    target="_blank">
                    <div className="pull-right gitword">Github</div>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="http://forum.blockstack.org" className="nav-link"
                    target="_blank">
                    Forum
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="https://blockstack.slack.com/" className="nav-link"
                    target="_blank">
                    Slack
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    )
  }

}

export default Header
