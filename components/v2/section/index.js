import React from 'react'
import { SectionThemeProvider, defaultSectionTheme } from '@common/context'
import { useSectionTheme } from '@common/hooks'
import { Wrapper } from '@components/v2/wrapper'
import { Flex, Box } from 'blockstack-ui'
import css from '@styled-system/css'

const SectionWrapper = ({
  variant = defaultSectionTheme,
  children,
  bg,
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
      bg={bg ? bg : fills.primary}
    >
      <Wrapper
        alignItems="center"
        flexGrow={1}
        minHeight="60vh"
        flexDirection={['column', 'column', 'row']}
        flexWrap="wrap"
        {...rest}
      >
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

const Title = ({ is = 'h1', ...rest }) => {
  const { text } = useSectionTheme()
  const styles = {
    h1: {
      fontSize: [6, 6, 8],
      fontWeight: 500,
      lineHeight: ['64px']
    },
    h2: {
      fontSize: [5, 5, 6],
      fontWeight: 400,
      lineHeight: ['48px']
    }
  }

  return (
    <Box
      is={is}
      fontSize={styles[is].fontSize}
      fontWeight={styles[is].fontWeight}
      lineHeight={styles[is].lineHeight}
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

const Section = ({ alignment = 'default', variant, ...rest }) => {
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
