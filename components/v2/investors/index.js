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
    name: 'Lux Capital',
    href: 'https://www.luxcapital.com/',
    slug: 'lux',
    src: 'https://blockstack-www.imgix.net/logos/lux-logo.png'
  },
  {
    name: 'Y Combinator',
    href: 'https://www.ycombinator.com/',
    slug: 'ycombinator',
    src: 'https://blockstack-www.imgix.net/logos/y-combinator-logo.png',
    width: 159
  },
  {
    name: 'Version one',
    href: 'https://versionone.vc/',
    slug: 'versionone',
    src: 'https://blockstack-www.imgix.net/logos/versionone-logo.png',
    width: 154
  },
  {
    name: 'Foundation Capital',
    href: 'https://foundationcapital.com/',
    slug: 'foundation-capital',
    src: 'https://blockstack-www.imgix.net/logos/foundation-capital-logo.png',
    width: 125
  },

  {
    name: 'Digital Currency Group',
    href: 'https://dcg.co/',
    slug: 'dcg',
    src: 'https://blockstack-www.imgix.net/logos/dcg-logo.png',
    width: 90
  },
  {
    name: 'Huobi Capital',
    href: 'https://www.hbg.com/en-us/topic/capital/',
    slug: 'dcg',
    src: 'https://blockstack-www.imgix.net/logos/huobi-capital-logo.png',
    width: 198
  },
  {
    name: 'SV Angel',
    href: 'https://svangel.com/',
    slug: 'sva',
    width: 100
  },
  {
    name: 'Winklevoss Capital',
    href: 'https://winklevosscapital.com/',
    slug: 'dcg',
    src: 'https://blockstack-www.imgix.net/logos/winklevoss-logo.png',
    width: 159
  },
  {
    name: 'FBG Capital',
    href: 'https://www.fbg.capital/',
    slug: 'dcg',
    src: 'https://blockstack-www.imgix.net/logos/fbg-capital-logo.png',
    width: 128
  },
  {
    name: 'ZhenFund',
    href: 'http://en.zhenfund.com/',
    slug: 'dcg',
    src: 'https://blockstack-www.imgix.net/logos/zhenfund-logo.png',
    width: 118
  }
  // {
  //   name: 'Naval Ravikant',
  //   href: 'https://angel.co/naval',
  //   slug: 'naval-ravikant',
  //   borderRadius: '100%',
  //   width: 72
  // },
  // {
  //   name: 'Shana Fisher',
  //   href: 'https://angel.co/shana-fisher',
  //   slug: 'shana-fisher',
  //   borderRadius: '100%',
  //   width: 72
  // },
  //
  // {
  //   name: 'Kal Vepuri',
  //   href: 'https://angel.co/kal',
  //   slug: 'kal',
  //   borderRadius: '100%',
  //   width: 72
  // }
]

const Item = ({ name, slug, href, src, width, ...rest }) => {
  const image = src || `https://blockstack-www.imgix.net/investors/${slug}.png`
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      pb={[6, 6, 0]}
      width={['50%', '50%', '33.33%', 'unset']}
    >
      <Box
        is="a"
        display="block"
        href={href}
        target="_blank"
        mx={5}
        mb={[4, 4, 7]}
        border="none !important"
        maxWidth={width || '60px'}
        overflow="hidden"
        {...rest}
      >
        <Box>
          <Image noBlur src={image} alt={name} />
        </Box>
      </Box>
    </Flex>
  )
}

const Investors = ({ ...rest }) => (
  <Flex
    flexWrap="wrap"
    justifyContent={['flex-start', 'flex-start', 'center']}
    pt={9}
    {...rest}
  >
    {list.map((item, i) => (
      <Item key={i} {...item} />
    ))}
  </Flex>
)

export { Investors }
