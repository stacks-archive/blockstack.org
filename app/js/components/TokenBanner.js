'use strict'

import {Component}  from 'react'
import {Link} from 'react-router'

class TokenBanner extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
    <Link to="/tokensale">
    <div className="bg-electric-blue">
      <div className="container-fluid">
          <button type="button" className="navbar-toggler collapsed hidden-md-up" data-toggle="collapse" data-target="#mobile-nav" aria-controls="dropdown" aria-expanded="false">
            <span className="navbar-toggler-icon"></span>
          </button>
          <ul className="nav navbar-nav pull-xs-right">
            <li className="nav-item">
              Tutorials
            </li>
          </ul>
      </div>
    </div>
    </Link>
    )
  }

}

export default TokenBanner
