import { createSelector } from 'reselect';

const selectCounter = state => state.get('counter');
const makeSelectCount = () => createSelector(
  selectCounter,
  counterState => counterState.get('count'),
);

export {
  selectCounter,
  makeSelectCount,
};
