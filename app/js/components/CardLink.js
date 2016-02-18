'use strict'

import {Component, PropTypes}  from 'react'
import {Link} from 'react-router'

class CardLink extends Component {  
  static propTypes: {
    title: PropTypes.string.isRequired,
    body: PropTypes.string,
    imageSrc: PropTypes.string,
    href: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div className="card col-centered" style={{ maxWidth: '20rem', minWidth: '15rem', marginBottom: '20px' }}>
          <Link to={this.props.href} style={{ color: 'black', textDecoration: 'none' }}>
            { this.props.imageSrc ?
            <img src={this.props.imageSrc}
              style={{ height: '180px', width: '100%', display: 'block' }}
              className="card-img-top" alt="Card image cap" />
            : null }
            <div className="card-block">
              <h4 className="card-title">
                {this.props.title}
              </h4>
              {this.props.body ?
              <p className="card-text">
                {this.props.body}
              </p>
              : null }
            </div>
          </Link>
        </div>
      </div>
    )
  }

}

export default CardLink