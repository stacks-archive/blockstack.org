import React from 'react'
import { Box, Flex } from 'blockstack-ui'
import { useNewsletterState } from '@components/newsletter-signup/wrapper'
import ChevronRightIcon from 'mdi-react/ChevronRightIcon'
import SmileyCoolIcon from 'mdi-react/SmileyCoolOutlineIcon'
import { useFocus } from 'use-events'
function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

const Newsletter = ({ ...rest }) => {
  const {
    doSubscribe,
    doSetEmail,
    error,
    loading,
    success,
    email
  } = useNewsletterState()

  const [focused, bind] = useFocus()

  const handleChange = (e) => {
    const { value } = e.target
    if (validateEmail(value)) {
      console.log('value is valid', value)
      doSetEmail(value)
    } else {
      if (email) {
        doSetEmail(null)
      }
    }
  }
  return (
    <Flex
      style={{
        pointerEvents: success ? 'none' : 'unset'
      }}
      alignItems="center"
      position="relative"
      width={1}
      mb={1}
    >
      {success ? (
        <Flex
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          color="ink"
          position="absolute"
          width="calc(100% - 2px)"
          height="calc(100% - 2px)"
          bg="white"
          left="1px"
          top="1px"
          borderRadius="8px"
        >
          <Box fontSize={1} fontWeight={500} color="ink.50" pr={2}>
            Thank you!
          </Box>
          <Box transform="translateY(2px)" color="green">
            <SmileyCoolIcon size={18} />
          </Box>
        </Flex>
      ) : null}
      <Flex
        alignItems="center"
        justifyContent="center"
        position="absolute"
        right="12px"
        size={28}
        cusor="pointer"
        opacity={success ? 0 : email ? 1 : 0}
        bg="blue"
        style={{
          pointerEvents: email ? 'unset' : 'none'
        }}
        borderRadius="100%"
        color="white"
        onClick={doSubscribe}
      >
        <ChevronRightIcon />
      </Flex>
      <Box is="form" width={1} onSubmit={doSubscribe}>
        <Box
          width={1}
          borderRadius="8px"
          pl={3}
          pr={email ? '52px' : 3}
          height="48px"
          placeholder="Get email updates"
          is="input"
          fontSize={1}
          borderColor={
            success ? 'green' : error ? 'red' : focused ? 'blue' : 'sky.50'
          }
          border="1px solid"
          onChange={handleChange}
          style={{
            outline: 'none'
          }}
          type="email"
          {...bind}
          {...rest}
        />
      </Box>
    </Flex>
  )
}

export { Newsletter }
