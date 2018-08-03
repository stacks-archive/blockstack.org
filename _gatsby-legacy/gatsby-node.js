const path = require('path')
const { resolve } = require('./webpack.config.js')

exports.modifyWebpackConfig = function({ config, env }) {
  config.merge({
    resolve
  })
  return config
}
exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators
  const Basic = path.resolve(`src/common/templates/basic/index.js`)

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
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
  `).then((result) => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const component = node.frontmatter.template
        ? path.resolve(
            `src/common/templates/${node.frontmatter.template}/index.js`
          )
        : Basic

      createPage({
        path: node.frontmatter.path,
        component: component,
        context: {} // additional data can be passed via context
      })
    })
  })
}
