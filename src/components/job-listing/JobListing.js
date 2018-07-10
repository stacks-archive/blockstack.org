import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'

const JobListing = ({ title, location, url, team }) => (
  <div className="mb-4">
    <h3 className="mb-1">{title}</h3>
    <p className="mb-1">
      {team} - {location}
    </p>
    <a href={url} rel="noopener noreferrer" target="_blank">
      Read More
    </a>
  </div>
)

JobListing.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  team: PropTypes.string.isRequired,
}

export default JobListing
