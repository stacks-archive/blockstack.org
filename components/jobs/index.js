import React from 'react'
import { StyledJobs } from '@components/jobs/styled'

// categories:
// {…}
// commitment:
// "Full-Time"
// location:
// "New York, NY"
// team:
// "Engineering"

const Jobs = ({ list, ...rest }) => (
  <StyledJobs {...rest}>
    <h3>Open Positions</h3>
    <StyledJobs.Wrapper>
      {list.map(
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
)

export { Jobs }
