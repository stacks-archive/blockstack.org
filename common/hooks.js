import { useContext } from 'react'
import { useMedia as useBaseMedia } from 'use-media'
import { theme } from '@common/theme'
import { HeaderTheme, SectionContext } from '@common/context'

const useMedia = (index) => {
  if (index < 6) {
    const size = theme.breakpoints[index]
    return useBaseMedia({ maxWidth: size })
  } else {
    return useBaseMedia({ maxWidth: index })
  }
}

const useSectionIsInViewport = () => {
  const { isInViewport } = useContext(SectionContext)
  return isInViewport
}

const useSectionVariant = () => {
  const { variant, bg } = useContext(SectionContext)
  const light = {
    text: {
      title: 'ink',
      body: 'ink.50',
      hover: 'blue',
      light: 'ink.25'
    },
    fills: {
      primary: 'white',
      secondary: 'sky.10',
      inverted: 'ink'
    },
    buttons: {
      primary: {
        bg: 'blue',
        borderColor: 'blue',
        color: 'white',
        hovered: {
          bg: 'ink',
          borderColor: 'ink',
          color: 'white'
        }
      },
      secondary: {
        bg: 'blue.10',
        borderColor: 'blue.10',
        color: 'blue',
        hovered: {
          bg: 'blue.25',
          borderColor: 'blue.25',
          color: 'blue'
        }
      }
    }
  }
  const dark = {
    text: {
      title: 'white',
      body: 'sky',
      hover: 'cyan',
      light: 'sky.25'
    },
    fills: {
      primary: 'ink',
      secondary: 'ink.75',
      inverted: 'white'
    },
    buttons: {
      primary: {
        bg: 'blue',
        borderColor: 'blue',
        color: 'white',
        hovered: {
          bg: 'white',
          borderColor: 'white',
          color: 'ink'
        }
      },
      secondary: {
        bg: 'ink.50',
        borderColor: 'ink.50',
        color: 'sky',
        hovered: {
          bg: 'sky',
          borderColor: 'sky',
          color: 'ink'
        }
      }
    }
  }

  const blue = {
    text: {
      title: 'white',
      body: 'blue.10',
      hover: 'white',
      light: 'sky.25'
    },
    fills: {
      primary: 'blue',
      secondary: 'blue.50',
      inverted: 'white'
    },
    buttons: {
      primary: {
        bg: 'white',
        borderColor: 'white',
        color: 'blue',
        hovered: {
          bg: 'cyan',
          borderColor: 'cyan',
          color: 'indigo'
        }
      },
      secondary: {
        bg: 'transparent',
        borderColor: 'white',
        color: 'white',
        fontWeight: 600,
        hovered: {
          bg: 'transparent',
          borderColor: 'white',
          color: 'white',
          fontWeight: 600
        }
      }
    }
  }

  switch (variant) {
    case 'white':
      /**
       * TODO: fix bg color
       */
      return { ...light, variant, bg: theme.colors[bg] }
    case 'blue':
      return { ...blue, variant, bg: theme.colors[bg] }
    case 'ink':
      return { ...dark, variant, bg: theme.colors[bg] }
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

const useInViewAnimationStyles = () => {
  const isInViewport = useSectionIsInViewport()

  const trans = `1s all cubic-bezier(.19,1,.22,1) 0.25s`

  const inViewAnimationStyles = {
    opacity: isInViewport ? 1 : 0,
    transition: trans,
    transform: `translateY(${isInViewport ? 0 : -10}px)`
  }

  return inViewAnimationStyles
}

export {
  useMedia,
  useHeaderTheme,
  useSectionVariant,
  useSectionIsInViewport,
  useInViewAnimationStyles
}
