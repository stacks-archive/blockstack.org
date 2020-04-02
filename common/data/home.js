const caseStudies = [
  {
    title: `This Dapp Shows How Blockstack and Ethereum Are Different`,
    publication: 'Coin Desk',
    src: 'https://blockstack-www.imgix.net/envelop-team.webp',
    app: 'https://appco.imgix.net/apps/dd4891d6-a555-4a9d-ad20-61dea95b70db',
    appName: 'Envelop',
    href:
      'https://www.coindesk.com/this-file-sharing-dapp-shows-how-blockstack-and-ethereum-are-different'
  },
  {
    title: `Blockstack apps are giving remote workers secure, private alternatives amid Coronavirus`,
    publication: 'Decrypt',
    src: 'https://blockstack-www.imgix.net/product-hunt-maker.png',
    href:
      'https://decrypt.co/23345/working-remotely-8-essential-software-tools-and-their-web3-cousins'
  },
  {
    title: `Sérgio dos Santos is Giving You Control and Piece of Mind When Your Important Files`,
    publication: 'Wired',
    src: 'https://blockstack-www.imgix.net/santi.png',
    app: 'https://appco.imgix.net/apps/b71df418-250b-429a-ac9c-e449c95558a5',

    appName: 'Democracy Earth',
    href:
      'https://www.wired.com/story/santiago-siri-radical-plan-for-blockchain-voting/'
  }
]

const videos = [
  {
    title: 'The Blockstack Decentralized Computing Network',
    subtitle: 'Muneeb Ali at the Japan Society',
    duration: '26:15',
    image: 'https://blockstack-www.imgix.net/japan-video-still.png?auto=format',
    width: 1,
    href: 'https://www.youtube.com/watch?v=u9RIFJD3M5c',
    video: '/static/muneeb-talk-loop.mp4'
  },
  {
    title: 'Ari Paul and Muneeb Ali on Scalability, Custody, and Security',
    subtitle: 'The Stacks Podcast',
    duration: '52:18',
    image: 'https://blockstack-www.imgix.net/videos/ari-paul-thumb.png',
    width: [1, `calc(50% - 12px)`, `calc(66.6666666% - 12px)`],
    href: 'https://stacks.co/podcast/episodes/2'
  },
  {
    title: 'Welcome to the New Internet',
    subtitle: 'Muneeb Ali, TEDx New York',
    duration: '26:15',
    image: 'https://blockstack-www.imgix.net/videos/muneeb-1-thumb.png',
    width: [1, `calc(50% - 12px)`, `calc(33.3333333% - 12px)`],
    href: 'https://www.youtube.com/watch?v=qtOIh93Hvuw'
  },
  {
    title: 'Life After Google',
    subtitle: 'George Gilder, Blockstack Summit',
    duration: '26:15',
    image: 'https://blockstack-www.imgix.net/videos/george-thumb.png',
    width: [1, `calc(50% - 12px)`, `calc(33.3333333% - 12px)`],
    href: 'https://www.youtube.com/watch?v=M3Nn8nfXuB0'
  },
  {
    title: 'Welcome to Decentralized Computing',
    subtitle: 'Muneeb Ali, ECOH Conference',
    duration: '26:15',
    image: 'https://blockstack-www.imgix.net/videos/muneeb-2-thumb.png',
    width: [1, `calc(50% - 12px)`, `calc(66.6666666% - 12px)`],
    href: 'https://www.youtube.com/watch?v=hHFcDjeugYc'
  }
]

const meta = {
  path: '/',
  title: 'Blockstack',
  custom: true,
  ogTitle: 'Decentralized computing network and app ecosystem'
}

const press = [
  {
    title: 'Tech Thinks It Has a Fix for the Problems It Created: Blockchain',
    publication: 'The New York Times',
    href: 'https://www.nytimes.com/2018/04/01/technology/blockchain-uses.html'
  },
  {
    title: 'This startup could sell you crypto tokens—with SEC backing',
    publication: 'Wired',
    href:
      'https://www.wired.com/story/startup-sell-you-crypto-tokens-with-sec-backing/'
  },
  {
    title: 'The new technology that aspires to #DeleteFacebook for good',
    publication: 'The Washington Post',
    href:
      'https://www.washingtonpost.com/news/the-switch/wp/2018/03/23/the-new-technology-that-aspires-to-deletefacebook-for-good'
  },
  {
    title: 'The decentralized internet is here',
    publication: 'Wired',
    href:
      'https://www.wired.com/story/the-decentralized-internet-is-here-with-some-glitches/'
  },
  {
    title:
      'New Blockchain Fund with Winklevoss Backing Targets Facebook’s Business Model',
    publication: 'Forbes',
    href:
      'https://www.forbes.com/sites/michaeldelcastillo/2018/05/10/new-blockchain-fund-with-winklevoss-backing-targets-facebooks-business-model/#604c9e62541b'
  },
  {
    title:
      'Meet the Blockchain Startup That Inspired HBO’s ‘Silicon Valley’ season five. ',
    publication: 'Fortune',
    href:
      'https://fortune.com/2018/06/08/blockchain-silicon-valley-new-internet-blockstack/'
  }
]

export { caseStudies, videos, meta, press }
