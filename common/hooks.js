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
    },
    buttons: {
      primary: {
        bg: 'blue',
        color: 'white',
        hovered: {
          bg: 'ink',
          color: 'white'
        }
      },
      secondary: {
        bg: 'blue.10',
        color: 'blue',
        hovered: {
          bg: 'blue.25',
          color: 'blue'
        }
      }
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
    },
    buttons: {
      primary: {
        bg: 'blue',
        color: 'white',
        hovered: {
          bg: 'white',
          color: 'ink'
        }
      },
      secondary: {
        bg: 'ink.50',
        color: 'sky',
        hovered: {
          bg: 'sky',
          color: 'ink'
        }
      }
    }
  }

  const blue = {
    text: {
      title: 'white',
      body: 'blue.10',
      hover: 'white'
    },
    fills: {
      primary: 'blue',
      secondary: 'blue.50',
      inverted: 'white'
    },
    buttons: {
      primary: {
        bg: 'white',
        color: 'blue',
        hovered: {
          bg: 'cyan',
          color: 'indigo'
        }
      },
      secondary: {
        bg: 'blue.25',
        color: 'blue',
        hovered: {
          bg: 'white',
          color: 'blue'
        }
      }
    }
  }

  switch (theme) {
    case 'white':
      return light
    case 'blue':
      return blue
    case 'ink':
      return dark
  }
}

const useHeaderTheme = () => {
  const theme = useContext(HeaderTheme)
  if (theme === 'white') {
    return {
      color: 'ink',
      lightColor: 'ink.25',
      secondary: 'blue',
      hover: 'blue',
      bg: 'white',
      secondaryBg: 'white',
      borderColor: 'sky.25',
      theme,
      inverted: theme === 'white' ? 'ink' : 'white'
    }
  }
  if (theme === 'ink') {
    return {
      color: 'sky',
      lightColor: 'sky',
      secondary: 'white',
      hover: 'white',
      bg: 'ink',
      secondaryBg: 'ink.75',
      borderColor: 'ink.75',
      theme,
      inverted: theme === 'white' ? 'ink' : 'white'
    }
  }
}

export { useMedia, useHeaderTheme, useSectionTheme }
