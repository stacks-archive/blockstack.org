export default from '@containers/layout/index'

export const bslinks = graphql`
  fragment siteMetadata on Site {
    siteMetadata {
      title
      bslinks {
        tutorials
        documentation
        github
        forum
        slack
        meetup
        blog
        youtube
        videos
        twitter
        branding
        install
        liveApps
        whitePapers
        about
        whatIsBs
        faq
        careers
        press
        swag
        disclaimers
        tos
        privacy
        appCo
        signatureFund
        events
      }
    }
  }
`

export const query = graphql`
  query SiteMetadataQuery {
    site {
      ...siteMetadata
    }
    allMarkdownRemark {
      edges {
        node {
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
