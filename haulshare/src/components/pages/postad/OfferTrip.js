import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class OfferTrip extends Component {
  constructor(props) {
      super(props);

      this.state = {
          email: '',
          name: '',
          hasAgreed: false,
          startDate: new Date()

      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);

  }

  handleChange(e) {
      let target = e.target;
      let value = target.type === 'checkbox' ? target.checked : target.value;
      let name = target.name;
      let startDate=target.startDate;
      let date = target.date;

      this.setState({
        [name]: value,
        [startDate]: date
      });
  }

  handleSubmit(e) {
      e.preventDefault();


  }

    render() {
        return (
          <div className="FormOfferTrip">
              <form onSubmit={this.handleSubmit} className="Form">
              <div class="form-group">
                  <label for="name">Name</label>
                  <input type="name" class="form-control" id="name"  placeholder="Enter your name"/>
                </div>


  <div class="form-group">
      <label for="email">Email address</label>
      <input type="email" class="form-control" id="email"  placeholder="Enter your E-mail"/>
    </div>
    <div class="form-group">
      <label for="address">Address</label>
      <input type="address" class="form-control" id="address" placeholder="Enter your address"/>
    </div>
    <div class="form-group">
      <label for="number">Mobile number</label>
      <input type="number" class="form-control" id="number"  placeholder="Telephone number"/>
    </div>
    <div class="form-group">
      <label for="Vnumber">Vehicle number</label>
      <input type="Text" class="form-control" id="Vnumber"  placeholder="Enter your Vehicle number"/>
    </div>
    <div class="form-group">
      <label htmlFor="Date">Date</label>
      <input type="Date" id="Date"  class="w-100 p-3" placeholder="Enter Date*" name="Date" value={this.state.date} onChange={this.handleChange}/>
    </div>

    <div class="form-group">
      <label for="Time">Time</label>
      <input type="Time" class="form-control" id="Time"/>
    </div>
    <div class="form-group">
      <label for="Space">Space available</label>
      <input type="number" class="form-control" id="Space" placeholder="(In kgs)"/>
    </div>
    <div class="form-group">
      <label for="Fare">Fare</label>
      <input type="number" class="form-control" id="Fare" />
    </div>
    <div class="form-group">
      <label for="Description">Description</label>
      <input type="Description" class="form-control" id="Description" />
    </div>
    <div className="FormField1">
    <button className="FormField__Button1">Post</button>


    </div>
              </form>
            </div>
          );
      }
  }

export default OfferTrip;
