import React from 'react'
import { MDXProvider } from '@mdx-js/tag'
import { Title, Text } from '@components/v2/section'
import { Image } from '@components/image'
import { Codeblock } from '@components/codeblock'

const Mdx = ({ children }) => (
  <MDXProvider
    components={{
      h1: (p) => <Title pb={5} is="h1" {...p} />,
      h2: (p) => <Title pb={5} is="h2" {...p} />,
      h3: (p) => <Title pb={5} is="h3" {...p} />,
      h4: (p) => <Title pb={4} is="h4" {...p} />,
      h5: (p) => <Title pb={3} is="h5" {...p} />,
      h6: (p) => <Title pb={3} is="h6" {...p} />,
      p: (p) => <Text fontSize={2} pb={5} {...p} />,
      pre: (p) => <Text fontSize={2} is="pre" {...p} />,
      ol: (p) => <Text fontSize={2} is="ol" {...p} />,
      ul: (p) => <Text fontSize={2} pb={3} pl={5} is="ul" {...p} />,
      li: (p) => <Text fontSize={2} pb={2} is="li" {...p} />,
      img: Image,
      code: Codeblock
    }}
  >
    {children}
  </MDXProvider>
)

export { Mdx }
