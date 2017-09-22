'use strict'

import {Component}  from 'react'
import {Link} from 'react-router'

class Alert extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Link to="/token">
        
        <div className="alert alert-primary alert-dismissible fade show text-center text-white" >
          <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          Introducing The Blockstack Token. <strong>Learn more.</strong>
        </div>
      
      </Link>
    )
  }

}

export default Alert
