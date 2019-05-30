import React from 'react'
import { useHover } from 'use-events'
import { Box, Flex } from 'blockstack-ui'

const locations = [
  {
    city: 'Bangalore',
    date: 'June 1',
    time: '06:00PM',
    event: 'Learn how SpringRole earned $50K MRR',
    href: 'https://community.blockstack.org/events#event=30167304',
    flag: 'in'
  },
  {
    city: 'Brighton',
    date: 'June 4',
    time: '06:30PM',
    event: 'Radicle @ Brighton Blockchain and Crypto Meetup',
    href: 'https://community.blockstack.org/events#event=30184724',
    flag: 'gb'
  },
  {
    city: 'Tokyo',
    date: 'June 9',
    time: 'All day',
    event: 'Decrypt Hackathon',
    href: 'https://community.blockstack.org/events#event=30626035',
    flag: 'jp'
  },
  {
    city: 'London',
    date: <>June 10&ndash;12</>,
    time: 'All day',
    event: 'CogX - The Festival of AI and Emerging Technology',
    href: 'https://community.blockstack.org/events#event=25317782',
    flag: 'gb'
  },
  {
    city: 'San Francisco',
    date: 'October 23',
    time: 'All day',
    event: 'Blockstack Summit',
    href: 'https://community.blockstack.org/events#event=25317871',
    flag: 'us'
  },
  {
    city: 'Princeton',
    date: <>November 8&ndash;10</>,
    time: 'All day',
    event: 'HackPrinceton Hackathon',
    href: 'https://community.blockstack.org/events#event=24956314',
    flag: 'us'
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
            is="a"
            href={location.href}
            target="_blank"
            style={{
              textDecoration: 'none'
            }}
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
                  <Flex
                    ml={2}
                    borderRadius="100%"
                    opacity={hovered ? 1 : 0.5}
                    size={18}
                    bg="sky"
                    overflow="hidden"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Box
                      is="span"
                      style={{
                        backgroundSize: '120%',
                        backgroundPosition: 'center center',
                        backgroundRepeat: 'no-repeat'
                      }}
                      className={`flag-icon flag-icon-${location.flag}`}
                    />
                  </Flex>
                </Flex>
                <Box {...subtitle}>{location.event}</Box>
              </Box>
              <Box pl={[5, 5, 0]} flexShrink={0} textAlign="right">
                <Box fontWeight={500} color="ink">
                  {location.date}
                </Box>
                <Box
                  style={{
                    whiteSpace: 'nowrap'
                  }}
                  {...subtitle}
                  pt={1}
                >
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
