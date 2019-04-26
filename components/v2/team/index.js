import React from 'react'
import { Box, Flex } from 'blockstack-ui'
import { teamMembers } from '@components/team-members/data'
import { slugify } from '@common/es6'
import { Image } from '@components/v2/image'
import { useHover } from 'use-events'
import { Text, Title } from '@components/v2/section'
import { transition } from '@common/theme'

/**
 * BioCard
 *
 * This card component is what is displayed when a user
 * hovers over a team members avatar to display name/bio.
 *
 * @param {string} name - the name of the person
 * @param {string} bio - the bio of the person
 * @param {boolean} showing - if the card should be visible
 * @param {object} rest - any additional props for wrapper
 */
const BioCard = ({ name, bio, showing, ...rest }) => {
  return (
    <Box
      top="90px"
      pt={5}
      left={[-50, -50, 'unset']}
      position="absolute"
      style={{ pointerEvents: 'none' }}
      zIndex={5}
      display={['none', 'none', 'block']}
      {...rest}
    >
      <Box
        bg="white"
        boxShadow="0px 1px 2px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.04);"
        textAlign="center"
        width={[200, 200, 300]}
        borderRadius="4px"
        p={5}
        transition={transition}
        transform={`translate3d(0,${showing ? -10 : -20}px,0)`}
        opacity={showing ? 1 : 0}
      >
        <Title pb={3} is="h4">
          {name}
        </Title>
        <Text fontSize={2} textAlign="left">
          {bio}
        </Text>
      </Box>
    </Box>
  )
}

/**
 * TeamItem
 *
 * This is the individual item for each team member. Displays a photo,
 * and then controls hover state to display BioCard
 *
 * @param {object} item - the object of the person, contains name, bio, photo, id
 * @param {object} rest - any additional props for wrapper
 */
const TeamItem = ({ item, ...rest }) => {
  const filename = slugify(item.name)
  const photo = `https://blockstack-www.imgix.net/team/${filename}.jpg`

  const [hovered, bind] = useHover()
  return (
    <Flex position="relative" alignItems="center" justifyContent="center">
      <Box
        transition={transition}
        transform={`translate3d(0,${hovered ? -10 : 0}px,0)`}
      >
        <Flex
          alignItems="center"
          justifyContent="center"
          overflow="hidden"
          size={[70, 70, 100]}
          borderRadius="100%"
          bg="sky.10"
          transition={transition}
          boxShadow="0px 2px 12px rgba(0, 0, 0, 0.04), 0px 1px 2px rgba(0, 0, 0, 0.3)"
          {...rest}
          {...bind}
        >
          <Image
            transition={transition}
            transform={`scale(${hovered ? 1.15 : 1})`}
            imgix={{
              fit: 'crop',
              crop: 'faces',
              w: 400,
              h: 400
            }}
            src={photo}
            position="relative"
          />
        </Flex>
      </Box>
      <BioCard bio={item.bio} showing={hovered} name={item.name} />
    </Flex>
  )
}
/**
 * Team
 * This is the component that renders out our team members. It maps an array of
 * items and renders the TeamItem component.
 *
 * TODO: remove css grid / polyfill
 *
 * @param {array} items - defaults to const teamMembers
 * @param {object} rest - any additional props for wrapper
 */
const Team = ({ items = teamMembers, ...rest }) => {
  return (
    <Flex
      py={8}
      display="grid"
      flexWrap="wrap"
      gridRowGap={8}
      gridTemplateColumns={[
        'repeat(3, 1fr)',
        'repeat(3, 1fr)',
        'repeat(6, 1fr)'
      ]}
      {...rest}
    >
      {items.map((item, key) => (
        <TeamItem item={item} key={key} />
      ))}
    </Flex>
  )
}

export { Team }
