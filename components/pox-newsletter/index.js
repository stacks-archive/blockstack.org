import React, { useState } from 'react'
import fetch from 'cross-fetch'
import { Box, Flex } from 'blockstack-ui'
import ChevronRightIcon from 'mdi-react/ChevronRightIcon'
import SmileyCoolIcon from 'mdi-react/SmileyCoolOutlineIcon'
import { useFocus } from 'use-events'

const validateEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

const initialState = {
  loading: false,
  success: false,
  error: null,
  email: null
}
export const useNewsletterState = () => {
  const [state, setState] = useState(initialState)

  const { loading, success, error, email } = state

  const doSetEmail = (e) => setState((s) => ({ ...s, email: e }))

  const doSetLoading = (value = true) => {
    if (value && !loading) {
      setState((s) => ({
        ...s,
        loading: value
      }))
    }
    if (!value && loading) {
      setState((s) => ({
        ...s,
        loading: value
      }))
    }
  }

  const doSubscribe = async (e, params) => {
    e.preventDefault()
    if (email) {
      doSetLoading()
    } else {
      return
    }

    try {
      const res = await fetch('https://api.app.co/api/blockstack-subscribe', {
        method: 'POST',
        body: JSON.stringify({
          email,
          ...params
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await res.json()
      if (data.success) {
        setState((s) => ({
          ...s,
          success: true,
          loading: false
        }))
      } else {
        setState((s) => ({
          ...s,
          loading: false,
          error: data.error
        }))
      }
    } catch (error) {
      setState((s) => ({
        ...s,
        loading: false,
        error: error.message
      }))
    }
  }

  const handleChange = (e) => {
    const { value } = e.target
    if (validateEmail(value)) {
      doSetEmail(value)
    } else {
      if (email) {
        doSetEmail(null)
      }
    }
  }

  return {
    loading,
    success,
    error,
    email,
    handleChange,
    doSubscribe,
    doSetEmail
  }
}

const Newsletter = ({ list = 'd9be1261', merge, ...rest }) => {
  const {
    doSubscribe,
    error,
    success,
    email,
    handleChange
  } = useNewsletterState()

  const [focused, bind] = useFocus()

  return (
    <Flex
      style={{
        pointerEvents: success ? 'none' : 'unset'
      }}
      alignItems="center"
      position="relative"
      minWidth="220px"
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
        onClick={(e) => doSubscribe(e, { list, ...merge })}
      >
        <ChevronRightIcon />
      </Flex>
      <Box
        is="form"
        width={1}
        onSubmit={(e) => doSubscribe(e, { list, ...merge })}
      >
        <Box
          width={1}
          borderRadius="8px"
          pl={3}
          pr={email ? '52px' : 3}
          height="38px"
          placeholder="Enter your email address"
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
