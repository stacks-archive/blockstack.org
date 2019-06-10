import React from 'react'
import { Box, Flex } from 'blockstack-ui'
import { useNewsletterState } from '@components/newsletter-signup/wrapper'
import ChevronRightIcon from 'mdi-react/ChevronRightIcon'
import SmileyCoolIcon from 'mdi-react/SmileyCoolOutlineIcon'
import LoadingIcon from 'mdi-react/LoadingIcon'
import ErrorIcon from 'mdi-react/ErrorIcon'
import { useFocus } from 'use-events'
import { transition } from '@common/theme'
import styled, { keyframes } from 'styled-components'

const RotateAnimation = keyframes`
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
`

const AnimatedWrapper = styled(Box)`
  animation: ${RotateAnimation} 1s linear infinite;
`

const Loading = ({ ...rest }) => {
  return (
    <AnimatedWrapper>
      <LoadingIcon />
    </AnimatedWrapper>
  )
}

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

const OverlayElement = ({
  message = 'Thank you!',
  icon: Icon = SmileyCoolIcon,
  color = 'green',
  show,
  ...rest
}) => {
  return (
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
      transition={transition}
      opacity={show ? 1 : 0}
      style={{
        pointerEvents: show ? 'unset' : 'none'
      }}
      {...rest}
    >
      <Box fontSize={1} fontWeight={500} color="ink.50" pr={2}>
        {message}
      </Box>
      <Box transform="translateY(2px)" color={color}>
        <Icon size={18} />
      </Box>
    </Flex>
  )
}

const Newsletter = ({ ...rest }) => {
  const {
    doSubscribe,
    doSetEmail,
    doResetError,
    loading,
    error,
    success,
    email
  } = useNewsletterState()

  const [focused, bind] = useFocus()

  React.useEffect(() => {
    if (error) {
      setTimeout(() => {
        doResetError()
      }, 3000)
    }
  }, [error])

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
  const hide = loading || success || error
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
      <OverlayElement show={success} />
      <OverlayElement
        show={loading}
        icon={Loading}
        message="Processing..."
        color="blue"
      />
      <OverlayElement
        show={error}
        icon={ErrorIcon}
        message="Whoops, try again."
        color="red"
      />
      <Flex
        alignItems="center"
        justifyContent="center"
        position="absolute"
        right="12px"
        size={28}
        cusor="pointer"
        opacity={hide ? 0 : email ? 1 : 0}
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
          placeholder="Enter your email address"
          is="input"
          fontSize={1}
          borderColor={
            success
              ? 'green'
              : error
              ? 'red'
              : loading || focused
              ? 'blue'
              : 'sky.50'
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
