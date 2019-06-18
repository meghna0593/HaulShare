import React, { Component } from 'react'
import Header from '../Header/header.js';
import {FormControl,Card,Form,Button,Image,Container,Row,Col} from 'react-bootstrap';
import { createBrowserHistory } from 'history';
import './createAd.css'
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
                    <div className="inner" style={{backgroundColor:'#ededed'}}>
                        {/*Used FormControl,Card,Form,Button,Image,Container,Row,Col from “React Bootstrap.” React, react-bootstrap.github.io/ */}
                        <Container >
                            <Card style={{margin:'30px 10px'}}>
                                <Row >
                                    <Col md={12}>
                                        <h5 className="ad-title">Create an Ad</h5> <div><hr style={{width:'100%'}}/></div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12}>
                                    <Form.Group as={Row} controlId="formPlaintextPassword">
                                        <Form.Label column md="4" sm="12" className="label-placement">
                                        User Type *
                                        </Form.Label>
                                        <Col md="8" sm="12" className="text-area-placement text-area-placement-small">
                                        {/* Referred and altered radio buttons code from “Custom Radio Buttons.” Tryit Editor v3.6, www.w3schools.com/howto/tryit.asp?filename=tryhow_css_custom_radio */}
                                        <div class="custom-control custom-radio custom-control-inline">
                                        <input type="radio" class="custom-control-input" checked={(this.state.userOption===0)} id="customRadio1" onClick={this.userTypeOption}/>
                                        <label class="custom-control-label" for="customRadio1">Transporter</label>
                                        </div>
                                        <div class="custom-control custom-radio custom-control-inline">
                                        <input type="radio" class="custom-control-input" id="customRadio2" onClick={this.userTypeOption}/>
                                        <label class="custom-control-label" for="customRadio2">Customer</label>
                                        </div>
                                        
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="formPlaintextPassword">
                                        <Form.Label column md="4" sm="12" className="label-placement">
                                        Ad Title *
                                        </Form.Label>
                                        <Col md="8" sm="12" className="text-area-placement text-area-placement-small">
                                        <FormControl 
                                            placeholder="Ad Title" 
                                            value={this.state.adTitle}
                                            onChange={this.assignValue}
                                            id="adTitle"
                                            aria-describedby="basic-addon1"
                                        />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="formPlaintextPassword">
                                        <Form.Label column md="4" sm="12" className="label-placement">
                                        Storage Dimension *
                                        </Form.Label>
                                        <Col md="8" sm="12" className="text-area-placement text-area-placement-small">
                                        <FormControl 
                                            placeholder="widthxheightxdepth Eg:2x2x2" 
                                            value={this.state.strgDim}
                                            onChange={this.assignValue}
                                            id="strgDim"
                                            aria-describedby="basic-addon1"
                                        />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="formPlaintextPassword">
                                        <Form.Label column md="4" sm="12" className="label-placement">
                                        Luggage Weight *
                                        </Form.Label>
                                        <Col md="8" sm="12" className="text-area-placement text-area-placement-small">
                                        <FormControl 
                                            placeholder="in kilogram" 
                                            value={this.state.luggageWgt}
                                            onChange={this.assignValue}
                                            id="luggageWgt"
                                            type="number"
                                            aria-describedby="basic-addon1"
                                        />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="formPlaintextPassword">
                                        <Form.Label column md="4" sm="12" className="label-placement">
                                        Destination *
                                        </Form.Label>
                                        <Col md="8" sm="12" className="text-area-placement text-area-placement-small">
                                        <FormControl 
                                            placeholder="Destination" 
                                            value={this.state.destn}
                                            onChange={this.assignValue}
                                            id="destn"
                                            aria-describedby="basic-addon1"
                                        />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="formPlaintextPassword">
                                        <Form.Label column sm="4" className="label-placement">
                                        Trip Date *
                                        </Form.Label>
                                        <Col md="8" sm="12" className="text-area-placement text-area-placement-small">
                                        <FormControl 
                                            placeholder="Trip Date" 
                                            value={this.state.tripDate}
                                            onChange={this.assignValue}
                                            id="tripDate"
                                            type="date"
                                            aria-describedby="basic-addon1"
                                        />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="formPlaintextPassword">
                                        <Form.Label column md="4" sm="12" className="label-placement">
                                        Trip Time *
                                        </Form.Label>
                                        <Col md="8" sm="12" className="text-area-placement text-area-placement-small">
                                        <FormControl 
                                            placeholder="Trip Time" 
                                            value={this.state.tripTime}
                                            onChange={this.assignValue}
                                            id="tripTime"
                                            type="time"
                                            aria-describedby="basic-addon1"
                                        />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="formPlaintextPassword">
                                        <Form.Label column md="4" sm="12" className="label-placement">
                                        Trip Cost *
                                        </Form.Label>
                                        <Col md="8" sm="12" className="text-area-placement text-area-placement-small">
                                        <FormControl 
                                            placeholder="Trip Cost" 
                                            value={this.state.tripCost}
                                            onChange={this.assignValue}
                                            id="tripCost"
                                            type="number"
                                            aria-describedby="basic-addon1"
                                        />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="formPlaintextPassword">
                                        <Form.Label column md="4" sm="12" className="label-placement">
                                        Description 
                                        </Form.Label>
                                        <Col md="8" sm="12" className="text-area-placement text-area-placement-small">
                                        <Form.Control as="textarea" rows="3"
                                            placeholder="Description" 
                                            value={this.state.desc}
                                            onChange={this.assignValue}
                                            id="desc"
                                            aria-describedby="basic-addon1"
                                        />
                                        </Col>
                                    </Form.Group>
                                    {(this.state.userOption===0)?
                                    <div>
                                    <Form.Group as={Row} controlId="formPlaintextPassword">
                                        <Form.Label column md="4" sm="12" className="label-placement">
                                        Vehicle Type *
                                        </Form.Label>
                                        <Col md="8" sm="12" className="text-area-placement text-area-placement-small">
                                        <FormControl 
                                            placeholder="Eg: Car, Truck" 
                                            value={this.state.vhclType}
                                            onChange={this.assignValue}
                                            id="vhclType"
                                            aria-describedby="basic-addon1"
                                        />
                                        </Col>
                                    </Form.Group> 
                                    <Form.Group as={Row} controlId="formPlaintextPassword">
                                        <Form.Label column md="4" sm="12" className="label-placement">
                                        Vehicle Number *
                                        </Form.Label>
                                        <Col md="8" sm="12" className="text-area-placement text-area-placement-small">
                                        <FormControl 
                                            placeholder="Vehicle Number" 
                                            value={this.state.vhclNum}
                                            onChange={this.assignValue}
                                            id="vhclNum"
                                            aria-describedby="basic-addon1"
                                        />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="formPlaintextPassword">
                                        <Form.Label column md="4" sm="12" className="label-placement">
                                        Vehicle Image 
                                        </Form.Label>
                                        <Col md="8" sm="12" className="text-area-placement text-area-placement-small" style={{display:'flex'}}>
                                            <div>
                                            <input type="file" onChange={this.getFileUpload} id="inputFile" multiple/><br/>
                                            <Image id="img1"/> 
                                            </div>   
                                       
                                        </Col>
                                    </Form.Group></div>: <div></div>}
                                    <div className="justify-center btn-usage" style={{marginBottom:'25px'}}>
                                        <Button variant="primary" type="submit" onClick={this.submitForm}>
                                            Post Ad
                                        </Button>
                                    </div>
                                    </Col>
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
