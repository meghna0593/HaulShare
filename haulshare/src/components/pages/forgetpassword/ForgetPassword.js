import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ForgetPassword.css';

class ForgotPassword extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleChange = this.handleChange.bind(this);

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


            <div  class="container-fluid">
            <div class="card" class="w-100 p-3">
            <div>
            <h1> Forgot your password?</h1>
            </div>
            <div>
            <h4> Let us help you! </h4>
            </div>
            <p class="card-text" class="font-weight-bold" class= "text-left"> Enter your instructions below and we will e-mail instructions for setting a new one! </p>
              <div class="card-body">
              <div class="form-group">
                  <label for="email">Email address</label>
                  <input type="email" class="form-control" id="email"  placeholder="Enter your E-mail" name="email" value={this.state.email} onChange={this.handleChange} />
                </div>
                <button  href="/sign-in" className = "Formsignin_Button" > Submit  < /button>


              </div>
            </div>
            </div>



);
}
}

export default ForgotPassword;
