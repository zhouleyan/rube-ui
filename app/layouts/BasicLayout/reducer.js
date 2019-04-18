/*
 * BasicReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */
import { fromJS } from 'immutable';
import produce from 'immer';

export const initialState = fromJS({
  basic: 'foo',
});

const basicReducer = (state = initialState, action) =>
  produce(state, draft => { // eslint-disable-line
    switch (action.type) {
      default:
        return state;
    }
  });

export default basicReducer;
