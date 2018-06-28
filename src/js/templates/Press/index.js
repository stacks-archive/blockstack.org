export default from './Press';
export * from './Press';

export const PressQuery = graphql`
  query PressFromPathQuery( $path: String! ) {
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
