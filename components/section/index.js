import React, { useState, useEffect } from 'react'
import css from '@styled-system/css'
import { Flex, Box } from 'blockstack-ui'
import { useSectionVariant } from '@common/hooks'
import { Wrapper } from '@components/wrapper/index'
import { titleProps, titleStyles } from '@common/theme'
import { SectionContextProvider, defaultSectionTheme } from '@common/context'
import useIsInViewport from 'use-is-in-viewport'
import { transition } from '@common/theme'
import ChevronRightIcon from 'mdi-react/ChevronRightIcon'
import { useHover } from 'use-events'
import Link from 'next/link'
/**
 * SectionWrapper
 *
 * This is our wrapper component for our sections. It's connected to our sectionTheme context.
 * It can take a `variant` prop (white, ink, blue), and there are various other connected components
 * that if contained within this section, will automatically adjust their colors (Text, Title).
 *
 * @prop {String} variant - The theme variant of this section: white, ink, blue
 * @prop {ReactNode|ReactNodeArray} children - the children of the component
 * @prop {String} bg - to override the bg of a given variant
 * @prop {Object} rest - any additional props for the Wrapper component
 */

const SectionWrapper = ({ children, bg, parentOverflow, ...rest }) => {
  const { fills } = useSectionVariant()

  return (
    <Flex
      css={css({
        '& *::selection': {
          bg: fills.inverted,
          color: fills.primary,
          opacity: 1
        },
        '& a:link': {
          textDecoration: 'underline'
        }
      })}
      flexGrow={1}
      width={1}
      bg={bg ? bg : fills.primary}
      overflow={parentOverflow}
    >
      <Wrapper
        alignItems="center"
        flexGrow={1}
        py={[7, 7, 9]}
        flexDirection={['column', 'column', 'row']}
        flexWrap="wrap"
        {...rest}
      >
        {children}
      </Wrapper>
    </Flex>
  )
}

/**
 * Title
 *
 * This is a smart component. This is connected to our sectionTheme context.
 * It will change colors based off of the theme that the section parent is set to.
 *
 * @prop {String|ReactNode} is - the dom element passed, or a component
 * @prop {Object} rest - all additional props to be passed to the component
 */
const Title = ({ is = 'h1', ...rest }) => {
  const { text } = useSectionVariant()

  const fontStyles = titleStyles[is] || {}

  return (
    <Box
      is={is}
      {...titleProps}
      {...fontStyles}
      color={text.title}
      m={0}
      p={0}
      {...rest}
    />
  )
}

/**
 * Text
 *
 * This is a smart component. This is connected to our sectionTheme context.
 * It will change colors based off of the theme that the section parent is set to.
 *
 * @prop {String|ReactNode} is - the dom element passed, or a component, default is `p`
 * @prop {Object} rest - all additional props to be passed to the component
 */
const Text = ({ is = 'p', ...rest }) => {
  const { text, bg } = useSectionVariant()
  const isLink = is.toString() === 'a'
  const shadow = 1
  return (
    <Box
      fontFamily="default"
      lineHeight={5}
      fontSize={3}
      fontWeight={400}
      is={is}
      m={0}
      p={0}
      css={
        isLink
          ? css({
              '&': {
                fontWeight: '500',
                color: text.hover,
                textDecoration: 'none !important',
                textShadow: `-${shadow}px -${shadow}px 0 ${bg}, ${shadow}px -${shadow}px 0 ${bg}, -${shadow}px ${shadow}px 0 ${bg}, ${shadow}px ${shadow}px 0 ${bg}`,
                backgroundRepeat: 'repeat-x',
                backgroundImage: `url('data:image/svg+xml;utf8,<svg preserveAspectRatio="none" viewBox="0 0 1 1" xmlns="http://www.w3.org/2000/svg"><line x1="0" y1="0" x2="1" y2="1" stroke="${text.hover}" /></svg>')`,
                backgroundSize: `1px 0.9px`,
                backgroundPosition: `0 calc(1em + 1px)`
              },
              '&:hover': {
                textDecoration: 'none !important',
                color: text.hover,
                backgroundImage: `url('data:image/svg+xml;utf8,<svg preserveAspectRatio="none" viewBox="0 0 1 1" xmlns="http://www.w3.org/2000/svg"><line x1="0" y1="0" x2="1" y2="1" stroke="transparent" /></svg>')`
              }
            })
          : undefined
      }
      color={text.body}
      {...rest}
    />
  )
}

