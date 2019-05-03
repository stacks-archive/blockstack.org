import React from 'react'
import { Section } from '@components/v2/section'
import { Box, Flex } from 'blockstack-ui'
import { transition } from '@common/theme'
import ChevronRightIcon from 'mdi-react/ChevronRightIcon'
import { useHover } from 'use-events'
import { useInViewAnimationStyles } from '@common/hooks'
import { Button } from '@components/button'

const padding = [0, 0, 5]

const TextLink = ({ action, ...rest }) => {
  const [hovered, bind] = useHover()
  return (
    <Section.Text
      is="a"
      display="inline-flex"
      alignSelf="flex-start"
      style={{ textDecoration: 'none' }}
      color="blue"
      alignItems="center"
      href={action.href}
      pt={4}
      fontSize={2}
      {...rest}
      {...bind}
    >
      <Box is="span" style={{ textDecoration: hovered ? 'underline' : 'none' }}>
        {action.label}
      </Box>
      <Box
        transition={transition}
        transform={`translate3d(${hovered ? '2px' : '-1px'}, 1px, 0px)`}
        size="18px"
      >
        <ChevronRightIcon size="18px" />
      </Box>
    </Section.Text>
  )
}

const Actions = ({ items, ...rest }) => (
  <Flex {...rest}>
    {items.map(({ type, ...action }, key, arr) => {
      if (type === 'link') {
        return <TextLink action={action} key={key} />
      }
      if (type === 'button') {
        return (
          <Button
            key={key}
            ml={key > 0 && arr.length > 1 ? 3 : 0}
            {...action}
          />
        )
      }
    })}
  </Flex>
)
const Icon = ({ component: Component, size, ...rest }) =>
  Component ? (
    <Box color="blue" pr={2} size={size} {...rest}>
      <Component style={{ display: 'block' }} size={size} />
    </Box>
  ) : null

const List = ({ items, icon, ...rest }) => {
  return (
    <Box is="ul" m={0} p={0} pl={0} {...rest}>
      {items.map((item, key, arr) => (
        <Flex
          pb={key + 1 !== arr.length ? 2 : 0}
          alignItems="center"
          m={0}
          p={0}
          is="li"
          key={key}
        >
          <Icon component={icon} />
          <Section.Text>{item}</Section.Text>
        </Flex>
      ))}
    </Box>
  )
}

const Content = ({ pane, isFirst, inViewAnimationStyles, ...rest }) => {
  return (
    <>
      {pane.pretitle && (
        <Section.Title
          pb={3}
          is="h4"
          {...pane.pretitle}
          {...inViewAnimationStyles}
        />
      )}
      {pane.title && (
        <Section.Title {...pane.title} {...inViewAnimationStyles} />
      )}
      {pane.text && <Section.Text {...pane.text} {...inViewAnimationStyles} />}
      {pane.list && <List {...pane.list} {...inViewAnimationStyles} />}
      {pane.actions && pane.actions.items ? (
        <Actions {...pane.actions} {...inViewAnimationStyles} />
      ) : pane.actions && pane.actions.length ? (
        <Actions items={pane.actions} {...inViewAnimationStyles} />
      ) : null}
      {pane.type === 'graphic' && (
        <Box
          py={8}
          pl={isFirst ? 0 : padding}
          pr={isFirst ? padding : 0}
          {...inViewAnimationStyles}
        >
          <Box is="img" display="block" maxWidth="100%" src={pane.src} />
        </Box>
      )}
    </>
  )
}

const PaneTemplate = ({
  paneChildren,
  isFirst,
  isRecursive,
  pane,
  actions,
  ...rest
}) => {
  const inViewAnimationStyles = useInViewAnimationStyles()

  const conditionalStyles = isRecursive
    ? {
        width: 1,
        pb: 5,
        ...inViewAnimationStyles
      }
    : paneChildren
    ? inViewAnimationStyles
    : {}

  return (
    <Section.Pane
      type={pane && pane.type}
      justifyContent="center"
      {...conditionalStyles}
      {...rest}
    >
      {paneChildren ? (
        paneChildren
      ) : (
        <Content
          inViewAnimationStyles={inViewAnimationStyles}
          isFirst={isFirst}
          pane={pane}
        />
      )}
    </Section.Pane>
  )
}

const renderPane = (pane, key, isRecursive) => {
  const { children, title, text, type, src, ...paneProps } = pane
  const isFirst = key === 0
  const isSecond = key === 1
  return (
    <PaneTemplate
      key={key}
      paneChildren={children}
      isFirst={isFirst}
      pane={pane}
      isRecursive={isRecursive}
      pl={
        !isRecursive && pane.width !== 1 && pane.width !== '100%' && isSecond
          ? padding
          : 0
      }
      pr={
        !isRecursive && pane.width !== 1 && pane.width !== '100%' && isFirst
          ? padding
          : 0
      }
      {...paneProps}
    />
  )
}

const Panes = ({ panes, ...panesWrapperProps }) => {
  return (
    <Flex flexWrap="wrap" width={1} {...panesWrapperProps}>
      {panes.map((pane, paneKey) => {
        const isFirst = paneKey === 0
        const isSecond = paneKey === 1
        if (Array.isArray(pane) || (pane.panes && pane.panes.length)) {
          const array = Array.isArray(pane) ? pane : pane.panes
          const { panes: innerPanes, actions, ...rest } = pane

          return (
            <PaneTemplate
              type={pane.type}
              pl={
                pane.width !== 1 && pane.width !== '100%' && isSecond
                  ? padding
                  : 0
              }
              pr={
                pane.width !== 1 &&
                pane.width !== '100%' &&
                isFirst &&
                !pane.children
                  ? padding
                  : 0
              }
              {...rest}
              paneChildren={array.map((innerPaneContent, key) =>
                renderPane(innerPaneContent, key, true)
              )}
            />
          )
        }
        return renderPane(pane, paneKey)
      })}
    </Flex>
  )
}

const SectionTemplate = ({ variant, panes, panesWrapperProps, ...rest }) => (
  <Section variant={variant} width={1} {...rest}>
    <Panes panes={panes} {...panesWrapperProps} />
  </Section>
)

const ChildrenComponentWrapper = ({ children, ...rest }) => {
  const inViewAnimationStyles = useInViewAnimationStyles()

  return (
    <Box width={1} {...inViewAnimationStyles} {...rest}>
      {children}
    </Box>
  )
}

const Sections = ({ sections }) => {
  return sections.map((section, sectionKey) => {
    const { variant, panes, children, panesWrapperProps, ...rest } = section
    return (
      <React.Fragment key={sectionKey}>
        {children ? (
          <Section noWrapper>
            <ChildrenComponentWrapper>{children}</ChildrenComponentWrapper>
          </Section>
        ) : (
          <SectionTemplate
            variant={variant}
            panes={panes}
            {...panesWrapperProps}
            {...rest}
          />
        )}
      </React.Fragment>
    )
  })
}

export { Sections, Panes, Content, TextLink }
