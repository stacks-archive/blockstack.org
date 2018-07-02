export default from './Legal';
export * from './Legal';

export const legalPageQuery = graphql`
  query LegalPageFromPathQuery( $path: String! ) {
    markdownRemark ( frontmatter: { path: { eq: $path } }) {
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
`;
