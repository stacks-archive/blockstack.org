import { combineReducers } from 'redux';

import { BlogReducer } from './Blog';
import { StatsReducer } from './Stats';

const RootReducer = combineReducers({
  blog: BlogReducer,
  stats: StatsReducer,
});

export default RootReducer;
