import React from 'react'
import { Text, Title } from '@components/section/index'
import { Box, Flex } from 'blockstack-ui'
import { Image } from '@components/v2/image/index'

const Name = ({ name, ...rest }) => (
  <Box {...rest}>
    <Title is="h4">{name}</Title>
  </Box>
)

const Photo = ({ photo, name, title, ...rest }) => (
  <Box borderRadius="8px" overflow="hidden" {...rest}>
    <Image
      src={photo}
      imgix={{
        fit: 'crop',
        crop: 'faces',
        w: 300,
        h: 300
      }}
      alt={`Photo of ${name}, ${title}`}
    />
  </Box>
)

const TitleOfPerson = ({ title, ...rest }) => (
  <Box {...rest}>
    <Text fontSize={1}>{title}</Text>
  </Box>
)

const Biography = ({ bio, ...rest }) => (
  <Box {...rest}>
    <Text fontSize={2}>{bio}</Text>
  </Box>
)

const SpacerCard = ({ ...rest }) => (
  <Box
    width={1}
    maxWidth={['100%', 'calc(50% - 16px)', 'calc(33.3333% - 16px)']}
    {...rest}
  />
)

/**
 * PersonCard
 *
 * This is a card like component that renders a photo, name, title, and biography.
 *
 * @param {string} name - the name of the person
 * @param {string} title - the title/position of the person
 * @param {string} photo - the imgix url for the photo of the person
 * @param {string} bio - the biography/desc of the person
 * @param {object} rest - any additional props for wrapper component
 */

const PersonCard = ({ name, title, photo, bio, ...rest }) => (
  <Box
    pb={9}
    maxWidth={['100%', 'calc(50% - 16px)', 'calc(33.3333% - 16px)']}
    {...rest}
  >
    <Photo title={title} name={name} photo={photo} />
    <Box mt={5}>
      <Name name={name} />
      <TitleOfPerson title={title} py={1} opacity={0.8} />
      <Biography bio={bio} pt={3} />
    </Box>
  </Box>
)

/**
 * PersonsList
 *
 * This is a generic component to map an array of items
 * and render a PersonCard component.
 *
 * @param {array} items - the array of persons
 * @param {object} rest - any additional props for wrapper component
 */
const PersonsList = ({ items, ...rest }) => {
  return (
    <Flex
      pt={9}
      flexWrap="wrap"
      justifyContent="space-between"
      flexDirection={['column', 'row', 'row']}
      {...rest}
    >
      {items.map((item, key) => (
        <PersonCard {...item} key={key} />
      ))}
      <SpacerCard />
    </Flex>
  )
}

export { PersonsList, PersonCard }
