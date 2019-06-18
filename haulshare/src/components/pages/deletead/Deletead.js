import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Deletead extends Component {


  render() {
      return (
        <div  class="container-fluid">

        <div class="card-body">
          <p class="card-text" class="font-weight-light" class= "text-center"> Delete your Ad's</p>
        </div>

        <div class="card">
         <div class="card-header">
         Your Ad 1
    </div>
    <div class="card-body">
      <h5 class="card-title">Request Trip</h5>
      <p class="card-text">Details</p>
      <a href="/deletead" className="Profile_page_link"> Delete</a>

    </div>
  </div>

  <div class="card">
   <div class="card-header">
   Your Ad 2
  </div>
  <div class="card-body">
  <h5 class="card-title">Offer Trip</h5>
  <p class="card-text">Details</p>
  <a href="/deletead" className="Profile_page_link"> Delete</a>
  </div>
  </div>

  <div class="card">
   <div class="card-header">
   Your Ad 3
  </div>
  <div class="card-body">
  <h5 class="card-title">Offer Trip</h5>
  <p class="card-text">Details</p>
  <a href="/deletead" className="Profile_page_link"> Delete</a>
  </div>
  </div>


    <div class="card">
     <div class="card-header">
     Your Ad 4
    </div>
    <div class="card-body">
    <h5 class="card-title">Offer Trip</h5>
    <p class="card-text">Details</p>
    <a href="/deletead" className="Profile_page_link"> Delete</a>
    </div>
    </div>
        </div>
                );
            }
        }
export default Deletead;
