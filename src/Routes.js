import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Home from "./pages/HomePage";
import Enter from "./pages/EnterPage";
import Projects from "./pages/ProjectPage";
import Contact from "./pages/ContactPage";
import history from "./history";

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Enter} />
          <Route path="/Home" exact component={Home} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Projects" component={Projects} />
        </Switch>
      </Router>
    );
  }
}
