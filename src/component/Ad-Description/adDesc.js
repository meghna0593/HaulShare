import React, { Component } from 'react';
import Header from '../Header/header.js';
import {FormControl,Card,Form,Button,Image,Container,Row,Col} from 'react-bootstrap';
import './adDesc.css'

// This file is responsible for opening a
// prompt box, which will contain all the
// details for that particular trip on
// the card.
class DescriptionModal extends Component{

    constructor(props){
        super(props);
        this.state={
            data:this.props.data
        }
    }

    // This will start executing as soon as the page loads.
    componentWillMount(){
        console.log(this.state.data);
        
    }

    render(){
        return(
            // This will create all the attributes for the prompt box.
            // It will also display the values corresponding to the fields
            // after fetching from the database.
            <div>
                <Container style={{fontSize:'14px'}}>
                    <Row>
                        <Col md={12} style={{paddingBottom:'17px'}}>
                            <h5 className="ad-title" style={{paddingLeft:'0px',display:'flex',justifyContent:'center'}}>Detailed Description</h5> <div><hr style={{width:'100%'}}/></div>
                            <div>{this.state.data.desc}</div>
                        </Col>
                    </Row>
                    <Row className="row-padding">
                        <Col md={4} className="label-header-style">
                            Current Address:
                        </Col>
                        <Col md={8}>
                        {this.state.data.source}
                        </Col>
                    </Row>
                    <Row className="row-padding">
                        <Col md={4} className="label-header-style">
                            Travel Address:
                        </Col>
                        <Col md={8}>
                        {this.state.data.destination}
                        </Col>
                    </Row>
                    <Row className="row-padding">
                        <Col md={4} className="label-header-style">
                            Luggage Dimension:
                        </Col>
                        <Col md={8}>
                        {this.state.data.strgDim}
                        </Col>
                    </Row>
                    <Row className="row-padding">
                        <Col md={4} className="label-header-style">
                            Luggage Weight:
                        </Col>
                        <Col md={8}>
                        {this.state.data.luggageWgt}
                        </Col>
                    </Row>
                    <Row className="row-padding">
                        <Col md={4} className="label-header-style">
                            Date of Travel:
                        </Col>
                        <Col md={8}>
                        {this.state.data.tripDt}
                        </Col>
                    </Row>
                    <Row className="row-padding">
                        <Col md={4} className="label-header-style">
                            Travel Start Time:
                        </Col>
                        <Col md={8}>
                        {this.state.data.tripTime}
                        </Col>
                    </Row>
                    
                    <Row className="row-padding">
                        <Col md={4} className="label-header-style">
                            Service Charge:
                        </Col>
                        <Col md={8}>
                        {this.state.data.tripFee}
                        </Col>
                    </Row>
                    <Row className="row-padding">
                        <Col md={4} className="label-header-style">
                            Vehicle Type:
                        </Col>
                        <Col md={8}>
                        {this.state.data.vhclType}
                        </Col>
                    </Row>
                    <Row className="row-padding">
                        <Col md={4} className="label-header-style">
                            Vehicle Number:
                        </Col>
                        <Col md={8}>
                        {this.state.data.vhclNum}
                        </Col>
                    </Row>
                    <Row className="row-padding">
                        <Col md={4} className="label-header-style">
                            Email ID:
                        </Col>
                        <Col md={8}>
                        {this.state.data.user_id}
                        </Col>
                    </Row>
                    
                    <Row style={{paddingBottom:'20px'}}>
                        <Col md={12} style={{justifyContent:'center'}} className="button-grp" >
                            <div className="btn-usage">
                                <Button variant="primary" type="submit" id="trip" onClick={this.submitForm}>
                                    {(this.state.data.userType==='T')?<div>Request Trip</div>:<div>Offer Trip</div>}
                                </Button> 
                            </div>                                  
                        </Col>     
                    </Row>
                </Container>
            </div>
        )
    }
}
export default DescriptionModal;