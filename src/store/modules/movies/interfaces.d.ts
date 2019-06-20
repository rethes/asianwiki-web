// types
import {
  GET_MOVIES_FAILURE,
  GET_MOVIES_REQUEST,
  GET_MOVIES_SUCCESS
} from "./types";

export interface MoviesActionRequest {
  type: GET_MOVIES_REQUEST;
  isLoading: true;
}

export interface MoviesActionSuccess {
  movies: Movie[];
  type: GET_MOVIES_SUCCESS;
  isLoading: false;
}

export interface MoviesActionFailure {
  type: GET_MOVIES_FAILURE;
  errors: any;
}

export interface Movie {
  id: string;
  title: string;
  image: string;
  country: string;
  releaseDate: Date;
  director: string;
  runtime: string;
  genre: string[];
  synopsis: string;
  language?: string[];
  writers?: string[];
  stars?: string[];
  taglines?: string;
  notes?: string[];
  trailers: object[];
}

export interface Date {
  day: string;
  year: string;
}
