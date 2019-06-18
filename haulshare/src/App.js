import React, { Component } from 'react';
import { br as Router, Route, Link, NavLink } from 'react-router-dom';
import SignUpForm from './components/pages/userloginsignup/SignUpForm';
import SignInForm from './components/pages/userloginsignup/SignInForm';
import ForgetPassword from './components/pages/forgetpassword/ForgetPassword';
import './components/Styles/main.css';
import './App.css';
import logo from './logo.png';
import homepage from './components/pages/homepage/homepage';
import Navbar from './components/Header/Navbar';


class App extends Component {
  render() {
    return (
      <div>
      <div className="na">
    <Navbar />
    </div>

    <div className="gg">
    <img src={logo} height="40" width="40" class="rounded" alt="logo" />
   </div>
</div>

    );
  }
}
export default App;
