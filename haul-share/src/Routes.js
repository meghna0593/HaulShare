import React, { component } from "react";
import ReactDOM from "react-dom";
import { Router, Switch, Route } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import App from "./App.js";
import HomePage from "./pages/HomePage";
import Header from "./pages/Header";
import DetailDesc from "./pages/DetailDesc";
import Dummy from "./pages/Dummy";

const Routes = () =>
  ReactDOM.render(
    <Router history={createBrowserHistory()}>
      <Switch>
        <Route
          path="/home-page"
          render={() => (
            <Header>
              <hr /> <HomePage />{" "}
            </Header>
          )}
        />

        <Route
          path="/detail-desc"
          render={() => (
            <Header>
              <hr />
              <DetailDesc />
            </Header>
          )}
        />

        <Route
          path="/dummy"
          render={() => (
            <Header>
              <hr />
              <Dummy />
            </Header>
          )}
        />

        <Route
          exact
          path="/"
          render={() => (
            <Header>
              <App />
            </Header>
          )}
        />
      </Switch>
    </Router>,
    document.getElementById("root")
  );
export default Routes;
