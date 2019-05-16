import React from 'react'
import { Text, Title } from '@components/v2/section'
import { Box, Flex } from 'blockstack-ui'
import { Codeblock } from '@components/v2/code'
import { Image } from '@components/v2/image'

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
          <Codeblock hideNumbers language="jsx" value={code} />
        </Box>
        <Box
          p={5}
          position="absolute"
          bottom="-25px"
          right={0}
          bg="white"
          borderRadius="8px"
          width={['75%', '75%', '65%']}
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
              “Photos” (photos.app) wants to read your basic info and publish
              data stored for this app.
            </Text>
          </Box>
          <Box mt={4}>
            <Text fontSize={1}>Select an ID to use: </Text>
          </Box>
          <Flex mt={4} borderRadius="48px" bg="blue" p={2} alignItems="center">
            <Box mr={2} size="32px" borderRadius="32px">
              <Image
                src="https://blockstack-www.imgix.net/user-avatar.png"
                borderRadius="32px"
                size={32}
              />
            </Box>
            <Title is="h5" color="white">
              michelle.id
            </Title>
          </Flex>
        </Box>
      </Box>
    </Box>
  )
}

export { AuthGraphic }
