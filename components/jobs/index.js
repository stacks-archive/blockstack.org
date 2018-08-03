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
          {jobs.map(
            (
              { text, hostedUrl, categories: { commitment, location, team } },
              i
            ) => (
              <StyledJobs.Job key={i}>
                <h6 style={{ margin: 0 }}>{team}</h6>
                <StyledJobs.Title>{text}</StyledJobs.Title>
                <h6 style={{ margin: 0, opacity: 0.5 }}>{location}</h6>
                <h6 style={{ margin: 0, opacity: 0.5 }}>{commitment}</h6>
                <div>
                  <a href={hostedUrl} target="_blank" rel="noopener noreferrer">
                    Learn More
                  </a>
                </div>
              </StyledJobs.Job>
            )
          )}
        </StyledJobs.Wrapper>
      </StyledJobs>
    ) : null
)

export { Jobs }
