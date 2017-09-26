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
        <div style={{ marginLeft: "26px" }}>
          <button type="button" className="close" data-dismiss="alert" aria-label="Close" style={{ top: '-.65rem' }}>
            <span aria-hidden="true">&times;</span>
          </button>
          Introducing The <strong>Blockstack Token</strong> &nbsp;&nbsp; › &nbsp; <strong>More</strong>
        </div>
      </Link>

    )
  }

}

export default Alert
