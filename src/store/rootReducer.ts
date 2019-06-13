import { combineReducers } from "redux";

// reducers
import movies from "./modules/movies";
import dramas from "./modules/dramas";

const rootReducer = combineReducers({
  dramas,
  movies
});

export default rootReducer;
