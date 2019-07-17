import React, { Component } from 'react';
import Header from '../Header/header.js';
import {FormControl,Card,Form,Button,Image,Container,Row,Col} from 'react-bootstrap';
//import { PromiseProvider } from 'mongoose';

class VehicleInfo extends Component{

    constructor (props){
        super(props);
        this.state = {//giving mongoId for fetching the data
            // vhId:this.props.adId,
            vhId:'5d2e80e81c9d440000f657ad',
            vehicles:[],//stores the fetched data
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
    
    

       componentWillMount(){//[9]
        //[6]   
        fetch('http://localhost:4000/data/hs_data/_id/'+this.state.vhId)//[10]
        //used to fetch the data and for converting into JSON format
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

        if(!isLoaded) {//checks data is empty or not
            return <div></div>
        }
        else{

            return(
                
                <div>
                    {/* mapping the fetched data */}
                    {this.state.vehicles.map(vehicle => 
                    <div>

                        {/* [2] */}
                        {/* used key for implementing the loop concept */}
                        <div key={vehicle.id}>
                            <Container style={{fontSize:'14px'}}>
                            <Row>
                                <Col md={12} style={{paddingBottom:'17px'}}>
                                    <h5 className="ad-title" style={{paddingLeft:'0px',display:'flex',justifyContent:'center'}}>Vehicle Information</h5> <div><hr style={{width:'100%'}}/></div>
                                </Col>
                            </Row>
                            <Row>
                                {/* [12] */}
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
                                    {/* showing fetched data into react page */}
                                    {vehicle.vehicle_name}
                                </Col>
                                <Col md={3}/>
                            </Row>
                            <Row className="row-padding">
                                <Col md={3}/>
                                <Col md={3} className="label-header-style " style={{display:'flex',justifyContent:'flex-start'}}>
                                    Vehicle Type:
                                </Col>
                                <Col md={3} style={{display:'flex',justifyContent:'flex-end'}}>
                                    {vehicle.vehicle_type}
                                </Col>
                                <Col md={3}/>
                            </Row>
                            <Row className="row-padding ">
                                <Col md={3}/>
                                <Col md={3} className="label-header-style " style={{display:'flex',justifyContent:'flex-start'}}>
                                    Vehicle Number:
                                </Col>
                                <Col md={3} style={{display:'flex',justifyContent:'flex-end'}}>
                                {vehicle.vehicle_number}
                                </Col>
                                <Col md={3}/>
                            </Row>
                            <Row className="row-padding">
                                <Col md={3}/>
                                <Col md={3} className="label-header-style " style={{display:'flex',justifyContent:'flex-start'}}>
                                    Sharing Available:
                                </Col>
                                <Col md={3} style={{display:'flex',justifyContent:'flex-end'}}>
                                    {vehicle.vehicle_sharing}
                                </Col>
                                <Col md={3}/>
                            </Row>
                            <Row className="row-padding">
                                <Col md={3}/>
                                <Col md={3} className="label-header-style " style={{display:'flex',justifyContent:'flex-start'}}>
                                    Space Available:
                                </Col>
                                <Col md={3} style={{display:'flex',justifyContent:'flex-end'}}>
                                    {vehicle.space_available} inches
                                </Col>
                                <Col md={3}/>
                            </Row>
                            <Row className="row-padding" style={{paddingBottom:'3%'}}>
                                <Col md={3}/>
                                <Col md={3} className="label-header-style " style={{display:'flex',justifyContent:'flex-start'}}>
                                    Total Trips Made:
                                </Col>
                                <Col md={3} style={{display:'flex',justifyContent:'flex-end'}}>
                                    {vehicle.total_trips}
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