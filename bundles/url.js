

const initialState = {
  default: null
}

export default {
  name: 'url',
  getReducer: () => {
    return (state = initialState, action) => {
      switch (action.type) {
        default:
          return state
      }
    }
  }
}
