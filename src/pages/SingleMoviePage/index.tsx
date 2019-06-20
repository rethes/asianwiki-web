// react libraries
import * as React from "react";

import ReadMoreReact from "read-more-react";
// styles
import "./SingleMoviePage.scss";

// components
import NavBar from "../../components/NavBar";
import MovieCastCard from "../../components/MovieCastCard";
import LatestContent from "../../components/LatestContent";
import MovieDetails from "../../components/MovieDetails";

//fixtures
import { castFixtures } from "../../components/MovieCastCard/fixtures";
import { moviesFixtures } from "../../store/modules/movies/fixtures";
import { latestNewsFixtures } from "../../components/LatestContent/fixtures";

// interfaces
import { SingleMoviePageProps } from "./interfaces";

export class SingleMoviePage extends React.Component<SingleMoviePageProps> {
  /**
   * Maps through an array
   *
   * @param {Array} arrayValues
   *
   * @returns {Function}
   */
  arrayValueList = arrayValues =>
    arrayValues.map((arrayValue, index) => {
      return (
        <div className="notes" key={index}>
          <div className="notes-bubble">
            <div className="notes-bubble-media">
              <div className="pull-left">
                <img
                  src="https://res.cloudinary.com/do8ik6qe5/image/upload/v1559843246/favicon.ico"
                  className="asianwiki-icon"
                  alt="asianwiki-icon"
                />
              </div>
              <div className="note-body">
                <p className="note-body2">{arrayValue}</p>
              </div>
            </div>
          </div>
        </div>
      );
    });

  render() {
    const movieId = this.props.match.params.movieId;

    let movie;
    for (let i = 0; i < moviesFixtures.length; i++) {
      if (moviesFixtures[i].id === movieId) {
        movie = moviesFixtures[i];
      }
    }

    return (
      <React.Fragment>
        <NavBar />
        <div className="single-movie">
          <div className="single-movie-page">
            <LatestContent news={latestNewsFixtures} />
            <div className="main-column">
              <MovieDetails
                key={movie.id}
                image={movie.image}
                title={movie.title}
                releaseDate={movie.releaseDate}
                runtime={movie.runtime}
                genre={movie.genre}
                director={movie.director}
                language={movie.language}
                writers={movie.writers}
                country={movie.country}
              />
              <div className="movie-info">
                <div className="header">
                  <h2 className="header__panel-heading">Movie Info</h2>
                </div>
                <div className="media-info-content">
                  <div className="media-info-content__plot-synopsis">
                    <ReadMoreReact
                      text={movie.synopsis}
                      min={100}
                      ideal={200}
                      max={250}
                      readMoreText="View More"
                    />
                  </div>
                </div>
              </div>

              <div className="movie-cast">
                <div className="header">
                  <h2 className="header__panel-heading">CAST</h2>
                </div>
                <div className="movie-cast-content">
                  {castFixtures && castFixtures.length > 0 ? (
                    castFixtures.map((cast, index) => (
                      <MovieCastCard
                        key={index}
                        name={cast.name}
                        role={cast.role}
                        image={cast.image}
                      />
                    ))
                  ) : (
                    <h2 className="header__panel-heading"> NO cast names</h2>
                  )}
                </div>
              </div>

              <div className="movie-notes">
                <div className="header">
                  <h2 className="header__panel-heading">Notes</h2>
                </div>
                <div className="movie-notes__content">
                  {this.arrayValueList(movie.notes)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SingleMoviePage;
