import React from 'react'
import { Box, Flex } from 'blockstack-ui'
import { Section } from '@components/v2/section'
import { Dots } from '@components/v2/vectors/dots'
import { Image } from '@components/v2/image'
import { useHover } from 'use-events'
import { transition, doubleShadow } from '@common/theme'

const CardHeader = ({ month, ...rest }) => {
  return (
    <Box px={5} py={4} borderBottom="1px solid" borderColor="sky.25" {...rest}>
      <Section.Title fontSize={2} is="h4" fontWeight={500}>
        {month} rankings
      </Section.Title>
    </Box>
  )
}

const apps = [
  {
    name: 'BitPatron',
    icon: 'https://appco.imgix.net/apps/97e47302-26d9-4483-b015-aa47ebc6c6a4',
    amount: '20,000',
    href: 'https://bitpatron.co'
  },
  {
    name: 'Graphite',
    icon: 'https://appco.imgix.net/apps/0ede3b38-c747-4613-bc8e-7c3a12689ba3',
    amount: '16,000',
    href: 'https://www.graphitedocs.com/'
  },
  {
    name: 'Recall',
    icon: 'https://appco.imgix.net/apps/ae938da5-bb0c-4496-8720-2493f7b2e9a0',
    amount: '12,800',
    href: 'https://app.recall.photos/'
  }
]

const Rank = ({ index }) => (
  <Box color="ink.25" pr={4} fontSize={1}>
    {index + 1}
  </Box>
)

const AppIcon = ({ src }) => (
  <Box
    borderRadius="12px"
    boxShadow={doubleShadow}
    flexShrink={0}
    size={[56, 48, 48, 56]}
    transform="translate3d(0,0,0)"
  >
    <Image
      src={src}
      borderRadius="12px"
      imgix={{
        w: 256,
        h: 256,
        fit: 'clip',
        q: 100
      }}
    />
  </Box>
)

const Details = ({ name, amount }) => (
  <Box pl={4}>
    <Section.Text fontSize={2} fontWeight={500}>
      {name} earned ${amount}
    </Section.Text>
  </Box>
)

const Item = ({ icon, name, amount, href, index, ...rest }) => {
  const [hovered, bind] = useHover()
  return (
    <Flex
      borderBottom="1px solid"
      borderColor="sky.25"
      py={[4]}
      px={5}
      position="relative"
      cursor={hovered ? 'pointer' : 'unset'}
      {...bind}
      {...rest}
    >
      <Box
        height="100%"
        width={'100%'}
        left={0}
        top={0}
        position="absolute"
        is="a"
        zIndex={99}
        href={href}
        target="_blank"
      />
      <Box
        height="100%"
        width={hovered ? '5px' : 0}
        bg="blue"
        left={0}
        top={0}
        position="absolute"
        transition="0.1s all ease-in-out"
      />
      <Flex
        alignItems="center"
        transition={transition}
        transform={hovered ? 'translateX(5px)' : 'none'}
      >
        <Rank index={index} />
        <AppIcon src={icon} />
        <Details name={name} amount={amount} />
      </Flex>
    </Flex>
  )
}
const Items = ({ items, ...rest }) => (
  <Box {...rest}>
    {items.map((item, key) => (
      <Item
        key={key}
        href={item.href}
        index={key}
        icon={item.icon}
        name={item.name}
        amount={item.amount}
      />
    ))}
  </Box>
)

const AppMiningGraphic = ({ data, ...rest }) => {
  const month = 'May'

  return (
    <Box
      ml="auto"
      mr={['auto', 'auto', 'unset']}
      minWidth={['unset', 'unset', '392px']}
      pb={6}
      mb={[7, 7, 0, 0]}
      position="relative"
      {...rest}
    >
      <Box
        position="relative"
        zIndex={99}
        bg="white"
        boxShadow="0px 8px 18px rgba(0, 0, 0, 0.04), 0px 1px 0px rgba(0, 0, 0, 0.06)"
        borderRadius="8px"
      >
        <CardHeader month={month} />
        <Items items={apps} />
        <Flex px={5} py={4} alignItems="center" justifyContent="center">
          <Box>
            <Section.Text
              fontSize={2}
              is="a"
              href="https://app.co/mining/latest"
              target="_blank"
            >
              View full ranking
            </Section.Text>
          </Box>
        </Flex>
      </Box>
      <Box
        position="absolute"
        left={-32}
        bottom={-12}
        maxWidth={['75%', '65%', '55%', '75%']}
        width={1}
      >
        <Dots color="sky.50" width={1} />
      </Box>
    </Box>
  )
}

export { AppMiningGraphic }
