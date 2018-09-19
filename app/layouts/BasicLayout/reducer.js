/*
 * basicReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * route data state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

export const initialState = fromJS({
  basic: 'foo',
});

function basicReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default basicReducer;
