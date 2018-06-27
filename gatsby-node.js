const path = require("path");

exports.createPages = ({ boundActionCreators, graphql }) => {

  const { createPage } = boundActionCreators;
  const Basic = path.resolve(`src/js/templates/Basic/index.js`);

  return graphql(`
    {
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

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {

      const component = node.frontmatter.template ? path.resolve(`src/js/templates/${node.frontmatter.template}/index.js`) : Basic;

      createPage({
        path: node.frontmatter.path,
        component: component,
        context: {}, // additional data can be passed via context
      });
    });
  });
};
