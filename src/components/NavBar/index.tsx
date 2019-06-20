// react libraries
import * as React from "react";

// third-party libraries
import { Link } from "react-router-dom";

// styles
import "./NavBar.scss";

export class NavBar extends React.Component {
  render() {
    return (
      <>
        <div className="navigation-bar">
          <div className="top-nav">
            <div className="left-navbar">
              <Link to="/">
                <img
                  src="https://res.cloudinary.com/do8ik6qe5/image/upload/v1560256265/asianwikilogo.png"
                  className="logo"
                  alt="AsianWiki"
                />
              </Link>
            </div>
            <div className="right-navbar">
              <div className="search-bar">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search"
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default NavBar;
