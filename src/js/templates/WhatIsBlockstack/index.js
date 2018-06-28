export default from './WhatIsBlockstack';
export * from './WhatIsBlockstack';

export const whatIsBlockstackQuery = graphql`
  query WhatIsBlockstackFromPathQuery( $path: String! ) {
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
