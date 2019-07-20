import { useContext, useState, useEffect } from 'react'
import { useMedia as useBaseMedia } from 'use-media'
import { theme } from '@common/theme'
import { HeaderTheme, SectionContext } from '@common/context'

function getVisibility() {
  if (typeof document === 'undefined') return null
  // Set the name of the hidden property and the change event for visibility
  let hidden, visibilityChange
  if (typeof document.hidden !== 'undefined') {
    // Opera 12.10 and Firefox 18 and later support
    hidden = 'hidden'
    visibilityChange = 'visibilitychange'
  } else if (typeof document.msHidden !== 'undefined') {
    hidden = 'msHidden'
    visibilityChange = 'msvisibilitychange'
  } else if (typeof document.webkitHidden !== 'undefined') {
    hidden = 'webkitHidden'
    visibilityChange = 'webkitvisibilitychange'
  }
  return !document[hidden]
}

const useVisibility = () => {
  const [vis, setVis] = useState(true)
  useEffect(() => {
    document && document.addEventListener('visibilitychange', () => {
      const visible = getVisibility()
      if (visible) {
        setVis(true)
      } else {
        setVis(false)
      }
    })
  }, [])
  return vis
}

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
      return { ...light, variant, bg: 'white' }
    case 'blue':
      return { ...blue, variant, bg: theme.colors.blue }
    case 'ink':
      return { ...dark, variant, bg: theme.colors.ink }
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

  const trans = `opacity .3s cubic-bezier(0.4, 0, 0.2, 1) .1s,transform .5s cubic-bezier(0.4, 0, 0.2, 1) .1s`

  const inViewAnimationStyles = {
    opacity: isInViewport ? 1 : 0,
    transition: trans,
    style: {
      willChange: 'opacity, transform'
    },
    transform: `translateY(${isInViewport ? 0 : 25}px)`
  }

  return inViewAnimationStyles
}

export {
  useMedia,
  useHeaderTheme,
  useSectionVariant,
  useSectionIsInViewport,
  useInViewAnimationStyles,
  useVisibility
}
