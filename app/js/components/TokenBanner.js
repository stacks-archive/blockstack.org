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
        <div className="container-fluid text-center text-white font-weight-bold ">
          Introducing&nbsp;&nbsp;&nbsp;›&nbsp;&nbsp;&nbsp;The Blockstack Token Sale
        </div>
      </div>
    </Link>
    )
  }

}

export default TokenBanner
