'use strict'

import {Component}  from 'react'
import {Link} from 'react-router'
import Countdown from 'react-countdown-now';
import CountdownTimer from './CountdownTimer'

const registrationEndDate = "Wednesday, November 15 2017 15:00:00 EST"

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
          <span className="" style={{ marginLeft: "26px" }}>The Blockstack Token Sale has started - <strong>Register now!</strong></span>
        </div>
      </a>
    )
  }

}

export default Alert
