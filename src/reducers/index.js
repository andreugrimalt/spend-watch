import { combineReducers } from 'redux';
import entries from './entries';

const spandWatchApp = combineReducers({
  entries,
});

export default spandWatchApp;
