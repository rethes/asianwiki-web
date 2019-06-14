// react libraries
import * as React from "react";
import * as ReactDOM from "react-dom";

// third party packages
import "./assests/styles/index.scss";
import * as serviceWorker from "./tools/serviceWorker";
import Routes from "./routes";

ReactDOM.render(<Routes />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
