import { useContext } from 'react'
import { useMedia as useBaseMedia } from 'use-media'
import { theme } from '@common/theme'
import { HeaderTheme, SectionTheme } from '@common/context'

const useMedia = (index) => {
  if (index < 6) {
    const size = theme.breakpoints[index]
    return useBaseMedia({ maxWidth: size })
  } else {
    return useBaseMedia({ maxWidth: index })
  }
}

const useSectionTheme = () => {
  const theme = useContext(SectionTheme)
  const light = {
    text: {
      title: 'ink',
      body: 'ink.50',
      hover: 'blue'
    },
    fills: {
      primary: 'white',
      secondary: 'sky.10',
      inverted: 'ink'
    }
  }
  const dark = {
    text: {
      title: 'white',
      body: 'sky',
      hover: 'cyan'
    },
    fills: {
      primary: 'ink',
      secondary: 'ink.75',
      inverted: 'white'
    }
  }

  return theme === 'white' ? light : dark
}

const useHeaderTheme = () => {
  const theme = useContext(HeaderTheme)
  if (theme === 'white') {
    return {
      color: 'ink',
      secondary: 'blue',
      hover: 'blue',
      bg: 'white',
      borderColor: 'sky.25',
      theme,
      inverted: theme === 'white' ? 'ink' : 'white'
    }
  }
  if (theme === 'ink') {
    return {
      color: 'sky',
      secondary: 'white',
      hover: 'white',
      bg: 'ink',
      borderColor: 'ink.75',
      theme,
      inverted: theme === 'white' ? 'ink' : 'white'
    }
  }
}

export { useMedia, useHeaderTheme, useSectionTheme }
