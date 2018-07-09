const path = require('path')

exports.modifyWebpackConfig = function({ config, env }) {
  config.merge({
    resolve: {
      root: path.resolve(__dirname, './src'),
      extensions: ['', '.js', '.jsx', '.json'],
      alias: {
        '@components': path.resolve(__dirname, './src/components'),
        '@containers': path.resolve(__dirname, './src/containers'),
        '@common': path.resolve(__dirname, './src/common')
      }
    }
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
        ? path.resolve(`src/common/templates/${node.frontmatter.template}/index.js`)
        : Basic

      createPage({
        path: node.frontmatter.path,
        component: component,
        context: {} // additional data can be passed via context
      })
    })
  })
}
