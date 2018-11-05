import React from 'react'
import { StyledJobs } from '@components/jobs/styled'
import { connect } from 'redux-bundler-react'

const Jobs = connect(
  'selectJobs',
  ({ jobs, ...rest }) =>
    jobs && jobs.length ? (
      <StyledJobs {...rest}>
        <h3>Open Positions</h3>
        <StyledJobs.Wrapper>
          {jobs.map(({ text, hostedUrl, categories }, i) => {
            if (!categories) return null
            const { commitment, location, team } = categories
            return (
              <StyledJobs.Job key={i}>
                {team ? <h6 style={{ margin: 0 }}>{team}</h6> : null}
                {text ? <StyledJobs.Title>{text}</StyledJobs.Title> : null}
                {location ? (
                  <h6 style={{ margin: 0, opacity: 0.5 }}>{location}</h6>
                ) : null}
                {commitment ? (
                  <h6 style={{ margin: 0, opacity: 0.5 }}>{commitment}</h6>
                ) : null}
                <div>
                  <a href={hostedUrl} target="_blank" rel="noopener noreferrer">
                    Learn More
                  </a>
                </div>
              </StyledJobs.Job>
            )
          })}
        </StyledJobs.Wrapper>
      </StyledJobs>
    ) : null
)

export { Jobs }
