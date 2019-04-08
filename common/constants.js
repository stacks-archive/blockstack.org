const headerHeight = 64

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


export {navigation, headerHeight}
