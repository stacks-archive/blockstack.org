import React from 'react'
import { Box } from 'blockstack-ui'
const headerHeight = 64

const EmailInput = ({ ...rest }) => {
  return (
    <Box
      is="input"
      border="1px solid"
      borderColor="sky.50"
      borderRadius="3px"
      width="100%"
      height="48px"
      px={4}
      my={1}
    />
  )
}

const footerNavigation = [
  {
    label: 'Blockstack',
    items: [
      { label: 'Technology', path: '/technology' },
      { label: 'Try Blockstack', path: '/try-blockstack' },
      { label: 'App Mining', href: 'https://app.co/mining' },
      { label: 'Create an ID', href: 'https://browser.blockstack.org/sign-up' },
      { label: 'Sign In', href: 'https://browser.blockstack.org/sign-in' }
    ]
  },
  {
    label: 'Resources',
    items: [
      { label: 'Docs', path: '/technology' },
      { label: 'Tutorials', path: '/try-blockstack' },
      { label: 'Whitepapers', href: 'https://app.co/mining' },
      { label: 'FAQ', href: 'https://browser.blockstack.org/sign-up' }
    ]
  },
  {
    label: 'Community',
    items: [
      { label: 'Forum', href: '#' },
      { label: 'GitHub', href: '#' },
      { label: 'Slack', href: '#' },
      { label: 'Meetup', href: '#' },
      { label: 'Telegram', href: '#' },
      { label: 'Support', href: '#' }
    ]
  },
  {
    label: 'About',
    items: [
      { label: 'Company', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Stacks Tokens', href: '#' },
      { label: 'Events', href: '#' },
      { label: 'Roadmap', href: '#' },
      { label: 'News', href: '#' },
      { label: 'Contact', href: '#' }
    ]
  },
  {
    label: 'Stay up to date',
    items: [
      { children: <EmailInput /> },
      { label: 'Blog', href: '#' },
      { label: 'Press', href: '#' },
      { label: 'Branding', href: '#' },
      { label: 'Swag', href: '#' }
    ]
  }
]
const navigation = [
  { label: 'Try Blockstack', slug: 'try' },
  {
    label: 'Technology',
    slug: 'technology',
    items: [
      { label: 'Overview', path: '/technology' },
      { label: 'Tutorials', href: 'https://docs.blockstack.org' },
      { label: 'Documentation', href: 'https://docs.blockstack.org' },
      { label: 'GitHub', href: 'https://github.com/blockstack' }
    ]
  },
  {
    label: 'About',
    slug: 'about',
    items: [
      { label: 'Overview', path: '/about' },
      { label: 'PBC', href: 'https://docs.blockstack.org' },
      { label: 'Token Offering', href: 'https://docs.blockstack.org' },
      { label: 'Careers', href: 'https://github.com/blockstack' }
    ]
  },
  {
    label: 'Community',
    slug: 'community',
    items: [
      { label: 'Forum', path: '/technology' },
      { label: 'Slack', href: 'https://docs.blockstack.org' },
      { label: 'Documentation', href: 'https://docs.blockstack.org' },
      { label: 'GitHub', href: 'https://github.com/blockstack' }
    ]
  },
  { label: 'Sign In', href: 'https://browser.blockstack.org/sign-in' },
  {
    label: 'Create ID',
    href: 'https://browser.blockstack.org/sign-up',
    variant: 'call-to-action'
  }
]

export { navigation, footerNavigation, headerHeight }
