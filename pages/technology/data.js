const photos = [
  { src: 'https://blockstack-www.imgix.net/photos/photo-conference-001.jpg' },
  { src: 'https://blockstack-www.imgix.net/photos/photo-conference-002.jpg' },
  { src: 'https://blockstack-www.imgix.net/photos/photo-conference-003.jpg' },
  { src: 'https://blockstack-www.imgix.net/photos/photo-conference-004.jpg' },
  { src: 'https://blockstack-www.imgix.net/photos/photo-conference-005.jpg' },
  { src: 'https://blockstack-www.imgix.net/photos/photo-hackathon-001.jpg' }
]

const apps = [
  {
    name: 'Recall',
    desc: 'Safely store and access your photos',
    icon:
      'https://appco.imgix.net/apps/ae938da5-bb0c-4496-8720-2493f7b2e9a0?fit=clip&h=144&w=144'
  },
  {
    name: 'Sigle',
    desc: 'A beautiful decentralized & open source blog maker',
    icon:
      'https://appco.imgix.net/apps/43dc2f39-c790-4b58-9e67-927c2aafcae8?fit=clip&h=144&w=144'
  },
  {
    name: 'BitPatron',
    desc: 'The decentralized Patreon alternative',
    icon:
      'https://appco.imgix.net/apps/97e47302-26d9-4483-b015-aa47ebc6c6a4?fit=clip&h=144&w=144'
  },
  {
    name: 'Zinc',
    desc: 'Work based identity & reputation system',
    icon:
      'https://appco.imgix.net/apps/41f87fea-083e-4adf-b9b1-d6b7b1d6a8c8?fit=clip&h=144&w=144'
  },
  {
    name: 'Gladys',
    desc: 'Your open-source Home Automation Assistant',
    icon:
      'https://appco.imgix.net/apps/ec6a36e3-36d1-421c-861b-2b1f848da435?fit=clip&h=144&w=144'
  },
  {
    name: 'Blockusign',
    desc: 'Encrypted document signing and Digital Notary',
    icon:
      'https://appco.imgix.net/apps/2c06bf32-c8f1-47f4-8d14-e7f70a662961?fit=clip&h=144&w=144'
  },
  {
    name: 'Graphite',
    desc: 'Encrypted, shareable, decentralized personal data.',
    icon:
      'https://appco.imgix.net/apps/0ede3b38-c747-4613-bc8e-7c3a12689ba3?fit=clip&h=144&w=144'
  },
  {
    name: 'Debut',
    desc: 'Introduce yourself to the Blockstack community!',
    icon:
      'https://appco.imgix.net/apps/1ea81ed6-2526-4c59-b4b4-83305755def2?fit=clip&h=144&w=144'
  },
  {
    desc: 'View all Blockstack apps'
  }
]

const appBuildersGrid = [
  {
    title: {
      is: 'h4',
      children: 'Authentication'
    },
    text: {
      children:
        'Blockstack provides authentication that is created and managed independently from your app; completely avoid liability for user identity and activity.'
    }
  },
  {
    title: {
      is: 'h4',
      children: 'Data storage'
    },
    text: {
      children:
        'Blockstack provides flexible, free, encrypted storage for each user. Never mess with servers, scaling costs, or personal data liability again.'
    }
  },
  {
    title: {
      is: 'h4',
      children: 'App funding'
    },
    text: {
      children:
        'Get paid the month you launch with App Mining. Bootstrap your app development without compromising your users digital rights. '
    }
  },
  {
    title: {
      is: 'h4',
      children: 'Users'
    },
    text: {
      children:
        'Reach new users who are seeking privacy and data ownership — and are abandoning platforms such as Facebook and Google.'
    }
  },
  {
    title: {
      is: 'h4',
      children: 'Community'
    },
    text: {
      children:
        'Join thousands of open-source developers and app builders dedicated to building a better, decentralized internet.'
    }
  },
  {}
]
const usersGrid = [
  {
    title: {
      is: 'h4',
      children: 'User-owned identity'
    },
    text: {
      children:
        'With the old internet, big companies own your login. With Blockstack, you own your login. Under the hood, Blockstack uses blockchain to keep everything secure and private.'
    }
  },
  {
    title: {
      is: 'h4',
      children: 'True data ownership'
    },
    text: {
      children:
        'With the old internet, big companies own your data. With Blockstack, relax knowing your data is 100% private, and only you can grant access to apps or other users. Never worry about privacy breaches again.'
    }
  },
  {
    title: {
      is: 'h4',
      children: 'One ID, 100s of apps'
    },
    text: {
      children:
        'Discover a universe of new apps where your digital rights are respected. Share, swap, and connect data between apps however you want.'
    }
  }
]

export { photos, apps, appBuildersGrid, usersGrid }
