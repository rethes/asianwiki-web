// react libraries
import * as React from "react";

// styles
import "./NavBar.scss";

export class NavBar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="navigation-bar">
          <div className="container flex-vertical">
            <div className="top-nav">
              <div className="left-navbar">
                <img
                  src="https://res.cloudinary.com/do8ik6qe5/image/upload/v1560256265/asianwikilogo.png"
                  className="logo"
                  alt="AsianWiki"
                />
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
        </div>
      </React.Fragment>
    );
  }
}

export default NavBar;
