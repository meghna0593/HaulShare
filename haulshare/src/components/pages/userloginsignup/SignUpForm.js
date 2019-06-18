import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import App from '../../../App.css';
import Bg from '../../../Bg.png';

class SignUpForm extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            name: '',
            hasAgreed: false
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
          <div>
          <div className="Body">

          <h3> Please fill out the registration form. </h3>
          </div>
          <div className="MainSigninSignup">
            <form onSubmit={this.handleSubmit} className="FormFields">
              <div className="Formsignin">
                <label className="Formsignin_Label" htmlFor="name">Full Name</label>
                <input type="text" id="name" className="Formsignin_Input" placeholder="Enter your full name*" name="name" value={this.state.name} onChange={this.handleChange} />
              </div>
              <div className="Formsignin">
                <label className="Formsignin_Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="Formsignin_Input" placeholder="Enter your password*" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>

              <div className="Formsignin">
                <label className="Formsignin_Label" htmlFor="Confirm Password">Confirm Password</label>
                <input type="Confirm_password" id="Confirm_password" className="Formsignin_Input" placeholder="Enter your password*" name="Confirm_password" value={this.state.password} onChange={this.handleChange} />
              </div>

              <div className="Formsignin">
                <label className="Formsignin_Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="Formsignin_Input" placeholder="Enter your email*" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>

              <div className="Formsignin">
                <label className="Formsignin_Label" htmlFor="Contact_number">Contact number</label>
                <input type="Contact_number" id="Contact_number" className="Formsignin_Input" placeholder="Contact number*" name="Contact_number"/>
              </div>

              <div className="FormField">
               <button className="Formsignin_Button">Get Started</button>
              </div>
              <a href="/sign-in"  className="Form_Link"> I'm already a member. Log me in.</a>
            </form>
          </div>
          </div>

          </div>

        );
    }
}

export default SignUpForm;
