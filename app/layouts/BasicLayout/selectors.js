/**
 * The basic state selectors
 */
import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectBasic = state => state.get('basic', initialState);

const makeSelectBasic = () =>
  createSelector(selectBasic, basicState => basicState.toJS());

export { makeSelectBasic };
