import React, { Component } from 'react'


class Loader extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.className !== nextProps.className
  }

  render() {
    return (
      <div
        className={
          this.props.className
            ? 'linear-loader ' + this.props.className
            : 'linear-loader'
        }
      >
        <span className="first" />
        <span className="second" />
        <span className="third" />
      </div>
    )
  }
}

export default Loader
