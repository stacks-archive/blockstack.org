const autoprefixer = require('autoprefixer');

module.exports = {
  siteMetadata: {
    title: 'Blockstack',
    social: {
      facebook_link: 'https://facebook.com',
      twitter_link: 'https://twitter.com',
      instagram_link: 'https://instagram.com'
    },
    bslinks: {
      tutorials: '#',
      documentation: 'http://blockstack.github.io/blockstack.js/',
      github: 'https://github.com/blockstack',
      forum: 'https://forum.blockstack.org/',
      slack: 'http://chat.blockstack.org/',
      meetup: 'http://www.meetup.com/topics/blockstack/',
      blog: 'https://blockstack.org/blog',
      youtube: 'https://www.youtube.com/channel/UC3J2iHnyt2JtOvtGVf_jpHQ',
      twitter: 'https://www.twitter.com/blockstack/',
      branding: 'https://projects.invisionapp.com/boards/HE2VVROFSGB27/',
      install: '/install',
      liveApps: '/apps',
      whitePapers: '/papers',
      about: '/about',
      faq: '/faq',
      careers: '/careers',
      press: '/press',
      swag: '/swag',
      disclaimers: '#',
      tos: '#',
      privacy: '#',
      appCo: '#',
      signatureFund: '#',
      events: '#'
    }
  },
  plugins: [
    'gatsby-plugin-resolve-src',
  	'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-next',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
            },
          },
        ],
      },
    },
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
      	name: "markdown-pages",
    	},
  	},
  	'gatsby-transformer-remark'
  ],
}
