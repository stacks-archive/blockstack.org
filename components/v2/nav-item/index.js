import React, { useEffect, useContext } from 'react'
import { useHover, useActive } from 'use-events'
import { Box, Flex } from 'blockstack-ui'
import ChevronDownIcon from 'mdi-react/ChevronDownIcon'
import { useMedia, useHeaderTheme } from '@common/hooks'
import { Wrapper } from '@components/v2/wrapper'
import { HeaderHeightContext } from '../../../pages/_app'

const MobileSubNavItem = ({ ...rest }) => {
  const [hovered, bind] = useHover()
  const { color, hover } = useHeaderTheme()
  return (
    <Box
      color={hovered ? hover : color}
      cursor={hovered ? 'pointer' : 'unset'}
      fontWeight={400}
      py={1}
      {...rest}
      {...bind}
    />
  )
}

const NavItem = ({
  label,
  slug,
  href,
  style = {},
  items,
  setSubnavVisibility,
  subnavVisible,
  display,
  variant,
  ...rest
}) => {
  const { borderColor, color, hover, secondary } = useHeaderTheme()
  const isMobile = useMedia(1)
  const [hovered, hoverBind] = useHover()
  const [active, activeBind] = useActive()
  const bind = {
    ...hoverBind,
    ...activeBind
  }

  useEffect(() => {
    if (!isMobile) {
      if (hovered && items && subnavVisible !== slug) {
        setSubnavVisibility(slug)
      }
      if (hovered && !items) {
        setSubnavVisibility(null)
      }
    }
  }, [hovered, subnavVisible])

  const handleMobileClick = () => {
    if (isMobile && items && items.length) {
      if (slug === subnavVisible) {
        setSubnavVisibility(null)
      } else {
        setSubnavVisibility(slug)
      }
    }
  }

  const isCTA = variant === 'call-to-action'
  return (
    <>
      <Flex
        fontWeight={[600, 600, 500]}
        color={
          hovered || subnavVisible === slug ? hover : isCTA ? secondary : color
        }
        cursor={hovered ? 'pointer' : 'default'}
        flexGrow={1}
        alignItems={['flex-start', 'flex-start', 'center']}
        justifyContent="center"
        flexDirection={['column', 'column', 'row']}
        transition="0.3s color cubic-bezier(.19,1,.22,1), 0.3s border-color cubic-bezier(.19,1,.22,1)"
        borderBottom={'1px solid'}
        borderColor={[borderColor, borderColor, 'transparent']}
        {...rest}
        style={{ userSelect: 'none', willChange: 'transform', ...style }}
        display={display}
      >
        <Flex
          alignItems="center"
          width={1}
          justifyContent={['flex-start', 'flex-start', 'center']}
          transition="0.3s transform cubic-bezier(.19,1,.22,1)"
          transform={active ? 'translateY(2px)' : 'none'}
          onClick={() => {
            handleMobileClick()
          }}
          py={[4, 4, 0]}
          fontWeight={isCTA ? 500 : 400}
          letterSpacing="0.25px"
          {...bind}
        >
          {label}
          {items && (
            <Box pl={1} color="ink.25">
              <ChevronDownIcon style={{ display: 'block' }} size="14px" />
            </Box>
          )}
        </Flex>
        {isMobile && subnavVisible === slug ? (
          <Box pb={4} display={display}>
            {items.map((item, i) => (
              <MobileSubNavItem key={i}>{item.label}</MobileSubNavItem>
            ))}
          </Box>
        ) : null}
      </Flex>
    </>
  )
}

const SubNavItem = ({ label, style = {}, ...rest }) => {
  const { color, hover } = useHeaderTheme()
  const [hovered, hoverBind] = useHover()
  const [active, activeBind] = useActive()
  const bind = {
    ...hoverBind,
    ...activeBind
  }
  return (
    <Flex
      px={4}
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      cursor={hovered ? 'pointer' : 'unset'}
      transition="0.3s all cubic-bezier(.19,1,.22,1)"
      transform={
        active
          ? 'translateY(1px)'
          : hovered
          ? 'translateY(-2px)'
          : 'translateY(0px)'
      }
      {...rest}
      {...bind}
      style={{
        willChange: 'transform',
        userSelect: 'none',
        ...style
      }}
    >
      {label && (
        <Box bg={hovered ? hover : color} size={24} borderRadius="6px" />
      )}
      {label && (
        <Box
          color={hovered ? hover : color}
          style={{
            willChange: 'color'
          }}
          fontWeight={400}
          pt={3}
        >
          {label}
        </Box>
      )}
    </Flex>
  )
}

const Spacer = ({ ...rest }) => (
  <SubNavItem display={['none', 'none', 'flex']} />
)

const SubNav = ({ items = [], transitions, visible, ...rest }) => {
  const { bg, borderColor } = useHeaderTheme()
  const headerHeight = useContext(HeaderHeightContext)
  return (
    <Box
      zIndex={9999}
      position="absolute"
      top={headerHeight + 1 + 'px'}
      width={1}
      left={0}
      bg={bg}
      py={4}
      transition="0.3s all cubic-bezier(.19,1,.22,1)"
      opacity={visible ? 1 : 0}
      transform={visible ? 'none' : 'translateY(-5px)'}
      borderBottom="1px solid"
      borderColor={borderColor}
      display={['none', 'none', 'block']}
    >
      <Wrapper
        display="grid"
        gridTemplateColumns={`repeat(${items.length + 2}, 1fr)`}
        alignItems="center"
        justifyContent="center"
        minHeight={100}
      >
        <Spacer />
        {items && items.length
          ? items.map((item, i) => <SubNavItem key={i} label={item.label} />)
          : null}
        <Spacer />
      </Wrapper>
    </Box>
  )
}

export { MobileSubNavItem, NavItem, SubNavItem, SubNav, Spacer }
