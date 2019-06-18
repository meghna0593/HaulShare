import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import homepage from './homepage.css';
import aa from '../../../aa.svg';

class Homepageform extends Component {
render() {
  return (
    <div  class="container-fluid" >
    <div className="Tripsuggestions"  class="w-50 p-3">

    <div className="topnav">
  <input type="text" className="place" placeholder="Search.."/>
</div>

<div className="buttonsearch">
<button className = "Searchbutton" >Search < /button>
</div>


<div className="topnav2" >

<div className="topnav1">
<a href="/Home"  className="Profile_page_link"> Home</a>
</div>
<div className="topnav1">
<a href="/Userprofile"  className="Profile_page_link"> MyProfile</a>
</div>
<div className="topnav1">
<a href="/postad#/OfferTrip"  className="Profile_page_link">Post Ad</a>
</div>
<div className="topnav1">
<a href="/deletead"  className="Profile_page_link">Delete Ad</a>
</div>
<div className="topnav1">
<a href="/about"  className="Profile_page_link">About</a>
</div>
<div className="topnav1">
<a href="/contactus"  class="text-light bg-dark" className="Profile_page_link">Contact</a>
</div>
<div className="triplistings"  class= "text-center" >
Trip Listings
</div>
<div className="triplistings"  class= "text-right" >
Trip Suggestions
</div>

<div className="Mainhome">
<div>
<p class="font-weight-lighter" class= "text-left" > Filter</p>
</div>
<img src={aa} class="img-fluid" alt="Responsive image"/>
</div>

</div>

</div>


</div>

    );
  }
 }

 export default Homepageform;
