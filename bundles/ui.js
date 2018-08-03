const MENU_OPEN = 'ui/MENU_OPEN'
const MENU_CLOSE = 'ui/MENU_CLOSE'
const MENU_CLEAR = 'ui/MENU_CLEAR'

const initialState = {
  menu: {
    state: 'closed',
    lastOpened: null
  }
}

export default {
  name: 'ui',
  getReducer: () => {
    return (state = initialState, action) => {
      switch (action.type) {
        case MENU_OPEN:
          return {
            ...state,
            menu: {
              state: 'open',
              lastOpened: Date.now()
            }
          }
        case MENU_CLOSE:
          return {
            ...state,
            menu: {
              ...state.menu,
              state: 'closed'
            }
          }
        case MENU_CLEAR:
          return {
            ...state,
            menu: {
              ...state.menu,
              lastOpened: null
            }
          }
        default:
          return state
      }
    }
  },
  doOpenMenu: () => ({ dispatch }) => {
    dispatch({
      type: MENU_OPEN
    })
  },
  doCloseMenu: () => ({ dispatch }) => {
    dispatch({
      type: MENU_CLOSE
    })
  },
  doClearMenu: () => ({ dispatch }) => {
    setTimeout(() => {
      dispatch({
        type: MENU_CLEAR
      })
    }, 500)
  },
  selectMenuState: (state) => state.ui.menu.state,
  selectMenuLastOpened: (state) => state.ui.menu.lastOpened
}
