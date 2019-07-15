import React, { Component } from 'react'
import Header from '../Header/header.js';
import {FormControl,Card,Form,Button,Image,Container,Row,Col} from 'react-bootstrap';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

class MyTrips extends Component{

    constructor(props){
        super(props);
        this.state={
            adTitle:'',
            strgDim:'',
            luggageWgt:'',
            destn:'',
            tripCost:'',
            desc:'',
            vhclType:'',
            vhclNum:'',
            userOption:0,
            tripTime:''
        }
    }

    goToRating=()=>{
        history.push('/my-feedback')
        history.go()
    }

    goToMaps=(id_trip)=>{
        localStorage.setItem('trip_id',id_trip)
        history.push('/maps')
        history.go()
    }

    render(){
        return(
            <div>
                <div className="wrapper">
                <Header/>
                <div className="content">
                    <div className="inner" style={{backgroundColor:'#ededed', height:'1000px'}}>
                        {/*Used FormControl,Card,Form,Button,Image,Container,Row,Col from “React Bootstrap.” React, react-bootstrap.github.io/ */}
                        <Container >
                            <Card style={{margin:'30px 10px'}}>
                                <Row >
                                    <Col md={12}>
                                        <h5 className="ad-title">Current Trips</h5> <div><hr style={{width:'100%'}}/></div>
                                    </Col>
                                </Row>
                                <Row>
                                    
                                   {/* <div className = "resultsPageCard1" >*/} 
                                <Col md={12} style={{display:'flex',justifyContent:'center'}}>     
                                <Card style={{backgroundColor:'white',width:'97%'}} >
                                <Row>
                                <Col md={8} sm={12}>
                                <Card.Img variant="top" src="/images/imageCard1.jpg" style={{height:'350px', width: '90%'}}/>
                                </Col>
                                <Col md={4} sm={12}>
                                <div class = "float-center" style={{ alignItems:'0px',marginTop:'50px'}} > 
                                <div>
                                <b>Name: John</b><br />
                                    </div>

                                    <div>
                                    <b>Vehicle type: Car</b><br />
                                    </div>

                                    <div>
                                    <b>Phone no.: 0099</b><br />
                                    </div>

                                    <div>
                                    <b>email id: a@a.ca</b><br />
                                    </div>

                                    <div>
                                    <b>Trip cost: $50</b><br />
                                    </div>
                                    
                                    <div className="vehicle-det" onClick={()=>this.goToMaps(1)} >View Map</div>
                                    <br/><br/>
                                    <div className="btn-usage" >
                                        <Button variant="primary" type="submit" id="trip" className="buttonSpacing">
                                           Start Trip
                                        </Button> 
                                        <Button variant="primary" type="submit" id="trip" className="buttonSpacing">
                                           End Trip
                                        </Button> 
                                    </div> 
                                    <br/>
                                    <div className="vehicle-det" onClick={this.goToRating}>Give Rating and Feedback</div>
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

                                <Row style={{marginTop:'30px'}}>
                                    
                                <Col md={12} style={{display:'flex',justifyContent:'center'}}>     
                                <Card style={{backgroundColor:'white',width:'97%'}} >
                                    <Row>
                                    <Col md={8} sm={12}>
                                <Card.Img variant="top" src="/images/imageCard2.png" style={{height:'350px', width: '90%'}}/>
                                </Col>
                                <Col md={4} sm={12}>
                                <div class= "float-center" style={{alignItems:'0px',marginTop:'50px'}} > 
                                <div>
                                <b>Name: Mike</b><br />
                                    </div>

                                    <div>
                                    <b>Vehicle type: Bike</b><br />
                                    </div>

                                    <div>
                                    <b>Phone no.: 0099</b><br />
                                    </div>

                                    <div>
                                    <b>email id: a@a.ca</b><br />
                                    </div>

                                    <div>
                                    <b>Trip cost: $50</b><br />
                                    </div>
                                    <div className="vehicle-det" onClick={()=>this.goToMaps(2)}>View Map</div>
                                    <br/><br/>
                                    <div className="btn-usage" >
                                        <Button variant="primary" type="submit" id="trip" className="buttonSpacing">
                                           Start Trip
                                        </Button> 
                                        <Button variant="primary" type="submit" id="trip" className="buttonSpacing">
                                           End Trip
                                        </Button> 
                                    </div> 
                                    <br/>
                                    <div className="vehicle-det" onClick={this.goToRating}>Give Rating and Feedback</div>
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

                            
                            <Card style={{margin:'30px 10px'}}>
                                <Row >
                                    <Col md={12}>
                                        <h5 className="ad-title">Past Trips</h5> <div><hr style={{width:'100%'}}/></div>
                                    </Col>
                                </Row>
                                <Row>
                                    
                                   {/* <div className = "resultsPageCard1" >*/} 
                                <Col md={12} style={{display:'flex',justifyContent:'center'}}>     
                                <Card style={{backgroundColor:'white',width:'97%'}} >
                                    <Row>
                                    <Col md={8} sm={12}>
                                <Card.Img variant="top" src="/images/imageCard3.jpg" style={{height:'350px', width: '90%'}}/>
                                </Col>
                                <Col md={4} sm={12}>
                                <div class = "float-center" style={{alignItems:'0px',marginTop:'50px'}} > 
                                <div>
                                <b>Name: Jacob</b><br />
                                    </div>

                                    <div>
                                    <b>Vehicle type: Truck</b><br />
                                    </div>

                                    <div>
                                    <b>Phone no.: 0088</b><br />
                                    </div>

                                    <div>
                                    <b>email id: b@a.ca</b><br />
                                    </div>

                                    <div>
                                    <b>Trip cost: $80</b><br />
                                    </div>
                                    <div className="vehicle-det" onClick={()=>this.goToMaps(3)}>View Map</div>
                                    <br/><br/>
                                    <div className="btn-usage" >
                                        <Button variant="secondary" type="submit" id="viewProfile">
                                           View Profile
                                        </Button> 
                                    </div> 
                                    <br/>
                                    <div className="vehicle-det" onClick={this.goToRating}>Give Rating and Feedback</div>
                                    
                                    {/* <div>
                                        <a href="rating">View rating/feedback</a><br />
                                        </div>
                                        <div><Button  color="primary" style={{backgroundColor:'#1a61ad'}}   type="submit" onClick={this.alert} value="Submit" > View Map </Button> </div>
                                    <div><Button style={{backgroundColor:'grey'}} type="submit" onClick={this.alert} value="Submit" > Cancel Request </Button><br/> <br/> </div> */}
                                </div>
                                </Col>
                                </Row>
                                </Card>
                                {/*</div>*/}   </Col>                
                                </Row>

                                <Row style={{marginTop:'30px'}}>
                                    
                                   {/* <div className = "resultsPageCard1" >*/} 
                                <Col md={12} style={{display:'flex',justifyContent:'center'}}>     
                                <Card style={{backgroundColor:'white', width:'97%'}} >
                                    <Row>
                                    <Col md={8} sm={12}>
                                <Card.Img variant="top" src="/images/imageCard2.png" style={{height:'350px', width: '90%'}}/>
                                </Col>
                                <Col md={4} sm={12}>
                                <div class = "float-center" style={{alignItems:'0px',marginTop:50}} > 
                                <div>
                                <b>Name: Mike</b><br />
                                    </div>

                                    <div>
                                    <b>Vehicle type: Bike</b><br />
                                    </div>

                                    <div>
                                    <b>Phone no.: 0099</b><br />
                                    </div>

                                    <div>
                                    <b>email id: a@a.ca</b><br />
                                    </div>

                                    <div>
                                    <b>Trip cost: $50</b><br />
                                    </div>

                                    <div className="vehicle-det" onClick={()=>this.goToMaps(4)}>View Map</div>
                                    <br/><br/>
                                    <div className="btn-usage" >
                                        <Button variant="secondary" type="submit" id="viewProfile">
                                           View Profile
                                        </Button> 
                                    </div> 
                                    <br/>
                                    <div className="vehicle-det" onClick={this.goToRating}>Give Rating and Feedback</div>
                                     

                                    {/* <div>
                                        <a href="rating">View rating/feedback</a><br />
                                        </div>
                                        <div><Button  color="primary" style={{backgroundColor:'#1a61ad'}}   type="submit" onClick={this.alert} value="Submit" > View Map </Button> </div>
                                    <div><Button style={{backgroundColor:'grey'}} type="submit" onClick={this.alert} value="Submit" > Cancel Request </Button><br/> <br/> </div> */}
                                </div>
                                </Col>
                                </Row>
                                </Card>
                                {/*</div>*/}   </Col>                
                                </Row>
                            </Card>
                        </Container>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default MyTrips;
