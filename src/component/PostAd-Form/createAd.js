import React, { Component } from 'react'
import Header from '../Header/header.js';
import {FormControl,Card,Form,Button,Image,Container,Row,Col} from 'react-bootstrap';
import { createBrowserHistory } from 'history';
import './createAd.css'
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
  } from 'react-places-autocomplete';
const history = createBrowserHistory();
const searchOptions = {
    componentRestrictions: { country: ['ca'] },
    types: ['address']
}

class PostAd extends Component{

    constructor(props){
        super(props);
        this.state={
            adTitle:'',
            strgDim:'',
            luggageWgt:'',
            tripDate:'',
            destn:'',
            src:'',
            tripCost:'',
            desc:'',
            vhclType:'',
            vhclNum:'',
            userOption:0,
            tripTime:'',
            adTitle_err:'',
            strgDim_err:'',
            luggageWgt_err:'',
            tripDate_err:'',
            destn_err:'',
            tripCost_err:'',
            vhclType_err:'',
            vhclNum_err:'',
            tripTime_err:'',
            src_err:'',
            address:''
        }
    }

    handleChangeSrc = src => {
        this.setState({ src });
      };
      handleChangeDestn = destn => {
        this.setState({ destn });
      };
      handleSelectSrc = (address) => {          
        geocodeByAddress(address)
        .then(results =>  {console.log(results);
         this.setState({ src:results[0].formatted_address,src_err:'' })})
        .catch(error => console.error(error));
      };
      handleSelectDestn = (address) => {          
        geocodeByAddress(address)
        .then(results =>  {console.log(results);
         this.setState({ destn:results[0].formatted_address,destn_err:'' })})
        .catch(error => console.error(error));
      };
    

    assignValue=(event)=>{
        console.log(event.target.value);
        this.setState({
            [event.target.id]:event.target.value,
            [event.target.id+'_err']:''
        })
    }

    checkDate=()=>{
        let selectedDate = new Date(this.state.tripDate);
        let today = new Date()
        if(selectedDate < today){
            console.log("inside");
            
            return false
        }
        return true        
    }

    validate=()=>{        
        /*
        “Regular Expressions.” MDN Web Docs, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions.
        */
        var strgRe = /^([0-9][0-9]*x[0-9][0-9]*x[0-9][0-9]*)$/
        var destChar = /^(([0-9]+)([a-z A-Z]+)([,]?[ ]?)([a-zA-Z]*)([,]?[ ]?)([a-zA-Z 0-9,]*))$/
        var tripCostChar = /^([0-9]+.?([0-9])*)$/

        if(this.state.adTitle===''){
            // alert('Please enter Ad Title')
            this.setState({adTitle_err:'Please enter Ad Title'})
            return false
        }
        else if(this.state.strgDim===''||!strgRe.test(this.state.strgDim)){
            // alert('Please enter storage dimension in format widthxheightxdepth')
            this.setState({strgDim_err:'Please enter storage dimension in format widthxheightxdepth'})
            return false
        }
        else if(this.state.luggageWgt===''){
            // alert('Please enter luggage details')
            this.setState({luggageWgt_err:'Please enter luggage details'})
            return false
        }
        else if(this.state.src==='' || !destChar.test(this.state.src)){
            // alert('Please enter destination, only alphabet allowed')
            this.setState({src_err:'Please enter source and choose from the option. The format is street number, street address, city, postal code'})
            return false
        }
        else if(this.state.destn==='' || !destChar.test(this.state.destn)){
            // alert('Please enter destination, only alphabet allowed')
            this.setState({destn_err:'Please enter destination and choose from the option. The format is street number, street address, city, postal code'})
            return false
        }
        else if(this.state.tripDate==='' || !(this.checkDate())){
            // alert('Please enter the Trip Date')
            this.setState({tripDate_err:'Please enter the Trip Date that is valid and not before today'})
            return false
        }
        else if(this.state.tripTime===''){
            // alert('Please enter trip time')
            this.setState({tripTime_err:'Please enter trip time'})
            return false
        }
        else if(this.state.tripCost==='' || !tripCostChar.test(this.state.tripCost)){
            // alert('Please enter trip cost as a proper number')
            this.setState({tripCost_err:'Please enter trip cost as a proper number'})
            return false
        }
        else if(this.state.vhclType==='' && this.state.userOption===0){
            // alert('Please enter a Vehicle Type')
            this.setState({vhclType_err:'Please enter a Vehicle Type'})
            return false
        }
        else if(this.state.vhclNum==='' && this.state.userOption===0){
            // alert('Please enter a Vehicle Number')
            this.setState({vhclNum_err:'Please enter a Vehicle Number'})
            return false
        }
        else{
            return true
        }
    }

