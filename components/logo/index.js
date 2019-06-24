import React from 'react'
import { useHeaderTheme } from '@common/hooks'
import { useHover } from 'use-events'
import { Box, Flex, BlockstackLogo } from 'blockstack-ui'

const Logo = ({ ...rest }) => {
  const { inverted } = useHeaderTheme()
  const [hovered, bind] = useHover()
  return (
    <Flex
      cursor={hovered ? 'pointer' : 'unset'}
      alignItems="center"
      pr={5}
      {...rest}
      {...bind}
    >
      <Box transform="translateY(2px)" color={inverted}>
        <BlockstackLogo
          style={{
            transition: '0.3s all cubic-bezier(.19,1,.22,1)'
          }}
          typeSize="16"
        />
      </Box>
    </Flex>
  )
}


export {Logo}
