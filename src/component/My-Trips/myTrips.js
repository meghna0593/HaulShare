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
                    <div className="inner" style={{backgroundColor:'#ededed'}}>
                        {/*Used FormControl,Card,Form,Button,Image,Container,Row,Col from “React Bootstrap.” React, react-bootstrap.github.io/ */}
                        <Container >
                            <Card style={{margin:'30px 10px'}}>
                                <Row >
                                    <Col md={12}>
                                        <h5 className="ad-title">Current Trips</h5> <div><hr style={{width:'100%'}}/></div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12}>
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
                                    <Col md={12}>
                                    
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
