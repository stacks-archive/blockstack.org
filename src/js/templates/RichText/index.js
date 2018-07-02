export default from './RichText';
export * from './RichText';

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
