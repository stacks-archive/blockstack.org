import React from 'react'
import { useHover } from 'use-events'
import { Box, Flex } from 'blockstack-ui'

const locations = [
  {
    city: 'Amsterdam',
    date: 'March 29th',
    time: '07:30PM',
    event: 'Lightning Hack Day'
  },
  {
    city: 'New York City',
    date: 'March 29th',
    time: '07:30PM',
    event: 'Lightning Hack Day'
  },
  {
    city: 'Remote',
    date: 'March 29th',
    time: '07:30PM',
    event: 'Bolt-A-Thon Hackathon'
  },
  {
    city: 'London',
    date: 'March 29th',
    time: '07:30PM',
    event: 'COMPLIANCE Q&A WITH FENWICK'
  },
  {
    city: 'Düsseldorf',
    date: 'March 29th',
    time: '07:30PM',
    event: 'Blockstack in Protocol NYC'
  },
  {
    city: 'Beijing',
    date: 'March 29th',
    time: '07:30PM',
    event: 'Introducing Blockstack and Serverless Applications'
  }
]

const titleStyles = {
  fontWeight: '600',
  fontSize: '21px',
  lineHeight: '36px',
  letterSpacing: '0.2px'
}

const subtitle = {
  fontSize: '14px',
  lineHeight: '20px',
  letterSpacing: '-0.02em',
  color: 'ink.25'
}

const Events = ({ ...rest }) => {
  return (
    <Flex flexWrap="wrap" {...rest}>
      {locations.map((location, key) => {
        const [hovered, bind] = useHover()

        const number = key + 1
        const isOdd = number % 2

        return (
          <Box
            width={['100%', '100%', '50%']}
            key={key}
            cursor={hovered ? 'pointer' : 'unset'}
            pr={[0, 0, isOdd ? 5 : 0]}
            pl={[0, 0, !isOdd ? 5 : 0]}
            {...bind}
          >
            <Flex
              justifyContent="space-between"
              alignItems="center"
              borderTop={[
                'none',
                'none',
                key === 0 || key === 1 ? '1px solid' : undefined
              ]}
              borderBottom="1px solid"
              borderColor={['sky.25', 'sky.25', 'sky.25']}
              py={5}
            >
              <Box>
                <Flex
                  alignItems="center"
                  {...titleStyles}
                  color={hovered ? 'blue' : 'ink'}
                >
                  {location.city}
                  <Box
                    ml={2}
                    borderRadius="100%"
                    opacity={hovered ? 1 : 0.5}
                    size={18}
                    bg="sky"
                  />
                </Flex>
                <Box {...subtitle}>{location.event}</Box>
              </Box>
              <Box textAlign="right">
                <Box fontWeight={500} color="ink">
                  {location.date}
                </Box>
                <Box {...subtitle} pt={1}>
                  {location.time}
                </Box>
              </Box>
            </Flex>
          </Box>
        )
      })}
    </Flex>
  )
}

export { Events }
