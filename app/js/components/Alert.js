'use strict'

import {Component}  from 'react'
import {Link} from 'react-router'

class Alert extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Link to="/token" className="alert alert-primary alert-dismissible fade show text-center text-white" role="alert" style={{ marginBottom: '0', display: "block" }}>
        <div >
          <button type="button" className="close close-primary d-none d-sm-block" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <span style={{ marginLeft: "26px" }}>Introducing The <strong>Blockstack Token</strong> &nbsp;&nbsp; › &nbsp; <strong>More</strong></span>
        </div>
      </Link>

    )
  }

}

export default Alert
