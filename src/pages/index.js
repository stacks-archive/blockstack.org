import 'sass/main.scss';

export default from 'js/containers/App';


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
`;