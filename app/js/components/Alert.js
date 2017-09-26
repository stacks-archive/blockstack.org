'use strict'

import {Component}  from 'react'
import {Link} from 'react-router'

class Alert extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Link to="/token" className="alert alert-primary alert-dismissible fade show text-center text-white" style={{ marginBottom: '0' }}>
        <div>
          <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          Introducing The Blockstack Token &nbsp;&nbsp; › &nbsp; <strong>Learn more.</strong>
        </div>
      </Link>

    )
  }

}

export default Alert
