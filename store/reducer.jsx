import { combineReducers } from 'redux-immutable';
import { reducer as homeReducer } from '../src/page-factory/home/store';

export default combineReducers({
  home: homeReducer,
});
