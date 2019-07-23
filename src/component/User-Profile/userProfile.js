import React, { Component } from 'react'
import Header from '../Header/header.js';
import {FormControl,Card,Form,Button,Image,Container,Row,Col} from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';
import { createBrowserHistory } from 'history';
import './userProfile.css'
const history = createBrowserHistory();

class UserProfile extends Component{
    constructor() {
        super();

        this.state = {
          rating: 4,
          editOption:true,
          name:'',
          dob:'',
          phone:''  ,
          email:'',
          name_err:'',
          dob_err:'',
          phone_err:'',
          email_err:'',
          edu:'',
          emp:'',
          hobbies:'',
          intro:'Some quick example text to build on the card title and make up the bulk of the card\'s content'
        }

    }
    componentWillMount(){
      console.log(localStorage.getItem('user_id'));
    }

    onStarClick(nextValue, prevValue, name) {
        console.log();

        this.setState({rating: nextValue});
    }

    assignValue=(event)=>{
        console.log(event.target.value);
        this.setState({
            [event.target.id]:event.target.value,
            [event.target.id+'_err']:'',
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
            // alert('Please enter name details')
            this.setState({name_err:'Please enter full name'})
            return false
        }
        else if(this.state.dob===''){
            // alert('Please enter Date of Birth')
            this.setState({dob_err:'Please enter Date of Birth'})
            return false
        }
        else if(this.state.phone==='' || !phoneRe.test(this.state.phone)){
            // alert('Please enter a valid Phone number with 10 digits')
            this.setState({phone_err:'Please enter a valid Phone number with 10 digits'})
            return false
        }
        else if(this.state.email==='' || !emailRe.test(this.state.email)){
            // alert('Please enter a valid email address')
            this.setState({email_err:'Please enter a valid email address'})
            return false
        }
        else{
            alert('Succesfully saved the changes')
            return true
        }
    }

    deleteprofile = () => {
let user_id= localStorage.getItem('user_id')
       //  let url_post = "http://localhost:19000/login" //local
       let url_delete = "http://localhost:17650/delete/"+user_id
        //let url_post="https://haul-share-archana.herokuapp.com/register"
        let send_data = {
            "uname": this.state.uname,
            "email_reg": this.state.email_reg
        }
        fetch(url_delete, {
                method: 'DELETE',
                headers: {
                    'Access-Control-Allow-Headers': 'Content-Type,Access-Control-Allow-Origin',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify(send_data),

            })
            .then((resp) => resp.json())
            .then((responseJson) => {
                console.log(responseJson)
                alert('Are you sure?')
                history.push('/')
                history.go()
            })
            .catch((e) => alert('Error Occured. Error is:',e))
    }

    userprofile =()=>{
        // let url_post="http://localhost:5000/postAnAd"
        // let url_get="http://localhost:5000/getUname"+localStorage.getItem('user_id');
        let url_post="http://localhost:17650/userprofileform"
            let send_data= {
                "name":this.state.name,
                "dob":this.state.dob,
                "phone":this.state.phone,
                "email":this.state.email
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
        alert('Succesfully updated')
        /* Navigating between pages using “History.” Npm, www.npmjs.com/package/history. */
    })
    .catch((e) => alert('Error Occured. Error is:',e))
}

    submitForm=()=>{
        var allowSubmission = this.validate()
        if(allowSubmission){
            this.setState({
            editOption:true,
            name :this.state.name,
            dob:this.state.dob,
            phone:this.state.phone,
            email:this.state.email
            })
            this.userprofile()
            history.push('/profile')
            history.go()
        }
    }

    submitForm1=()=>{
      this.deleteprofile()
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
                                                <Button variant="secondary" type="submit" onClick={this.submitForm1}>
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
                                                                // disabled={this.state.editOption}
                                                            />
                                                            <div className="validationLogin">{this.state.name_err}</div>
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
                                                                // disabled={this.state.editOption}
                                                            />
                                                            <div className="validationLogin">{this.state.dob_err}</div>
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
                                                                // disabled={this.state.editOption}
                                                            />
                                                            <div className="validationLogin">{this.state.phone_err}</div>
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
                                                                // disabled={this.state.editOption}
                                                            />
                                                            <div className="validationLogin">{this.state.email_err}</div>
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
                                                                // disabled={this.state.editOption}
                                                            />
                                                            </Col>
                                                        </Form.Group>
                                                        <Form.Group as={Row} controlId="formPlaintextPassword">
                                                            <Form.Label column sm="4" className="label-placement">
                                                             Employment
                                                            </Form.Label>
                                                            <Col sm="8" className="text-area-placement">
                                                            <Form.Control
                                                                placeholder="Employed in"
                                                                value={this.state.emp}
                                                                onChange={this.assignValue.bind(this)}
                                                                id="emp"
                                                                aria-describedby="basic-addon1"
                                                                // disabled={this.state.editOption}
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
                                                                // disabled={this.state.editOption}
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
