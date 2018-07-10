export default from 'containers/blog';

export const blogQuery = graphql`
	query BlogQuery {
		site {
			...siteMetadata
		}
		allRssFeedItem {
			edges {
				node {
					id
					title
					link
					pubDate
					content
				}
			}
		}
	}
`;