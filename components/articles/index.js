import React from 'react'
import dayjs from 'dayjs'
import { Box, Flex } from 'blockstack-ui'
import { Title, Text } from '@components/section/index'
import { useHover } from 'use-events'

const getNewsItems = (items, limit) =>
  items.filter((item, index) => index + 1 <= limit)

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
    <Box
      display="block"
      size={24}
      borderRadius="100%"
      is="img"
      alt={`Avatar of ${name}`}
      src={avatar}
    />
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
        <User
          name={user && user.name}
          avatar={user && user.avatar_urls['24']}
        />
        <Subtitle pt={1}> &bull; </Subtitle>
        <Subtitle pt={2} pl={2}>
          {dayjs(data.date).format('MMMM DD YYYY')}
        </Subtitle>
      </Flex>
    </Box>
  )
}
const News = ({ items, limit = 4, users, ...rest }) =>
  items && items.length
    ? getNewsItems(items, limit).map((item, i) => (
        <NewsItem key={i} isLast={i + 1 === limit} data={item} users={users} />
      ))
    : null

export { News, NewsItem }
