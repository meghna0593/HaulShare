import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import  OfferTrip from './OfferTrip';
import  RequestTrip from './RequestTrip';
import PostAd from './PostAd.css';

class App extends Component {
  render(){
  return (
<Router>
  <div class="container-fluid">
    <div className="Switcher"  class="w-100 p-3">
        <div className="PageSwitcher">
            <NavLink exact to="/OfferTrip" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Offer Trip</NavLink>
            <NavLink to="/RequestTrip" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Request Trip</NavLink>
          </div>

          <Route exact path="/RequestTrip" component={RequestTrip}>
                  </Route>
                  <Route exact path="/OfferTrip" component={OfferTrip}>
                  </Route>

                  </div>
                  </div>
  </Router>
);
}
}

export default App;
