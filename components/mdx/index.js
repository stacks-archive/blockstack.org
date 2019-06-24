import React from 'react'
import { MDXProvider } from '@mdx-js/tag'
import { Section } from '@components/section'
import { Image } from '@components/image'
import { Codeblock } from '@components/code'

const Mdx = ({ children }) => (
  <MDXProvider
    components={{
      h1: (p) => <Section.Title pb={5} is="h1" {...p} />,
      h2: (p) => <Section.Title pb={5} is="h2" {...p} />,
      h3: (p) => <Section.Title pb={5} is="h3" {...p} />,
      h4: (p) => <Section.Title pb={4} is="h4" {...p} />,
      h5: (p) => <Section.Title pb={3} is="h5" {...p} />,
      h6: (p) => <Section.Title pb={3} is="h6" {...p} />,
      p: (p) => <Section.Text fontSize={2} pb={5} is="p" {...p} />,
      pre: (p) => <Section.Text fontSize={2} is="pre" {...p} />,
      ol: (p) => <Section.Text fontSize={2} is="ol" {...p} />,
      ul: (p) => <Section.Text fontSize={2} pb={3} pl={5} is="ul" {...p} />,
      li: (p) => <Section.Text fontSize={2} pb={2} is="li" {...p} />,
      a: (p) => <Section.Text is="a" fontSize={2} {...p} />,
      img: Image,
      code: Codeblock
    }}
  >
    {children}
  </MDXProvider>
)

export { Mdx }
