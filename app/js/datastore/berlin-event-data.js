const data = [
  {
    name: 'Ryan Shea',
    company: 'Blockstack',
    jobTitle: 'Co-Founder',
    twitter: '@ryaneshea',
    day: 'March 2',
    time: '9:07 AM',
    talkTitle: 'Blockstack, Web 3, and Decentralized Apps',
    headshot:
      'https://blockstack.imgix.net/7a92e818-1126-4e5e-a9e0-7fc5e75da3b3_ryan+shea_blockstack_founder.jpg',
  },
  {
    name: 'Dr. Muneeb Ali',
    company: 'Blockstack',
    jobTitle: 'Co-Founder',
    twitter: '@muneeb',
    day: 'March 2',
    time: '9:24 AM',
    talkTitle: 'The end of cloud computing',
    headshot:
      'https://blockstack.imgix.net/479a5d92-8812-4768-a31b-d7d074f2aa56_muneeb+ali_blockstack_founder.png',
  },
  {
    name: 'Ken Seiff',
    company: 'Blockchange Ventures',
    jobTitle: 'Managing Partner',
    twitter: '@seiff',
    day: 'March 2',
    time: '9:41 AM',
    talkTitle: 'Interview with Melanie Shapiro and Ken Seiff',
    headshot:
      'https://blockstack.imgix.net/2a6d9dd1-9675-4f78-85f1-6a7778f1d06a_ken-seiff.jpg',
  },
  {
    name: 'Melanie Shapiro',
    company: 'Token',
    jobTitle: 'CEO and Co-Founder',
    twitter: '@melshapiro',
    day: 'March 2',
    time: '9:41 AM',
    talkTitle: 'Interview with Melanie Shapiro and Ken Seiff',
    headshot:
      'https://blockstack.imgix.net/bb14fd78-52b2-4fa3-bc9a-9a7eb6a3a4e1_melanie.jpg',
  },
  {
    name: 'Dr. Jutta Steiner',
    company: 'Parity Tech',
    jobTitle: 'CEO and Co-Founder',
    twitter: '@jutta_steiner ‏',
    day: 'March 2',
    time: '9:58 AM',
    talkTitle:
      'Hello Web 3! the polkadot protocol, blockchain, & the bigger picture',
    headshot:
      'https://blockstack.imgix.net/9900ff64-1f63-4eba-bd7b-44bf8a7a5878_jutta_steiner.jpg',
  },
  {
    name: 'Santiago Siri',
    company: 'The Democracy Earth Foundation',
    jobTitle: 'Founder',
    twitter: '@santisiri',
    day: 'March 2',
    time: '10:10 AM',
    talkTitle: 'Crypto Politics: Beyond the Nation-State',
    headshot:
      'https://blockstack.imgix.net/f1a24617-447f-486c-b66d-5b5eb36f20a4_santiago_siri.width-1360.jpg',
  },
  {
    name: 'Dr. Steven "Seven" Waterhouse',
    company: 'Orchid Labs',
    jobTitle: 'CEO and Co-Founder',
    twitter: '@deseventral',
    day: 'March 2',
    time: '10:22 AM',
    talkTitle:
      'How can decentralized technologies address centralized forms of power and control?',
    headshot:
      'https://blockstack.imgix.net/f0e01716-d771-4cf9-9852-4b0b46f005fd_steve_orchid.jpg',
  },
  {
    name: 'Andy Bromberg',
    company: 'CoinList',
    jobTitle: 'Co-Founder and CEO',
    twitter: '@andy_bromberg',
    day: 'March 2',
    time: '10:47 AM',
    talkTitle: 'Investor Panel: Investing in a Decentralized Eco-System',
    headshot:
      'https://blockstack.imgix.net/d976b947-36d2-4585-9eb8-368bd97210ea_andy_bromberg_headshot.jpg',
  },
  {
    name: 'Ari Paul',
    company: 'BlockTower Capital',
    jobTitle: 'Co-Founder and CIO',
    twitter: '@AriDavidPaul',
    day: 'March 2',
    time: '10:47 AM',
    talkTitle: 'Investor Panel: Investing in a Decentralized Eco-System',
    headshot:
      'https://blockstack.imgix.net/ac9f4a81-58a3-4118-9d18-bdab1f1d9993_ari+paul.png',
  },
  {
    name: 'Brittany Laughlin',
    company: 'Lattice Ventures',
    jobTitle: 'Partner',
    twitter: '@br_ttany',
    day: 'March 2',
    time: '10:47 AM',
    talkTitle: 'Investor Panel: Investing in a Decentralized Eco-System',
    headshot:
      'https://blockstack.imgix.net/5909e678-a6dd-495c-93dc-1f42e7cd5705_brittany+laughlin.jpg',
  },
  {
    name: 'William Mougayar',
    company: null,
    jobTitle: 'Author: "The Business Blockchain." Technology Futurist',
    twitter: '@wmougayar',
    day: 'March 2',
    time: '10:47 AM',
    talkTitle: 'Investor Panel: Investing in a Decentralized Eco-System',
    headshot:
      'https://blockstack.imgix.net/0f41ec47-d4e6-458a-9406-19c8a3ada9da_william-mougayar.jpg',
  },
  {
    name: 'Richard Muirhead',
    company: 'Fabric Ventures and OpenOcean',
    jobTitle: 'Fabric Ventures, Founding Partner & OpenOcean, General Partner',
    twitter: '@richardmuirhead',
    day: 'March 2',
    time: '10:47 AM',
    talkTitle: 'Investor Panel: Investing in a Decentralized Eco-System',
    headshot:
      'https://blockstack.imgix.net/400f2ce0-144f-40e0-9336-9a33208960d0_richardmuirhead.jpg',
  },
  {
    name: 'Larry Salibra',
    company: 'Blockstack',
    jobTitle: null,
    twitter: '@larrysalibra',
    day: 'March 1',
    time: '11:05 AM',
    talkTitle: 'Blockstack Identity & Authentication',
    headshot:
      'https://blockstack.imgix.net/d70de42e-5056-4cec-af87-55ab20055c5d_larry.jpg',
  },
  {
    name: 'Nick Szabo',
    company: null,
    jobTitle: 'Blockchains & Social Scalability',
    twitter: '@NickSzabo4',
    day: 'March 2',
    time: '11:20 AM',
    talkTitle: 'Social Scalability and Blockchains',
    headshot:
      'https://blockstack.imgix.net/66fff681-9862-4fdb-b57a-2677670d1a69_nick-szabo.jpg',
  },
  {
    name: 'Jude Nelson',
    company: 'Blockstack',
    jobTitle: null,
    twitter: '@JudeCNelson',
    day: 'March 1',
    time: '11:25 AM',
    talkTitle: 'Subdomains',
  },
  {
    name: 'Elizabeth Stark',
    company: 'Lightning Labs',
    jobTitle: 'Co-Founder and CEO',
    twitter: '@starkness',
    day: 'March 2',
    time: '11:42 AM',
    talkTitle: 'Elizabeth Stark interview with Larry Salibra.',
    headshot:
      'https://blockstack.imgix.net/bb29c187-86d9-4af5-af62-a250dfec9023_elizabeth+stark_lightning+labs_co-founder+and+ceo.jpeg',
  },
  {
    name: 'Larry Salibra',
    company: 'Blockstack',
    jobTitle: null,
    twitter: '@larrysalibra',
    day: 'March 2',
    time: '11:42 AM',
    talkTitle: 'Elizabeth Stark interview with Larry Salibra.',
    headshot:
      'https://blockstack.imgix.net/d70de42e-5056-4cec-af87-55ab20055c5d_larry.jpg',
  },
  {
    name: 'Ken Liao',
    company: 'Blockstack',
    jobTitle: null,
    twitter: null,
    day: 'March 1',
    time: '11:45 AM',
    talkTitle: 'Building a Blockstack App',
  },
  {
    name: 'Ari Paul',
    company: 'BlockTower Capital',
    jobTitle: 'Co-Founder and CIO',
    twitter: '@AriDavidPaul',
    day: 'March 2',
    time: '11:59 AM',
    talkTitle: 'Stable Coins Interview',
    headshot:
      'https://blockstack.imgix.net/ac9f4a81-58a3-4118-9d18-bdab1f1d9993_ari+paul.png',
  },
  {
    name: 'Nader Al-Naji',
    company: 'Basecoin',
    jobTitle: 'Founder, CEO',
    twitter: '@nadertheory',
    day: 'March 2',
    time: '11:59 AM',
    talkTitle: 'Stable Coins Interview',
    headshot:
      'https://blockstack.imgix.net/975731a9-abea-42aa-b17c-aee8698153c8_nader.jpg',
  },
  {
    name: 'Aaron Blankstein',
    company: 'Blockstack',
    jobTitle: null,
    twitter: '@AaronBlankstein',
    day: 'March 1',
    time: '12:05 PM',
    talkTitle: 'Gaia Storage',
  },
  {
    name: 'Chase Wackerfuss',
    company: 'Blockstack',
    jobTitle: null,
    twitter: '@vockerfoos',
    day: 'March 1',
    time: '12:55 PM',
    talkTitle: 'Blockstack.js Storage Strategies',
  },
  {
    name: 'Brett Sun',
    company: 'Aragon',
    jobTitle: 'EVM',
    twitter: '@sohkai',
    day: 'March 1',
    time: '1:15 PM',
    talkTitle:
      'Approaching Infinity: Governance & The Case for Experimentation',
  },
  {
    name: 'Edward Snowden',
    company: null,
    jobTitle: 'Former U.S. Intelligence Officer and Whistleblower',
    twitter: '@Snowden',
    day: 'March 2',
    time: '1:15 PM',
    talkTitle: 'Edward Snowden Interview with Peter Van Valkenburgh',
    headshot:
      'https://blockstack.imgix.net/29ba0191-dcba-44bb-95cf-f21372358219_edward+snowden_former+u.s+intelligence+officer+and+whistleblower.jpg',
    span: 2,
  },
  {
    name: 'Peter Van Valkenburgh',
    company: 'Coin Center',
    jobTitle: 'Director of Research',
    twitter: '@valkenburgh',
    day: 'March 2',
    time: '1:15 PM',
    talkTitle: 'Edward Snowden Interview with Peter Van Valkenburgh',
    headshot:
      'https://blockstack.imgix.net/dd9fb610-ba5c-400d-9e6a-86df26347ab0_peter-van-valkenburgh.jpg',
  },
  {
    name: 'Xan Ditkoff',
    company: 'Blockstack',
    jobTitle: null,
    twitter: '@XanDitkoff ‏',
    day: 'March 1',
    time: '1:35 PM',
    talkTitle: 'Resources for Building Apps on Blockstack',
  },
  {
    name: 'Albert Wenger',
    company: 'Union Square Ventures',
    jobTitle: 'General Partner',
    twitter: '@albertwenger',
    day: 'March 2',
    time: '2:17 PM',
    talkTitle: 'Decentralization: Two Possible Futures',
    headshot:
      'https://blockstack.imgix.net/80d1f4de-541e-415a-b97f-06ba878ab84c_albert+wenger_union+square+venture_general+partner.png',
  },
  {
    name: 'George Gilder',
    company: null,
    jobTitle: 'Book: "Life After Google." Information Theorist',
    twitter: '@ScandalOfMoney',
    day: 'March 2',
    time: '2:34 PM',
    talkTitle: 'Life After Google',
    headshot:
      'https://blockstack.imgix.net/2f9dc725-549d-469c-bf41-585f7254900d_george+gilder.jpg',
  },
  {
    name: 'Patrick Stanley',
    company: 'Blockstack',
    jobTitle: null,
    twitter: '@PatrickWStanley',
    day: 'March 2',
    time: '3:00 PM',
    talkTitle: "Intro to Blockstack Live App Demo's",
    headshot:
      'https://blockstack.imgix.net/b2045dc2-3815-4cfe-9fa3-18e85ddcfd5f_bikawbtr_400x400.jpg',
  },
  {
    name: 'Jeremy Welch',
    company: 'Casa',
    jobTitle: 'Founder',
    twitter: '@jeremyrwelch',
    day: 'March 2',
    time: '3:02 PM',
    talkTitle: 'Casa: Premium HODL Software',
    headshot:
      'https://blockstack.imgix.net/99237e31-fc8e-4829-bcdb-520926e9b84b_jeremy+welch_casa+app_founder.jpg',
  },
  {
    name: 'Justin Carter',
    company: 'Misthos',
    jobTitle: null,
    twitter: null,
    day: 'March 2',
    time: '3:18 PM',
    talkTitle: 'Misthos',
    headshot:
      'https://blockstack.imgix.net/ebfafd1e-8e36-4099-8556-d443b5f4c724_justin+carter.png',
  },
  {
    name: 'Bill Hessert',
    company: 'DotPodcast',
    jobTitle: null,
    twitter: '@BillHessert',
    day: 'March 2',
    time: '3:28 PM',
    talkTitle: 'DotPodcast',
    headshot:
      'https://blockstack.imgix.net/243e2074-8e14-4a28-87d3-ac555a6498e6_bill+hessert.jpeg',
  },
  {
    name: 'Aneela Qureshi',
    company: 'Symmitree',
    jobTitle: null,
    twitter: null,
    day: 'March 2',
    time: '3:37 PM',
    talkTitle: 'Symmitree',
    headshot:
      'https://blockstack.imgix.net/1b23460f-82ce-44ee-a534-645ab7d65a48_aneela+quresh.jpeg',
  },
  {
    name: 'Ryan Wells',
    company: 'Health Here',
    jobTitle: null,
    twitter: null,
    day: 'March 2',
    time: '3:46 PM',
    talkTitle: 'Health Here',
    headshot:
      'https://blockstack.imgix.net/e5e5ecf2-6c3c-464c-8dee-a186d368cdb5_ryan+wells+2.png',
  },
  {
    name: 'Thomas Osmonson',
    company: 'Coins',
    jobTitle: 'Independent Designer & Developer',
    twitter: '@aulneau_',
    day: 'March 2',
    time: '3:55 PM',
    talkTitle: 'Coins',
    headshot:
      'https://blockstack.imgix.net/e52ac454-e79a-4908-af9e-48397622b685_thomas+osmonson.png',
  },
  {
    name: 'Aron Beierschmitt',
    company: 'Postly',
    jobTitle: null,
    twitter: '@abearschmitt',
    day: 'March 2',
    time: '4:02 PM',
    talkTitle: 'Postly',
    headshot:
      'https://blockstack.imgix.net/de91f237-4302-456f-bfcf-b14981e43aaf_aron+beierschmitt.png',
  },
  {
    name: 'Dirk Lueth',
    company: 'The Global Content Network',
    jobTitle: null,
    twitter: '@DirkLueth',
    day: 'March 2',
    time: '4:11 PM',
    talkTitle: 'Global Content Network',
    headshot:
      'https://blockstack.imgix.net/09f086c3-d75d-488b-8253-fd37ba5aed01_dirk+leuth.png',
  },
  {
    name: 'Justin Hunter',
    company: 'Graphite',
    jobTitle: null,
    twitter: '@jehunter5811',
    day: 'March 2',
    time: '4:20 PM',
    talkTitle: 'Graphite',
    headshot:
      'https://blockstack.imgix.net/a9ad69ea-39c3-4025-9db0-cf094fd7b3d6_justin+hunter.png',
  },
  {
    name: 'Adam Breckler',
    company: 'Prism IO',
    jobTitle: null,
    twitter: '@adambreckler',
    day: 'March 2',
    time: '4:29 PM',
    talkTitle: 'Prism',
    headshot:
      'https://blockstack.imgix.net/2eec7368-f212-4cf1-b671-89322ab470ff_nk5t8iob_400x400.jpg',
  },
  {
    name: 'Matt Moody',
    company: 'Bellwethr',
    jobTitle: null,
    twitter: null,
    day: 'March 2',
    time: '4:38 PM',
    talkTitle: 'Bellwethr',
    headshot:
      'https://blockstack.imgix.net/f2d048f0-cdc9-48b1-aa4a-9359315ce0f4_matt+moody.png',
  },
  {
    name: 'Chris Burniske',
    company: 'Placeholder',
    jobTitle: 'Partner',
    twitter: '@cburniske',
    day: 'March 2',
    time: '4:58 PM',
    talkTitle: 'A Conversation on Digital Art & Cryptokitties',
    headshot:
      'https://blockstack.imgix.net/7ba2bc6f-24d3-41ef-8b07-f2feab1f6bad_chris+burniske.png',
  },
  {
    name: 'Dieter Shirley',
    company: 'Axiom Zen',
    jobTitle: 'Director of Blockchain Technology',
    twitter: '@dete73',
    day: 'March 2',
    time: '4:58 PM',
    talkTitle: 'A Conversation on Digital Art & Cryptokitties',
    headshot:
      'https://blockstack.imgix.net/3f2d0d11-5668-4dc6-b97f-76634e8d2327_dieter+wesbited+edited+2+%28no+hat%29.png',
  },
  {
    name: 'Mik Naayem',
    company: 'Axiom Zen',
    jobTitle: 'Strategic Partnerships',
    twitter: '@Mik_Naayem',
    day: 'March 2',
    time: '4:58 PM',
    talkTitle: 'A Conversation on Digital Art & Cryptokitties',
    headshot:
      'https://blockstack.imgix.net/f672e139-35b9-4fd2-ad88-b3228bc08463_mik+website+%28edited%29.png',
  },
  {
    name: 'Juan Benet',
    company: 'Protocol Labs, Filecoin, IPFS',
    jobTitle: 'CEO and Founder',
    twitter: '@juanbenet',
    day: 'March 2',
    time: '5:15 PM',
    talkTitle: 'Filecoin',
    headshot:
      'https://blockstack.imgix.net/81c8bdfc-fe1b-4aff-8c18-f86a24236608_juan+benet.png',
  },
  {
    name: 'Felix Petersen',
    company: 'Samsung NEXT Europe',
    jobTitle: 'Managing Director',
    twitter: '@fiahless',
    day: 'March 2',
    time: '5:32 PM',
    talkTitle: 'Berlin Eco-System & What the Future Holds...',
    headshot:
      'https://blockstack.imgix.net/66cb56ee-352d-46e2-86ec-a9ac10dcb7e4_felix_petersen.jpg',
  },
  {
    name: 'Ryan Shea',
    company: 'Blockstack',
    jobTitle: 'Co-Founder',
    twitter: '@ryaneshea',
    day: 'March 2',
    time: '5:45 PM',
    talkTitle: 'Blockstack Berlin Closing Remarks',
    headshot:
      'https://blockstack.imgix.net/7a92e818-1126-4e5e-a9e0-7fc5e75da3b3_ryan+shea_blockstack_founder.jpg',
  },
  {
    name: 'Dr. Muneeb Ali',
    company: 'Blockstack',
    jobTitle: 'Co-Founder',
    twitter: '@muneeb',
    day: 'March 2',
    time: '5:45 PM',
    talkTitle: 'Blockstack Berlin Closing Remarks',
    headshot:
      'https://blockstack.imgix.net/479a5d92-8812-4768-a31b-d7d074f2aa56_muneeb+ali_blockstack_founder.png',
  },
]

