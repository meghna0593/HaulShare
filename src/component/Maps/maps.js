import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import Header from "../Header/header";
import MarkerPin from "./place.jsx";
import Geocode from "react-geocode";

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
    trip_id: localStorage.getItem("trip_id")
  };

  async componentDidMount() {
    console.log(this.state.trip_id);
    localStorage.removeItem("trip_id");
    const url =
      "http://localhost:5543/api/getData/100/" +
      (this.state.trip_id === null ? 1 : this.state.trip_id);
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ location: data.data[0], loading: false });
    // geo-encoder call
    this.getGeocode(this.state.location.pickup_addr, "p");
    this.getGeocode(this.state.location.drop_addr, "d");
  }

  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }

  // getDataFromDb = () => {
  //   fetch("http://localhost:3001/api/getData/5d23654eef258223c0a8ce90")
  //     .then(data => data.json())
  //     .then(res => this.setState({ data: res.data }));
  // };

  getGeocode = (addr, p_d_ind) => {
    // set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
    Geocode.setApiKey("AIzaSyAZqC65fXp58nk_d1y5fsigHLXLEuwCkpE");
    Geocode.enableDebug();
    Geocode.fromAddress(addr).then(
      response => {
        let { lat, lng } = response.results[0].geometry.location;
        if (p_d_ind == "p") {
          this.setState({ p_lat: lat });
          this.setState({ p_lng: lng });
          console.log("hip", this.state.p_lat);
        } else if (p_d_ind == "d") {
          this.setState({ d_lat: lat });
          this.setState({ d_lng: lng });
          console.log("hid", this.state.d_lat);
        }
      },
      error => {
        console.error(error);
      }
    );
  };

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    // console.log(this.state.location.d_lng);

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
