import React from 'react'
import {
  NavIconTechWhitepapers,
  NavIconTechOverview,
  NavIconTechGithub,
  NavIconTechDocs,
  NavIconCommunityDiscord,
  NavIconCommunityForum,
  NavIconCommunityEvents,
  NavIconAboutTokenOffering,
  NavIconAboutRoadmap,
  NavIconAboutCompany,
  NavIconAboutCareers,
  NavIconCommunityBlog
} from '@components/vectors'
import { Newsletter } from '@components/newsletter'

const EmailInput = Newsletter

const footerNavigation = [
  {
    label: 'Blockstack',
    items: [
      { label: 'Create an ID', href: 'https://browser.blockstack.org/sign-up' },
      { label: 'Sign In', href: 'https://browser.blockstack.org/sign-in' },
      { label: 'Technology', path: '/technology' },
      { label: 'Try Blockstack', path: '/try-blockstack' },
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
      { label: 'Documentation', href: 'https://docs.blockstack.org/' },
      { label: 'Whitepapers', path: 'papers' },
      { label: 'Support', href: 'https://blockstack.zendesk.com/hc/en-us' }
    ]
  },
  {
    label: 'Community',
    items: [
      { label: 'Forum', href: 'https://forum.blockstack.org' },
      { label: 'Discord', href: 'https://chat.blockstack.org' },
      { label: 'Reddit', href: 'https://www.reddit.com/r/blockstack/' },
      { label: 'GitHub', href: 'https://github.com/blockstack' },
      {
        label: 'Community guide',
        href: 'https://community.blockstack.org/guide'
      },
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
      { label: 'Contact', href: 'mailto:support@blockstack.org' }
    ]
  },
  {
    label: 'Stay up to date',
    open: true,
    items: [
      { children: <EmailInput /> },
      { label: 'Blog', href: 'https://blog.blockstack.org/' },
      { label: 'Press', path: '/press' },
      { label: 'Branding', href: 'https://branding.blockstack.design' },
      { label: 'Swag', href: 'http://blockstack.inkwellusa.com/' }
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
      { label: 'Overview', path: '/technology', icon: NavIconTechOverview },
      { label: 'Whitepapers', path: '/papers', icon: NavIconTechWhitepapers },
      {
        label: 'Documentation',
        href: 'https://docs.blockstack.org',
        icon: NavIconTechDocs
      },
      {
        label: 'GitHub',
        href: 'https://github.com/blockstack',
        icon: NavIconTechGithub
      }
    ]
  },
  {
    label: 'About',
    slug: 'about',
    path: '/about',
    items: [
      { label: 'Company', path: '/about', icon: NavIconAboutCompany },
      {
        label: 'Token Offering',
        href: 'https://stackstoken.com',
        icon: NavIconAboutTokenOffering
      },
      {
        label: 'Roadmap',
        href: 'https://www2.blockstack.org/roadmap',
        icon: NavIconAboutRoadmap
      },
      { label: 'Careers', path: '/careers', icon: NavIconAboutCareers }
    ]
  },
  {
    label: 'Community',
    slug: 'community',
    href: 'https://community.blockstack.org/',
    items: [
      {
        label: 'Blog',
        href: 'https://blog.blockstack.org',
        icon: NavIconCommunityBlog
      },
      {
        label: 'Forum',
        href: 'https://forum.blockstack.org',
        icon: NavIconCommunityForum
      },
      {
        label: 'Discord',
        href: 'https://chat.blockstack.org',
        icon: NavIconCommunityDiscord
      },
      {
        label: 'Events',
        href: 'https://community.blockstack.org/events',
        icon: NavIconCommunityEvents
      }
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
