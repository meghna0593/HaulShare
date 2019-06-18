import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from '../component/Login/login.js';
import Home from '../component/Home/home.js';
import UserProfile from '../component/User-Profile/userProfile.js';
import PostAd from '../component/PostAd-Form/createAd';
const Routes=(
    <Router>
        {/* Path to pages from “React-Router-Dom.” Npm, www.npmjs.com/package/react-router-dom. */}
        <div>
            <Route exact path="/" component={Login}/> 
            <Route exact path="/home" component={Home} />
            <Route exact path="/profile" component={UserProfile} />
            <Route exact path="/post-ad" component={PostAd}/>
        </div>
    </Router>
)
export default Routes;
 