// import libraries
import * as React from "react";

// styles
import "./MovieCastCard.scss";

// interfaces
import { MovieCastCardProps } from "./interfaces";

const MovieCastCard = (props: MovieCastCardProps) => {
  const { name, role, image } = props;
  return (
    <div className="movie-cast-card">
      <img src={image} className="cast-image" alt="Cast Name" />
      <p className="movie-cast-card__title">{name}</p>
      <span className="movie-cast-card__role">{role}</span>
    </div>
  );
};

export default MovieCastCard;
