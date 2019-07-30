import React, { Component } from "react";
import Header from "../Header/header.js";
import {
  FormControl,
  Card,
  Modal,
  Button,
  Image,
  Container,
  Row,
  Col
} from "react-bootstrap";
import { createBrowserHistory } from "history";
import VehicleDescModal from "../Vehicle-Info/vehicleInfo";

const history = createBrowserHistory();

class MyAd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showVehicleDesc: false,
      result: []
    };
  }

  openVehicleDesc = () => {
    return (
      <Modal show={this.state.showVehicleDesc} onHide={this.handleVehicleDesc}>
        <VehicleDescModal />
      </Modal>
    );
  };

  handleVehicleDesc = () => {
    this.setState({
      showVehicleDesc: !this.state.showVehicleDesc
    });
  };

  //code added by varun
  async componentDidMount() {
    console.log(localStorage.getItem("user_id"));
    let user_id = localStorage.getItem("user_id");
    const url = "http://localhost:5565/api/getData/0/" + user_id;

    const response = await fetch(url);
    const data = await response.json();
    this.setState({ result: data.data }, () => {
      console.log(this.state.result);
    });
  }

  displayMyAds = e => {
    return (
      <Card style={{ margin: "30px 10px" }}>
        <Row>
          <Col md={12}>
            <h5 className="ad-title">{e.adTitle} </h5>{" "}
            <div>
              <hr style={{ width: "100%" }} />
            </div>
          </Col>
        </Row>
        <Row style={{ fontSize: "14px", paddingBottom: "5px" }}>
          <Col md={8} style={{ paddingLeft: "41px" }}>
            {this.adCards(e)}
          </Col>
          <Col md={4}>
            <div>
              <Image
                src="/images/suv.png" //"/images/truck1.png"
                style={{ height: "100%", width: "50%" }}
              />
              <div className="vehicle-det" onClick={this.handleVehicleDesc}>
                Click here for Vehicle Details
              </div>
            </div>
          </Col>
        </Row>
      </Card>
    );
  };

  componentWillMount() {
    if (
      localStorage.getItem("user_id") === null ||
      localStorage.getItem("user_id") === ""
    ) {
      alert("Please login first");
      history.push("/");
      history.go();
    }
  }

  adCards = e => {
    return (
      <div>
        {this.openVehicleDesc()}
        <Row className="row-padding">
          <Col md={4} className="label-header-style">
            Pickup Address:
          </Col>
          <Col md={8}>{e.source}</Col>
        </Row>
        <Row className="row-padding">
          <Col md={4} className="label-header-style">
            Drop Address:
          </Col>
          <Col md={8}>{e.destination}</Col>
        </Row>
        <Row className="row-padding">
          <Col md={4} className="label-header-style">
            Rate:
          </Col>
          <Col md={8}>${e.tripFee}</Col>
        </Row>
        <Row className="row-padding">
          <Col md={4} className="label-header-style">
            Luggage Weight:
          </Col>
          <Col md={8}>{e.luggageWgt}kg</Col>
        </Row>
        <Row className="row-padding">
          <Col md={4} className="label-header-style">
            Date of Travel:
          </Col>
          <Col md={8}>{e.tripDt}</Col>
        </Row>
        <Row className="row-padding">
          <Col md={4} className="label-header-style">
            Travel Start Time:
          </Col>
          <Col md={8}>{e.tripTime}</Col>
        </Row>
        <Row className="row-padding">
          <Col
            md={12}
            className="label-header-style"
            style={{ paddingBottom: "8px" }}
          >
            <div className="btn-usage">
              <Button
                variant="secondary"
                type="submit"
                id="viewProfile"
                onClick={this.submitForm}
              >
                <div>Delete Ad</div>
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    );
  };

  render() {
    return (
      <div>
        <div className="wrapper">
          <Header />
          <div className="content">
            <div className="inner" style={{ backgroundColor: "#ededed" }}>
              {/*Used FormControl,Card,Form,Button,Image,Container,Row,Col from “React Bootstrap.” React, react-bootstrap.github.io/ */}
              <Container>
                {this.state.result.map(e => this.displayMyAds(e))}
              </Container>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyAd;
