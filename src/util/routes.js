import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "../component/Login/login.js";
import Home from "../component/Home/home.js";
import UserProfile from "../component/User-Profile/userProfile.js";
import PostAd from "../component/PostAd-Form/createAd";
import VehicleInfo from "../component/Vehicle-Info/vehicleInfo";
import MyTrips from "../component/My-Trips/myTrips";
import MyAds from "../component/My-Ads/myAds";
import RatingFeedback from "../component/Rating-Feedback/ratingFeedback";
import Maps from "../component/Maps/maps";
const Routes = (
  <Router>
    {/* Path to pages from “React-Router-Dom.” Npm, www.npmjs.com/package/react-router-dom. */}
    <div>
      <Route exact path="/" component={Login} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/profile" component={UserProfile} />
      <Route exact path="/post-ad" component={PostAd} />
      <Route exact path="/vehicle-info" component={VehicleInfo} />
      <Route exact path="/my-trips" component={MyTrips} />
      <Route exact path="/my-ads" component={MyAds} />
      <Route exact path="/my-feedback" component={RatingFeedback} />
      <Route exact path="/maps" component={Maps} />
    </div>
  </Router>
);
export default Routes;
