import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import persistState from 'redux-localstorage'

import RootReducer from './reducers'

const finalCreateStore = compose(
  applyMiddleware(thunk),
  persistState()
)(createStore)

export default function configureStore(initialState) {
  return finalCreateStore(RootReducer, initialState)
}