'use strict'

import {Component}  from 'react'
import {Link} from 'react-router'

class Alert extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <a href="http://blockstack.com" target="_blank" className="alert alert-primary alert-dismissible fade show text-center text-white" role="alert" style={{ marginBottom: '0', display: "block", paddingBottom: '21px' }}>
        <div>
          <button type="button" className="close close-primary d-none d-sm-block" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <span className="" style={{ marginLeft: "26px" }}>Blockstack Token Sale Registration Now Open &nbsp;&nbsp; › &nbsp; <strong>Register Now</strong></span>
          <span className="banner-timer-wrap">
            <span className="banner-time">03</span> days <span className="banner-time">12</span> hrs
          </span>
        </div>
      </a>
    )
  }

}

export default Alert
