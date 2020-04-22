import { combineReducers } from 'redux-immutable';
import { reducer as homeReducer } from '../src/home/store';

export default combineReducers({
  home: homeReducer,
});
