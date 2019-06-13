// react libraries
import React from "react";

// components
import { NavBar } from "./components/NavBar";
import { Carousel } from "./components/Carousel";

const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Carousel />
    </React.Fragment>
  );
};

export default App;
