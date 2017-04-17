const UPDATE_STATS = 'UPDATE_STATS'

function updateStats(stats) {
  let slack_users = 2500
  if (stats.slack_users !== 0) {
    slack_users = stats.slack_users
  }

  return {
    type: UPDATE_STATS,
    domains: stats.domains,
    forumUsers: stats.forum_users,
    meetupUsers: stats.meetup_users,
    slackUsers: slack_users,
  }
}

function fetchStats() {
  return dispatch => {
    const url = 'https://blockstack-site-api.herokuapp.com/v1/stats'
    fetch(url)
    .then((response) => response.text())
    .then((responseText) => JSON.parse(responseText))
    .then((responseJSON) => {
      dispatch(updateStats(responseJSON))
    })
    .catch((error) => {
      console.warn(error)
    })
  }
}

export const StatsActions = {
  updateStats: updateStats,
  fetchStats: fetchStats
}

const initialState = {
  domains: 0,
  forumUsers: 0,
  meetupUsers: 0,
  slackUsers: 0,
}

export function StatsReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_STATS:
      return Object.assign({}, state, {
        domains: action.domains,
        forumUsers: action.forumUsers,
        meetupUsers: action.meetupUsers,
        slackUsers: action.slackUsers,
      })
    default:
      return state
  }
}