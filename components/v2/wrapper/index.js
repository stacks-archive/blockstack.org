import React from 'react'
import { Flex } from 'blockstack-ui'

const Wrapper = ({ ...rest }) => (
  <Flex px={5} width="100%" maxWidth="1016px" mx="auto" {...rest} />
)

export { Wrapper }
