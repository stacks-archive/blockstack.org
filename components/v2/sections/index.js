import React from 'react'
import { Section } from '@components/v2/section'
import { Box, Flex } from 'blockstack-ui'

const Actions = ({ actions }) =>
  actions.map((action) => {
    if (action.type === 'link') {
      return (
        <Section.Text
          is="a"
          style={{ textDecoration: 'none' }}
          color="blue"
          href={action.href}
          pt={4}
          fontSize={2}
        >
          {action.label}
        </Section.Text>
      )
    }
  })

const List = ({ items }) => {
  return (
    <Box is="ul" m={0} p={0} pl={5}>
      {items.map((item, key) => (
        <Section.Text key={key} is="li">
          {item}
        </Section.Text>
      ))}
    </Box>
  )
}

const Content = ({ pane, isFirst, ...rest }) => (
  <>
    {pane.pretitle && <Section.Title pb={3} is="h4" {...pane.pretitle} />}
    {pane.title && <Section.Title {...pane.title} />}
    {pane.text && <Section.Text {...pane.text} />}
    {pane.list && <List {...pane.list} />}
    {pane.actions && pane.actions.length ? (
      <Actions actions={pane.actions} />
    ) : null}
    {pane.type === 'graphic' && (
      <Box py={8} pl={isFirst ? 0 : [0, 0, 8]} pr={isFirst ? [0, 0, 8] : 0}>
        <Box is="img" display="block" maxWidth="100%" src={pane.src} />
      </Box>
    )}
  </>
)

const PaneTemplate = ({
  paneChildren,
  isFirst,
  isRecursive,
  pane,
  actions,
  ...rest
}) => {
  const conditionalStyles = isRecursive
    ? {
        width: 1,
        pb: 5
      }
    : {}
  return (
    <Section.Pane justifyContent="center" {...conditionalStyles} {...rest}>
      {paneChildren ? paneChildren : <Content isFirst={isFirst} pane={pane} />}
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
      pl={!isRecursive && pane.width !== 1 && isSecond ? [0, 0, 3] : 0}
      pr={!isRecursive && pane.width !== 1 && isFirst ? [0, 0, 3] : 0}
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
              pl={pane.width !== 1 && isSecond ? [0, 0, 3] : 0}
              pr={pane.width !== 1 && isFirst ? [0, 0, 3] : 0}
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

const Sections = ({ sections }) => {
  return sections.map((section, sectionKey) => {
    const { variant, panes, children, panesWrapperProps, ...rest } = section
    return (
      <React.Fragment key={sectionKey}>
        {children ? (
          children
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

export { Sections, Panes, Content }
