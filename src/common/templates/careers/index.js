export default from './Careers'

export const careerPageQuery = graphql`
  query CareerPageFromPathQuery($path: String!) {
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
