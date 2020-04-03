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
    opacity={0.8}
    {...rest}
  />
)

const User = ({ avatar, name, ...rest }) => (
  <Flex pt={2}>
    {/*<Box*/}
    {/*  display="block"*/}
    {/*  size={20}*/}
    {/*  borderRadius="100%"*/}
    {/*  is="img"*/}
    {/*  alt={`Avatar of ${name}`}*/}
    {/*  src={avatar}*/}
    {/*/>*/}
    <Subtitle transform="translateY(-1px)">{name}</Subtitle>
  </Flex>
)

const NewsItem = ({ isLast, users, data }) => {
  const title = data.title.rendered
  const user = users && users.find((user) => user.id === data.author)

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
      borderBottom={'1px solid'}
      borderColor="#F2F2F7"
      py={4}
      mb={isLast && 7}
      {...bind}
    >
      <Title
        is="h4"
        color={hovered ? 'blue' : 'ink'}
        fontSize={3}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <Flex alignItems="center">
        <User
          name={user && user.name}
          avatar={user && user.avatar_urls['24']}
        />
        <Subtitle pt={1} transform="translateY(0px)">
          {' '}
          &bull;{' '}
        </Subtitle>
        <Subtitle pt={2} pl={2} transform="translateY(-1px)">
          {dayjs(data.date).format('MMMM DD YYYY')}
        </Subtitle>
      </Flex>
    </Box>
  )
}

const News = ({ items, limit = 4, users, ...rest }) =>
  getNewsItems(items, limit).map((item, i) => (
    <NewsItem key={i} isLast={i + 1 === limit} data={item} users={users} />
  ))

export { News, NewsItem }
