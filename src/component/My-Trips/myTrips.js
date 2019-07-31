// Varun Gopalakrishnan,B00823111 - Added backend connection to fetch data from MongoDB
import React, { Component } from "react";
import Header from "../Header/header.js";
import {
  FormControl,
  Card,
  Form,
  Button,
  Image,
  Container,
  Row,
  Col
} from "react-bootstrap";
import { createBrowserHistory } from "history";
import "./myTrips.css";

const history = createBrowserHistory();

class MyTrips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adTitle: "",
      strgDim: "",
      luggageWgt: "",
      destn: "",
      tripCost: "",
      desc: "",
      vhclType: "",
      vhclNum: "",
      userOption: 0,
      tripTime: "",
      result: []
    };
  }

  //code added by varun
  async componentDidMount() {
    console.log(localStorage.getItem("user_id"));
    let user_id = localStorage.getItem("user_id");
    // const url = "http://localhost:5545/api/getData/" + user_id;
    const url = "https://web-project-mytrips.herokuapp.com/api/getData/"+ user_id;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ result: data.data }, () => {
      console.log(this.state.result);
    });
  }

  componentWillMount() {
    if(localStorage.getItem('user_id')===null||localStorage.getItem('user_id')===''){
      alert('Please login first')
      history.push("/");
      history.go();
    }
  }

  goToRating = req_id => {
    localStorage.setItem("req_id", req_id);
    history.push("/my-feedback");
    history.go();
  };

  goToMaps = _id => {
    localStorage.setItem("obj_id", _id);
    history.push("/maps");
    history.go();
  };

  //code modified by varun
  displayCards1 = () => {
    //console.log(e);
    return (
      <Container>
        <Card style={{ margin: "30px 10px" }}>
          <Row>
            <Col md={12}>
              <h5 className="ad-title">Past Trips</h5>{" "}
              <div>
                <hr style={{ width: "100%" }} />
              </div>
            </Col>
          </Row>
          {this.state.result.map(e => this.displayCardsdetails(e._id, e, 2))}
        </Card>
      </Container>
    );
  };

  //code added by Meghna
  changeTripStatus = (e, status) => {
    // let url_get ="http://localhost:5000/tripNotifiy/" + e._id + "/" + e.requestorId +"/" +status;
    let url_get='https://haul-share-meghna.herokuapp.com/tripNotifiy/'+e._id+'/'+e.requestorId+'/'+status;
    fetch(url_get, { method: "PUT" })
      .then(data => data.json())
      .then(res => {
        if (res) {
          if (status === "S") {
            alert("The trip has started");
          } else {
            alert("The trip has ended");
            window.location.reload();
          }
        }
      })
      .catch(e => alert("Error occurred:", e));
  };

  displayCardsdetails = (_id, e, acc) => {
    console.log(_id, e);
    if (e.accepted === acc) {
      return (
        <Row>
          {/* <div className = "resultsPageCard1" >*/}
          <Col md={12} style={{ display: "flex", justifyContent: "center" }}>
            <Card
              style={{
                backgroundColor: "white",
                width: "97%",
                marginBottom: "30px"
              }}
            >
              <Row>
                <Col md={8} sm={12}>
                  <Card.Img
                    variant="top"
                    src="/images/imageCard3.jpg"
                    style={{ height: "350px", width: "90%" }}
                  />
                </Col>
                <Col md={4} sm={12}>
                  <div
                    class="float-center"
                    style={{ alignItems: "0px", marginTop: "50px" }}
                  >
                    <div>
                      <b>Name:</b>
                      <div style={{ display: "inline" }}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {e.uname}
                      </div>
                      <br />
                    </div>

                    <div>
                      <b>Vehicle type:</b>
                      <div style={{ display: "inline" }}>
                        &nbsp;&nbsp;&nbsp;
                        {e.vhclType}
                      </div>
                      <br />
                    </div>

                    <div>
                      <b>Trip date:</b>
                      <div style={{ display: "inline" }}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {e.tripDt}
                      </div>
                      <br />
                    </div>

                    <div>
                      <b>Trip Time:</b>
                      <div style={{ display: "inline" }}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {e.tripTime}
                      </div>
                      <br />
                    </div>

                    <div>
                      <b>Email Id:</b>
                      <div style={{ display: "inline" }}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {e.requestorId}
                      </div>

                      <br />
                    </div>

                    <div>
                      <b style={{ display: "inline" }}>Trip cost:</b>
                      <row
                        style={{
                          display: "inline"
                        }}
                      >
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {"$" + e.tripFee}
                      </row>
                      <br />
                    </div>
                    <div
                      className="vehicle-det"
                      onClick={() => this.goToMaps(e._id)}
                    >
                      View Map
                    </div>
                    <br />
                    <br />
                    {acc === 1 ? (
                      <div className="btn-usage">
                        <Button
                          variant="primary"
                          type="submit"
                          id="trip"
                          className="buttonSpacing"
                          onClick={() => this.changeTripStatus(e, "S")}
                        >
                          Start Trip
                        </Button>
                        <Button
                          variant="primary"
                          type="submit"
                          id="trip"
                          className="buttonSpacing"
                          onClick={() => this.changeTripStatus(e, "E")}
                        >
                          End Trip
                        </Button>
                      </div>
                    ) : (
                      <div className="btn-usage">
                        <Button
                          variant="secondary"
                          type="submit"
                          id="viewProfile"
                        >
                          View Profile
                        </Button>
                      </div>
                    )}

                    <br />
                    <div
                      className="vehicle-det"
                      onClick={() => this.goToRating(e.requestorId)}
                    >
                      Give Rating and Feedback
                    </div>
                    {/* <div>
                          <a href="rating">View rating/feedback</a><br />
                          </div>
                          <div><Button  color="primary" style={{backgroundColor:'#1a61ad'}}   type="submit" onClick={this.alert} value="Submit" > View Map </Button> </div>
                      <div><Button style={{backgroundColor:'grey'}} type="submit" onClick={this.alert} value="Submit" > Cancel Request </Button><br/> <br/> </div> */}
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      );
    }
  };

  displayCards = () => {
    // console.log(e);
    return (
      <Container>
        <Card style={{ margin: "30px 10px" }}>
          <Row>
            <Col md={12}>
              <h5 className="ad-title">Current Trips</h5>{" "}
              <div>
                <hr style={{ width: "100%" }} />
              </div>
            </Col>
          </Row>

          {this.state.result.map(e => this.displayCardsdetails(e._id, e, 1))}
        </Card>
      </Container>
    );
  };

  render() {
    return (
      <div>
        <div className="wrapper">
          <Header />
          <div
            className="inner"
            style={{
              backgroundColor: "#ededed",
              height: "auto"
            }}
          >
            {this.displayCards()}
            {this.displayCards1()}
          </div>
        </div>
      </div>
    );
  }
}

export default MyTrips;
