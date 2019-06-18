import React, { Component } from 'react';
import { Image,Button,Navbar,Nav, NavDropdown} from 'react-bootstrap';
import './header.css'
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

class Header extends Component {

    constructor(props){
        super(props);
    }
    
    /* Navigating between pages using “History.” Npm, www.npmjs.com/package/history. */
    submitForm=()=>{
        history.push('/post-ad')
        history.go()
    }

    goHome=()=>{
        history.push('/home')
        history.go()
    }

    render(){
        return(
            <div className="header">
                {/*Used Image,Button,Navbar,Nav, NavDropdown from “React Bootstrap.” React, react-bootstrap.github.io/ */}
                <Navbar bg="light" expand="lg" className="container-header"  variant="light">
                    <Navbar.Brand className="brand-img" onClick={this.goHome}>
                        <Image src="/images/logoWithText.png" className="field-img"/> {/* “Free Logo Maker - Create Your Own Logo in Minutes!” Free Logo Maker - Create Your Own Logo in Minutes!, https://logomakr.com/1JMlu5 */}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="left-auto">
                    <div className="justify-center btn-usage">
                        <Button variant="primary" type="submit" onClick={this.submitForm}>
                            Post Ad
                        </Button>
                    </div>
                    <Nav.Link href="#home">&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;Home</Nav.Link>
                    <Nav.Link href="#features">|&nbsp;&nbsp;&nbsp;&nbsp;About</Nav.Link>
                    <Nav.Link href="#pricing">|&nbsp;&nbsp;&nbsp;&nbsp;Contact&nbsp;&nbsp;&nbsp;&nbsp;|</Nav.Link>
                    <NavDropdown 
                    title={
                             /*image from “User Icons.” Free Download, PNG and SVG, https://icons8.com/icons/set/user.*/
                            <img  
                                src="/images/user_profile.png" 
                                alt="user pic"
                                style={{height:'25px'}} 
                            />
                    } 
                    
                    id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">My Trips</NavDropdown.Item>
                        
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="http://localhost:3000/">Sign Out</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Header;