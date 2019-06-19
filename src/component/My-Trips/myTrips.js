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

    assignValue=(event)=>{
        console.log(event.target.value);
        this.setState({
            [event.target.id]:event.target.value
        })
    }

    validate=()=>{
        /*
        “Regular Expressions.” MDN Web Docs, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions.
        */
        var strgRe = /^([0-9][0-9]*x[0-9][0-9]*x[0-9][0-9]*)$/
        var destChar = /^([a-zA-Z]+)$/
        var tripCostChar = /^([0-9]+.?([0-9])*)$/
        
        if(this.state.adTitle===''){
            alert('Please enter Ad Title')
            return false
        }
        else if(this.state.strgDim===''||!strgRe.test(this.state.strgDim)){
            alert('Please enter storage dimension in format widthxheightxdepth')
            return false
        }
        else if(this.state.luggageWgt===''){
            alert('Please enter luggage details')
            return false
        }
        else if(this.state.destn==='' || !destChar.test(this.state.destn)){
            alert('Please enter destination, only alphabet allowed')
            return false
        }
        else if(this.state.tripTime===''){
            alert('Please enter trip time')
            return false
        }
        else if(this.state.tripCost==='' || !tripCostChar.test(this.state.tripCost)){
            alert('Please enter trip cost as a proper number')
            return false
        }
        else if(this.state.vhclType===''){
            alert('Please enter a Vehicle Type')
            return false
        }
        else if(this.state.vhclNum===''){
            alert('Please enter a Vehicle Number')
            return false
        }
        else{
            alert('Succesfully posted the ad')
            return true
        }
    }

    submitForm=()=>{
        var allowSubmission = this.validate()
        if(allowSubmission){
            /* Navigating between pages using “History.” Npm, www.npmjs.com/package/history. */
            history.push('/home')
            history.go()
        }
    }

    /* Referred and altered code from “FileReader.readAsDataURL().” MDN Web Docs, developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL. */
    getFileUpload=(event)=>{        
        var file    = document.querySelector('input[type=file]').files[0]; 
        var img = document.getElementById('img1') 
        var reader  = new FileReader();
        
        reader.onloadend = function () {
            document.getElementById('img1').style.height = "170px" 
            img.src = reader.result;

        }
 
        if (file) {
            reader.readAsDataURL(file);
        } else {
            img.src = "";
        }
   }

   userTypeOption=(event)=>{
        console.log(event.target);
        if(event.target.id === 'customRadio2'){
            document.getElementById('customRadio1').checked=false
            this.setState({userOption:1})
        }
        if(event.target.id === 'customRadio1'){
            document.getElementById('customRadio2').checked=false
            this.setState({userOption:0})
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
