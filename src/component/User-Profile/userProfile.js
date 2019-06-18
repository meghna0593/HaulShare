import React, { Component } from 'react'
import Header from '../Header/header.js';
import {FormControl,Card,Form,Button,Image,Container,Row,Col} from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';
import './userProfile.css'

class UserProfile extends Component{
    constructor() {
        super();
     
        this.state = {
          rating: 4,
          editOption:true,
          name:"Arya Stark",
          dob:'1993-03-05',
          phone:9021110000,
          email:'arya93@gmail.com',
          edu:'Bachelor\'s in CS',
          emp:'Software Engineer',
          hobbies:'Archery',
          intro:'Some quick example text to build on the card title and make up the bulk of the card\'s content'
        }
        
    }

    onStarClick(nextValue, prevValue, name) {
        console.log();
        
        this.setState({rating: nextValue});
    }

    assignValue=(event)=>{
        console.log(event.target.value);
        this.setState({
            [event.target.id]:event.target.value
        })
    }

    editEnable=()=>{
        this.setState({
            editOption:false
        })
    }

    validate=()=>{
        /*
        “Regular Expressions.” MDN Web Docs, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions.
        Goyvaerts, Jan. “Alternation with The Vertical Bar or Pipe Symbol.” Regex Tutorial - Alternation with The Vertical Bar, www.regular-expressions.info/alternation.html.
        */
        var phoneRe = /^([0-9]{10})$/
        var emailRe = /^[a-zA-Z0-9_-]+@[a-zA-Z]+\b(.com|.in|.co.in|.ca)\b$/
        if(this.state.name===''){
            alert('Please enter name details')
            return false
        }
        else if(this.state.data===''){
            alert('Please enter Date of Birth')
            return false
        }
        else if(this.state.phone==='' || !phoneRe.test(this.state.phone)){
            alert('Please enter a valid Phone number with 10 digits')
            return false
        }
        if(this.state.email==='' || !emailRe.test(this.state.email)){
            alert('Please enter a valid email address')
        }
        else{
            alert('Succesfully saved the changes')
            return true
        }

    }

    submitForm=()=>{
        var allowSubmission = this.validate()
        if(allowSubmission){
            this.setState({
            editOption:true
            })
        }
    }

