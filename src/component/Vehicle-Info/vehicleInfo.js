import React, { Component } from 'react';
import Header from '../Header/header.js';
import {FormControl,Card,Form,Button,Image,Container,Row,Col} from 'react-bootstrap';

class VehicleInfo extends Component{

    render(){
        return(
            <div>
                <Container style={{fontSize:'14px'}}>
                    <Row>
                        <Col md={12} style={{paddingBottom:'17px'}}>
                            <h5 className="ad-title" style={{paddingLeft:'0px',display:'flex',justifyContent:'center'}}>Vehicle Information</h5> <div><hr style={{width:'100%'}}/></div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} style={{display:'flex',justifyContent:'center'}}>
                            <Image src="/images/truck.png" style={{width:'20%',height:'100%',paddingBottom:'17px'}} />
                        </Col>
                    </Row>
                    <Row className="row-padding">
                        <Col md={3}/>
                        <Col md={3} className="label-header-style " style={{display:'flex',justifyContent:'flex-start'}}>
                            Vehicle Name:
                        </Col>
                        <Col md={3} style={{display:'flex',justifyContent:'flex-end'}}>
                            XyZ Truck
                        </Col>
                        <Col md={3}/>
                    </Row>
                    <Row className="row-padding">
                        <Col md={3}/>
                        <Col md={3} className="label-header-style " style={{display:'flex',justifyContent:'flex-start'}}>
                            Vehicle Type:
                        </Col>
                        <Col md={3} style={{display:'flex',justifyContent:'flex-end'}}>
                            X-Y-Z
                        </Col>
                        <Col md={3}/>
                    </Row>
                    <Row className="row-padding ">
                        <Col md={3}/>
                        <Col md={3} className="label-header-style " style={{display:'flex',justifyContent:'flex-start'}}>
                            Vehicle Number:
                        </Col>
                        <Col md={3} style={{display:'flex',justifyContent:'flex-end'}}>
                            B12234
                        </Col>
                        <Col md={3}/>
                    </Row>
                    <Row className="row-padding">
                        <Col md={3}/>
                        <Col md={3} className="label-header-style " style={{display:'flex',justifyContent:'flex-start'}}>
                            Sharing Available:
                        </Col>
                        <Col md={3} style={{display:'flex',justifyContent:'flex-end'}}>
                            Yes
                        </Col>
                        <Col md={3}/>
                    </Row>
                    <Row className="row-padding">
                        <Col md={3}/>
                        <Col md={3} className="label-header-style " style={{display:'flex',justifyContent:'flex-start'}}>
                            Space Available:
                        </Col>
                        <Col md={3} style={{display:'flex',justifyContent:'flex-end'}}>
                            25 x 30 x 45 inches
                        </Col>
                        <Col md={3}/>
                    </Row>
                    <Row className="row-padding" style={{paddingBottom:'3%'}}>
                        <Col md={3}/>
                        <Col md={3} className="label-header-style " style={{display:'flex',justifyContent:'flex-start'}}>
                            Total Trips Made:
                        </Col>
                        <Col md={3} style={{display:'flex',justifyContent:'flex-end'}}>
                            30
                        </Col>
                        <Col md={3}/>
                    </Row>
                    
                </Container>
            </div>
        )
    }
}
export default VehicleInfo;