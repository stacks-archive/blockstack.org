import React, { useState } from 'react'
import { useHover } from 'use-events'
import { Box, Flex } from 'blockstack-ui'
import { footerNavigation } from '@common/constants'
import { Wrapper } from '@components/wrapper'
import ChevronDownIcon from 'mdi-react/ChevronDownIcon'
import TwitterIcon from 'mdi-react/TwitterIcon'
import GithubCircleIcon from 'mdi-react/GithubCircleIcon'
import { WrappedLink } from '@components/link'

const Icon = ({ component: Component, ...rest }) => (
  <Box color="currentColor" pr={1} opacity={0.5} {...rest}>
    <Component
      style={{
        display: 'block'
      }}
      size={16}
    />
  </Box>
)

const FooterLink = ({ path, href, ...rest }) => {
  const [hovered, bind] = useHover()
  return (
    <WrappedLink path={path}>
      <Box
        display="block"
        fontSize={1}
        cursor={hovered ? 'pointer' : 'unset'}
        color={hovered ? 'blue' : 'ink.25'}
        is="a"
        href={path || href}
        style={{
          textDecoration: 'none'
        }}
        {...bind}
        {...rest}
      />
    </WrappedLink>
  )
}

const SectionLabel = ({ label, hideArrow, open, style = {}, ...rest }) => {
  const ArrowIcon = ChevronDownIcon
  return (
    <Flex
      alignItems="center"
      borderColor={['sky.25', 'sky.25', 'transparent']}
      borderBottom={hideArrow ? 'none' : ['1px solid', '1px solid', '0']}
      pt={[3, 3, 0]}
      pb={hideArrow ? 0 : [3, 3, 0]}
      justifyContent="space-between"
      {...rest}
      style={{
        userSelect: 'none',
        ...style
      }}
    >
      <Box pb={[0, 0, 2]} fontWeight={600} color="ink" fontSize={1}>
        {label}
      </Box>
      {!hideArrow && (
        <Box
          size={24}
          transition="0.15s all ease-in-out"
          transform={open ? 'rotate(-180deg)' : 'none'}
          color="sky"
          display={['block', 'block', 'none']}
        >
          <ArrowIcon />
        </Box>
      )}
    </Flex>
  )
}

const SectionItems = ({ items, open, ...rest }) => (
  <Box
    display={open ? 'block' : ['none', 'none', 'block']}
    pt={[4, 4, 0]}
    {...rest}
  >
    {items.map((item, key) =>
      item.label ? (
        <FooterLink path={item.path} href={item.href} py={1} key={key}>
          {item.label}
        </FooterLink>
      ) : item.children ? (
        <React.Fragment key={key}>{item.children}</React.Fragment>
      ) : null
    )}
  </Box>
)

const Section = ({ ...rest }) => (
  <Box
    flexGrow={1}
    width={[1, 1, 100 / footerNavigation.length + '%']}
    {...rest}
  />
)
const Sections = ({ ...rest }) => {
  const [open, setOpen] = useState(null)
  const handleSectionOpen = (value) => {
    if (open !== value) {
      setOpen(value)
    }
    if (open === value) {
      setOpen(null)
    }
  }

  return (
    <Wrapper flexDirection={['column', 'column', 'row']} pb={5}>
      {footerNavigation.map((section, i) => {
        const isOpen = section.open || section.label === open
        return (
          <Section key={i}>
            <SectionLabel
              onClick={() => handleSectionOpen(section.label)}
              open={isOpen}
              hideArrow={section.open}
              label={section.label}
            />
            <SectionItems open={isOpen} items={section.items} />
          </Section>
        )
      })}
    </Wrapper>
  )
}

const FooterBottom = ({ ...rest }) => (
  <Wrapper
    flexDirection={['column', 'column', 'row']}
    pt={[4, 4, 7]}
    justifyContent="space-between"
    {...rest}
  >
    <Box
      fontSize={1}
      maxWidth={['100%', '100%', '25%', 'unset']}
      color="ink.25"
    >
      Copyright © {new Date().getFullYear()} Blockstack PBC. All rights reserved.
    </Box>
    <Flex flexDirection={['column', 'column', 'row']} mt={[5, 5, 0]}>
      <Flex alignItems="center">
        <FooterLink
          display="flex"
          alignItems="center"
          href="https://twitter.com/blockstack"
          mr={5}
          ml={[0, 0, 5]}
        >
          <Icon component={TwitterIcon} />
          Twitter
        </FooterLink>{' '}
        <FooterLink
          display="flex"
          alignItems="center"
          href="https://github.com/blockstack"
          mr={5}
        >
          <Icon component={GithubCircleIcon} />
          GitHub
        </FooterLink>
      </Flex>
      <Flex alignItems="center" pt={[3, 3, 0]}>
        <FooterLink path="/legal/terms-of-use" mr={5}>
          Terms of Use
        </FooterLink>
        <FooterLink path="/legal/privacy-policy" mr={5}>
          Privacy Policy
        </FooterLink>
        <FooterLink path="/legal/disclaimers">Disclaimers</FooterLink>
      </Flex>
    </Flex>
  </Wrapper>
)

const Footer = ({ ...rest }) => {
  return (
    <Box
      py={[7, 7, 9]}
      borderTop="1px solid"
      borderColor="sky.25"
      width={1}
      {...rest}
    >
      <Sections />
      <FooterBottom />
    </Box>
  )
}

export { Footer }
