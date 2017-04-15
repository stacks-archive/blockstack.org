export const githubFileUrlRoot = 'https://github.com/blockstack/blockstack/blob/master'

export const socialLinks = {
  twitter: 'https://www.twitter.com/blockstackorg',
  youtube: 'https://www.youtube.com/channel/UC3J2iHnyt2JtOvtGVf_jpHQ',
  slack: 'http://chat.blockstack.org',
  meetup: 'http://www.meetup.com/topics/blockstack/',
  reddit: 'https://www.reddit.com/r/blockstack',
  forum: 'https://forum.blockstack.org',
  blog: 'http://blog.blockstack.org',
  github: 'https://github.com/blockstack',
  branding: 'https://projects.invisionapp.com/boards/HE2VVROFSGB27/'
}

export const companiesHiring = [
  {
    name: 'Blockstack Inc',
    jobs: [
      {
        'title': 'Web Product Engineer',
        'description': 'Build out the Blockstack web browser using ReactJS, Redux, Node and Blockstack APIs.',
        'url': 'https://angel.co/blockstack/jobs/150184-product-engineer'
      },
      {
        'title': 'Mobile Product Engineer',
        'description': 'Kickstart the development of the Blockstack mobile browser.',
        'url': 'https://angel.co/blockstack/jobs/150184-product-engineer'
      },
      {
        'title': 'Systems Engineer',
        'description': 'Build out Blockstack Core and the Blockstack P2P Atlas network with Python and blockchain transaction APIs',
        'url': 'https://angel.co/blockstack/jobs/151139-systems-engineer'
      },
      {
        'title': 'Security Engineer',
        'description': 'Scrutinize and battle-test the Blockstack protocols and consensus critical systems.',
        'url': 'https://angel.co/blockstack/jobs/151142-security-engineer'
      },
      {
        'title': 'Developer Evangelist',
        'description': 'Coordinate events and produce content to grow the Blockstack ecosystem.',
        'url': 'https://angel.co/blockstack/jobs/151144-community-coordinator'
      }
    ]
  },
  {
    name: 'Microsoft',
    jobs: [
      {
        'title': 'Systems Engineer',
        'description': 'Build self-sovereign identity software using Blockstack Core.',
        'url': 'https://microsoft.com'
      },
      {
        'title': 'Product Engineer',
        'description': 'Build self-sovereign identity software using Blockstack Core.',
        'url': 'https://microsoft.com'
      }
    ]
  }
]

export const tutorials = {
  'hello-blockstack': {
    image: '/images/tutorials/hello-blockstack.jpg',
    title: 'Hello, Blockstack',
    urlSlug: 'hello-blockstack',
    description: 'Build a simple single-page JavaScript application that runs completely client-side without any servers.'
  },
  'cli-basics': {
    image: '/images/tutorials/cli-lookups.jpg',
    title: 'CLI Basics',
    urlSlug: 'cli-basics',
    description: 'Walk through the basics of the command line interface, like looking up names, getting name prices, and registering names.'
  },
}

export const talks = {
  'welcome-to-the-new-internet': {
    urlSlug: 'welcome-to-the-new-internet',
    title: 'Welcome to the New Internet',
    event: 'TEDxNewYork',
    speaker: 'Muneeb Ali',
    location: 'New York',
    date: 'September 10, 2016',
    youtubeURL: 'https://www.youtube.com/embed/qtOIh93Hvuw?list=PLvaRUGvjpFS2ciobOlOwMeVKDqO7S9ar6',
    speakerDeckID: '15d4861b7c1842bfbd7add80c99e1cf6',
    image: '/images/resources/talk-tedxnewyork.png'
  },
  'innovation-and-inclusion-with-decentralized-apps': {
    urlSlug: 'innovation-and-inclusion-with-decentralized-apps',
    title: 'Innovation & Inclusion w/ Decentralized Apps',
    event: 'New Context Conference Fall 2016',
    speaker: 'Ryan Shea',
    location: 'San Francisco, CA',
    date: 'November 4, 2016',
    youtubeURL: 'https://www.youtube.com/embed/nknocjo7t00',
    speakerDeckID: '9a0dca48d9cc4da98e0d1b3094fe4ec1',
    image: '/images/resources/talk-ncc.png'
  },
  'decentralized-server-less-applications-with-blockstack': {
    urlSlug: 'decentralized-server-less-applications-with-blockstack',
    title: 'Decentralized, Server-less Applications with Blockstack',
    event: 'All Things Open',
    speaker: 'Ryan Shea',
    location: 'Raleigh, NC',
    date: 'October 27, 2016',
    youtubeURL: 'https://www.youtube.com/embed/WveXpldGGa8',
    speakerDeckID: '434d4f23ad40417aadfe86643671a5bd',
    image: '/images/resources/talk-ato.png'
  },
  'experiences-with-building-a-global-pki-with-blockchains': {
    urlSlug: 'experiences-with-building-a-global-pki-with-blockchains',
    title: 'Experiences with Building a Global PKI with Blockchains',
    event: 'CITP Luncheon Speaker Series',
    speaker: 'Muneeb Ali',
    location: 'Princeton, NJ',
    date: 'March 8, 2016',
    youtubeURL: 'https://www.youtube.com/embed/sBJobY0Aqt0',
    speakerDeckID: 'e7608b083c5d4ef68a199cd4f6b74026',
    image: '/images/resources/talk-citp.png'
  },
}

