import React, { Component } from 'react';
import Header from '../Header/header.js';
import {FormControl,Card,Form,Button,Image,Container,Row,Col} from 'react-bootstrap';
import { PromiseProvider } from 'mongoose';

class VehicleInfo extends Component{

    constructor (props){
        super(props);
        this.state = {
            // vhId:this.props.adId,
            vhId:'5d2cd235ab77750064a9e4e1',
            vehicles:[],
            isLoaded: false,
        }
    }
    state = {
        data: [],
        id: 0,
        message: null,
        intervalIsSet: false,
        id_delete: null,
        idToUpdate: null,
        objectToUpdate: null,
      };



      componentWillMount(){

        //api
        //static id mongo
        //fetch() method:GET
        //responsejson -> state variable
        //http://localhost:4000/data/hs_data/_id/5d2251d91b28ca7ea49eaad7
        fetch('http://localhost:4000/data/Advertisements/_id/'+this.state.vhId)
            .then(res => res.json())
            .then(json => {

                this.setState({
                    isLoaded:true,
                    vehicles:json,
                })
            })
    }

    render(){
        var {isLoaded, vehicles} = this.state;

        if(!isLoaded) {
            return <div>kushal</div>
        }
        else{

            return(



                <div>
                    {this.state.vehicles.map(vehicle =>
                    <div>


                        <div key={vehicle.id}>
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
                                    {vehicle.vhclType}
                                </Col>
                                <Col md={3}/>
                            </Row>
                            <Row className="row-padding">
                                <Col md={3}/>
                                <Col md={3} className="label-header-style " style={{display:'flex',justifyContent:'flex-start'}}>
                                    Vehicle Type:
                                </Col>
                                <Col md={3} style={{display:'flex',justifyContent:'flex-end'}}>
                                    {vehicle.vhclType}
                                </Col>
                                <Col md={3}/>
                            </Row>
                            <Row className="row-padding ">
                                <Col md={3}/>
                                <Col md={3} className="label-header-style " style={{display:'flex',justifyContent:'flex-start'}}>
                                    Vehicle Number:
                                </Col>
                                <Col md={3} style={{display:'flex',justifyContent:'flex-end'}}>
                                {vehicle.vhclNum}
                                </Col>
                                <Col md={3}/>
                            </Row>
                            <Row className="row-padding">
                                <Col md={3}/>
                                <Col md={3} className="label-header-style " style={{display:'flex',justifyContent:'flex-start'}}>
                                    Sharing Available:
                                </Col>
                                <Col md={3} style={{display:'flex',justifyContent:'flex-end'}}>
                                    {vehicle.vhclType}
                                </Col>
                                <Col md={3}/>
                            </Row>
                            <Row className="row-padding">
                                <Col md={3}/>
                                <Col md={3} className="label-header-style " style={{display:'flex',justifyContent:'flex-start'}}>
                                    Space Available:
                                </Col>
                                <Col md={3} style={{display:'flex',justifyContent:'flex-end'}}>
                                    {vehicle.strgDim} inches
                                </Col>
                                <Col md={3}/>
                            </Row>
                            <Row className="row-padding" style={{paddingBottom:'3%'}}>
                                <Col md={3}/>
                                <Col md={3} className="label-header-style " style={{display:'flex',justifyContent:'flex-start'}}>
                                    Luggage Weight:
                                </Col>
                                <Col md={3} style={{display:'flex',justifyContent:'flex-end'}}>
                                    {vehicle.luggageWgt}
                                </Col>
                                <Col md={3}/>
                            </Row>

                        </Container>
                        </div>
                    </div>
                    )}

                </div>

            )
        }

    }
}
export default VehicleInfo;
