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
            req_id:localStorage.getItem('req_id')
        }
    }

    componentWillMount(){
        localStorage.removeItem('req_id')        
    }

    assignValue=(event)=>{
        console.log(event.target.value);
        this.setState({
            [event.target.id]:event.target.value
        })
    }


    RatingFeedback=()=>{
        // let url_post="http://localhost:5000/postAnAd"
        // let url_get="http://localhost:5000/getUname"+localStorage.getItem('user_id');
        let url_post="http://localhost:17650/feedbackandrating"
        let url_get="https://haul-share-meghna.herokuapp.com/getUname/"+localStorage.getItem('user_id');
        let uname=''
        fetch(url_get,{method:'GET'})
        .then((data)=>data.json())
        .then((res)=>{
            uname=res[0].uname

            let send_data= {
                "user_id":(localStorage.getItem('user_id')===null?'':localStorage.getItem('user_id')),
                "user_name":uname,
                "service_id":this.state.req_id,
                "desc":this.state.desc
                }

    fetch(url_post,{
        method:'POST',
        headers: {
            'Access-Control-Allow-Headers':'Content-Type,Access-Control-Allow-Origin',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          },
        body:JSON.stringify(send_data),

    })
    .then((resp) => resp.json())
    .then((responseJson) => {
        alert('Feedback posted successfully')
        /* Navigating between pages using “History.” Npm, www.npmjs.com/package/history. */
        history.push('/profile')
        history.go()
    })
    .catch((e) => alert('Error Occured. Error is:',e))
        })
    }



    submitForm=()=>{
        this.RatingFeedback()
        /* Navigating between pages using “History.” Npm, www.npmjs.com/package/history. */
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
                                        <Form.Label >
                                        {this.state.req_id}
                                        </Form.Label>
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
