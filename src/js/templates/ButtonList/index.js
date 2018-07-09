export default from './ButtonList'
export * from './ButtonList'

export const buttonListQuery = graphql`
  query ButtonListFromPathQuery($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        description
        buttonText
        buttonLink
      }
    }
  }
`
