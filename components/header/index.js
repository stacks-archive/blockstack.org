import React, { useState, useEffect } from 'react'
import { useHover, useActive } from 'use-events'
import { Box, Flex } from 'blockstack-ui'
import MenuIcon from 'mdi-react/MenuIcon'
import CloseIcon from 'mdi-react/CloseIcon'
import { useMedia } from '@common/hooks'
import { useHeaderTheme } from '@common/hooks'
import { NavItem, SubNav } from '@components/v2/nav-item'
import { Logo } from '@components/v2/logo'
import { navigation, headerHeight } from '@common/constants'
import { HeaderTheme, defaultHeaderTheme } from '@common/context'
import { Wrapper } from '@components/v2/wrapper'

const HelloBar = ({ ...rest }) => <Flex px={5}>
  <Box>
    Learn about the stackstoken.com Public Offering 2.0
  </Box>
</Flex>

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
      height={headerHeight}
      alignItems="center"
      justifyContent="center"
      display={['flex', 'flex', 'none']}
      color={hovered ? hover : color}
      cursor={hovered ? 'pointer' : 'unset'}
      transition="0.3s all cubic-bezier(.19,1,.22,1)"
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
  return (
    <Box
      position="absolute"
      top={headerHeight + 1}
      height={`calc(100vh - ${headerHeight + 1}px)`}
      maxHeight={`calc(100vh - ${headerHeight + 1}px)`}
      bg={bg}
      zIndex={9999}
      width={1}
      opacity={open ? 1 : 0}
      transition="0.3s all cubic-bezier(.19,1,.22,1)"
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

const HeaderBar = ({ ...rest }) => {
  const { bg, borderColor } = useHeaderTheme()
  return (
    <Box
      position="absolute"
      width={1}
      top={0}
      zIndex={99999}
      borderBottom="1px solid"
      borderColor={borderColor}
      transition="0.3s all cubic-bezier(.19,1,.22,1)"
      bg={bg}
      {...rest}
    />
  )
}

const Header = ({ theme = defaultHeaderTheme, ...rest }) => {
  const [hovered, bind] = useHover()
  const [subnavVisible, setSubnavVisibility] = useState(null)
  const [headerTheme, setTheme] = useState(theme)
  const [items, setItems] = useState([])
  const [mobileMenuOpen, setMobileMenuState] = useState(false)
  const isMobile = useMedia(1)

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
    <HeaderTheme.Provider value={headerTheme}>
      <Box {...bind}>
        <HeaderBar>
          <Wrapper height={headerHeight}>
            <Logo onClick={handleThemeToggle} />
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
    </HeaderTheme.Provider>
  )
}

export default Header
