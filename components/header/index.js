import React, { useState, useEffect, useContext } from 'react'
import { useHover, useActive } from 'use-events'
import { Box, Flex } from 'blockstack-ui'
import MenuIcon from 'mdi-react/MenuIcon'
import CloseIcon from 'mdi-react/CloseIcon'
import { useMedia } from '@common/hooks'
import { useHeaderTheme } from '@common/hooks'
import { NavItem, SubNav } from '@components/nav-item'
import { Logo } from '@components/logo'
import { navigation } from '@common/constants'
import { HeaderTheme, defaultHeaderTheme } from '@common/context'
import { Wrapper } from '@components/wrapper'
import { useLockBodyScroll } from 'react-use'
import { HeaderHeightContext } from '../../pages/_app'
import { transition } from '@common/theme'
import ArrowUpRightIcon from 'mdi-react/ArrowUpRightIcon'
import Headroom from 'react-headroom'
import Link from 'next/link'

const HelloBar = ({ theme, ...rest }) => {
  const { borderColor, lightColor, secondaryBg } = useHeaderTheme()
  const [hovered, bind] = useHover()
  return (
    <Box
      transition={transition}
      bg={
        theme === 'ink'
          ? hovered
            ? 'ink.50'
            : 'ink.75'
          : hovered
          ? 'indigo'
          : 'blue'
      }
      position="relative"
      {...rest}
      {...bind}
    >
      <Box
        is="a"
        href="https://stackstoken.com"
        target="_blank"
        size="100%"
        zIndex={9}
        position="absolute"
        aria-label="Learn about the anticipated Stacks Token sale at stackstoken.com"
        title="Learn about the anticipated Stacks Token sale at stackstoken.com"
      />
      <Wrapper alignItems="center" py={3} justifyContent="center">
        <Box
          textAlign="center"
          color="white"
          fontSize={1}
          transition={transition}
        >
          Learn about the anticipated Stacks Token sale
        </Box>
        <Box color="white" transform="translateY(1px)" pl={1}>
          <ArrowUpRightIcon size={14} />
        </Box>
      </Wrapper>
    </Box>
  )
}

const Navigation = ({
  notMobile,
  subnavVisible,
  setSubnavVisibility,
  data = navigation,
  setMobileMenuState,
  isMobileMenu
}) =>
  data.map((item, i) => (
    <NavItem
      isMobileMenu={isMobileMenu}
      setMobileMenuState={setMobileMenuState}
      subnavVisible={subnavVisible}
      setSubnavVisibility={setSubnavVisibility}
      key={i}
      flexGrow={1}
      display={notMobile ? ['none', 'none', 'flex'] : undefined}
      {...item}
    />
  ))

const MobileMenuButton = ({ open, ...rest }) => {
  const [hovered, hoverBind] = useHover()
  const [active, activeBind] = useActive()
  const bind = {
    ...hoverBind,
    ...activeBind
  }

  const { color, hover } = useHeaderTheme()

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      display={['flex', 'flex', 'none']}
      color={hovered ? hover : color}
      cursor={hovered ? 'pointer' : 'unset'}
      transition={transition}
      transform={active ? 'translateY(2px)' : 'none'}
      ml="auto"
      {...rest}
      {...bind}
    >
      {open ? <CloseIcon /> : <MenuIcon />}
    </Flex>
  )
}

const MobileMenu = ({
  open,
  setSubnavVisibility,
  setMobileMenuState,
  subnavVisible,
  ...rest
}) => {
  const { bg } = useHeaderTheme()
  const headerHeight = useContext(HeaderHeightContext)

  return (
    <Box
      position="absolute"
      top={headerHeight - 1}
      height={`calc(100vh - ${headerHeight + 1}px)`}
      maxHeight={`calc(100vh - ${headerHeight + 1}px)`}
      bg={bg}
      zIndex={9999}
      width={1}
      opacity={open ? 1 : 0}
      transition={transition}
      display={['block', 'block', 'none']}
      p={5}
      style={{ pointerEvents: open ? 'unset' : 'none' }}
      overflow="auto"
      {...rest}
    >
      <Navigation
        setMobileMenuState={setMobileMenuState}
        setSubnavVisibility={setSubnavVisibility}
        subnavVisible={subnavVisible}
        isMobileMenu
      />
    </Box>
  )
}

const HeaderBar = ({ innerRef, children, ...rest }) => {
  const { bg, borderColor } = useHeaderTheme()
  return (
    <Box
      width={1}
      position="relative"
      top={0}
      zIndex={99999}
      borderBottom="1px solid"
      borderColor={borderColor}
      transition={transition}
      bg={bg}
      ref={innerRef}
      {...rest}
    >
      <div ref={innerRef}>{children}</div>
    </Box>
  )
}

const Header = ({
  theme: headerTheme = defaultHeaderTheme,
  innerRef,
  ...rest
}) => {
  const [hovered, bind] = useHover()
  const [subnavVisible, setSubnavVisibility] = useState(null)

  const [items, setItems] = useState([])
  const [mobileMenuOpen, setMobileMenuState] = useState(false)
  const isMobile = useMedia(1)

  useLockBodyScroll(isMobile && mobileMenuOpen)

  const handleMenuToggle = () => {
    setMobileMenuState((s) => !s)
  }

  const handleSetItems = (i) => {
    const theItems =
      (subnavVisible &&
        navigation.find((item) => item.slug === subnavVisible).items) ||
      []
    setItems(theItems)
  }

  useEffect(() => {
    if (!isMobile) {
      if (subnavVisible && !hovered) {
        setTimeout(() => setSubnavVisibility(null), 100)
      }
      if (subnavVisible && hovered) {
        handleSetItems()
      }
    }
  }, [subnavVisible, hovered])

  return (
    <>
      <HelloBar theme={headerTheme} />
      <Headroom>
        <HeaderTheme.Provider value={headerTheme}>
          <>
            <Box letterSpacing="-0.02em" {...bind} {...rest}>
              <HeaderBar innerRef={innerRef}>
                <Wrapper py={4}>
                  <Link href={'/'} prefetch>
                    <Box is="a" href={'/'} aria-label="Link to homepage" transform="translateY(-1px)">
                      <Logo />
                    </Box>
                  </Link>
                  <Navigation
                    setSubnavVisibility={setSubnavVisibility}
                    subnavVisible={subnavVisible}
                    setMobileMenuState={setMobileMenuState}
                    notMobile
                  />
                  <MobileMenuButton
                    open={mobileMenuOpen}
                    onClick={handleMenuToggle}
                  />
                </Wrapper>
              </HeaderBar>

              <MobileMenu
                setSubnavVisibility={setSubnavVisibility}
                subnavVisible={subnavVisible}
                open={mobileMenuOpen}
                setMobileMenuState={setMobileMenuState}
              />
              <SubNav
                setSubnavVisibility={setSubnavVisibility}
                items={items}
                visible={items && subnavVisible}
              />
            </Box>
          </>
        </HeaderTheme.Provider>
      </Headroom>
    </>
  )
}

export default Header

export { HelloBar }
