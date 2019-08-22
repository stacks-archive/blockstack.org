import React from 'react'
import { Text, Title } from '@components/section/index'
import { Box, Flex } from 'blockstack-ui'
import { Image } from '@components/image/index'
import dynamic from 'next/dynamic'

import ChevronRightIcon from 'mdi-react/ChevronRightIcon'
const UserID = ({ ...rest }) => {
  return (
    <Flex
      mt={4}
      borderRadius="8px"
      border="1px solid"
      borderColor="sky.25"
      bg="white"
      p={3}
      alignItems="center"
      boxShadow="0px 1px 2px rgba(0, 0, 0, 0.04)"
      {...rest}
    >
      <Box mr={2} size="32px" borderRadius="32px">
        <Image
          src="https://blockstack-www.imgix.net/default-id-avatar.jpg"
          borderRadius="32px"
          imgix={{
            fit: 'crop',
            crop: 'faces',
            w: '128',
            h: '128'
          }}
          alt="An example of a user avatar on Blockstack."
          size={32}
        />
      </Box>
      <Title is="h5" fontSize="14px">
        michelle.id
      </Title>
      <Box pt={1} ml="auto" color="sky">
        <ChevronRightIcon size={18} />
      </Box>
    </Flex>
  )
}

const Codeblock = dynamic(() => import('@components/code/index'), {
  ssr: false
})
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
          p={6}
          position="absolute"
          bottom="-25px"
          right={[0, 0, '-15px', 0]}
          bg="white"
          borderRadius="8px"
          width={['75%', '75%', '85%', '65%']}
          zIndex={5}
          transform="translateY(20%)"
          boxShadow={
            '0px 2px 12px rgba(0, 0, 0, 0.04), 0px 1px 2px rgba(0, 0, 0, 0.08)'
          }
        >
          <Box>
            <Title is="h4" fontSize={21} fontWeight={400} color="ink.50">
              Sign In
            </Title>
          </Box>
          <Box mt={4}>
            <Text fontSize={1} color="ink.50">
              “Stealthy” (stealthy.im) wants to <b>read your basic info</b> and{' '}
              <b>publish data stored for this app</b>.
            </Text>
          </Box>
          <Box mt={4}>
            <Text fontSize={1} color="ink.50">
              Select an ID to use:{' '}
            </Text>
          </Box>
          <UserID />
        </Box>
      </Box>
    </Box>
  )
}

export { AuthGraphic }
