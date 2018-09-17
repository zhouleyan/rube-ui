/**
 * The auth state selectors
 */
import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectAuth = state => state.get('auth', initialState);

const makeSelectRouteData = () =>
  createSelector(selectAuth, authState => authState.get('routeData').toJS());

export { makeSelectRouteData };
