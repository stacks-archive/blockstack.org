import React, { useState } from 'react'
import { useHover } from 'use-events'
import { Box, Flex } from 'blockstack-ui'
import { footerNavigation } from '@common/constants'
import { Wrapper } from '@components/v2/wrapper'
import ChevronDownIcon from 'mdi-react/ChevronDownIcon'

const FooterLink = ({ ...rest }) => {
  const [hovered, bind] = useHover()
  return (
    <Box
      fontSize={1}
      cursor={hovered ? 'pointer' : 'unset'}
      color={hovered ? 'blue' : 'ink.25'}
      {...bind}
      {...rest}
    />
  )
}

const SectionLabel = ({ label, open, style = {}, ...rest }) => {
  const ArrowIcon = ChevronDownIcon
  return (
    <Flex
      alignItems="center"
      borderColor={['sky.25', 'sky.25', 'transparent']}
      borderBottom={['1px solid', '1px solid', '0']}
      py={[3, 3, 0]}
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
      <Box
        size={24}
        transition="0.15s all ease-in-out"
        transform={open ? 'rotate(-180deg)' : 'none'}
        color="sky"
        display={['block', 'block', 'none']}
      >
        <ArrowIcon />
      </Box>
    </Flex>
  )
}

const SectionItems = ({ items, open, ...rest }) => (
  <Box
    display={open ? 'block' : ['none', 'none', 'block']}
    pt={[4, 4, 0]}
    {...rest}
  >
    {items.map((item) =>
      item.label ? (
        <FooterLink py={1}>{item.label}</FooterLink>
      ) : item.children ? (
        item.children
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
      {footerNavigation.map((section, i) => (
        <Section key={i}>
          <SectionLabel
            onClick={() => handleSectionOpen(section.label)}
            open={section.label === open}
            label={section.label}
          />
          <SectionItems open={section.label === open} items={section.items} />
        </Section>
      ))}
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
    <Box fontSize={1} color="ink.25">
      Copyright © 2019 Blockstack PBC. All rights reserved.
    </Box>
    <Flex mt={[5, 5, 0]}>
      <FooterLink mr={5}>Terms of Use</FooterLink>
      <FooterLink mr={5}>Privacy Policy</FooterLink>
      <FooterLink>Disclaimers</FooterLink>
    </Flex>
  </Wrapper>
)

const Footer = ({ ...rest }) => {
  return (
    <Box py={7} width={1} {...rest}>
      <Sections />
      <FooterBottom />
    </Box>
  )
}

export { Footer }
