import React, { createContext } from 'react'

const defaultHeaderTheme = 'white'
const defaultSectionTheme = 'white'

const HeaderTheme = createContext(defaultHeaderTheme)
const SectionTheme = createContext(defaultHeaderTheme)

const SectionThemeProvider = ({ ...rest }) => (
  <SectionTheme.Provider {...rest} />
)

export { HeaderTheme, defaultHeaderTheme, SectionTheme, SectionThemeProvider, defaultSectionTheme }
