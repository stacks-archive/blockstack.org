import React from 'react'
import { Section } from '@components/v2/section'
import { Box, Flex } from 'blockstack-ui'
const meta = {
  path: '/papers',
  title: 'Papers'
}

const DocumentItem = ({
  name,
  description,
  href,
  label = 'View',
  isLast,
  ...rest
}) => {
  return (
    <Flex
      flexDirection="column"
      maxWidth={['100%', '100%', 288]}
      width={1}
      mr={!isLast ? [0, 0, 5] : 0}
      mb={!isLast ? [5, 5, 0] : 0}
      borderRadius="8px"
      boxShadow="0px 0px 3px rgba(0, 0, 0, 0.05), 0px 1px 3px rgba(0, 0, 0, 0.05), 0px 0px 0.5px rgba(0, 0, 0, 0.12)"
      {...rest}
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
      >
        <Section.Text fontWeight={500} fontSize={1} color="ink">
          {label}
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

class PapersPage extends React.PureComponent {
  static async getInitialProps(ctx) {
    return {
      meta
    }
  }

  render() {
    return (
      <>
        <Section minHeight={0}>
          <Section.Pane width={1}>
            <Section.Title is="h2" pb={5}>
              {meta.title}
            </Section.Title>
            <Section.Text>
              Blockstack PBC has a draft of whitepaper 2.0 that is currently
              being reviewed by relevant experts. Stacks Improvement Proposals
              (SIPs) for the new consensus algorithm and smart contract language
              are respectively available as{' '}
              <Section.Text
                is="a"
                href="hhttps://github.com/blockstack/blockstack-core/blob/develop/sip/sip-001-burn-election.md"
                target="_blank"
              >
                SIP-001
              </Section.Text>{' '}
              and{' '}
              <Section.Text
                is="a"
                href="https://github.com/blockstack/blockstack-core/blob/develop/sip/sip-002-smart-contract-language.md"
                target="_blank"
              >
                SIP-002
              </Section.Text>
              .
            </Section.Text>
          </Section.Pane>
        </Section>
        <Section minHeight={0} bg="#C3DBEE">
          <Section.Pane width={1}>
            <Documents
              items={[
                {
                  name: 'Blockstack: A New Decentralized Internet',
                  description: (
                    <>
                      Whitepaper Version 1.1
                      <br />
                      Oct 2017
                    </>
                  ),
                  href: ''
                },
                {
                  name: 'Blockstack Token Whitepaper',
                  description: (
                    <>
                      Token Whitepaper Version 1.2
                      <br />
                      Oct 2017
                    </>
                  ),
                  href: ''
                }
              ]}
            />
          </Section.Pane>
        </Section>
      </>
    )
  }
}

export default PapersPage
