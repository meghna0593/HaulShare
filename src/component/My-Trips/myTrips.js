import React, { Component } from 'react'
import Header from '../Header/header.js';
import {FormControl,Card,Form,Button,Image,Container,Row,Col} from 'react-bootstrap';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

class PostAd extends Component{

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
                                <Col md={12}>     
                                <Card style={{backgroundColor:'white'}} >
                                    <Row>
                                    <Col md={9} sm={12}>
                                <Card.Img variant="top" src="/images/imageCard1.jpg" style={{height:'fit-content', width: 'fit-content'}}/>
                                </Col>
                                <Col md={3} sm={12}>
                                <div class = "float-center" style={{height:'400px', width: '400px',alignItems:'0px',marginTop:50}} > 
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

                                    <div>
                                        <a href="rating">View rating/feedback</a><br />
                                        </div>
                                        <div><Button  color="primary" style={{backgroundColor:'#1a61ad'}}   type="submit" onClick={this.alert} value="Submit" > View Map </Button> </div>
                                    <div><Button style={{backgroundColor:'grey'}} type="submit" onClick={this.alert} value="Submit" > Cancel Request </Button><br/> <br/> </div>
                                </div>
                                </Col>
                                </Row>
                                </Card>
                                {/*</div>*/}   </Col>                
                                </Row>

                                <Row>
                                    
                                   {/* <div className = "resultsPageCard1" >*/} 
                                <Col md={12}>     
                                <Card style={{backgroundColor:'white'}} >
                                    <Row>
                                    <Col md={9} sm={12}>
                                <Card.Img variant="top" src="/images/imageCard2.png" style={{height:'350px', width: '600px'}}/>
                                </Col>
                                <Col md={3} sm={12}>
                                <div class = "float-center" style={{height:'400px', width: '400px',alignItems:'0px',marginTop:50}} > 
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

                                    <div>
                                        <a href="rating">View rating/feedback</a><br />
                                        </div>
                                        <div><Button  color="primary" style={{backgroundColor:'#1a61ad'}}   type="submit" onClick={this.alert} value="Submit" > View Map </Button> </div>
                                    <div><Button style={{backgroundColor:'grey'}} type="submit" onClick={this.alert} value="Submit" > Cancel Request </Button><br/> <br/> </div>
                                </div>
                                </Col>
                                </Row>
                                </Card>
                                {/*</div>*/}   </Col>                
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
                                <Col md={12}>     
                                <Card style={{backgroundColor:'white'}} >
                                    <Row>
                                    <Col md={9} sm={12}>
                                <Card.Img variant="top" src="/images/imageCard3.jpg" style={{height:'350px', width: '600px'}}/>
                                </Col>
                                <Col md={3} sm={12}>
                                <div class = "float-center" style={{height:'400px', width: '400px',alignItems:'0px',marginTop:50}} > 
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

                                    <div>
                                        <a href="rating">View rating/feedback</a><br />
                                        </div>
                                        <div><Button  color="primary" style={{backgroundColor:'#1a61ad'}}   type="submit" onClick={this.alert} value="Submit" > View Map </Button> </div>
                                    <div><Button style={{backgroundColor:'grey'}} type="submit" onClick={this.alert} value="Submit" > Cancel Request </Button><br/> <br/> </div>
                                </div>
                                </Col>
                                </Row>
                                </Card>
                                {/*</div>*/}   </Col>                
                                </Row>

                                <Row>
                                    
                                   {/* <div className = "resultsPageCard1" >*/} 
                                <Col md={12}>     
                                <Card style={{backgroundColor:'white'}} >
                                    <Row>
                                    <Col md={9} sm={12}>
                                <Card.Img variant="top" src="/images/imageCard2.png" style={{height:'350px', width: '600px'}}/>
                                </Col>
                                <Col md={3} sm={12}>
                                <div class = "float-center" style={{height:'400px', width: '400px',alignItems:'0px',marginTop:50}} > 
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

                                    <div>
                                        <a href="rating">View rating/feedback</a><br />
                                        </div>
                                        <div><Button  color="primary" style={{backgroundColor:'#1a61ad'}}   type="submit" onClick={this.alert} value="Submit" > View Map </Button> </div>
                                    <div><Button style={{backgroundColor:'grey'}} type="submit" onClick={this.alert} value="Submit" > Cancel Request </Button><br/> <br/> </div>
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

export default PostAd;
