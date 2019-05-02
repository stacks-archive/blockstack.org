// export default from './Button'

import React from 'react'
import { Box, Flex } from 'blockstack-ui'
import { transition } from '@common/theme'
import { useHover } from 'use-events'
import { useSectionVariant } from '@common/hooks'

const getVariant = (variant, hovered) => {
  const variants = useSectionVariant().buttons
  return !hovered ? variants[variant] : variants[variant].hovered
}

const Button = ({
  label,
  children,
  variant = 'primary', // primary || secondary
  ...rest
}) => {
  const [hovered, bind] = useHover()
  const buttonStyles = getVariant(variant, hovered)
  const defaultProps = {
    borderRadius: '48px',
    py: 3,
    px: 5,
    fontWeight: 500,
    letterSpacing: '-0.02em',
    border: '2px solid',
    transition,
    cursor: hovered ? 'pointer' : 'unset'
  }

  return (
    <Flex role="button" {...defaultProps} {...buttonStyles} {...bind} {...rest}>
      <Box>{children ? children : label}</Box>
    </Flex>
  )
}

export default Button

export { Button }