export default data

export const berlinPressData = [
  {
    logo: 'https://blockstack.imgix.net/cc3a1dbc-9289-45fd-9449-6f77d81cbc5d_t3n-logo-press-2018_color_rgb_rechts.png',
    url: 'https://t3n.de/news/web-3-blockstack-dezentrales-internet-984971/ ',
    date: 'Mar 14th 2018',
    outlet: 't3n',
  },
  {
    logo: 'https://blockstack.imgix.net/d6d25c4a-d6e8-41fc-a43a-5d2f72d2099a_futurezone.de.png',
    url:
      'https://www.futurezone.de/produkte/article213640421/Blockstack-Das-dezentralisierte-Internet-der-Zukunft.html ',
    date: 'Mar 7th 2018',
    outlet: 'Futurezone',
  },
  {
    logo: 'https://blockstack.imgix.net/de65b191-338a-4804-9214-bb4f7ea2d945_wired.jpeg',
    url:
      'https://www.wired.de/collection/business/blockchain-spekulative-blasen-sind-extrem-wichtig',
    date: 'Mar 6th 2018',
    outlet: 'WIRED',
  },
  {
    logo: 'https://blockstack.imgix.net/fee57dec-e492-4516-8a44-a41531e041c3_gru%CC%88nderszene.png',
    url: 'https://www.gruenderszene.de/allgemein/albert-wenger-blockchain-usv',
    date: 'Mar 6th 2018',
    outlet: 'Gründerszene',
  },
  {
    logo: 'https://blockstack.imgix.net/a6ed832d-f62b-48b7-b37b-589a96d6b235_infinity-1170x300.png',
    url: 'https://www.infinity-economics-world.eu/btc-echo ',
    date: 'Mar 5th 2018',
    outlet: 'Infinity Echonomoics',
  },
  {
    logo: 'https://blockstack.imgix.net/fee196a6-5a55-421e-8ee7-f2f53230e178_international-business-times-uk-logo.jpg',
    url:
      'http://www.ibtimes.co.uk/blockstack-announces-another-token-sale-this-time-open-all-investors-1665188',
    date: 'Mar 5th 2018',
    outlet: 'IB Times',
  },
  {
    logo: 'https://blockstack.imgix.net/a0a5728d-256f-41c6-8ea4-494bff74079d_btc-echo-logo.png',
    url:
      'https://www.btc-echo.de/mit-der-blockchain-fuer-eine-freie-welt-eindruecke-vom-blockstack-event/',
    date: 'Mar 3rd 2018',
    outlet: 'BTC Echo',
  },
  {
    logo: 'https://blockstack.imgix.net/fee57dec-e492-4516-8a44-a41531e041c3_gru%CC%88nderszene.png',
    url:
      'https://www.gruenderszene.de/allgemein/was-euch-diese-woche-erwartet-die-startup-events-89',
    date: 'Feb 19th 2018',
    outlet: 'Gründerszene',
  },
  {
    logo: 'https://blockstack.imgix.net/e4d833e9-f7e0-46eb-8b7a-02733328a948_krypto.jpg',
    url:
      'https://www.krypto-magazin.de/blockstack-berlin-a-signature-fund-event/',
    date: 'Feb 12th 2018',
    outlet: 'Kryptomagazin',
  },
  {
    logo: 'https://blockstack.imgix.net/b7d0d9dc-efaf-4eda-a9df-af9fb8f80cd9_bitcoin-live-de-logo.jpg',
    url:
      'https://bitcoin-live.de/veranstaltungshinweis-blockstack-berlin-a-signature-fund-event/',
    date: 'Feb 13th 2018',
    outlet: 'Bitcoin Live',
  },
  {
    logo: 'https://blockstack.imgix.net/76217db0-4a42-444d-b413-73407d1a963d_startup-valley-news.png',
    url:
      'https://www.startupvalley.news/de/startup-events/blockstack-berlin-blockchain-konferenz-und-hackathon/',
    date: 'Feb 13th 2018',
    outlet: 'Startupvalleynews ',
  },
  {
    logo: 'https://blockstack.imgix.net/9109774e-5e2e-473b-a2e9-c07e59ab5ff6_startup+calendar.png',
    url:
      'https://startup-calendar.com/event/signature-berlin-blockstack-event/',
    date: 'Feb 15th 2018',
    outlet: 'Startupcalendar',
  },
]
