import React from 'react'
import { Text, Title } from '@components/v2/section'
import { Box, Flex } from 'blockstack-ui'
import { Codeblock } from '@components/v2/code'

const code = `if (isUserSignedIn()) {
  const user = loadUserData()
  showProfile(user.profile)
} else if (isSignInPending()) {
  handlePendingSignIn().then((user => {
    showProfile(user.profile)
  })
}`

const AuthGraphic = () => {
  return (
    <Box pb="125px">
      <Box position="relative">
        <Box width={3 / 4}>
          <Codeblock hideNumbers language="javascript" value={code} />
        </Box>
        <Box
          p={5}
          position="absolute"
          bottom="-25px"
          right={0}
          bg="white"
          borderRadius="8px"
          width="60%"
          zIndex={5}
          transform="translateY(20%)"
          boxShadow={
            '0px 2px 12px rgba(0, 0, 0, 0.04), 0px 1px 2px rgba(0, 0, 0, 0.08)'
          }
        >
          <Box>
            <Title is="h4">Sign In</Title>
          </Box>
          <Box mt={4}>
            <Text fontSize={1}>
              “Stealthy” (stealthy.im) wants to read your basic info and publish
              data stored for this app.
            </Text>
          </Box>
          <Box mt={4}>
            <Text fontSize={1}>Select an ID to use: </Text>
          </Box>
          <Flex mt={4} borderRadius="48px" bg="blue" p={2} alignItems="center">
            <Box mr={2} size="32px" borderRadius="32px" bg="white" />
            <Title is="h5" color="white">
              Samantha.id
            </Title>
          </Flex>
        </Box>
      </Box>
    </Box>
  )
}

export {AuthGraphic}
