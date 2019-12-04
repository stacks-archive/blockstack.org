import React from 'react'
import { Flex, Box } from 'blockstack-ui'
import { Text } from '@components/section'
import { Button } from '@components/button'
import useCookie from 'react-use-cookie'
import { NOT_ACCEPTED, ACCEPTED } from '@common/cookies'

const CookieBanner = ({ countryCode, ...rest }) => {
  const [cookie, setCookie] = useCookie('cookiesBanner', NOT_ACCEPTED)
  // if (cookie === ACCEPTED) {
  //   return null
  // }
  const handleClick = () => {
    if (cookie === NOT_ACCEPTED) {
      setCookie(ACCEPTED)
    }
  }
  return (
    <Box
      maxWidth={['100%', '345px', '345px']}
      zIndex={9999}
      position="fixed"
      bottom={20}
      right={[20]}
      bg="white"
      p={4}
      borderRadius={['6px']}
      boxShadow="0px 2px 12px rgba(0, 0, 0, 0.04), 0px 1px 2px rgba(0, 0, 0, 0.08)"
    >
      <Box pb={4}>
        <Text color="#677282" fontSize="12px">
          {countryCode ? 'countryCode: ' + countryCode + ' ' : null}
          We use cookies and similar technologies to analyze traffic and enhance
          your experience. For more information or to opt out, visit our{' '}
          <Text
            color="ink"
            fontSize="12px"
            is="a"
            fontWeight="400"
            href="/legal/privacy-policy"
          >
            Privacy Policy
          </Text>
          .
        </Text>
      </Box>
      <Flex alignItems="center">
        <Button
          onClick={handleClick}
          noIcon
          py={2}
          mr={4}
          fontSize={'12px'}
          px={3}
        >
          I agree
        </Button>
        <Text
          lineHeight={1}
          fontSize={'12px'}
          is="a"
          href="/legal/privacy-policy"
        >
          Learn more
        </Text>
      </Flex>
    </Box>
  )
}

export default CookieBanner
