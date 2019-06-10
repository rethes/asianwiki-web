// interfaces
import {
  MoviesActionFailure,
  MoviesActionRequest,
  MoviesActionSuccess,
  Movie
} from "./interfaces";

// types
import {
  GET_MOVIES_FAILURE,
  GET_MOVIES_REQUEST,
  GET_MOVIES_SUCCESS
} from "./types";

// fixtures
import { moviesFixtures } from "./fixtures";

/**
 * Get movies success action creator
 *
 * @param {Movie[]} movies
 *
 * @returns {MoviesActionSuccess}
 */
export const getMoviesSuccess = (movies: Movie[]): MoviesActionSuccess => ({
  movies,
  type: GET_MOVIES_SUCCESS,
  isLoading: false
});

/**
 * action creator
 *
 * The action dispatched prior to making a request to get all movies
 *
 * @returns {MoviesActionRequest}
 */
export const getMoviesRequest = (): MoviesActionRequest => {
  return {
    type: GET_MOVIES_REQUEST,
    isLoading: true
  };
};

/**
 * action creator
 *
 * Get movies failure action creator
 *
 * @returns {MoviesActionFailure}
 */
export const getMoviesFailure = (errors): MoviesActionFailure => {
  return {
    errors,
    type: GET_MOVIES_FAILURE
  };
};

/**
 * Thunk
 *
 * Makes an api call to get the Movies
 *
 * @param {Object} extraParams
 * @returns {Function} action type and payload
 */
export const getMovies = () => dispatch => {
  dispatch(getMoviesRequest());

  if (moviesFixtures.length === 0) {
    const error = "No Movies Found";
    dispatch(getMoviesFailure(error));
  }
  return dispatch(getMoviesSuccess(moviesFixtures));
};

// Set the initial Request Types state
export const moviesInitialState = {
  data: [],
  isLoading: false,
  errors: null
};

/**
 * reducer for Request Type actions
 *
 * This reducer changes the movies state of the application
 *
 * @param {moviesInitialState} state Reducer initial state
 * @param {Action} action
 *
 * @returns {state} new state
 */
const reducer = (state = moviesInitialState, action) => {
  switch (action.type) {
    case GET_MOVIES_REQUEST:
      return {
        ...state,
        isLoading: action.isLoading
      };
    case GET_MOVIES_SUCCESS:
      return {
        ...state,
        data: action.movies,
        isLoading: action.isLoading
      };
    case GET_MOVIES_FAILURE:
      return {
        ...state,
        errors: action.errors
      };
    default:
      return state;
  }
};

export default reducer;
