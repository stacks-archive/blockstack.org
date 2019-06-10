import React from 'react'
import { Flex, Box, Type } from 'blockstack-ui'
import { useHover } from 'use-events'
import { Image } from '@components/v2/image'
import { transition } from '@common/theme'
import { TextLink } from '@components/v2/section'
const FloatingLinkElement = ({ href }) => (
  <Box
    is="a"
    href={href}
    target="_blank"
    position="absolute"
    width={'100%'}
    height={'100%'}
    left={0}
    top={0}
    zIndex={999}
  />
)

const handleSize = (size) => [size * 0.6, size * 0.8, size]

const list = [
  {
    name: 'Union Square Ventures',
    href: 'https://www.usv.com/',
    slug: 'usv',
    width: handleSize(72)
  },
  {
    name: 'Y Combinator',
    href: 'https://www.ycombinator.com/',
    slug: 'ycombinator',
    src: 'https://blockstack-www.imgix.net/logos/y-combinator-logo.png',
    width: handleSize(185)
  },
  {
    name: 'Lux Capital',
    href: 'https://www.luxcapital.com/',
    slug: 'lux',
    src: 'https://blockstack-www.imgix.net/logos/lux-logo.png',
    width: handleSize(80)
  },
  {
    name: 'Winklevoss Capital',
    href: 'https://winklevosscapital.com/',
    slug: 'dcg',
    src: 'https://blockstack-www.imgix.net/logos/winklevoss-logo.png',
    width: handleSize(159)
  },

  {
    name: 'Foundation Capital',
    href: 'https://foundationcapital.com/',
    slug: 'foundation-capital',
    src: 'https://blockstack-www.imgix.net/logos/foundation-capital-logo.png',
    width: handleSize(150)
  },

  {
    name: 'Digital Currency Group',
    href: 'https://dcg.co/',
    slug: 'dcg',
    src: 'https://blockstack-www.imgix.net/logos/dcg-logo.png',
    width: handleSize(105)
  },
  {
    name: 'Huobi Capital',
    href: 'https://www.hbg.com/en-us/topic/capital/',
    slug: 'dcg',
    src: 'https://blockstack-www.imgix.net/logos/huobi-capital-logo.png',
    width: handleSize(166)
  },
  {
    name: 'SV Angel',
    href: 'https://svangel.com/',
    slug: 'sva',
    width: handleSize(133)
  },
  {
    name: 'Version one',
    href: 'https://versionone.vc/',
    slug: 'versionone',
    src: 'https://blockstack-www.imgix.net/logos/versionone-logo.png',
    width: handleSize(165)
  },

  {
    name: 'FBG Capital',
    href: 'https://www.fbg.capital/',
    slug: 'dcg',
    src: 'https://blockstack-www.imgix.net/logos/fbg-capital-logo.png',
    width: handleSize(155)
  },
  {
    name: 'ZhenFund',
    href: 'http://en.zhenfund.com/',
    slug: 'dcg',
    src: 'https://blockstack-www.imgix.net/logos/zhenfund-logo.png',
    width: handleSize(131)
  },
  {
    name: 'See all',
    href: 'http://angel.co/blockstack/'
  }
]

const Item = ({
  isBottomRow,
  isSecondColumn,
  isEven,
  isLast,
  name,
  slug,
  href,
  src,
  width,
  ...rest
}) => {
  const [hovered, bind] = useHover()
  const image = src || `https://blockstack-www.imgix.net/investors/${slug}.png`
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      py={5}
      minHeight={[142, 142, 184]}
      width={['50%', '50%', '33.33%']}
      position="relative"
      borderBottom={[
        !isLast ? '1px solid' : 'none',
        !isLast ? '1px solid' : 'none',
        !isBottomRow ? '1px solid' : 'none'
      ]}
      borderLeft={[
        'none',
        'none',
        isSecondColumn ? '1px solid' : 'none',
        isSecondColumn ? '1px solid' : 'none'
      ]}
      borderRight={[
        !isEven ? '1px solid' : 'none',
        !isEven ? '1px solid' : 'none',
        isSecondColumn ? '1px solid' : 'none',
        isSecondColumn ? '1px solid' : 'none'
      ]}
      borderColor={['sky.25', 'sky.25', 'sky.25', 'sky.25']}
      {...bind}
    >
      <FloatingLinkElement href={href} />
      {src || slug ? (
        <Box
          transform={hovered ? 'translateY(-8px)' : 'none'}
          transition={transition}
          maxWidth={width || '60px'}
          overflow="hidden"
          {...rest}
        >
          <Box>
            <Image noBlur src={image} alt={name} />
          </Box>
        </Box>
      ) : (
        <Flex alignItems="center" justifyContent="center">
          <TextLink
            hovered={hovered}
            action={{
              label: name,
              href
            }}
          />
        </Flex>
      )}
    </Flex>
  )
}

const Investors = ({ ...rest }) => (
  <Flex
    flexWrap="wrap"
    justifyContent={['flex-start', 'flex-start', 'flex-start']}
    pt={[5, 5, 8]}
    {...rest}
  >
    {list.map((item, i) => {
      const isFirstColumn = i % 3 === 0
      const isSecondColumn = i % 3 === 1
      const isThirdColumn = i % 3 === 2
      const isLast = i === list.length - 1
      const isEven = i % 2
      const isBottomRow = isLast || i === list.length - 2 || i === list.length - 3
      return (
        <Item
          isBottomRow={isBottomRow}
          isEven={isEven}
          isLast={isLast}
          isSecondColumn={isSecondColumn}
          key={i}
          {...item}
        />
      )
    })}
  </Flex>
)

export { Investors }
