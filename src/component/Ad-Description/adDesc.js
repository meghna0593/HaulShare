import React, { Component } from 'react';
import Header from '../Header/header.js';
import {FormControl,Card,Form,Button,Image,Container,Row,Col} from 'react-bootstrap';
import './adDesc.css'
class DescriptionModal extends Component{

    constructor(props){
        super(props);
        this.state={
            userType:this.props.userType
        }
    }

    render(){
        return(
            <div>
                <Container style={{fontSize:'14px'}}>
                    <Row>
                        <Col md={12} style={{paddingBottom:'17px'}}>
                            <h5 className="ad-title" style={{paddingLeft:'0px',display:'flex',justifyContent:'center'}}>Detailed Description</h5> <div><hr style={{width:'100%'}}/></div>
                            <div>Proin porttitor aliquet odio non mollis. Pellentesque eget augue id augue facilisis facilisis non eu lectus. Nullam orci turpis, rutrum quis tellus scelerisque</div>
                        </Col>
                    </Row>
                    <Row className="row-padding">
                        <Col md={4} className="label-header-style">
                            Current Address:
                        </Col>
                        <Col md={8}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                        </Col>
                    </Row>
                    <Row className="row-padding">
                        <Col md={4} className="label-header-style">
                            Travel Address:
                        </Col>
                        <Col md={8}>
                            blandit lorem tortor, nec vehicula ipsum fermentum ut.
                        </Col>
                    </Row>
                    <Row className="row-padding">
                        <Col md={4} className="label-header-style">
                            Date of Travel:
                        </Col>
                        <Col md={8}>
                            21 Dec 2019
                        </Col>
                    </Row>
                    <Row className="row-padding">
                        <Col md={4} className="label-header-style">
                            Travel Start Time:
                        </Col>
                        <Col md={8}>
                            8.30am
                        </Col>
                    </Row>
                    <Row className="row-padding">
                        <Col md={4} className="label-header-style">
                            Mobile:
                        </Col>
                        <Col md={8}>
                            +1 9021111111
                        </Col>
                    </Row>
                    <Row className="row-padding">
                        <Col md={4} className="label-header-style">
                            Email ID:
                        </Col>
                        <Col md={8}>
                            test@gmail.com
                        </Col>
                    </Row>
                    <Row className="row-padding">
                        <Col md={4} className="label-header-style">
                            Travel Address:
                        </Col>
                        <Col md={8}>
                            blandit lorem tortor, nec vehicula ipsum fermentum ut.
                        </Col>
                    </Row>
                    <Row className="row-padding">
                        <Col md={4} className="label-header-style">
                            Luggage Dimension:
                        </Col>
                        <Col md={8}>
                            25 x 45 x 100 inch
                        </Col>
                    </Row>
                    <Row style={{paddingBottom:'20px'}}>
                        <Col md={12} style={{justifyContent:'center'}} className="button-grp" >
                            <div className="btn-usage">
                                <Button variant="primary" type="submit" id="trip" onClick={this.submitForm}>
                                    {(this.state.userType==='transporter')?<div>Request Trip</div>:<div>Offer Trip</div>}
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