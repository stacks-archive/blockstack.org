import { fetchJobs } from '@common/es6'

const FETCH_JOBS_STARTED = 'jobs/FETCH_JOBS_STARTED'
const FETCH_JOBS_FINISHED = 'jobs/FETCH_JOBS_FINISHED'
const FETCH_JOBS_ERROR = 'jobs/FETCH_JOBS_ERROR'

const initialState = {
  fetching: false,
  lastFetch: null,
  postings: null
}

export default {
  name: 'jobs',
  getReducer: () => {
    return (state = initialState, { type, postings }) => {
      switch (type) {
        case FETCH_JOBS_STARTED:
          return {
            fetching: true
          }
        case FETCH_JOBS_FINISHED:
          return {
            fetching: false,
            lastFetch: Date.now(),
            postings
          }
        default:
          return state
      }
    }
  },
  doFetchJobsData: () => async ({ dispatch }) => {
    dispatch({
      type: FETCH_JOBS_STARTED
    })
    try {
      const postings = await fetchJobs()
      return dispatch({
        type: FETCH_JOBS_FINISHED,
        postings
      })
    } catch (error) {
      dispatch({ type: FETCH_JOBS_ERROR, error })
    }
  },
  selectJobs: ({ jobs }) => jobs.postings
}