/**
 * Pane
 *
 * This component is what our sections are made of, think of it as a section of a section.
 * The width is default to be half on larger screens, and then bump up to full width on smaller screens.
 *
 * @prop {Object} rest - all additional props to be passed to the component
 */
const Pane = ({ type, ...rest }) => (
  <Flex
    flexDirection="column"
    width={[1, 1, type === 'graphic' ? `calc(50% - 64px)` : `calc(50% - 12px)`]}
    order={type === 'graphic' ? [-1, -1, 'unset'] : 'unset'}
    {...rest}
  />
)

/**
 * Section
 *
 * This is our main section component. It is wrapped in the sectionTheme context.
 * Contained within it is the SectionWrapper component which give bounds to our
 * content, among other things.
 *
 * @prop {String} alignment - to determine visual alignment of content. accepted values: default, centered
 * @prop {String} variant - the variant of the section: white, ink, blue
 * @prop {Object} rest - all additional props to be passed to the component
 */
const Section = ({
  alignment = 'default',
  variant = defaultSectionTheme,
  noWrapper,
  bg,
  ...rest
}) => {
  const [isInViewport, targetRef] = useIsInViewport({
    modTop: '0px',
    modRight: '0px',
    modBottom: '-150px',
    modLeft: '0px'
  })
  const [isInView, setInView] = useState(isInViewport)
  useEffect(() => {
    if (isInViewport && !isInView) {
      setInView(true)
    }
  }, [isInViewport])
  return (
    <div ref={targetRef}>
      <SectionContextProvider value={{ variant, isInViewport: isInView, bg }}>
        {noWrapper ? rest.children : <SectionWrapper bg={bg} {...rest} />}
      </SectionContextProvider>
    </div>
  )
}

const TextLinkComponent = ({ path, children }) =>
  path ? (
    <Link href={path} prefetch>
      {children}
    </Link>
  ) : (
    children
  )

/**
 * TextLink
 *
 * This is a link with an animated chevron the moves to the right on hover. Typically used in sections for a cta that is a text link.
 *
 * @prop {Object} action - action object with at least a 'label' key.
 * @prop {Boolean} hideArrow - by default there is a chevron showing, this hides it
 * @prop {Object} rest - all additional props to be passed to the component
 */
const TextLink = ({ action, hideArrow, hovered: hoverProp, ...rest }) => {
  const { label, href, path, ...actionProps } = action
  if (href && path) {
    console.error(
      'TextLink `action` object should only contain href or path, not both.'
    )
  }

  const [isHovered, bind] = useHover()
  const hovered = hoverProp || isHovered
  return (
    <TextLinkComponent path={path}>
      <Text
        is="a"
        display="inline-flex"
        alignSelf="flex-start"
        style={{ textDecoration: 'none' }}
        color="blue"
        alignItems="center"
        pt={4}
        fontSize={2}
        target={href ? '_blank' : undefined}
        href={path || href}
        backgroundImage="unset !important"
        {...rest}
        {...bind}
        {...actionProps}
      >
        <Box
          is="span"
          style={{ textDecoration: hovered ? 'underline' : 'none' }}
        >
          {label}
        </Box>
        {!hideArrow ? (
          <Box size="18px">
            <ChevronRightIcon
              style={{
                display: 'block',
                transition,
                transform: `translate3d(${hovered ? '2px' : '-1px'}, 1px, 0px)`
              }}
              size="18px"
            />
          </Box>
        ) : null}
      </Text>
    </TextLinkComponent>
  )
}

Section.Title = Title
Section.Text = Text
Section.Pane = Pane

export { Section, Title, Text, TextLink }
