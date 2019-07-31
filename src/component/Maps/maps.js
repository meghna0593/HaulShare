//Varun Gopalakrishnan, B00823111
import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import Header from "../Header/header";
import MarkerPin from "./place.jsx";
import Geocode from "react-geocode";
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
//setting initial position in map.
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 44.64,
      lng: -63.57
    },
    zoom: 13
  };

  state = {
    location: null,
    loading: true,
    p_lat: null,
    p_lng: null,
    d_lat: null,
    d_lng: null,
    obj_id: localStorage.getItem("obj_id")
  };

  // async call to fetch pickup and drop address and extract lat,lng using geo-encoding.
  async componentDidMount() {
    console.log(this.state.obj_id);
    //localStorage.removeItem("obj_id");
    // const url = "http://localhost:5543/api/getData/" + this.state.obj_id;
    // "https://web-backend-server.herokuapp.com/api/getData/100/" +
    // (this.state.trip_id === null ? 1 : this.state.trip_id);
    const url = "https://web-project-maps.herokuapp.com/api/getData/"+ this.state.obj_id;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    this.setState({ location: data.data[0], loading: false });

    // geo-encoder function call, to change address to lat and lng.
    this.getGeocode(this.state.location.source, "p");
    this.getGeocode(this.state.location.destination, "d");
  }

  componentWillMount() {

    if(localStorage.getItem('user_id')===null||localStorage.getItem('user_id')===''){
      alert('Please login first')
      history.push("/");
      history.go();
    }

}

  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }

  getGeocode = (addr, p_d_ind) => {
    // set Google Maps Geocoding API for tracking request quota.
    Geocode.setApiKey("AIzaSyAZqC65fXp58nk_d1y5fsigHLXLEuwCkpE");
    Geocode.enableDebug();
    Geocode.fromAddress(addr).then(
      response => {
        let { lat, lng } = response.results[0].geometry.location;
        //identifying pickup and drop address using a counter.
        if (p_d_ind == "p") {
          this.setState({ p_lat: lat });
          this.setState({ p_lng: lng });
          //console.log("hip", this.state.p_lat);
        } else if (p_d_ind == "d") {
          this.setState({ d_lat: lat });
          this.setState({ d_lng: lng });
          //console.log("hid", this.state.d_lat);
        }
      },
      error => {
        console.error(error);
      }
    );
  };

  render() {
    if (this.state.loading) {
      //loading is displayed while waiting for api response.
      return <div>loading...</div>;
    }

    // console.log(this.state.location.d_lng);
    //If no response is received below message is dispayed
    if (!this.state.location) {
      return <div>didn't get a location</div>;
    }
    console.log("hip1", this.state.p_lat);
    console.log("hid1", this.state.d_lat);
    return (
      // The container height is set explicitly
      <div style={{ height: "100vh", width: "100%" }}>
        <Header />
        <GoogleMapReact
          bootstrapURLKeys={{
            //google api key to access the maps
            key: "AIzaSyDY5sdxJ1y02C3cWKB4 - iezaXaCt0sKoKQ"
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <MarkerPin lat={this.state.p_lat} lng={this.state.p_lng} text="P" />
          <MarkerPin lat={this.state.d_lat} lng={this.state.d_lng} text="D" />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
