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
    const url = "http://localhost:5545/api/getData/" + user_id;

    const response = await fetch(url);
    const data = await response.json();
    this.setState({ result: data.data },()=>{
      console.log(this.state.result);
      
    });

  }

  goToRating = () => {
    history.push("/my-feedback");
    history.go();
  };

  goToMaps = _id => {
    localStorage.setItem("obj_id", _id);
    history.push("/maps");
    history.go();
  };

  //code modified by varun
  displayCards1 = (_id, e) => {
    console.log(e);
    return (
      <Container>
        {e.accepted === 2 ? (
          <Card style={{ margin: "30px 10px" }}>
            <Row>
              <Col md={12}>
                <h5 className="ad-title">Past Trips</h5>{" "}
                <div>
                  <hr style={{ width: "100%" }} />
                </div>
              </Col>
            </Row>
            <Row>
              {/* <div className = "resultsPageCard1" >*/}
              <Col
                md={12}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Card style={{ backgroundColor: "white", width: "97%" }}>
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
                          <b style={{ color: "blue" }}>Name:</b>
                          <b> {e.uname}</b>
                          <br />
                        </div>

                        <div>
                          <b style={{ color: "blue" }}>Vehicle type:</b>
                          <b>{e.vhclType}</b>
                          <br />
                        </div>

                        <div>
                          <b style={{ color: "blue" }}>Trip date:</b>
                          <b> {e.tripDt}</b>
                          <br />
                        </div>

                        <div>
                          <b style={{ color: "blue" }}>Trip Time:</b>
                          <b> {e.tripTime}</b>
                          <br />
                        </div>

                        <div>
                          <b style={{ color: "blue" }}>email id:</b>
                          <b> {e.requestorId}</b>
                          <br />
                        </div>

                        <div>
                          <b style={{ color: "blue" }}>Trip cost:</b>
                          <b> {e.tripFee}</b>
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
                        <div className="btn-usage">
                          <Button
                            variant="secondary"
                            type="submit"
                            id="viewProfile"
                          >
                            View Profile
                          </Button>
                        </div>
                        <br />
                        <div className="vehicle-det" onClick={this.goToRating}>
                          Give Rating and Feedback
                        </div>
                        {}
                      </div>
                    </Col>
                  </Row>
                </Card>
                {/*</div>*/}{" "}
              </Col>
            </Row>
          </Card>
        ) : (
          <div> No Trips Available</div>
        )}
      </Container>
    );
  };
  
  changeTripStatus=(e,status)=>{    
    // let url_get='http://localhost:5000/tripNotifiy/'+e._id+'/'+e.requestorId+'/'+status;
    let url_get='https://haul-share-meghna.herokuapp.com/tripNotifiy/'+e._id+'/'+e.requestorId+'/'+status;
    fetch(url_get, { method: "PUT" })
      .then(data => data.json())
      .then(res => {
        if(res){
          alert('You have'+(status==='S')?'started':'ended'+'the trip');
        }
        console.log(res);
      })
      .catch(e => alert("Error occurred:", e));
  }

  displayCards = (_id, e) => {
    console.log(e);
    return (
      <div
        className="inner"
        style={{ backgroundColor: "#ededed", height: "500px" }}
      >
        {e.accepted === 1 ? (
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
              <Row>
                {/* <div className = "resultsPageCard1" >*/}
                <Col
                  md={12}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Card style={{ backgroundColor: "white", width: "97%" }}>
                    <Row>
                      <Col md={8} sm={12}>
                        <Card.Img
                          variant="top"
                          src="/images/imageCard1.jpg"
                          style={{ height: "350px", width: "90%" }}
                        />
                      </Col>
                      <Col md={4} sm={12}>
                        <div
                          class="float-center"
                          style={{ alignItems: "0px", marginTop: "50px" }}
                        >
                          <div>
                            <b style={{ color: "blue" }}>Name:</b>
                            <b> {e.uname}</b>
                            <br />
                          </div>

                          <div>
                            <b style={{ color: "blue" }}>Vehicle type:</b>
                            <b> {e.vhclType}</b>
                            <br />
                          </div>

                          <div>
                            <b style={{ color: "blue" }}>Trip date:</b>
                            <b> {e.tripDt}</b>
                            <br />
                          </div>

                          <div>
                            <b style={{ color: "blue" }}>Trip Time:</b>
                            <b> {e.tripTime}</b>
                            <br />
                          </div>

                          <div>
                            <b style={{ color: "blue" }}>email id:</b>
                            <b>{e.requestorId}</b>
                            <br />
                          </div>

                          <div>
                            <b style={{ color: "blue" }}>Trip cost:</b>
                            <b> {e.tripFee}</b>
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
                          <div className="btn-usage">
                            <Button
                              variant="primary"
                              type="submit"
                              id="trip"
                              className="buttonSpacing"
                              onClick={()=>this.changeTripStatus(e,'S')}
                            >
                              Start Trip
                            </Button>
                            <Button
                              variant="primary"
                              type="submit"
                              id="trip"
                              className="buttonSpacing"
                              onClick={()=>this.changeTripStatus(e,'E')}
                            >
                              End Trip
                            </Button>
                          </div>
                          <br />
                          <div
                            className="vehicle-det"
                            onClick={this.goToRating}
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
            </Card>
          </Container>
        ) : (
          this.displayCards1(e._id, e)
        )}
        {/*Used FormControl,Card,Form,Button,Image,Container,Row,Col from “React Bootstrap.” React, react-bootstrap.github.io/ */}
      </div>
    );
  };

  render() {
    return (
      <div>
        <div className="wrapper">
          <Header />
          <div className="content" />
          {this.state.result.map(e => this.displayCards(e._id, e))}
        </div>
      </div>
    );
  }
}

export default MyTrips;
