import React from 'react'
import { MDXProvider } from '@mdx-js/tag'
import { Type } from '@components/typography'
import { Image } from '@components/image'
import { Codeblock } from '@components/codeblock'

const Mdx = ({ children }) => (
  <MDXProvider
    components={{
      h1: Type.h1,
      h2: Type.h2,
      h3: Type.h3,
      h4: Type.h4,
      h5: Type.h5,
      h6: Type.h6,
      p: Type.p,
      pre: Type.pre,
      ol: Type.ol,
      ul: Type.ul,
      li: Type.li,
      img: Image,
      code: Codeblock
    }}
  >
    {children}
  </MDXProvider>
)

export { Mdx }
