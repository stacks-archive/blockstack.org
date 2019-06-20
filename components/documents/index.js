import React from 'react'
import { Section } from '@components/section/index'
import { Box, Flex } from 'blockstack-ui'
import ArrowUpRightIcon from 'mdi-react/ArrowUpRightIcon'
import FilePdfIcon from 'mdi-react/FilePdfBoxIcon'
import { useHover } from 'use-events'
import { transition } from '@common/theme'

const DocumentItem = ({
  name,
  description,
  href,
  label = 'View',
  isLast,
  style,
  ...rest
}) => {
  let Icon = ArrowUpRightIcon
  const isPdf = href && href.toString().includes('pdf')
  if (isPdf) {
    Icon = FilePdfIcon
  }
  const [hovered, bind] = useHover()
  return (
    <Flex
      flexDirection="column"
      maxWidth={['100%', '100%', 288]}
      width={1}
      mr={!isLast ? [0, 0, 5] : 0}
      mb={5}
      borderRadius="8px"
      is="a"
      href={href}
      target="_blank"
      style={{
        textDecoration: 'none',
        ...style
      }}
      boxShadow={
        hovered
          ? '0px 16px 24px rgba(0, 0, 0, 0.04), 0px 1px 2px rgba(0, 0, 0, 0.08)'
          : '0px 2px 12px rgba(0, 0, 0, 0.04), 0px 1px 2px rgba(0, 0, 0, 0.08)'
      }
      cursor={hovered ? 'pointer' : 'unset'}
      transition={transition}
      transform={`translate3d(0,${hovered ? -8 : 0}px,0)`}
      willChange="transform"
      {...rest}
      {...bind}
    >
      <Flex
        flexGrow={1}
        borderRadius="8px 8px 0 0"
        bg="white"
        border="1px solid"
        borderColor="sky.25"
        borderBottom="0px"
        p={5}
        flexDirection="column"
      >
        <Box>
          <Section.Title is="h4">{name}</Section.Title>
        </Box>
        <Box pt={4}>
          <Section.Text color="ink.25" fontSize={1}>
            {description}
          </Section.Text>
        </Box>
      </Flex>
      <Flex
        border="1px solid"
        borderRadius="0 0 8px 8px"
        borderColor="sky.25"
        bg="sky.10"
        px={5}
        py={4}
        alignItems="center"
      >
        <Section.Text
          display="flex"
          fontWeight={500}
          fontSize={1}
          color={hovered ? 'blue' : 'ink'}
        >
          <Box is="span">{label}</Box>
          <Box
            opacity={0.25}
            pl={1}
            is="span"
            display="block"
            transform="translateY(1px)"
          >
            <Icon size={isPdf ? 20 : 14} />
          </Box>
        </Section.Text>
      </Flex>
    </Flex>
  )
}

const Documents = ({ items, ...rest }) => (
  <Flex flexWrap="wrap" {...rest}>
    {items.map((item, key, arr) => (
      <DocumentItem {...item} key={key} isLast={key + 1 === arr.length} />
    ))}
  </Flex>
)

export { Documents, DocumentItem }
