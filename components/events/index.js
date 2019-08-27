import React from 'react'
import { useHover } from 'use-events'
import { Box, Flex } from 'blockstack-ui'

const locations = [
  {
    city: 'Seoul',
    date: 'September 3',
    time: 'All day',
    event: 'JSConf',
    href: 'https://community.blockstack.org/events#event=32500343',
    flag: 'sk'
  },
  {
    city: 'Austria',
    date: 'September 4',
    time: '06:30PM',
    event: 'Blockstack Austria',
    href: 'https://community.blockstack.org/events#event=32485508',
    flag: 'at'
  },
  {
    city: 'Madrid',
    date: 'September 17',
    time: '07:00PM',
    event: 'Blockstack, un ecosistema para un Internet mejor.',
    href: 'https://community.blockstack.org/events#event=32068045',
    flag: 'es'
  },
  {
    city: 'Amsterdam',
    date: <>October 9&ndash;10</>,
    time: 'All day',
    event: `Blockstack's Head of Engineering @ World Summit AI`,
    href: 'https://community.blockstack.org/events#event=30698879',
    flag: 'nl'
  },
  {
    city: 'San Francisco',
    date: 'October 23',
    time: 'All day',
    event: 'Blockstack Summit',
    href: 'https://summit.blockstack.org/',
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
            width={['100%']}
            key={key}
            cursor={hovered ? 'pointer' : 'unset'}
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
