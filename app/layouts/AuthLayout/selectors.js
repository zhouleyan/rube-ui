/**
 * The auth state selectors
 */
import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectAuth = state => state.auth || initialState;

const makeSelectAuth = () =>
  createSelector(
    selectAuth,
    authState => authState,
  );

export { makeSelectAuth };
