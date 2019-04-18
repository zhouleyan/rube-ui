/**
 * The basic state selectors
 */
import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectBasic = state => state.basic || initialState;

const makeSelectBasic = () =>
  createSelector(
    selectBasic,
    basicState => basicState,
  );

export { makeSelectBasic };
