import { getAllPostsFromRSS } from '../utils/rssUtils'

const UPDATE_POSTS = 'UPDATE_POSTS'

function updatePosts(postPages) {
  let posts = []
  let postObject = {}
  for (var i = 0; i < postPages.length; i++) {
    posts = posts.concat(postPages[i].postArray)
    Object.assign(postObject, postPages[i].postObject)
  }

  return {
    type: UPDATE_POSTS,
    posts: posts,
    postObject: postObject,
  }
}

/*    let urls = []
    const pageNumbers = [1, 2]
    const baseUrl = 
    pageNumbers.map((pageNumber) => {
      urls.push(baseUrl + pageNumber)
    })
*/

function fetchPosts() {
  return (dispatch) => {
    const urls = [
      'https://blockstack-site-api.herokuapp.com/v1/blog-rss?page=1',
      'https://blockstack-site-api.herokuapp.com/v1/blog-rss?page=2',
    ]

    const promises = urls.map((url) =>
      fetch(url)
        .then((response) => response.text())
        .then((responseText) => getAllPostsFromRSS(responseText)),
    )

    Promise.all(promises)
      .then((results) => {
        dispatch(updatePosts(results))
      })
      .catch((error) => {
        console.warn(error)
      })
  }
}

export const BlogActions = {
  updatePosts: updatePosts,
  fetchPosts: fetchPosts,
}

const initialState = {
  posts: [],
  postObject: {},
}

export function BlogReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_POSTS:
      return Object.assign({}, state, {
        posts: action.posts,
        postObject: action.postObject,
      })
    default:
      return state
  }
}
