/*
 * authReducer
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
import routeData from 'config/routeData/router.config';

export const initialState = fromJS({ routeData: routeData[0] });

function authReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default authReducer;
