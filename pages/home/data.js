const caseStudies = [
  {
    title: `Justin Hunter Wanted His Privacy Back, Now He’s Giving Yours Back Too`,
    publication: 'Indie Hackers',
    src: 'https://blockstack-www.imgix.net/justin-hu.png',
    app: 'https://blockstack-www.imgix.net/graphite-app.png',
    href:
      'https://www.indiehackers.com/interview/how-taking-back-my-privacy-inspired-a-product-that-became-a-business-bd931dfc1d'
  },
  {
    title: `Santi Siri Is Using Blockstack To End Political Corruption`,
    publication: 'Wired',
    src: 'https://blockstack-www.imgix.net/santi.png',
    app: 'https://blockstack-www.imgix.net/demo-earth-app.png',
    href:
      'https://www.wired.com/story/santiago-siri-radical-plan-for-blockchain-voting/'
  },
  {
    title: `How this Maker quit his job and made his side projects profitable in 1 year`,
    publication: 'Product Hunt',
    src: 'https://blockstack-www.imgix.net/product-hunt-maker.png',
    app: 'https://blockstack-www.imgix.net/photo-app.png',
    href:
      'https://blog.producthunt.com/how-this-maker-quit-his-job-and-made-his-side-projects-profitable-in-1-year-9c24ece56133'
  }
]

const videos = [
  {
    title: 'The Blockstack Decentralized Computing Network',
    subtitle: 'Muneeb Ali at the Japan Society',
    duration: '26:15',
    image: 'https://blockstack-www.imgix.net/japan-video-still.png',
    width: 1,
    href: 'https://www.youtube.com/watch?v=u9RIFJD3M5c',
    video:
      'https://00e9e64bacebca05d602990eeab71b4f2b3393755a127c970c-apidata.googleusercontent.com/download/storage/v1/b/blockstack-imgix/o/blockstack.org%2Fvideos%2Fmuneeb-talk-clip.mp4?qk=AD5uMEuFFL-M1g1gCgGD1BkAFCFK7gs_Xps1rPHM5ewnIoRR-gXGd9960phgsOxkTeU3GRj3fuNFL7-wSFaFEehsDYhDes9vCuLFQHJZ4z7LbkGlvbweOO5XlAGmGGdeUfq69kPo3vc1lrPksOcMD9NyqTw1npB1q3QfmSWXbgmZGhRrBX7BqfGkrxTDZSvMueMoBzNFvZX7lnASjM8Q-P3XBJdM6FK3dcq3CqMZlmsQr4v3w6ukL_CBKqGvtdG4eDMe5etQoqy2iu3xtUifFesDKfGiQUe3gSw82rgbLMKlx-ry5-J4aJx7VzfeY5P9D23XvCC2nQouq3kIf-SqTKlXo6GjIGtplCBacCtgIZqxZgDcY5IMQgOWJ6-sIInWvC3AUJ1HQCx2rtGukH1WoZRlmflpeaJSnWkTF70pt4M9_UGPMJr1TVo061Ct3aDyAkU9Ljl4SznETYyWkMpg3DkivRiI9pUv2y6KlpbmGPmaeJ9-H9CT1zZdj4sPSVsQsUcSW8h1lYsh46Tu2HH3TfW0icXmaYMfEHXwn2rWm4KDD8eNVNm26Gjse6NwSYB5ZqX4Ny30T29vl7KJhuRnEZUqMR22qLLQ9JR-QLP6Il9gQUpEkLiz1_UZAW2E5veEM6udPbsND5RfLdLvmJJ2C4-_sC5RpbtSYyw2iJfqJV0bPFzXpXWOAW-xEHx9H73X8_7adYMeWUNp3ARTSO-xN5nux6tfleXqo0uCt2o9QH4KMkuK97rucMEKoKk8fSbeO1-zKREQi_Zu-UfOqQ2laJ1vFCsC9ZO6mS209r-PbrhQgXJlH3MjF9mUDjqi7Lvskugj0ZsftjWf'
  },
  {
    title: 'Ari Paul and Muneeb Ali on Scalability, Custody, and Security',
    subtitle: 'The Stacks Podcast',
    duration: '52:18',
    image: 'https://blockstack-www.imgix.net/ari-podcast.png',
    width: [1, `calc(50% - 12px)`, `calc(66.6666666% - 12px)`],
    href: 'https://stacks.co/podcast/episodes/2'
  },
  {
    title: 'Welcome to the New Internet',
    subtitle: 'Muneeb Ali, TEDx New York',
    duration: '26:15',
    image:
      'https://blockstack-www.imgix.net/video-still-welcome-to-the-new-internet.png',
    width: [1, `calc(50% - 12px)`, `calc(33.3333333% - 12px)`],
    href: 'https://www.youtube.com/watch?v=qtOIh93Hvuw'
  },
  {
    title: 'Life After Google',
    subtitle: 'George Gilder, Blockstack Summit',
    duration: '26:15',
    image: 'https://blockstack-www.imgix.net/video-still-life-after-google.png',
    width: [1, `calc(50% - 12px)`, `calc(33.3333333% - 12px)`],
    href: 'https://www.youtube.com/watch?v=M3Nn8nfXuB0'
  },
  {
    title: 'Welcome to Decentralized Computing',
    subtitle: 'Muneeb Ali, ECOH Conference',
    duration: '26:15',
    image: 'https://blockstack-www.imgix.net/video-still-muneeb-kuwait.png',
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
