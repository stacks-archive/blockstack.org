import '@scss/main.scss'

export default from '@containers/app'

export const pageQuery = graphql`
  query IndexQuery {
    site {
      ...siteMetadata
    }
    allMarkdownRemark {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            path
            title
            description
          }
        }
      }
    }
  }
`
