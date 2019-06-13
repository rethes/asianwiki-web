// react libraries
import React from "react";

// components
import { NavBar } from "./components/NavBar";
import { Carousel } from "./components/Carousel";
import { MoviesCalender } from "./components/MoviesCalender";

const App = () => {
  return (
    <>
      <NavBar />
      <Carousel />
      <MoviesCalender />
    </>
  );
};

export default App;
