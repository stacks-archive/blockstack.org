'use strict'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { slugify } from '../utils/functions'
const propTypes = {
  sections: PropTypes.array.isRequired,
}

class CollapsibleList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeList: 0,
    }
  }

  handleSectionTitleClick(index) {
    if (this.state.activeList !== index) {
      this.setState({
        activeList: index,
      })
    }
  }

  render() {
    const { sections } = this.props
    return sections.map(({ title, items }, index) => (
      <div key={index} className="collapsibleList">
        {title && (
          <h6
            className={`${
              this.state.activeList === index
                ? `collapsibleList__section__title collapsibleList__section__title--active`
                : `collapsibleList__section__title`
            }`}
            onClick={() => this.handleSectionTitleClick(index)}
          >
            {title}
          </h6>
        )}
        {this.state.activeList === index ? (
          <div className="collapsibleList__section__items">
            {items.map(({ day, talkTitle, time }, i) => {
              return (
                <div key={i} className="collapsibleList__section__items__line">
                  <a href={`#${slugify(talkTitle)}`}>{talkTitle}</a>
                </div>
              )
            })}
          </div>
        ) : null}
      </div>
    ))
  }
}

CollapsibleList.propTypes = propTypes
export default CollapsibleList
