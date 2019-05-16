// export default from './Button'

import React from 'react'
import { Box, Flex } from 'blockstack-ui'
import { transition } from '@common/theme'
import { useHover } from 'use-events'
import { useSectionVariant } from '@common/hooks'
import Link from 'next/link'
import ArrowRightIcon from 'mdi-react/ArrowRightIcon'

const getVariant = (variant, hovered) => {
  const variants = useSectionVariant().buttons
  return !hovered ? variants[variant] : variants[variant].hovered
}

const WrapperComponent = ({ path, children }) =>
  path ? (
    <Link href={path} prefetch>
      {children}
    </Link>
  ) : (
    children
  )
const Button = ({
  label,
  children,
  variant = 'primary', // primary || secondary
  path,
  href,
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
    textAlign: ['center', 'center', 'unset'],
    cursor: hovered ? 'pointer' : 'unset'
  }

  return (
    <WrapperComponent path={path}>
      <Flex
        role="button"
        is={href || path ? 'a' : 'button'}
        href={href || path}
        style={{
          textDecoration: 'none'
        }}
        {...defaultProps}
        alignItems="center"
        justifyContent="center"
        {...buttonStyles}
        {...bind}
        {...rest}
      >
        <Box>{children ? children : label}</Box>
        {variant === 'primary' ? (
          <Box
            pl={2}
            transition="0.3s transform cubic-bezier(.19,1,.22,1)"
            transform={`translate3d(${hovered ? 2 : 0}px,0,0)`}
          >
            <ArrowRightIcon size="18px" style={{ display: 'block' }} />
          </Box>
        ) : null}
      </Flex>
    </WrapperComponent>
  )
}

export default Button

export { Button }
