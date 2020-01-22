import React from 'react'
import { useHover } from 'use-events'
import { Box, Flex } from 'blockstack-ui'

const locations = [
  {
    city: 'Los Angeles',
    date: <>Jan 31&ndash;Feb 2</>,
    time: 'All day',
    event: 'HackSC Hackathon',
    href: 'https://community.blockstack.org/events#event=35856411',
    flag: 'us'
  },
  {
    city: 'Stanford',
    date: <>Feb 19&ndash;21</>,
    time: 'All day',
    event: 'Stanford Blockchain Conference',
    href: 'https://cbr.stanford.edu/sbc20/',
    flag: 'us'
  },
  {
    city: 'Hong Kong',
    date: <>March 2&ndash;6</>,
    time: 'All day',
    event: 'Hong Kong Blockchain Week',
    href: 'https://www.hkblockchainweek.net/',
    flag: 'hk'
  },
  {
    city: 'Las Vegas',
    date: <>April 5&ndash;8</>,
    time: 'All day',
    event: `Know Identity Conference`,
    href: 'https://www.knowidentity.com/',
    flag: 'us'
  },
  {
    city: 'New York',
    date: <>May 11&ndash;13</>,
    time: 'All day',
    event: 'Consensus',
    href: 'https://www.coindesk.com/events/consensus-2020',
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
        const [isHovering, bind] = useHover()
        const hovered = isHovering && location.href
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
              alignItems="baseline"
              borderBottom="1px solid"
              borderTop={key === 0 ? '1px solid' : undefined}
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
              <Flex
                flexDirection="column"
                pl={[5, 5, 0]}
                flexShrink={0}
                flexGrow={1}
                textAlign="right"
              >
                <Box fontWeight={500} color="ink">
                  {location.date}
                </Box>
                <Box
                  alignSelf="flex-end"
                  style={{
                    whiteSpace: 'nowrap'
                  }}
                  {...subtitle}
                  pt={'6px'}
                >
                  {location.time}
                </Box>
              </Flex>
            </Flex>
          </Box>
        )
      })}
    </Flex>
  )
}

export { Events }
