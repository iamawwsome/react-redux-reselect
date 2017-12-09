import { TYPE_INCREMENT, TYPE_DECREMENT } from './constants';

export function increment() {
  return {
    type: TYPE_INCREMENT,
  };
}

export function decrement() {
  return {
    type: TYPE_DECREMENT,
  };
}
