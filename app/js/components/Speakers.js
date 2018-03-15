import React from 'react'
import PropTypes from 'prop-types'
import Image from './Image'

const Speaker = ({ headshot, name, twitter, jobTitle, company, website }) => (
  <div className="event__speaker">
    <div className="event__speaker__avatar">
      {headshot && (
        <Image
          src={`${headshot}?fit=facearea&crop=faces&facepad=2.6&w=400&h=400&auto=format`}
          alt={name}
        />
      )}
    </div>
    <div className="event__speaker__meta">
      {twitter ? (
        <a href={`https://twitter.com/${twitter}`} target="_blank">
          <div>{name}</div>
        </a>
      ) : (
        <div>{name}</div>
      )}

      <div>
        {jobTitle && `${jobTitle}, `}
        {company}
      </div>
      {website && (
        <a href={website} target="_blank">
          Visit Online
        </a>
      )}
    </div>
  </div>
)

const renderSpeakers = (speakers) => {
  return speakers.map((speaker, i) => <Speaker key={i} {...speaker} />)
}

const Speakers = ({ speakers }) => renderSpeakers(speakers)

Speakers.propTypes = {
  speakers: PropTypes.array.isRequired,
}
Speaker.propTypes = {
  headshot: PropTypes.string,
  name: PropTypes.string.isRequired,
  twitter: PropTypes.string,
  jobTitle: PropTypes.string,
  company: PropTypes.string,
  website: PropTypes.string,
}
export default Speakers
