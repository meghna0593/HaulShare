import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import SignUpForm from "./pages/SignUpForm";
import SignInForm from "./pages/SignInForm";
import "./App.css";
import Image from "material-ui-image";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App__Aside">
            <h2 className="App_Aside_Font"> HAUL-SHARE </h2>
            <h3 className="App_Aside_Font"> Ride Sharing For Goods </h3>
            <div>
              <Image
                src={
                  "https://www.dropbox.com/s/hgsa34nclhkihvo/undraw_logistics_x4dc.png?dl=1"
                }
                aspectRatio={16 / 9}
              />
            </div>
          </div>
          <div className="App__Form">
            <div className="PageSwitcher">
              <NavLink
                to="/sign-in"
                activeClassName="PageSwitcher__Item--Active"
                className="PageSwitcher__Item"
              >
                Log In
              </NavLink>
              <NavLink
                exact
                to="/"
                activeClassName="PageSwitcher__Item--Active"
                className="PageSwitcher__Item"
              >
                Register
              </NavLink>
            </div>

            <div className="FormTitle">
              <NavLink
                to="/sign-in"
                activeClassName="FormTitle__Link--Active"
                className="FormTitle__Link"
              >
                Log In
              </NavLink>{" "}
              <NavLink
                exact
                to="/"
                activeClassName="FormTitle__Link--Active"
                className="FormTitle__Link"
              >
                Register
              </NavLink>
            </div>

            <Route exact path="/" component={SignUpForm} />
            <Route path="/sign-in" component={SignInForm} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
