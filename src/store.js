import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { reducer } from './reducers/reducer';

export function initializeStore(state = {}) {
  return createStore(reducer, { ...state }, applyMiddleware(thunk));
}