    render(){
        return(
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <div className="inner" style={{backgroundColor:'#ededed'}}>
                        {/*Used FormControl,Card,Form,Button,Image,Container,Row,Col from “React Bootstrap.” React, react-bootstrap.github.io/ */}
                        <Container style={{maxWidth:'97%'}}>
                            <Card style={{margin:'30px 10px'}}>
                            <Row >
                                <Col md={12} className="profile-container">
                                    <Row style={{marginTop:'22px'}}>
                                        <Col md={3}>
                                            <div className="profile-flex">
                                            <Image id="img1" src="/images/user-profile-icon.png" style={{height:'170px'}}/> {/*image from “User Icons.” Free Download, PNG and SVG, https://icons8.com/icons/set/user.*/}
                                            </div>
                                            <div className="profile-flex">
                                                {/* Stars for rating from “React-Star-Rating-Component.” Npm, www.npmjs.com/package/react-star-rating-component. */}
                                                <StarRatingComponent 
                                                    name="rate1" 
                                                    starCount={5}
                                                    value={this.state.rating}
                                                    onStarClick={this.onStarClick.bind(this)}
                                                />
                                            </div>
                                            <div className="profile-flex" >
                                                {/*image from "Pencil Icons.” Free Download, PNG and SVG, https://icons8.com/icons/set/pencil */}
                                                <Image src="/images/pencil-white.svg" className="small-scr-edit" style={{backgroundColor:'grey',borderRadius:'50%', height:'21px', cursor:'pointer'}} onClick={this.editEnable}/>
                                            </div>
                                            <div className="profile-flex">
                                                <Card className="card-shadow small-scr-card" >
                                                    <Card.Body>
                                                        <Card.Title className="text-overlay" style={{color:'#1a61ad',fontSize:'12px',width:'42px'}}><i>Intro</i></Card.Title>
                                                        <Card.Text style={{fontSize:'12px'}}>
                                                        <Form.Control as="textarea" rows="8"
                                                            value={this.state.intro}
                                                            onChange={this.assignValue.bind(this)}
                                                            placeholder="Introduction"
                                                            id="intro"
                                                            aria-describedby="basic-addon1"
                                                            disabled={this.state.editOption}
                                                        />
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </div>
                                            <div className="btn-usage profile-flex small-scr-btn" style={{bottom:'0'}}>
                                                <Button variant="secondary" type="submit" onClick={this.submitForm}>
                                                    Delete Profile
                                                </Button>
                                            </div>
                                            
                                        </Col>
                                        <Col md={9} style={{paddingRight:'4%'}}>
                                            <div style={{marginBottom:'25px'}}>
                                            <Card className="card-shadow" >
                                                    <Card.Body>
                                                        <Card.Title className="text-overlay" style={{color:'#1a61ad',fontSize:'12px',width:'64px'}}><i>Personal</i></Card.Title>
                                                        <Card.Text style={{fontSize:'12px'}}>
                                                        <Form.Group as={Row} controlId="formPlaintextPassword">
                                                            <Form.Label column md="4" sm="12" className="label-placement">
                                                            Name *
                                                            </Form.Label>
                                                            <Col md="8" sm="12" className="text-area-placement">
                                                            <FormControl 
                                                                defaultValue={this.state.name} 
                                                                placeholder="Full Name" 
                                                                value={this.state.name}
                                                                onChange={this.assignValue}
                                                                id="name"
                                                                aria-describedby="basic-addon1"
                                                                disabled={this.state.editOption}
                                                            />
                                                            </Col>
                                                        </Form.Group>
                                                        <Form.Group as={Row} controlId="formPlaintextPassword">
                                                            <Form.Label column sm="4" className="label-placement">
                                                            Date of Birth *
                                                            </Form.Label>
                                                            <Col sm="8" className="text-area-placement">
                                                            <FormControl 
                                                                type="date" 
                                                                placeholder="Date of Birth" 
                                                                value={this.state.dob}
                                                                onChange={this.assignValue.bind(this)}
                                                                id="dob"
                                                                aria-describedby="basic-addon1"
                                                                disabled={this.state.editOption}
                                                            />
                                                            </Col>
                                                        </Form.Group>
                                                        <Form.Group as={Row} controlId="formPlaintextPassword">
                                                            <Form.Label column sm="4" className="label-placement">
                                                            Phone *
                                                            </Form.Label>
                                                            <Col sm="8" className="text-area-placement">
                                                            <FormControl 
                                                                type="number" 
                                                                placeholder="Phone Number" 
                                                                value={this.state.phone}
                                                                onChange={this.assignValue.bind(this)}
                                                                id="phone"
                                                                aria-describedby="basic-addon1"
                                                                disabled={this.state.editOption}    
                                                            />
                                                            </Col>
                                                        </Form.Group>
                                                        <Form.Group as={Row} controlId="formPlaintextPassword">
                                                            <Form.Label column sm="4" className="label-placement">
                                                            E-mail *
                                                            </Form.Label>
                                                            <Col sm="8" className="text-area-placement">
                                                            <FormControl 
                                                                placeholder="Email" 
                                                                value={this.state.email}
                                                                onChange={this.assignValue.bind(this)}
                                                                id="email"
                                                                aria-describedby="basic-addon1"
                                                                disabled={this.state.editOption}                                                        
                                                            />
                                                            </Col>
                                                        </Form.Group>
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </div>
                                            <div>
                                            <Card className="card-shadow" >
                                                    <Card.Body>
                                                        <Card.Title className="text-overlay" style={{color:'#1a61ad',fontSize:'12px',width:'55px'}}><i>Others</i></Card.Title>
                                                        <Card.Text style={{fontSize:'12px'}}>
                                                        <Form.Group as={Row} controlId="formPlaintextPassword">
                                                            <Form.Label column sm="4" className="label-placement">
                                                             Education
                                                            </Form.Label>
                                                            <Col sm="8" className="text-area-placement">
                                                            <Form.Control  
                                                                placeholder="Highest Education" 
                                                                value={this.state.edu}
                                                                onChange={this.assignValue.bind(this)}
                                                                id="edu"
                                                                aria-describedby="basic-addon1"
                                                                disabled={this.state.editOption}
                                                            />
                                                            </Col>
                                                        </Form.Group>
                                                        <Form.Group as={Row} controlId="formPlaintextPassword">
                                                            <Form.Label column sm="4" className="label-placement">
                                                             Employment
                                                            </Form.Label>
                                                            <Col sm="8" className="text-area-placement">
                                                            <Form.Control 
                                                                placeholder="Currently employed in" 
                                                                value={this.state.emp}
                                                                onChange={this.assignValue.bind(this)}
                                                                id="emp"
                                                                aria-describedby="basic-addon1"
                                                                disabled={this.state.editOption}
                                                            />
                                                            </Col>
                                                        </Form.Group>
                                                        <Form.Group as={Row} controlId="formPlaintextPassword">
                                                            <Form.Label column sm="4" className="label-placement">
                                                             Hobbies
                                                            </Form.Label>
                                                            <Col sm="8" className="text-area-placement">
                                                            <Form.Control 
                                                                placeholder="My Hobbies"
                                                                value={this.state.hobbies}
                                                                onChange={this.assignValue.bind(this)}
                                                                id="hobbies"
                                                                aria-describedby="basic-addon1"
                                                                disabled={this.state.editOption}
                                                            />
                                                            </Col>
                                                        </Form.Group>
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </div>
                                            <div className="btn-usage profile-flex">
                                            <Button variant="primary" type="submit" style={{marginTop:'25px'}} onClick={this.submitForm}>Save</Button> 
                                            </div> 
                                            <Card className="card-shadow" style={{marginTop:'25px',marginBottom:'25px'}}>
                                                    <Card.Body>
                                                        <Card.Title className="text-overlay" style={{color:'#1a61ad',fontSize:'12px',width:'141px'}}><i>Feedback and Reviews</i></Card.Title>
                                                        <Card.Text style={{fontSize:'12px'}}>
                                                            <div style={{marginBottom:'15px'}}>
                                                                <div style={{fontWeight:'bold',color:'grey'}}>Username</div>
                                                                <div>Review1 - Some quick example text to build on the card title and make up the bulk of
                                                                the card's content.</div>
                                                            </div>
                                                            <div style={{marginBottom:'15px'}}>
                                                                <div style={{fontWeight:'bold',color:'grey'}}>Username</div>
                                                                <div>Review2 - Some quick example text to build on the card title and make up the bulk of
                                                                the card's content.</div>
                                                            </div>
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            </Card>
                        </Container>                      
                    </div>
                </div>
            </div>
        )
    }
}

export default UserProfile;