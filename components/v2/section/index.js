import React, { useState, useEffect } from 'react'
import css from '@styled-system/css'
import { Flex, Box } from 'blockstack-ui'
import { useSectionVariant } from '@common/hooks'
import { Wrapper } from '@components/v2/wrapper'
import { titleProps, titleStyles } from '@common/theme'
import { SectionContextProvider, defaultSectionTheme } from '@common/context'
import useIsInViewport from 'use-is-in-viewport'

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

const SectionWrapper = ({ children, bg, ...rest }) => {
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
    >
      <Wrapper
        alignItems="center"
        flexGrow={1}
        minHeight="60vh"
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
      css={css({
        '& + p': {
          mt: is.toString() === 'h1' || is.toString() === 'h2' ? 5 : 0 // this will give any <Text> or <p> a padding set to 5 if following this component
        }
      })}
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
  const { text } = useSectionVariant()
  const isLink = is.toString() === 'a'
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
              '&:hover': {
                color: text.hover
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
const Pane = ({ ...rest }) => (
  <Flex flexDirection="column" width={[1, 1, 1 / 2]} {...rest} />
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
  ...rest
}) => {
  const [isInViewport, targetRef] = useIsInViewport({ threshold: 150 })
  const [isInView, setInView] = useState(isInViewport)
  useEffect(() => {
    if (isInViewport && !isInView) {
      setInView(true)
    }
  }, [isInViewport])
  return (
    <div ref={targetRef}>
      <SectionContextProvider value={{ variant, isInViewport: isInView }}>
        {noWrapper ? rest.children : <SectionWrapper {...rest} />}
      </SectionContextProvider>
    </div>
  )
}

Section.Title = Title
Section.Text = Text
Section.Pane = Pane

export { Section, Title, Text }
