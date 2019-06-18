import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import homepage from '../homepage/homepage.js';
import App from '../../../App.css';
import Bg from '../../../Bg.png';


class SignInForm extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
            [name]: value
        });
    }
    handleSubmit(e) {
        e.preventDefault();
    }
    render() {
        return (
          <div  class="container-fluid"  margin-left='0'>
          <div class="card" margin-top='0' margin-left='0'>
            <img src={Bg} class="card-img-top"alt="Bg"/>
            <div class="card-body">
              <p class="card-text" class="font-weight-light" class= "text-center">  Welcome to Haul-Share! Sharing saves money</p>
            </div>
          </div>

            <div className="MainSignin">

            <form onSubmit={this.handleSubmit} className="FormFields">

            <div className="Formsignin">
              <label className="Formsignin_Label" htmlFor="email">E-Mail Address</label>
              <input type="email" id="email" className="Formsignin_Input" placeholder="Enter your email*" name="email" value={this.state.email} onChange={this.handleChange} />
            </div>


            <div className="Formsignin">
              <label className="Formsignin_Label" htmlFor="password">Password</label>
              <input type="password" id="password" className="Formsignin_Input" placeholder="Enter your password*" name="password" value={this.state.password} onChange={this.handleChange} />
            </div>
            <div className = "FormField" >

          <button className = "Formsignin_Button" >  Sign In  < /button>


          <a href="/forgetpassword"  className="Form_Link">   Forget Password? </a>



</div>


<a href="/sign-up"  className="Form_Link">   Didn't have an account?Register Now!</a>


            </form>
            <a href="/home"  className="Form_Link"> Home</a>

            </div>
            </div>
        );
    }
}

export default SignInForm;
