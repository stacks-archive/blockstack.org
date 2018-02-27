const UPDATE_STATS = 'UPDATE_STATS'

function updateStats(stats) {
  let slackUsers = 2500
  if (stats.slack_users !== 0) {
    slackUsers = stats.slack_users
  }

  let domains = 72000
  if (stats.domains !== 0) {
    domains = stats.domains
  }

  return {
    type: UPDATE_STATS,
    domains: domains,
    forumUsers: stats.forum_users,
    meetupUsers: stats.meetup_users,
    slackUsers: slackUsers,
  }
}

function fetchStats() {
  return dispatch => {
    const url = 'https://site-api.blockstack.org/v1/stats'
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
  domains: 70000,
  slackUsers: 2500,
  meetupUsers: 5000,
  forumUsers: 400,
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