import { getAllPostsFromRSS } from '../utils/rssUtils'

const UPDATE_POSTS = 'UPDATE_POSTS'

function updatePosts(posts) {
  return {
    type: UPDATE_POSTS,
    posts: posts
  }
}

function fetchPosts() {
  return dispatch => {
    const url = 'https://blockstack-site-api.herokuapp.com/v1/blog-rss'
    fetch(url)
    .then((response) => response.text())
    .then((responseText) => {
      const posts = getAllPostsFromRSS(responseText)
      dispatch(updatePosts(posts))
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
  posts: []
}

export function BlogReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_POSTS:
      return Object.assign({}, state, {
        posts: action.posts
      })
    default:
      return state
  }
}