//Done by Megna
//Connecting back-end and front-end connection- Archanaapriya Nallasivan
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { InputGroup,Image, FormControl, Form, Button } from 'react-bootstrap';
import './login.css'
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

{/* TabContainer function from “Tabs React Component - Material-UI.” Material, material-ui.com/components/tabs/. */}
function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            check: true,
            email_log:'',
            pass_log:'',
            uname:'',
            email_reg:'',
            new_pass:'',
            confirm_pass:'',
            email_log_err:'',
            pass_log_err:'',
            uname_err:'',
            email_reg_err:'',
            new_pass_err:'',
            confirm_pass_err:''
        };
    }

    componentWillMount(){
      console.log(localStorage.getItem('user_id'));
    }

    handleChange=(event, newValue)=>{
        this.setState({value:newValue});
    }

    checkBoxChange=(event)=>{
        console.log(this.state.check);
        this.setState({
            check: !(this.state.check)
        })
    }

    validateForm=(id,value)=>{
        /*
        “Regular Expressions.” MDN Web Docs, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions.
        Goyvaerts, Jan. “Alternation with The Vertical Bar or Pipe Symbol.” Regex Tutorial - Alternation with The Vertical Bar, www.regular-expressions.info/alternation.html.
        */
        var emailRe = /^[a-zA-Z0-9_-]+@[a-zA-Z]+\b(.com|.in|.co.in|.ca)\b$/
        var passRe = /^([0-9a-zA-Z]){4,}$/

        if(id==='register'){
            var nameRe = /^[a-zA-Z]+$/

            if(this.state.uname==='' || !nameRe.test(this.state.uname)){
                // alert('Please enter name. Only letters allowed')
                this.setState({uname_err:'Please enter name. Only letters allowed'});
                return false
            }
            else if(this.state.email_reg==='' || !emailRe.test(this.state.email_reg)){
                // alert('Please enter valid email address')
                this.setState({email_reg_err:'Please enter valid email address'})
                return false
            }

            else if(this.state.new_pass==='' || !passRe.test(this.state.new_pass)){
                // alert('Please enter a password. Password should have atleast 4 characters that are letters or numbers')
                this.setState({new_pass_err:'Please enter a password. Password should have atleast 4 characters that are letters or numbers'})
                return false
            }
            else if(this.state.confirm_pass===''){
                // alert('Please confirm password')
                this.setState({confirm_pass_err:'Please confirm password'})
                return false
            }
            else if(this.state.new_pass !== this.state.confirm_pass){
                // alert('Your passwords do not match, please type again')
                this.setState({confirm_pass_err:'Your passwords do not match, please type again'})
                return false
            }
            else{
                //alert('Registration Successful')
                return true
            }
        }
        else{
            if(this.state.email_log==='' || !emailRe.test(this.state.email_log)){
                // alert('Please enter a valid email address')
                this.setState({email_log_err:'Please enter a valid email address'})
                return false
            }
            else if(this.state.pass_log==='' || !passRe.test(this.state.pass_log)){
                // alert('Please enter a password.')
                this.setState({pass_log_err:'Please enter a password'})
                return false
            }
            else{
                // alert('Login Successful')
                return true
            }
        }
    }

    // Using fetch ,connecting front end react with back-end node
     Login = () => {
       console.log("login");
         let url_post = "http://localhost:19000/login"
         let send_data = {
             "email_reg": this.state.email_log,
             "confirm_pass": this.state.pass_log
         }
         fetch(url_post, {
                 method: 'POST',
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
                 alert('Login Successful')
                 localStorage.setItem('user_id',this.state.email_log)
                 /* Navigating between pages using “History.” Npm, www.npmjs.com/package/history. */
                 history.push('/home')
                 history.go()
             })
             .catch((e) => alert('Error Occured. Error is:', e))
     }

    // Using fetch ,connecting front end react with back-end node
     Register = () => {
         let url_post = "http://localhost:19000/register"
         let send_data = {
             "uname": this.state.uname,
             "email_reg": this.state.email_reg,
             "new_pass": this.state.new_pass,
             "confirm_pass": this.state.confirm_pass
         }
         fetch(url_post, {
                 method: 'POST',
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
                 alert('Registration Successful')
                 /* Navigating between pages using “History.” Npm, www.npmjs.com/package/history. */
                 history.push('/')
                 history.go()
             })
             .catch((e) => alert('Error Occured. Error is:'+ e))

     }
     submitForm = (event) => {

         var passCheck = this.validateForm(event.target.id, event.target.value)
         console.log(passCheck);
         if (passCheck && event.target.id === 'login') {
             /* Navigating between pages using “History.” Npm, www.npmjs.com/package/history. */
             this.Login()
         } else if (passCheck && event.target.id === 'register') {
             /* Navigating between pages using “History.” Npm, www.npmjs.com/package/history. */
             this.Register()
         }
     }


    assignValue=(event)=>{
        console.log(event.target.id+'_err');

        this.setState({
            [event.target.id]:event.target.value,
            [event.target.id+'_err']:'',
        })
    }

    render(){
        console.log(this.state.email_log_err,this.state.pass_log_err);

        return(

        <div>
            {/*
            *   Used InputGroup,Image, FormControl, Form,Checkbox, Button from “React Bootstrap.” React, react-bootstrap.github.io/.
            *   AppBar, Tabs, Tab and TabContainer from “The World's Most Popular React UI Framework - Material-UI.” Material, material-ui.com/.
            */}

            <div className="justify-center" style={{marginTop: '23px',marginBottom: '21px'}}>
                <Image src="/images/logoWithText.png" className="img-size"/> {/* “Free Logo Maker - Create Your Own Logo in Minutes!” Free Logo Maker - Create Your Own Logo in Minutes!, https://logomakr.com/1JMlu5 */}
            </div>
            <div className="container_login">
                <AppBar position="static" >
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        indicatorColor="secondary"
                        textColor="secondary"
                        variant="fullWidth"
                    >
                        <Tab label="My Account" />
                        <Tab label="Sign Up" />
                    </Tabs>
                </AppBar>
                {this.state.value === 0 && <TabContainer>
                    <div style={{marginBottom:'1rem'}}>
                        <InputGroup style={{marginTop:'25px',marginLeft:'16%',width:'70%'}}>
                            <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">
                                <Image src="/images/user.png" className="field-img"/> {/* image from User Icons.” Free Download, PNG and SVG, http://icons8.com/icons/set/user  */}
                            </InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                            defaultValue={this.state.email_log}
                            value={this.state.email_log}
                            onChange={this.assignValue.bind(this)}
                            placeholder="Email"
                            id="email_log"
                            aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                        <div className="validationLogin">{this.state.email_log_err}</div>
                    </div>
                    <div style={{marginBottom:'1rem'}}>
                    <InputGroup style={{marginLeft:'16%',width:'70%'}}>
                        <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">
                            <Image src="/images/key.png" className="field-img"/> {/* image from "Key Icons.” Free Download, PNG and SVG, http://icons8.com/icons/set/key */}
                        </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                        defaultValue={this.state.pass_log}
                        onChange={this.assignValue.bind(this)}
                        type="password"
                        placeholder="Password"
                        id="pass_log"
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    <div className="validationLogin">{this.state.pass_log_err}</div>
                    </div>
                    <Form.Check type="checkbox" className="small-grey-text" checked={this.state.check} onChange={this.checkBoxChange} label="Remember Me" />
                    <div className="justify-center button-placement">
                        <Button variant="primary" type="submit" id="login" onClick={this.submitForm}>
                            LOGIN
                        </Button>
                    </div>
                    <div className="justify-center forgotpass-placement">
                        <a href="" className="small-link-text">Forgot Password?</a>
                    </div>
                </TabContainer>}
                {this.state.value === 1 && <TabContainer>
                    <div style={{marginBottom:'1rem'}}>
                    <InputGroup style={{marginTop:'25px',marginLeft:'16%',width:'70%'}}>
                        <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">
                            <Image src="/images/user.png" className="field-img"/> {/* image from "User Icons.” Free Download, PNG and SVG, http://icons8.com/icons/set/user  */}
                        </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                        defaultValue={this.state.uname}
                        onChange={this.assignValue.bind(this)}
                        placeholder="Name"
                        id="uname"
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    <div className="validationLogin">{this.state.uname_err}</div>
                    </div>

                    <div style={{marginBottom:'1rem'}}>
                    <InputGroup style={{marginTop:'25px',marginLeft:'16%',width:'70%'}}>
                        <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">
                            <Image src="/images/email.png" className="field-img"/> {/* image from "Email Icons.” Free Download, PNG and SVG, http://icons8.com/icons/set/email  */}
                        </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                        defaultValue={this.state.email_reg}
                        onChange={this.assignValue.bind(this)}
                        placeholder="E-mail"
                        id="email_reg"
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    <div className="validationLogin">{this.state.email_reg_err}</div>
                    </div>



                    <div style={{marginBottom:'1rem'}}>
                    <InputGroup style={{marginLeft:'16%',width:'70%'}}>
                        <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">
                            <Image src="/images/lock.png" className="field-img"/> {/* image from "Lock Icons.” Free Download, PNG and SVG, http://icons8.com/icons/set/lock */}
                        </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                        defaultValue={this.state.new_pass}
                        onChange={this.assignValue.bind(this)}
                        type="password"
                        placeholder="Enter Password"
                        id="new_pass"
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    <div className="validationLogin">{this.state.new_pass_err}</div>
                    </div>

                    <div style={{marginBottom:'1rem'}}>
                    <InputGroup style={{marginLeft:'16%',width:'70%'}}>
                        <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">
                            <Image src="/images/key.png" className="field-img"/> {/* image from "Key Icons.” Free Download, PNG and SVG, http://icons8.com/icons/set/key  */}
                        </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                        defaultValue={this.state.confirm_pass}
                        onChange={this.assignValue.bind(this)}
                        type="password"
                        placeholder="Confirm Password"
                        id="confirm_pass"
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    <div className="validationLogin">{this.state.confirm_pass_err}</div>
                    </div>

                    <div className="justify-center button-placement">
                        <Button variant="primary" id="register" type="submit" onClick={this.submitForm}>
                            Sign me up!
                        </Button>
                    </div>

                </TabContainer>}
            </div>
        </div>
         )
    }
}

export default Login;
