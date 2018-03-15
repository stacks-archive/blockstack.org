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

  checkIfChildIsActive(items, talkInView) {
    return items.find(
      (item) => item.talkTitle && slugify(item.talkTitle) === talkInView,
    )
  }

  render() {
    const { sections, talkInView } = this.props
    return sections.map(({ title, items }, index) => (
      <div key={index} className="collapsibleList">
        {title && (
          <h6
            className={`${
              this.checkIfChildIsActive(items, talkInView)
                ? `collapsibleList__section__title collapsibleList__section__title--active`
                : `collapsibleList__section__title`
            }`}
            onClick={() => this.handleSectionTitleClick(index)}
          >
            <a href={`#${slugify(title)}`}>{title}</a>
          </h6>
        )}
        {this.checkIfChildIsActive(items, talkInView) ? (
          <div className="collapsibleList__section__items">
            {items.map(({ day, talkTitle, time }, i) => {
              let classes = 'collapsibleList__section__items__line'
              if (talkInView === slugify(talkTitle)) {
                classes =
                  'collapsibleList__section__items__line collapsibleList__section__items__line--active'
              }
              return (
                <div key={i} className={classes}>
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
