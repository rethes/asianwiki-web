// interfaces
import {
  DramasActionFailure,
  DramasActionRequest,
  DramasActionSuccess,
  Drama
} from "./interfaces";

// types
import {
  GET_DRAMAS_FAILURE,
  GET_DRAMAS_REQUEST,
  GET_DRAMAS_SUCCESS
} from "./types";

// fixtures
import { dramasFixtures } from "./fixtures";
/**
 * Get dramas success action creator
 *
 * @param {Drama[]} dramas
 *
 * @returns {DramasActionSuccess}
 */
export const getDramasSuccess = (dramas: Drama[]): DramasActionSuccess => ({
  dramas,
  type: GET_DRAMAS_SUCCESS,
  isLoading: false
});

/**
 * action creator
 *
 * The action dispatched prior to making a request to get all dramas
 *
 * @returns {DramasActionRequest}
 */
export const getDramasRequest = (): DramasActionRequest => {
  return {
    type: GET_DRAMAS_REQUEST,
    isLoading: true
  };
};

/**
 * action creator
 *
 * Get dramas failure action creator
 *
 * @returns {DramasActionFailure}
 */
export const getDramasFailure = (errors): DramasActionFailure => {
  return {
    errors,
    type: GET_DRAMAS_FAILURE
  };
};

/**
 * Thunk
 *
 * Makes an api call to get the dramas
 *
 * @param {Object} extraParams
 * @returns {Function} action type and payload
 */
export const getDramas = () => dispatch => {
  dispatch(getDramasRequest());

  if (dramasFixtures.length === 0) {
    const error = "No Dramas Found";
    dispatch(getDramasFailure(error));
  }
  return dispatch(getDramasSuccess(dramasFixtures));
};
// Set the initial Request Types state
export const dramasInitialState = {
  data: [],
  isLoading: false,
  errors: null
};

/**
 * reducer for Request Type actions
 *
 * This reducer changes the dramas state of the application
 *
 * @param {dramasInitialState} state Reducer initial state
 * @param {Action} action
 *
 * @returns {state} new state
 */
const reducer = (state = dramasInitialState, action) => {
  switch (action.type) {
    case GET_DRAMAS_REQUEST:
      return {
        ...state,
        isLoading: action.isLoading
      };
    case GET_DRAMAS_SUCCESS:
      return {
        ...state,
        data: action.dramas,
        isLoading: action.isLoading
      };
    case GET_DRAMAS_FAILURE:
      return {
        ...state,
        errors: action.errors
      };
    default:
      return state;
  }
};

export default reducer;
