import React from 'react'
import dayjs from 'dayjs'
import { Box, Flex } from 'blockstack-ui'
import { Title, Text } from '@components/v2/section'
import { useHover } from 'use-events'

const slugs = [
  'introducing-awario-app-reviewer',
  'bolt-a-thon-worlds-first-online-lightning-network-conference-and-hackathon',
  'developer-success-commitment-highlights-q1-2019',
  'introducing-new-internet-labs-the-digital-rights-reviewer-for-app-mining'
]

// const ids = [1169, 1118, 1099, 1059, 518, 417]
const ids = [1169, 1118, 1099, 1059]

const getNewsItems = (items) =>
  items.filter((item) => slugs.find((slug) => item.slug === slug))

const Subtitle = ({ ...rest }) => (
  <Text
    is="span"
    fontSize={1}
    fontWeight="500"
    pl={2}
    opacity={0.8}
    {...rest}
  />
)

const User = ({ avatar, name, ...rest }) => (
  <Flex pt={2}>
    <Box display="block" size={24} borderRadius="100%" is="img" src={avatar} />
    <Subtitle>{name}</Subtitle>
  </Flex>
)

const NewsItem = ({ isLast, users, data }) => {
  const title = data.title.rendered
  const user = users.find((user) => user.id === data.author)

  const [hovered, bind] = useHover()

  return (
    <Box
      display="block"
      is="a"
      style={{
        textDecoration: 'none'
      }}
      href={data.link}
      target="_blank"
      borderBottom={!isLast ? '1px solid' : undefined}
      borderColor="#F2F2F7"
      py={3}
      {...bind}
    >
      <Title
        is="h4"
        color={hovered ? 'blue' : 'ink'}
        fontSize={2}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <Flex alignItems="center">
        <User name={user.name} avatar={user.avatar_urls['24']} />
        <Subtitle pt={1}> &bull; </Subtitle>
        <Subtitle pt={2} pl={2}>
          {dayjs(data.date).format('MMMM DD YYYY')}
        </Subtitle>
      </Flex>
    </Box>
  )
}
const News = ({ items, limit = 3, users, ...rest }) =>
  items && items.length
    ? getNewsItems(items).map((item, i) => (
        <NewsItem key={i} isLast={i === limit} data={item} users={users} />
      ))
    : null

export { News, NewsItem }
