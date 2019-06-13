// types
import {
  GET_DRAMAS_FAILURE,
  GET_DRAMAS_REQUEST,
  GET_DRAMAS_SUCCESS
} from "./types";

export interface DramasActionRequest {
  type: GET_DRAMAS_REQUEST;
  isLoading: true;
}

export interface DramasActionSuccess {
  dramas: Drama[];
  type: GET_DRAMAS_SUCCESS;
  isLoading: false;
}

export interface DramasActionFailure {
  type: GET_DRAMAS_FAILURE;
  errors: any;
}

export interface Drama {
  id: string;
  title: string;
  image: string;
  premiereDate: Date;
  creator: string;
  season: string;
  episodes: string;
  network: string;
  country: string;
  genre: string[];
  synopsis: string;
  language?: string[];
  writers?: string[];
  stars?: string[];
  otherTitles?: string[];
}

export interface Date {
  day: string;
  year: string;
}
