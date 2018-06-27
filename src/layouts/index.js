export default from 'js/containers/Layout';

export const query = graphql`
  query SiteMetadataQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
