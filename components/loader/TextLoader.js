import React, { Component } from 'react'


class TextLoader extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false
  }

  render() {
    return (
      <span
        className={
          this.props.className
            ? 'text-loader ' + this.props.className
            : 'text-loader'
        }
      >
        {this.props.className == 'paragraph' ? (
          <span className="p-wrap">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </span>
        ) : (
          <span />
        )}
      </span>
    )
  }
}

export default TextLoader
