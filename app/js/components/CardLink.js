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
      <div className"card-deck-wrapper">
        <div className"card-deck">
          <div className"card m-b-5">
            <Link to={this.props.href} >
            { this.props.imageSrc ?
              <img src={this.props.imageSrc}
                className="card-img-top" alt="Card image cap" />
              : null }
              <div className="card-block">
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
              </div>
            </Link>
          </div>
        </div>
      </div>
    )
  }

}

export default CardLink