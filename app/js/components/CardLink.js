'use strict'

import {Component, PropTypes}  from 'react'
import {Link} from 'react-router'

class CardLink extends Component {  
  static propTypes: {
    title: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    body: PropTypes.string,
    imageSrc: PropTypes.string,
    footnote: PropTypes.string,
    cardsPerRow: PropTypes.number
  }

  constructor(props) {
    super(props)

    this.getCardStyle = this.getCardStyle.bind(this)
  }

  getCardStyle() {
    let cardStyle = {}
    switch (this.props.cardsPerRow) {
      case 1:
        cardStyle = {width: '100%'}
        break
      case 2:
        cardStyle = {width: '50%'}
        break
      case 3:
        cardStyle = {width: '33%'}
        break
      default:
        break
    }
    return cardStyle
  }

  render() {
    return (
      <div className="card" style={this.getCardStyle()}>
        <Link to={this.props.href} style={{ textDecoration: 'none', color: 'black' }}>
          { this.props.imageSrc ?
          <img src={this.props.imageSrc} className="card-img-top"
            style={{maxWidth: '100%', display: 'block'}} />
          : null }
          <div className="card-block">
            <h4 className="card-title" style={{maxWidth: '180px' }}>
              {this.props.title}
            </h4>
            { this.props.body ?
            <p className="card-text">
              {this.props.body}
            </p>
            : null }
            { this.props.footnote ?
            <p className="card-text">
              <small className="text-muted">
                {this.props.footnote}
              </small>
            </p>
            : null }
          </div>
        </Link>
      </div>
    )
  }

}

export default CardLink

/*
      <div className="card m-b-5">
        { this.props.imageSrc ?
          <img src={this.props.imageSrc}
            style={{ width: '100%', display: 'block' }}
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
*/