import React from 'react'
import dayjs from 'dayjs'
import { Box, Flex } from 'blockstack-ui'

const Subtitle = ({ ...rest }) => (
  <Box
    style={{
      fontFamily: `-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif !important`,
      color: `#33333E`
    }}
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

  return (
    <Box
      display="block"
      is="a"
      href={data.link}
      target="_blank"
      borderBottom={!isLast ? '1px solid' : undefined}
      borderColor="#F2F2F7"
      py={3}
    >
      <Box fontSize={2} fontWeight={500}>
        <Box dangerouslySetInnerHTML={{ __html: title }} />
      </Box>
      <Flex alignItems="center">
        <User name={user.name} avatar={user.avatar_urls['24']} />
        <Subtitle pt={2}> | </Subtitle>
        <Subtitle pt={2} pl={2}>
          {dayjs(data.date).format('MMMM DD YYYY')}
        </Subtitle>
      </Flex>
    </Box>
  )
}
const News = ({ items, limit = 5, users, ...rest }) =>
  items && items.length ? (
    <Flex
      position="relative"
      zIndex={999}
      justifyContent="center"
      mx="auto"
      width={[
        'calc(100% - 1.5rem * 2)',
        'calc(100% - 2.5rem * 2)',
        'calc(100% - 7.5rem * 2)'
      ]}
      maxWidth="1200px"
      alignItems="center"
      flexDirection={['column', 'column', 'column', 'row']}
      pt="5rem"
      pb="7rem"
    >
      <Flex
        alignItems="center"
        justifyContent={['flex-start', 'flex-start', 'flex-start', 'center']}
        flexGrow={1}
        width={1}
        pb={[2, 2, 2, 7]}
      >
        <Flex
          width={1}
          flexDirection={['row', 'row', 'row', 'column']}
          alignItems={['center', 'center', 'center', 'flex-start']}
          justifyContent="space-between"
        >
          <Box is={'h2'}>Latest News</Box>
          <Box
            pt={2}
            is={'a'}
            href="https://blog.blockstack.org"
            target="_blank"
          >
            View all news
          </Box>
        </Flex>
      </Flex>
      <Box flexShrink={0} width={[1, 1, 1, 2 / 3]}>
        {items.map((item, i) =>
          i <= limit ? (
            <NewsItem key={i} isLast={i === limit} data={item} users={users} />
          ) : null
        )}
      </Box>
    </Flex>
  ) : null

export { News, NewsItem }
