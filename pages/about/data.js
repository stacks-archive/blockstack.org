import React from 'react'
import { NIL, AppCo } from '@components/v2/vectors'

const photos1 = [
  {
    src:
      'https://blockstack-www.imgix.net/photos/blockstack-team-winter-2018.png',
    width: 1 / 2
  },
  {
    src: 'https://blockstack-www.imgix.net/photos/blockstack-team-couch.png',
    width: 1 / 2
  }
]
const photos2 = [
  {
    src: 'https://blockstack-www.imgix.net/photos/blockstack-team.png',
    width: 1 / 2
  },
  {
    src:
      'https://blockstack-www.imgix.net/photos/blockstack-team-summer-2018-retreat.jpg',
    width: 1 / 2
  }
]

const ecosystemPartners = [
  {
    name: 'New Internet Labs',
    desc: 'Building a Blockstack browser',
    url: 'https://newinternetlabs.com',
    logo: NIL,
    color: '#642EF5'
  },
  {
    name: 'Signature Fund',
    desc: 'Venture capital for decentralized apps',
    url: 'https://signature.vc',
    src: 'https://blockstack-www.imgix.net/logos/signature-vc-logo.png',
    color: '#0014D9'
  },
  {
    name: 'App.co',
    desc: 'Real-time funding for decentralized apps',
    url: 'https://app.co',
    logo: AppCo,
    color: '#211F6D'
  }
]

const advisors = [
  {
    photo: 'https://blockstack-www.imgix.net/team/muneeb-ali.jpg',
    name: 'Muneeb Ali',
    title: 'CEO and Co-founder',
    bio:
      'Muneeb Ali is the co-founder of Blockstack and serves as the CEO of Blockstack PBC. He received his PhD in distributed systems from Princeton University and gives guest lectures on cloud computing there. He was a visiting researcher at Stanford University and SICS.'
  },
  {
    photo: 'https://blockstack-www.imgix.net/albert-wenger.jpg',
    name: 'Albert Wenger',
    title: 'Managing Partner, USV',
    bio:
      'Albert Wenger is a managing partner at Union Square Ventures (USV), where he has led a variety of investments including USV’s investments in Etsy (IPO), MongoDB (IPO), Twilio (IPO), Behance (acquired by Adobe), and Firebase (acquired by Google). '
  },
  {
    photo: 'https://blockstack-www.imgix.net/jp-singh-headshot.jpg',
    name: 'JP Singh',
    title: 'Professor, Princeton',
    bio:
      'JP Singh has been a computer science faculty member at Princeton University since 1995. He received his PhD from from Stanford University and is a leading authority on scalable infrastructure and applications. '
  },
  {
    photo: 'https://blockstack-www.imgix.net/michael-freedman.jpg',
    name: 'Michael Freedman',
    title: 'Advisor, Technical',
    bio:
      'Michael Freedman is a distributed systems Professor at Princeton. He was awarded the Presidential Early Career Award (PECASE), the Sloan Fellowship, and the 2018 ACM Grace Murray Hopper Award for scalable, performant distributed systems.'
  },
  {
    photo: 'https://blockstack-www.imgix.net/dave-morin.png',
    name: 'Dave Morin',
    title: 'Advisor, Product',
    bio:
      'Dave is the former Co-Founder & CEO of Path and founder of Slow Ventures. Dave was involved with the early days of Facebook where he co-created the Facebook Platform as well as Facebook Connect.'
  }
]

export { photos1, photos2, ecosystemPartners, advisors }
