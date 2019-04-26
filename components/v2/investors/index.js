import React from 'react'
import { Flex, Box, Type } from 'blockstack-ui'
import { Image } from '@components/v2/image'

const list = [
  {
    name: 'Union Square Ventures',
    href: 'https://www.usv.com/',
    slug: 'usv'
  },
  {
    name: 'Y Combinator',
    href: 'https://www.ycombinator.com/',
    slug: 'ycombinator'
  },
  {
    name: 'Lux Capital',
    href: 'https://www.luxcapital.com/',
    slug: 'lux'
  },
  {
    name: 'Digital Currency Group',
    href: 'https://dcg.co/',
    slug: 'dcg'
  },
  {
    name: 'SV Angel',
    href: 'https://svangel.com/',
    slug: 'sva'
  },
  {
    name: 'Version One',
    href: 'https://versionone.vc/',
    slug: 'version-one'
  },
  {
    name: 'Naval Ravikant',
    href: 'https://angel.co/naval',
    slug: 'naval-ravikant'
  },
  {
    name: 'Shana Fisher',
    href: 'https://angel.co/shana-fisher',
    slug: 'shana-fisher'
  },

  {
    name: 'Kal Vepuri',
    href: 'https://angel.co/kal',
    slug: 'kal'
  }
]

const Item = ({ name, slug, href, ...rest }) => {
  const image = `https://blockstack-www.imgix.net/investors/${slug}.png`
  return (
    <Box
      is="a"
      display="block"
      href={href}
      target="_blank"
      mb={4}
      border="none !important"
      maxWidth="80px"
      borderRadius="100%"
      overflow="hidden"
      mr={5}
      boxShadow="0px 2px 12px rgba(0, 0, 0, 0.04), 0px 1px 2px rgba(0, 0, 0, 0.08)"
    >
      <Box>
        <Image src={image} alt={name} />
      </Box>
    </Box>
  )
}

const Investors = ({ ...rest }) => (
  <Flex
    pt={9}
    display="grid"
    gridRowGap={5}
    gridTemplateColumns="repeat(6, 1fr)"
    {...rest}
  >
    {list.map((item, i) => (
      <Item key={i} {...item} />
    ))}
  </Flex>
)

export { Investors }
