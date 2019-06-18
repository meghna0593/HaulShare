import React, { Component } from 'react';
import Header from '../Header/header.js';
import {FormControl,Card,Form,Button,Image,Container,Row,Col} from 'react-bootstrap';
import Slider from '@material-ui/lab/Slider';
import './home.css'
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();
class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filter_time:false,
            filter_price:false,
            filter_transporter:false,
            filter_customer:false,
            filter_distance:false,
            price_value:30,
            price_min:20,
            price_max:200
        };
    }

    handleSliderChange = (event, value) => {
        this.setState({ price_value:value });
      };

    checkBoxChange=(event)=>{
        if(event.target.id==='filter_time'){
            this.setState({
                filter_time : !this.state.filter_time  
              })
        }
        else if(event.target.id==='filter_price'){
            this.setState({
                filter_price : !this.state.filter_price  
              })
        }
        else if(event.target.id==='filter_transporter'){
            this.setState({
                filter_transporter : !this.state.filter_transporter  
              })
        }
        else if(event.target.id==='filter_customer'){
            this.setState({
                filter_customer : !this.state.filter_customer  
              })
        }
        else if(event.target.id==='filter_distance'){
            this.setState({
                filter_distance : !this.state.filter_distance  
              })
        }
    }

    userDetails=(userType)=>{
        return(
            <div>
            <Row>
                <Col md={12}>
                    <div className="label-container">
                            {(userType==='transporter')?<div className="label-transporter">Transporter</div>:<div className="label-transporter">Customer</div>}
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={12} className="stick-img-cont">
                    <Image src="/images/stick-figure.png" className="stick-img"/> {/*image from “Human Icons.” Free Download, PNG and SVG, http://icons8.com/icons/set/human */}
                </Col>
            </Row>
            <Row>
                <Col md={12} className="img-name">
                    <div style={{display: 'inline-block'}}>Bran Stark </div>
                </Col>
            </Row> 
            </div>
        )
    }

    submitForm=(event)=>{        
        if(event.target.id==='viewProfile'){   
            /* Navigating between pages using “History.” Npm, www.npmjs.com/package/history. */
            history.push('/profile')
            history.go()
        }
    }
    
    adDetails=(userType)=>{
        return(
            <div>
                <Row>
                    <Col md={12} className="ad-title">
                        {(userType==='transporter')?
                        <h3 className="h3-size">
                            Storage space available : Halifax <hr/>
                        </h3>
                        :
                        <h3 className="h3-size">
                            Storage space needed : Halifax <hr/>
                        </h3>
                        }
                        <Image src="/images/full-screen.png" className="full-screen-btn" /> {/*image from "Full Screen Icons.” Free Download, PNG and SVG, http://icons8.com/icons/set/full-screen */}
                    </Col>                                
                </Row>
                <Row>
                    <Col md={7} className="ad-body">
                        <div>
                            Storage Space: ___xxx lb___<br/>
                            Destination : ___xxx city___<br/>
                            Other: ___xxx details___<br/>
                        </div>                                    
                    </Col>  
                    <Col md={5} className="button-grp" >
                        <div className="btn-usage">
                            <Button variant="primary" type="submit" id="trip" className="buttonSpacing" onClick={this.submitForm}>
                                {(userType==='transporter')?<div>Request Trip</div>:<div>Offer Trip</div>}
                            </Button> 
                            <Button variant="secondary" type="submit" id="viewProfile" onClick={this.submitForm}>
                                View Profile
                            </Button>
                        </div>                                  
                    </Col>                               
                </Row>
            </div>
        )
    }

    sliderValue=()=>{
        if(this.state.filter_price){
            return(
                <div style={{margin:'18px 12px 0px'}}>
                    {/* Slider function from "Slider React Component - Material-UI.” Material, material-ui.com/components/slider/ */}
                    <Slider
                        value={this.state.price_value}
                        min={this.state.price_min}
                        max={this.state.price_max}
                        step={10}
                        onChange={this.handleSliderChange}
                    /> 
                    <div className="filter-options" style={{display:'flex',justifyContent:'space-between',marginTop:'6px'}}>
                        <div>{this.state.price_min}</div>
                        <div>{this.state.price_max}</div>
                    </div>
                </div>
                
            )
        }        
    }

    filterSection=()=>{
        return(
            <div className="small-container">
                <div className="small-container-text">Filter By</div><hr style={{width:'100%'}}/><br/>
                <Form.Check className="filter-options" type="checkbox" value={this.state.filter_time} onChange={this.checkBoxChange} id="filter_time" label="Time" />
                <Form.Check className="filter-options" type="checkbox" value={this.state.filter_distance} onChange={this.checkBoxChange} id="filter_distance" label="Distance" />
                <Form.Check className="filter-options" type="checkbox" value={this.state.filter_price} onChange={this.checkBoxChange} id="filter_price" label="Price" />
                <Form.Check className="filter-options" type="checkbox" value={this.state.filter_transporter} onChange={this.checkBoxChange} id="filter_transporter" label="Transporter" />
                <Form.Check className="filter-options" type="checkbox" value={this.state.filter_customer} onChange={this.checkBoxChange} id="filter_customer" label="Customer" />
                {this.sliderValue()}
            </div>
        )
    }
    
    displayCards=(userType)=>{
        return(
            <div className="card-container">
                <Container style={{maxWidth:'100%',padding:'0px'}}>
                    <Row style={{marginRight:'0px',marginLeft:'0px'}}>
                        <Col md={2} style={{padding:'0px'}}>
                            {this.userDetails(userType)}                           
                        </Col>
                        <Col md={10} style={{padding:'0px'}}>
                            {this.adDetails(userType)}
                        </Col>
                    </Row>
                </Container>
                
            </div>
        )
    }

    tripSuggestionCard=()=>{
        return(
            <div>
                <Card style={{cursor:'pointer',marginBottom:'10px'}}>
                    <Card.Img variant="top" src="/images/trip.png" style={{backgroundColor:'#badfff',height:'100px'}}/> {/*image from "Trip Icons.” Free Download, PNG and SVG, http://icons8.com/icons/set/trip */}
                    <Card.Body>
                        <Card.Title style={{color:'#1a61ad',fontSize:'16px'}}><i>Trip to Halifax</i></Card.Title>
                        <Card.Text style={{fontSize:'12px'}}>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }

    tripSuggestion=()=>{
        return(
            <div className="small-container">
                <div className="small-container-text">
                    Trip Suggestion<hr style={{width:'100%'}}/>
                </div>
                {this.tripSuggestionCard()}
                {this.tripSuggestionCard()}
                {this.tripSuggestionCard()}
            </div>
        )
    }

    render(){
        return(
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <div className="inner">
                {/*Used FormControl,Card,Form,Button,Image,Container,Row,Col from “React Bootstrap.” React, react-bootstrap.github.io/ */}
                        <Container style={{maxWidth:'100%'}}>
                            <Row style={{marginTop:'30px',marginBottom:'30px'}}>
                                <Col md={4}></Col>
                                <Col md={4}>
                                    <div style={{display:'flex',alignItems:'center'}}>
                                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                        <Image src="/images/search.svg" style={{height:'23px', cursor:'pointer'}} onClick={this.editEnable}/> {/*image from "Search Icons.” Free Download, PNG and SVG, http://icons8.com/icons/set/search */}
                                    </div>
                                </Col>
                                <Col md={4}></Col>
                            </Row>
                            <Row style={{marginTop:'30px',marginBottom:'30px',height:'100vh',borderTop:'1px ridge #80808099'}}>
                                <Col md={2} style={{display:'flex',justifyContent:'center',borderRight:'1px ridge #80808099'}}>
                                    {this.filterSection()}  
                                </Col>
                                <Col md={7} style={{borderRight:'1px ridge #80808099', backgroundColor:'#ededed'}}>
                                    {this.displayCards('transporter')}
                                    {this.displayCards('customer')}
                                </Col>
                                <Col md={3}  style={{display:'flex',justifyContent:'center',borderRight:'1px ridge #80808099'}}>
                                    {this.tripSuggestion()}
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;