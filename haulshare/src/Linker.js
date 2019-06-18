
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import SignUpForm from './components/pages/userloginsignup/SignUpForm';
import SignInForm from './components/pages/userloginsignup/SignInForm';
import ForgetPassword from './components/pages/forgetpassword/ForgetPassword.js';
import './components/Styles/main.css';
import './App.css';
import logo from './logo.png';
import homepage from './components/pages/homepage/homepage';
import PostAd from './components/pages/postad/PostAd';
import OfferTrip from './components/pages/postad/OfferTrip';
import RequestTrip from './components/pages/postad/RequestTrip';
import UserProfile from './components/pages/userprofile/UserProfile';
import About from './components/pages/about/About';
import ContactUs from './components/pages/contactus/ContactUs';
import Navbar from './components/Header/Navbar';
import App from './App';
import Deletead from './components/pages/deletead/Deletead';

const Linker =(
  <div>
  <Router>
  <Route path="/" component={App}></Route>
  <Route path="/sign-up" component={SignUpForm}>
  </Route>
  <Route exact path="/sign-in" component={SignInForm}>
  </Route>
  <Route exact path="/forgetpassword" component={ForgetPassword}>
  </Route>
  <Route path="/home" component={homepage}>
  </Route>

  <Route path="/about" component={About}>
  </Route>
  <Route path="/contactus" component={ContactUs}>
  </Route>
  <Route path="/Userprofile" component={UserProfile}>
  </Route>
  <Route path="/postad" component={PostAd}>
  </Route>
  <Route path="/deletead" component={Deletead}>
  </Route>
  </Router>
  </div>

)
export default Linker;
