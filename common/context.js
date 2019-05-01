import React, { createContext, memo } from 'react'

const defaultHeaderTheme = 'white'
const defaultSectionTheme = 'white'

const HeaderTheme = createContext(defaultHeaderTheme)
const SectionContext = createContext({
  variant: defaultSectionTheme,
  isInViewport: false
})

const SectionContextProvider = memo(({ ...rest }) => (
  <SectionContext.Provider {...rest} />
))

export {
  HeaderTheme,
  defaultHeaderTheme,
  SectionContext,
  SectionContextProvider,
  defaultSectionTheme
}
