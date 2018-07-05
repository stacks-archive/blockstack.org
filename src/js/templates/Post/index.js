export default from './Post';
export * from './Post';



export const test = graphql`
  query PostFromId( $id: String! ) {
    rssFeedItem ( id : { eq : $id }) {
    	id
			title
			pubDate
			content_encoded

    }
  }
`
