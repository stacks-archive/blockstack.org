import React, { useEffect, useRef } from 'react'
import { findDOMNode } from 'react-dom'
import hljs from 'highlight.js/lib/highlight'
import javascript from 'highlight.js/lib/languages/javascript'
import { Box } from 'blockstack-ui'
import { HighlightWrapper } from '@components/code/styles'

const HighlightComp = ({ children, className, language, style, ...rest }) => {
  const ref = useRef()
  useEffect(() => {
    hljs.registerLanguage('javascript', javascript)
    hljs.highlightBlock(ref.current)
  }, [])
  return (
    <HighlightWrapper>
      <Box is="pre" className={className} style={style}>
        <code
          style={{
            fontFamily: 'Fira Mono, monospace',
            fontVariantLigatures: `common-ligatures`
          }}
          className={language}
          ref={ref}
        >
          {children}
        </code>
      </Box>
    </HighlightWrapper>
  )
}

export { HighlightComp }
