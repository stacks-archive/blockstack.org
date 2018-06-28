export default from './Basic';
export * from './Basic';

export const pageQuery = graphql`
  query PageFromPathQuery( $path: String! ) {
    markdownRemark ( frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        description
      }
    }
  }
`;
