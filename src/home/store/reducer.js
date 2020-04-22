import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
  name: 'xiaoming',
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.SET_NAME:
      return state.set('name', action.name);
    default:
      return state;
  }
};