export const papers = [
  {
    title: 'Blockstack: A Global Naming and Storage System Secured by Blockchains',
    authors: 'Muneeb Ali, Jude Nelson, Ryan Shea and Michael J. Freedman',
    publication: 'USENIX Annual Technical Conference',
    url: '/blockstack_usenix16.pdf',
    date: 'June 2016',
  },
  {
    title: 'Bootstrapping Trust in Distributed Systems with Blockchains',
    authors: 'Muneeb Ali, Jude Nelson, Ryan Shea and Michael J. Freedman:',
    publication: 'USENIX ;login: issue: Fall 2016, Vol. 41, No. 3',
    url: '/blockstack_login16.pdf',
    date: 'June 2016',
  },
  {
    title: 'Extending Existing Blockchains with Virtualchain',
    authors: 'Jude Nelson, Muneeb Ali, Ryan Shea and Michael J. Freedman',
    publication: 'Workshop on Distributed Cryptocurrencies and Consensus Ledgers',
    url: '/virtualchain_dccl16.pdf',
    date: 'July 2016',
  },
]

export const communityMembers = [
  { blockstackId: 'larry',
    name: 'Larry Salibra',
    avatar: 'https://s3.amazonaws.com/kd4/larry',
    twitter: 'larrysalibra',
    github: 'larrysalibra' },
  { blockstackId: 'judecn',
    name: 'Jude Nelson',
    avatar: 'https://s3.amazonaws.com/kd4/judecn',
    twitter: 'judecnelson',
    github: 'jcnelson' },
  { blockstackId: 'guylepage3',
    name: 'Guy Lepage',
    avatar: 'https://s3.amazonaws.com/kd4/guylepage3',
    twitter: 'guylepage3',
    github: 'guylepage3' },
  { blockstackId: 'pstanley',
    name: 'Patrick Stanley',
    avatar: 'https://pbs.twimg.com/profile_images/825784957662408704/uabQhcBQ.jpg',
    twitter: 'patrickwstanley',
    github: 'pstan26' },
  { blockstackId: 'ablankstein',
    name: 'Aaron Blankstein',
    avatar: 'https://pbs.twimg.com/profile_images/849366675468242945/vXCtIt02.jpg',
    twitter: 'aaronblankstein',
    github: 'kantai' },
  { blockstackId: 'muneeb',
    name: 'Muneeb Ali',
    avatar: 'https://s3.amazonaws.com/kd4/muneeb',
    twitter: 'muneeb',
    github: 'muneeb-ali' },
  { blockstackId: 'ryan',
    name: 'Ryan Shea',
    avatar: 'https://s3.amazonaws.com/kd4/ryan',
    twitter: 'ryaneshea',
    github: 'shea256' },
  { blockstackId: 'mfreed',
    name: 'Michael Freedman',
    avatar: '/images/avatars/mike-freedman.jpg',
    twitter: 'michaelfreedman',
    github: 'mfreed' },
  { blockstackId: 'buchner',
    name: 'Daniel Buchner',
    avatar: 'https://s3.amazonaws.com/kd4/buchner',
    twitter: 'csuwildcat',
    github: 'csuwildcat' },
  { blockstackId: 'starkness',
    name: 'Elizabeth Stark',
    avatar: 'https://s3.amazonaws.com/kd4/starkness',
    twitter: 'starkness',
    github: 'starkness' },
  { blockstackId: 'lightcoin',
    name: 'John Light',
    avatar: 'https://s3.amazonaws.com/kd4/lightcoin',
    twitter: 'lightcoin',
    github: 'john-light' },
  { blockstackId: 'itsprof',
    name: 'Jorge Tapia',
    avatar: 'https://s3.amazonaws.com/kd4/itsprof',
    twitter: 'itsprof',
    github: 'itsprof' },
  { blockstackId: 'turnery',
    name: 'Turner Yevich',
    avatar: 'https://s3.amazonaws.com/kd4/turnery',
    facebook: 'turner.yevich' },
]

export const blogAuthors = {
  'larry.id': { blockstackId: 'larry',
    name: 'Larry Salibra',
    avatar: 'https://s3.amazonaws.com/kd4/larry',
    twitter: 'larrysalibra',
    github: 'larrysalibra' },
  'judecn.id' :{ blockstackId: 'judecn',
    name: 'Jude Nelson',
    avatar: 'https://s3.amazonaws.com/kd4/judecn',
    twitter: 'judecnelson',
    github: 'jcnelson' },
  'guylepage3.id': { blockstackId: 'guylepage3',
    name: 'Guy Lepage',
    avatar: 'https://s3.amazonaws.com/kd4/guylepage3',
    twitter: 'guylepage3',
    github: 'guylepage3' },
  'muneeb.id': { blockstackId: 'muneeb',
    name: 'Muneeb Ali',
    avatar: 'https://s3.amazonaws.com/kd4/muneeb',
    twitter: 'muneeb',
    github: 'muneeb-ali' },
  'ryan.id': { blockstackId: 'ryan',
    name: 'Ryan Shea',
    avatar: 'https://s3.amazonaws.com/kd4/ryan',
    twitter: 'ryaneshea',
    github: 'shea256' },
  'blockstack.id': { blockstackId: 'blockstack',
    name: 'Muneeb & Ryan',
    avatar: 'https://s3.amazonaws.com/kd4/muneeb-and-ryan.jpg',
    twitter: 'blockstackorg',
    github: 'blockstack' },
}