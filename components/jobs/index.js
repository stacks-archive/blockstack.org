import React from 'react'
import { Box, Flex } from 'blockstack-ui'
import { Title, Text } from '@components/v2/section'
import { StyledJobs } from '@components/jobs/styled'
import { connect } from 'redux-bundler-react'

const Jobs = connect(
  'selectJobs',
  ({ jobs, ...rest }) =>
    jobs && jobs.length ? (
      <Box {...rest}>
        <h3>Open Positions</h3>
        <Flex flexWrap="wrap" pt={5}>
          {jobs.map(({ text, hostedUrl, categories }, i) => {
            if (!categories) return null
            const { commitment, location, team } = categories
            return (
              <Box pr={5} pb={5} width={[1, 1 / 2, 1 / 3]} key={i}>
                {team ? (
                  <Title opacity={0.75} is="h6" color="ink.50">
                    {team}
                  </Title>
                ) : null}
                {text ? (
                  <Title is="h4" pt={1}>
                    {text}
                  </Title>
                ) : null}
                {location ? (
                  <Box pt={3}>
                    <Title is="h6" color="ink.50">
                      {location}
                    </Title>
                  </Box>
                ) : null}
                {commitment ? (
                  <Box pt={1}>
                    <Title is="h6" color="ink.50">
                      {commitment}
                    </Title>
                  </Box>
                ) : null}
                <Box pt={5}>
                  <a href={hostedUrl} target="_blank" rel="noopener noreferrer">
                    Learn More
                  </a>
                </Box>
              </Box>
            )
          })}
        </Flex>
      </Box>
    ) : null
)

export { Jobs }
