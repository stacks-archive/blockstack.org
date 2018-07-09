const autoprefixer = require('autoprefixer')

module.exports = {
  siteMetadata: {
    title: 'Blockstack',
    social: {
      facebook_link: 'https://facebook.com',
      twitter_link: 'https://twitter.com',
      instagram_link: 'https://instagram.com'
    },
    bslinks: {
      tutorials: '/tutorials',
      documentation: 'http://blockstack.github.io/blockstack.js/',
      github: 'https://github.com/blockstack',
      forum: 'https://forum.blockstack.org/',
      slack: 'http://chat.blockstack.org/',
      meetup: 'https://www.meetup.com/topics/blockstack/',
      blog: 'https://blockstack.org/blog',
      youtube: 'https://www.youtube.com/channel/UC3J2iHnyt2JtOvtGVf_jpHQ',
      videos: '/videos',
      twitter: 'https://www.twitter.com/blockstack/',
      branding: 'https://projects.invisionapp.com/boards/HE2VVROFSGB27/',
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
      events: 'https://www.eventbrite.com/o/blockstack-10843482742'
    }
  },
  plugins: [
    'gatsby-plugin-preact',
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-next',
    'gatsby-plugin-react-svg',
    {
      resolve: `gatsby-plugin-postcss-sass`,
      options: {
        postCssPlugins: [
          autoprefixer({
            browsers: ['last 2 versions']
          })
        ],
        precision: 8
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/markdown`,
        name: 'markdown-pages'
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-copy-images`]
      }
    },
    'gatsby-plugin-netlify'
  ]
}
