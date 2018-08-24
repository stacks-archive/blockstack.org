import {fetchBlogPosts} from '@common/es6'

const FETCH_BLOG_STARTED = 'blog/FETCH_BLOG_STARTED'
const FETCH_BLOG_FINISHED = 'blog/FETCH_BLOG_FINISHED'
const FETCH_BLOG_ERROR = 'blog/FETCH_BLOG_ERROR'

const initialState = {
  fetching: false,
  lastFetch: null,
  posts: null
}

export default {
  name: 'blog',
  getReducer: () => {
    return (state = initialState, { type, posts }) => {
      switch (type) {
        case FETCH_BLOG_STARTED:
          return {
            fetching: true
          }
        case FETCH_BLOG_FINISHED:
          return {
            fetching: false,
            lastFetch: Date.now(),
            posts
          }
        default:
          return state
      }
    }
  },
  doFetchBlogData: () => async ({ dispatch }) => {
    dispatch({
      type: FETCH_BLOG_STARTED
    })
    try {
      const data = await fetchBlogPosts()
      return dispatch({
        type: FETCH_BLOG_FINISHED,
        ...data
      })
    } catch (error) {
      dispatch({ type: FETCH_BLOG_ERROR, error })
    }
  },
  selectBlogPosts: ({ blog }) => blog.posts
}
