const path = require("path");

exports.createPages = ({ boundActionCreators, graphql }) => {

	const { createPage } = boundActionCreators;
	const Basic = path.resolve(`src/js/templates/Basic/index.js`);
	const Post = path.resolve(`src/js/templates/Post/index.js`);

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
			const component = Basic;
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


// exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
//   const { createNodeField } = boundActionCreators;
//   console.log(node);
// }
