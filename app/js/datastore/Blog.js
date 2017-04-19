import { getAllPostsFromRSS } from '../utils/rssUtils'

const UPDATE_POSTS = 'UPDATE_POSTS'

function updatePosts(postData) {
  const posts = postData.postArray
  const postObject = postData.postObject

  return {
    type: UPDATE_POSTS,
    posts: posts,
    postObject: postObject,
  }
}

function fetchPosts() {
  return dispatch => {
    const url = 'https://blockstack-site-api.herokuapp.com/v1/blog-rss'
    fetch(url)
    .then((response) => response.text())
    .then((responseText) => {
      const postData = getAllPostsFromRSS(responseText)
      dispatch(updatePosts(postData))
    })
    .catch((error) => {
      console.warn(error)
    })
  }
}

export const BlogActions = {
  updatePosts: updatePosts,
  fetchPosts: fetchPosts
}

const initialState = {
  posts: [],
  postObject: {}
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