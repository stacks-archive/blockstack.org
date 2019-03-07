const colors = {
  canvas: '#fff',
  blueMain: '#3700FF',
  black: '#000',
  white: '#fff',
  alert: '#EF4F4F',
  notify: '#FFD780',
  success: '#41CD5F',
  text: Object.assign(String('#211F6D'), {
    headings: '#b4b4b4',
    body: '#f7f7f7',
    link: Object.assign(String('rgba(33, 31, 109, 0.5)'), {
      hover: '#3700FF'
    })
  }),
  grey: Object.assign(String('#b4b4b4'), {
    base: '#b4b4b4',
    xLight: '#f7f7f7',
    light: '#f0f0f0',
    midLight: '#d2d2d2',
    midDark: '#767676',
    dark: '#1d1d1d',
    xDark: '#1d1d1d'
  })
}

const bslinks = {
  tutorials: 'https://docs.blockstack.org/browser/hello-blockstack.html',
  documentation: 'https://docs.blockstack.org',
  github: 'https://github.com/blockstack',
  forum: 'https://forum.blockstack.org/',
  slack: 'http://chat.blockstack.org/',
  meetup: 'https://www.meetup.com/topics/blockstack/',
  blog: '/blog',
  youtube: 'https://www.youtube.com/channel/UC3J2iHnyt2JtOvtGVf_jpHQ',
  videos: '/videos',
  twitter: 'https://www.twitter.com/blockstack/',
  branding: 'https://branding.blockstack.design/',
  install: '/install',
  liveApps: 'https://app.co/platform/blockstack',
  whitePapers: '/papers',
  about: '/about',
  whatIsBs: '/what-is-blockstack',
  faq: '/faq',
  careers: '/careers',
  press: '/press',
  swag: 'https://blockstack.myshopify.com/',
  disclaimers: '/legal/disclaimers',
  tos: '/legal/terms-of-use',
  privacy: '/legal/privacy-policy',
  appCo: 'https://app.co/platform/blockstack',
  signatureFund: '/funding',
  events: 'http://community.blockstack.org/events',
  telegramEnglish: 'https://t.me/BlockstackChat',
  telegramChinese: 'https://t.me/BlockstackChinese',
  appMining: 'https://app.co/mining',
  emailArchive: 'https://us14.campaign-archive.com/home/?u=394a2b5cfee9c4b0f7525b009&id=0e5478ae86'
}

const blogAuthors = {
  'larry.id': {
    blockstackId: 'larry',
    name: 'Larry Salibra',
    avatar: 'https://s3.amazonaws.com/kd4/larry',
    twitter: 'larrysalibra',
    github: 'larrysalibra'
  },
  'judecn.id': {
    blockstackId: 'judecn',
    name: 'Jude Nelson',
    avatar: 'https://s3.amazonaws.com/kd4/judecn',
    twitter: 'judecnelson',
    github: 'jcnelson'
  },
  'guylepage3.id': {
    blockstackId: 'guylepage3',
    name: 'Guy Lepage',
    avatar: 'https://s3.amazonaws.com/kd4/guylepage3',
    twitter: 'guylepage3',
    github: 'guylepage3'
  },
  'muneeb.id': {
    blockstackId: 'muneeb',
    name: 'Muneeb Ali',
    avatar: 'https://s3.amazonaws.com/kd4/muneeb',
    twitter: 'muneeb',
    github: 'muneeb-ali'
  },
  'ryan.id': {
    blockstackId: 'ryan',
    name: 'Ryan Shea',
    avatar: 'https://s3.amazonaws.com/kd4/ryan',
    twitter: 'ryaneshea',
    github: 'shea256'
  },
  'blockstack.id': {
    blockstackId: 'blockstack',
    name: 'Muneeb & Ryan',
    avatar: 'https://s3.amazonaws.com/kd4/muneeb-and-ryan.jpg',
    twitter: 'blockstack',
    github: 'blockstack'
  },
  'founders.id': {
    blockstackId: 'blockstack',
    name: 'Ryan & Muneeb',
    avatar: 'https://s3.amazonaws.com/kd4/muneeb-and-ryan.jpg',
    twitter: 'blockstack',
    github: 'blockstack'
  },
  'mfreed.id': {
    blockstackId: 'mfreed',
    name: 'Mike Freedman',
    avatar: 'https://blockstack.org/images/avatars/mike-freedman.jpg',
    twitter: 'michaelfreedman',
    github: 'mfreed'
  },
  'stanley1.id': {
    blockstackId: 'stanley1',
    name: 'Patrick Stanley',
    avatar: 'https://s3.amazonaws.com/kd4/stanley1',
    twitter: 'patrickwstanley',
    github: 'pstan26'
  },
  'yukan.id': {
    blockstackId: 'yukan',
    name: 'Ken Liao',
    avatar: 'https://blockstack.org/images/avatars/ken-liao.jpg',
    twitter: 'yukanl',
    github: 'yknl'
  },
  'ariella.id': {
    blockstackId: 'ariella',
    name: 'Ariella Steinhorn',
    avatar: 'https://blockstack.org/images/avatars/ariella-steinhorn.jpg',
    twitter: 'arsteinhorn',
    github: 'arsteinhorn'
  },
  'xan.id': {
    blockstackId: 'xan',
    name: 'Xan Ditkoff',
    avatar: 'https://blockstack.org/images/avatars/xan-ditkoff.jpg',
    twitter: 'xanditkoff',
    github: 'xanbots'
  },
  'mitchell.id': {
    blockstackId: 'mitchell',
    name: 'Mitchell Cuevas',
    avatar: 'https://blockstack.org/images/avatars/mitchell-cuevas.jpg',
    twitter: 'mcuevasm',
    github: 'cuevasm'
  },
  'Jeff Domke': {
    blockstackId: 'jeffdomke',
    name: 'Jeff Domke',
    avatar: 'https://blockstack.org/images/avatars/jeff-domke.jpg',
    twitter: 'jeffdomke',
    github: 'jeffdomke'
  }
}

module.exports = {
  colors,
  bslinks,
  blogAuthors
}
