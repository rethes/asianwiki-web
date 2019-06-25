// react libraries
import * as React from "react";

// third-party libraries
import * as ReactTooltip from "react-tooltip";

// styles
import "./MoviesCalender.scss";

// fixtures
import { moviesFixtures } from "../../store/modules/movies/fixtures";

export class MoviesCalender extends React.Component {
  /**
   * Renders the movie calender header
   *
   * @returns {JSX}
   */
  renderMovieCalenderHeader = () => (
    <div className="movies-calender-container__header">
      <div className="options-dropdown" role="button">
        <span className="weekDropdown">
          Week
          <img
            className="weekDropdown__icon"
            alt="Dropdown icon"
            src="https://res.cloudinary.com/andeladevs/image/upload/v1549379771/chevron-down.svg"
          />
        </span>
      </div>
      <div className="arrow-wrap">
        <img
          src="https://res.cloudinary.com/andeladevs/image/upload/v1549386966/backward-icon.svg"
          alt="Backward Icon"
          id="Previous"
          data-tip={"Previous Week"}
          className="img"
        />
        <img
          src="https://res.cloudinary.com/andeladevs/image/upload/v1549386977/forward-icon.svg"
          alt="Forward Icon"
          id="Next"
          data-tip={"Next Week"}
          className="img"
        />
        <ReactTooltip
          place="top"
          effect="solid"
          className="tooltip tooltip--weekly"
        />
      </div>
      <div className="month-pick">
        <span>June 2019</span>
      </div>
    </div>
  );

  /**
   * Renders the movie calender body
   *
   * @returns {JSX}
   */
  renderMovieCalenderBody = moviesFixtures => {
    const movies = moviesFixtures.map(moviesFixture => (
      <div className="movie-card">
        <div className="movie-card__image">
          <img
            src={moviesFixture.image}
            className="image"
            alt={moviesFixture.title}
          />
        </div>
        <p className="movie-card__title">{moviesFixture.title}</p>
        <span className="movie-card__date">
          {moviesFixture.releaseDate.day}
        </span>
      </div>
    ));
    return movies;
  };

  render() {
    return (
      <>
        <div className="movies-calender">
          <div className="movies-calender-container">
            {this.renderMovieCalenderHeader()}
            <div className="calendar">
              {this.renderMovieCalenderBody(moviesFixtures)}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MoviesCalender;
