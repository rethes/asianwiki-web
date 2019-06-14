// react libraries
import * as React from "react";

// third party packages
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

// components
import SingleMoviePage from "pages/SingleMoviePage";
import App from "../App";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/moviesname" component={SingleMoviePage} />
    </Switch>
  </Router>
);

export default Routes;
