import React, { Component } from 'react'
import Header from '../Header/header.js';
import {FormControl,Card,Form,Button,Image,Container,Row,Col} from 'react-bootstrap';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

class RatingFeedback extends Component{

    constructor(props){
        super(props);
        this.state={
            serviceName:'',
            yourName:'',
            desc:'',
        }
    }

    assignValue=(event)=>{
        console.log(event.target.value);
        this.setState({
            [event.target.id]:event.target.value,
        })
    }

    

    submitForm=()=>{
        /* Navigating between pages using “History.” Npm, www.npmjs.com/package/history. */
        history.push('/my-trips')
        history.go()
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
                                        <h5 className="ad-title">Review and Feedback</h5> <div><hr style={{width:'100%'}}/></div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12}>
                                    <Form.Group as={Row} controlId="formPlaintextPassword">
                                        <Form.Label column md="4" sm="12" className="label-placement">
                                        Service Taken from 
                                        </Form.Label>
                                        <Col md="8" sm="12" className="text-area-placement text-area-placement-small">
                                        <FormControl 
                                            placeholder="Transporter/Customer Name" 
                                            value={this.state.serviceName}
                                            onChange={this.assignValue}
                                            id="adTitle"
                                            aria-describedby="basic-addon1"
                                        />
                                        <div className="validationLogin">{this.state.adTitle_err}</div> 
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="formPlaintextPassword">
                                        <Form.Label column md="4" sm="12" className="label-placement">
                                        Service Taken by 
                                        </Form.Label>
                                        <Col md="8" sm="12" className="text-area-placement text-area-placement-small">
                                        <FormControl 
                                            placeholder="Your Name" 
                                            value={this.state.yourName}
                                            onChange={this.assignValue}
                                            id="adTitle"
                                            aria-describedby="basic-addon1"
                                        />
                                        <div className="validationLogin">{this.state.adTitle_err}</div> 
                                        </Col>
                                    </Form.Group>
                                    
                                    <Form.Group as={Row} controlId="formPlaintextPassword">
                                        <Form.Label column md="4" sm="12" className="label-placement">
                                        Review and Feedback 
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
                                    <div className="justify-center btn-usage" style={{marginBottom:'25px'}}>
                                        <Button variant="primary" type="submit" onClick={this.submitForm}>
                                            Submit
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

export default RatingFeedback;
