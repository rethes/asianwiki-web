// react libraries
import * as React from "react";

// styles
import "./Carousel.scss";
import "../NavBar/NavBar.scss";

export class Carousel extends React.Component {
  /**
   * Renders the carousel
   *
   * @returns {JSX}
   */
  renderCarousel = () => (
    <div className="carousel">
      <div className="slide1">
        <img
          src="http://asianwiki.com/images/mainimagegallery2/mgimages/The_Great_War_of_Archimedes-F1.jpg"
          className="image1"
          alt="The_Great_War_of_Archimedes"
        />
      </div>
      <div className="slide2">
        <img
          src="http://asianwiki.com/images/mainimagegallery2/mgimages/Perfume-F1.jpg"
          className="image2"
          alt="Perfume"
        />
      </div>
      <div className="slide3">
        <img
          src="http://asianwiki.com/images/mainimagegallery2/mgimages/Voice_3-F1.jpg"
          className="image3"
          alt="Voice_3"
        />
      </div>
    </div>
  );

  render() {
    return <>{this.renderCarousel()}</>;
  }
}

export default Carousel;
