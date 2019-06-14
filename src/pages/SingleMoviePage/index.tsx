// react libraries
import * as React from "react";

// styles
import "./SingleMoviePage.scss";
import NavBar from "../../components/NavBar";

export class SingleMoviePage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBar></NavBar>
        <div className="single-movie-page"></div>
      </React.Fragment>
    );
  }
}

export default SingleMoviePage;
