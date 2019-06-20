// import libraries
import * as React from "react";

// styles
import "./MovieDetails.scss";

// interfaces
import { MovieDetailsProps } from "./interfaces";

export const MovieDetails = (props: MovieDetailsProps) => {
  const {
    image,
    title,
    releaseDate,
    runtime,
    genre,
    director,
    language,
    writers,
    country
  } = props;

  const arrayValueList = arrayValues =>
    arrayValues.map((arrayValue, index) => {
      return (
        <div className="movie-list" key={index}>
          {arrayValue}.{" "}
        </div>
      );
    });

  return (
    <div className="movie-wrap">
      <div className="movie-thumbnail">
        <img className="thumbnail-image" src={image} alt="thumbnail" />
      </div>
      <div className="movie-content">
        <h1 className="movie-content__title">
          {title}
          <span className="movie-content__date">({releaseDate.year})</span>
        </h1>
        <div className="movie-content__media">
          <div className="movie-synopsis">
            <time dateTime="PT114M">{runtime}</time>
            <span className="bar"> | </span>
            {arrayValueList(genre)}
            <span className="bar"> | </span>
            <time dateTime="PT114M">
              {releaseDate.day}, {releaseDate.year}.
            </time>
          </div>
          <div className="media-plot-synopsis">
            <ul className="media-plot-synopsis__content">
              <li className="media-plot-synopsis-items">
                <div className="span-info-label">Director: </div>
                <div className="info-content">{director}</div>
              </li>
              <li className="media-plot-synopsis-items">
                <div className="span-info-label">Languages: </div>
                <div className="info-content">{arrayValueList(language)}</div>
              </li>
              <li className="media-plot-synopsis-items">
                <div className="span-info-label">Writers: </div>
                <div className="info-content">{arrayValueList(writers)}</div>
              </li>
              <li className="media-plot-synopsis-items">
                <div className="span-info-label">Country: </div>
                <div className="info-content">{country}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