    postAdToMongo=()=>{
        // let url_post="http://localhost:5000/postAnAd"
        // let url_get="http://localhost:5000/getUname/"+localStorage.getItem('user_id');
        let url_post="https://haul-share-meghna.herokuapp.com/postAnAd"
        let url_get="https://haul-share-meghna.herokuapp.com/getUname/"+localStorage.getItem('user_id');
        let uname=''
        fetch(url_get,{method:'GET'})
        .then((data)=>data.json())
        .then((res)=>{
            uname=res[0].uname

            let send_data= {
                "user_id":(localStorage.getItem('user_id')===null?'xyz':localStorage.getItem('user_id')),
                "userType":(this.state.userOption===0)?"T":"C",
                "uname":uname,
                "adTitle":this.state.adTitle,
                "strgDim":this.state.strgDim,
                "luggageWgt":this.state.luggageWgt,
                "destination":this.state.destn,
                "source":this.state.src,
                "tripDt":this.state.tripDate,
                "tripTime":this.state.tripTime,
                "tripFee":this.state.tripCost,
                "desc":this.state.desc,
                "vhclType":this.state.vhclType,
                "vhclNum":this.state.vhclNum,
                "vhclImg":this.state.vhclImg,
                "requestorId":'',
                "accepted":0,
                "tripStatus":'',
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
        alert('Succesfully posted the ad')
        /* Navigating between pages using “History.” Npm, www.npmjs.com/package/history. */
        history.push('/home')
        history.go()
    })
    .catch((e) => alert('Error Occured. Error is:',e))
        })
        

    }

    submitForm=()=>{
        var allowSubmission = this.validate()
        
        //posting advertisement only if the validation of all fields pass
        if(allowSubmission){
            this.postAdToMongo()
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
                                        <div className="validationLogin">{this.state.adTitle_err}</div> 
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
                                        <div className="validationLogin">{this.state.strgDim_err}</div> 
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
                                        <div className="validationLogin">{this.state.luggageWgt_err}</div> 
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="formPlaintextPassword">
                                        <Form.Label column md="4" sm="12" className="label-placement">
                                        Source *
                                        </Form.Label>
                                        <Col md="8" sm="12" className="text-area-placement">
                                        {/* Referred and altered from Hibiken. “Hibiken/React-Places-Autocomplete.” GitHub, 18 Feb. 2019, github.com/hibiken/react-places-autocomplete. */}
                                        <PlacesAutocomplete
                                            searchOptions={searchOptions}
                                            value={this.state.src}
                                            onChange={this.handleChangeSrc}
                                            onSelect={this.handleSelectSrc}
                                            id='src'
                                        >
                                            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                                            <div >
                                                <input
                                                style={{  
                                                    width:'100%', height:'38px',fontSize: '1rem',
                                                    fontWeight: 400,
                                                    lineHeight: 1.5,
                                                    color: '#495057',
                                                    backgroundColor: '#fff',
                                                    backgroundClip: 'padding-box',
                                                    border: '1px solid #ced4da',
                                                    borderRadius:'.25rem'}}
                                                {...getInputProps({
                                                    placeholder: 'Search Places for Source',
                                                    className: 'location-search-input',
                                                })}
                                                />
                                                <div className="autocomplete-dropdown-container">
                                                {loading && <div>Loading...</div>}
                                                {suggestions.map(suggestion => {
                                                    const className = suggestion.active
                                                    ? 'suggestion-item--active'
                                                    : 'suggestion-item';
                                                    // inline style for demonstration purpose
                                                    const style = suggestion.active
                                                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                                    return (
                                                    <div
                                                        {...getSuggestionItemProps(suggestion, {
                                                        className,
                                                        style,
                                                        })}
                                                    >
                                                        <span>{suggestion.description}</span>
                                                    </div>
                                                    );
                                                })}
                                                </div>
                                            </div>
                                            )}
                                        </PlacesAutocomplete>
                                       
                                        <div className="validationLogin">{this.state.src_err}</div> 
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="formPlaintextPassword">
                                        <Form.Label column md="4" sm="12" className="label-placement">
                                        Destination *
                                        </Form.Label>
                                        <Col md="8" sm="12" className="text-area-placement">
                                        {/* Referred and altered from Hibiken. “Hibiken/React-Places-Autocomplete.” GitHub, 18 Feb. 2019, github.com/hibiken/react-places-autocomplete. */}
                                        <PlacesAutocomplete
                                            value={this.state.destn}
                                            onChange={this.handleChangeDestn}
                                            onSelect={this.handleSelectDestn}
                                            id='destn'
                                        >
                                            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                                            <div >
                                                <input
                                                style={{  width:'100%', height:'38px',fontSize: '1rem',
                                                    fontWeight: 400,
                                                    lineHeight: 1.5,
                                                    color: '#495057',
                                                    backgroundColor: '#fff',
                                                    backgroundClip: 'padding-box',
                                                    border: '1px solid #ced4da',
                                                    borderRadius:'.25rem'}}
                                                {...getInputProps({
                                                    placeholder: 'Search Places for Destination',
                                                    className: 'location-search-input',
                                                })}
                                                />
                                                <div className="autocomplete-dropdown-container">
                                                {loading && <div>Loading...</div>}
                                                {suggestions.map(suggestion => {
                                                    const className = suggestion.active
                                                    ? 'suggestion-item--active'
                                                    : 'suggestion-item';
                                                    // inline style for demonstration purpose
                                                    const style = suggestion.active
                                                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                                    return (
                                                    <div
                                                        {...getSuggestionItemProps(suggestion, {
                                                        className,
                                                        style,
                                                        })}
                                                    >
                                                        <span>{suggestion.description}</span>
                                                    </div>
                                                    );
                                                })}
                                                </div>
                                            </div>
                                            )}
                                        </PlacesAutocomplete>
                                        
                                        <div className="validationLogin">{this.state.destn_err}</div> 
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
                                        <div className="validationLogin">{this.state.tripDate_err}</div> 
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
                                        <div className="validationLogin">{this.state.tripTime_err}</div> 
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
                                        <div className="validationLogin">{this.state.tripCost_err}</div> 
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
                                        <div className="validationLogin">{this.state.vhclType_err}</div> 
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
                                        <div className="validationLogin">{this.state.vhclNum_err}</div> 
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
