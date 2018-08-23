import React, { Component } from 'react'


class Loader extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.className !== nextProps.className
  }

  render() {
    return (
      <div
        className={
          this.props.className ? 'spinner ' + this.props.className : 'spinner'
        }
      >
        <svg viewBox="0 0 20 20">
          <circle fill="transparent" cx="10" cy="10" r="10" />
        </svg>
      </div>
    )
  }
}

export default Loader
