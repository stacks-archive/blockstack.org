import React, { useState, useEffect, useContext } from 'react'
import { useHover, useActive } from 'use-events'
import { Box, Flex } from 'blockstack-ui'
import MenuIcon from 'mdi-react/MenuIcon'
import CloseIcon from 'mdi-react/CloseIcon'
import { useMedia } from '@common/hooks'
import { useHeaderTheme } from '@common/hooks'
import { NavItem, SubNav } from '@components/v2/nav-item'
import { Logo } from '@components/v2/logo'
import { navigation } from '@common/constants'
import { HeaderTheme, defaultHeaderTheme } from '@common/context'
import { Wrapper } from '@components/v2/wrapper'
import { useLockBodyScroll } from 'react-use'
import { HeaderHeightContext } from '../../pages/_app'
import { transition } from '@common/theme'
import Headroom from 'react-headroom'
import Link from 'next/link'
const HelloBar = ({ ...rest }) => {
  const { borderColor, lightColor, secondaryBg } = useHeaderTheme()

  return (
    <Box
      transition={transition}
      bg={secondaryBg}
      borderBottom="1px solid"
      borderColor={borderColor}
      {...rest}
    >
      <Wrapper py={2}>
        <Box color={lightColor} fontSize={1} transition={transition}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Box>
      </Wrapper>
    </Box>
  )
}

const Navigation = ({
  notMobile,
  subnavVisible,
  setSubnavVisibility,
  data = navigation
}) =>
  data.map((item, i) => (
    <NavItem
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

const MobileMenu = ({ open, setSubnavVisibility, subnavVisible, ...rest }) => {
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
        setSubnavVisibility={setSubnavVisibility}
        subnavVisible={subnavVisible}
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

const Header = ({ theme = defaultHeaderTheme, innerRef, ...rest }) => {
  const [hovered, bind] = useHover()
  const [subnavVisible, setSubnavVisibility] = useState(null)
  const [headerTheme, setTheme] = useState(theme)
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

  const handleThemeToggle = () => {
    if (headerTheme === 'white') {
      setTheme('ink')
    } else {
      setTheme('white')
    }
  }

  return (
    <Headroom>
      <HeaderTheme.Provider value={headerTheme}>
        <>
          <Box {...bind} {...rest}>
            <HeaderBar innerRef={innerRef}>
              <Wrapper py={5}>
                <Link href={'/'} prefetch>
                  <Box is="a" href={'/'}>
                    <Logo />
                  </Box>
                </Link>
                <Navigation
                  setSubnavVisibility={setSubnavVisibility}
                  subnavVisible={subnavVisible}
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
            />
            <SubNav items={items} visible={items && subnavVisible} />
          </Box>
        </>
      </HeaderTheme.Provider>
    </Headroom>
  )
}

export default Header

export { HelloBar }
