import React from 'react'
import { SectionThemeProvider, defaultSectionTheme } from '@common/context'
import { useSectionTheme } from '@common/hooks'
import { Wrapper } from '@components/v2/wrapper'
import { Flex, Box } from 'blockstack-ui'
import css from '@styled-system/css'

const SectionWrapper = ({
  variant = defaultSectionTheme,
  children,
  ...rest
}) => {
  const { fills } = useSectionTheme()

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
      bg={fills.primary}
    >
      <Wrapper alignItems="center" flexGrow={1} {...rest}>
        {children}
      </Wrapper>
    </Flex>
  )
}

const titleProps = {
  fontFamily: 'IBM Plex Mono',
  fontStyle: 'normal',
  fontWeight: '500',
  lineHeight: 3,
  letterSpacing: '-0.02em'
}

const Title = ({ ...rest }) => {
  const { text } = useSectionTheme()
  return (
    <Box
      is="h1"
      fontSize={[6, 6, 8]}
      css={css({
        '& + p': {
          mt: 5
        },
        ...titleProps
      })}
      color={text.title}
      m={0}
      p={0}
      {...rest}
    />
  )
}

const Text = ({ is = 'p', ...rest }) => {
  const { text } = useSectionTheme()
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

const Pane = ({ ...rest }) => (
  <Flex flexDirection="column" width={[1, 1, 1 / 2]} {...rest} />
)

const Section = ({ variant, ...rest }) => {
  return (
    <SectionThemeProvider value={variant}>
      <SectionWrapper {...rest} />
    </SectionThemeProvider>
  )
}

Section.Title = Title
Section.Text = Text
Section.Pane = Pane

export { Section }
