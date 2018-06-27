const autoprefixer = require('autoprefixer');

module.exports = {
  siteMetadata: {
    title: 'Blockstack',
    social: {
      facebook_link: 'https://facebook.com',
      twitter_link: 'https://twitter.com',
      instagram_link: 'https://instagram.com'
    }
  },
  plugins: [
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
      	name: "markdown-pages",
    	},
  	},
  	'gatsby-transformer-remark'
  ],
}
