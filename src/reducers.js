import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';
import { TYPE_INCREMENT, TYPE_DECREMENT } from './constants';

const counterInitialState = fromJS({
  count: 0,
});

function counterReducer(state = counterInitialState, action) {
  switch (action.type) {
    case TYPE_INCREMENT:
      return state.set('count', state.get('count') + 1);
    case TYPE_DECREMENT:
      return state.set('count', state.get('count') - 1);
    default:
      return state;
  }
}

export default function createReducer(reducers) {
  return combineReducers({
    counter: counterReducer,
    ...reducers,
  });
}
