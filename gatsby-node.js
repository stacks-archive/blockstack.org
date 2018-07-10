const path = require('path')
const {resolve} = require('./webpack.config.js')

exports.modifyWebpackConfig = function({ config, env }) {
  config.merge({
    resolve
  })
  return config
}
exports.createPages = ({ boundActionCreators, graphql }) => {

	const { createPage } = boundActionCreators;
	const Basic = path.resolve(`src/common/templates/basic/index.js`);
	const Post = path.resolve(`src/common/templates/post/index.js`);

	return graphql(`
		{
	    allRssFeedItem {
				edges {
					node {
						id
						title
						link
						pubDate
						content
					}
				}
			}

			allMarkdownRemark(
				limit: 1000
			) {
				edges {
					node {
						frontmatter {
							path
							template
						}
					}
				}
			}
		}
	`).then(result => {

		if (result.errors) {
			return Promise.reject(result.errors);
		}

		result.data.allRssFeedItem.edges.forEach(({ node }) => {
			createPage({
				path: node.link.slice(node.link.indexOf('/blog')),
				component: Post,
				context: {
					id : node.id
				},
			});
		});

		result.data.allMarkdownRemark.edges.forEach(({ node }) => {

			const component = node.frontmatter.template ? path.resolve(`src/js/templates/${node.frontmatter.template}/index.js`) : Basic;

			createPage({
				path: node.frontmatter.path,
				component: component,
				context: {},
			});
		});
	});
};

