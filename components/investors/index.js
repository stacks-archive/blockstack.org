import React from 'react'
import { Flex, Box, Type } from 'blockstack-ui'
import { Image } from '@components/image'

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
    name: 'SV Angel',
    href: 'https://svangel.com/',
    slug: 'sva'
  },
  {
    name: 'Lux Capital',
    href: 'https://www.luxcapital.com/',
    slug: 'lux'
  },
  {
    name: 'Version One',
    href: 'https://versionone.vc/',
    slug: 'version-one'
  },
  {
    name: 'Digital Currency Group',
    href: 'https://dcg.co/',
    slug: 'dcg'
  },
  {
    name: 'Shana Fisher',
    href: 'https://angel.co/shana-fisher',
    slug: 'shana-fisher'
  },
  {
    name: 'Naval Ravikant',
    href: 'https://angel.co/naval',
    slug: 'naval-ravikant'
  },
  {
    name: 'Kal Vepuri',
    href: 'https://angel.co/kal',
    slug: 'kal'
  }
]

const Item = ({ name, slug, href, ...rest }) => {
  const image = `images/investors/${slug}.png`
  return (
    <Box
      is="a"
      display="block"
      href={href}
      target="_blank"
      pb={4}
      border="none !important"
      width={[1 / 2, 1 / 3]}
    >
      <Box maxWidth="130px" mx="auto">
        <Image src={image} alt={name} />
      </Box>
      <Box pt={3} textAlign="center" mx="auto">
        <Type>{name}</Type>
      </Box>
    </Box>
  )
}

const Investors = ({ ...rest }) => (
  <Box>
    <Flex pt={5} justifyContent="space-evenly" flexWrap="wrap">
      {list.map((item, i) => (
        <Item key={i} {...item} />
      ))}
    </Flex>
    <Box textAlign="center">
      <Type is="a" href="https://angel.co/blockstack" target="_blank">
        See full list
      </Type>
    </Box>
  </Box>
)

export { Investors }
