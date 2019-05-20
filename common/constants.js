import React from 'react'
import { Box } from 'blockstack-ui'

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
      { label: 'Create an ID', href: 'https://browser.blockstack.org/sign-up' },
      { label: 'Sign In', href: 'https://browser.blockstack.org/sign-in' },
      { label: 'Technology', path: '/technology' },
      { label: 'Try Blockstack', path: '/try-blockstack' },
      { label: 'App Mining', href: 'https://app.co/mining' },
      { label: 'Explorer', href: 'https://explorer.blockstack.org' },
      { label: 'Stacks Wallet', href: 'https://wallet.blockstack.org' }
    ]
  },
  {
    label: 'Resources',
    items: [
      { label: 'FAQs', href: 'https://docs.blockstack.org/faqs/allfaqs' },
      {
        label: 'App user guides',
        href: 'https://docs.blockstack.org/browser/browser-introduction.html'
      },
      {
        label: 'Developer guides',
        href: 'https://docs.blockstack.org/develop/dapp_principles.html'
      },
      {
        label: 'App mining guide',
        href: 'https://docs.blockstack.org/community/app-miners-guide.html'
      },
      { label: 'Documentation', href: 'https://docs.blockstack.org/' },
      { label: 'Support', href: 'https://blockstack.zendesk.com/hc/en-us' }
    ]
  },
  {
    label: 'Community',
    items: [
      { label: 'Forum', href: 'https://forum.blockstack.org' },
      { label: 'Slack', href: 'https://chat.blockstack.org' },
      { label: 'GitHub', href: 'https://github.com/blockstack' },
      { label: 'Community guide', href: 'https://github.com/blockstack' },
      { label: 'Events', href: 'https://community.blockstack.org/events' },
      { label: 'Telegram', href: 'https://t.me/BlockstackChat' },
      { label: 'Telegram (中文群)', href: 'https://t.me/BlockstackChinese' },
      { label: 'Newsletters', href: 'https://blockstack.org/updates' }
    ]
  },
  {
    label: 'About',
    items: [
      { label: 'Company', path: '/about' },
      { label: 'Careers', path: '/careers' },
      { label: 'Stacks Tokens', href: 'https://stackstoken.com' },
      { label: 'Roadmap', path: '/roadmap' },
      { label: 'News', href: 'https://blog.blockstack.org' },
      { label: 'Contact', href: '#' }
    ]
  },
  {
    label: 'Stay up to date',
    items: [
      { children: <EmailInput /> },
      { label: 'Blog', href: 'https://blog.blockstack.org/' },
      { label: 'Press', path: '/press' },
      { label: 'Branding', href: 'https://branding.blockstack.design' },
      { label: 'Swag', href: 'https://blockstack.myshopify.com/' }
    ]
  }
]
const navigation = [
  { label: 'Try Blockstack', slug: 'try', path: '/try-blockstack' },
  {
    label: 'Technology',
    slug: 'technology',
    path: '/technology',
    items: [
      { label: 'Overview', path: '/technology' },
      { label: 'Whitepapers', path: '/papers' },
      { label: 'Documentation', href: 'https://docs.blockstack.org' },
      { label: 'GitHub', href: 'https://github.com/blockstack' }
    ]
  },
  {
    label: 'About',
    slug: 'about',
    path: '/about',
    items: [
      { label: 'Overview', path: '/about' },
      { label: 'Token Offering', href: 'https://stackstoken.com' },
      { label: 'Roadmap', path: '/roadmap' },
      { label: 'Careers', path: '/careers' }
    ]
  },
  {
    label: 'Community',
    slug: 'community',
    href: 'https://community.blockstack.org/',
    items: [
      { label: 'Forum', href: 'https://forum.blockstack.org' },
      { label: 'Slack', href: 'https://chat.blockstack.org' },
      { label: 'Events', href: 'https://community.blockstack.org/events' },
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

export { navigation, footerNavigation }
