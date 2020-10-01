import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";

import Routes from "./Routes";

ReactDOM.render(
  <Router>
    <div className="App">
      <Routes />
    </div>
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
