import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import posts from './posts';
import nextId from './nextId';

const rootReducer = combineReducers({
  user,
  flash,
  posts,
  nextId
});

export default rootReducer;
