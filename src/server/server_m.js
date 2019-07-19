//Author: Meghna Ramachandra Holla, B00812604
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var MongoClient = require('mongodb').MongoClient;
var nodemailer = require('nodemailer');
const { ObjectId } = require('mongodb');

const API_PORT  = 5000;
const app = express();
app.use(bodyParser.json()) //application/json
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(cors());

const corsHost = { origin: '*' }
const mongo_url = "mongodb://localhost:27017/"; //local server
// const mongo_url="mongodb+srv://HaulShare:aakmv@cluster0-9pfpk.mongodb.net/test?retryWrites=true&w=majority"; //remote server
var database;
MongoClient.connect(mongo_url,function(err,client){
    if (err) {
        console.log(err);
        return;
    }
    database = client.db("haulShare"); //local mongodb
    // database = client.db("Db_HaulShare") //remote mongodb
})

//POST method to add new advertisements
app.post("/postAnAd", cors(corsHost), (req, res) => {
      var table = 'Advertisements'
      database.collection(table).insertOne(req.body, function(err, records) {
          if (err) throw err;
        console.log(records);
        res.send(records);
        // database.close();
      });
    });    

//GET method to retrieve username based on user id
app.get("/getUname/:id", cors(corsHost), (req, res) => {
  var email = encodeURI(req.params.id)
  var table = 'users'
  console.log(email);
  query={}
  query['email_reg'] = email
  database.collection(table).find(query).toArray(function (err, result) { 
    if (err) console.log(err);
    ;
  console.log(result);
  res.send(result);
  db.close();
});
}); 

let transporter = nodemailer.createTransport({
  service:'gmail',
  auth: {
    user: 'haulshare2019@gmail.com', // generated ethereal user
    pass: 'HaulShare@2019'// generated ethereal password
  }
});

app.post("/offerTrip", cors(corsHost), (req, res) => {  
  console.log(req.body.mailOptions);
  
  transporter.sendMail(req.body.mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  res.send(true);
}); 

// //start trip -> send email, update mongodb advertisement ->requestor should get email, starttrip update
app.put("/tripNotifiy/:adId/:reqId/:status",cors(corsHost),(req,res)=>{
  var table = 'Advertisements'
  var query={_id: ObjectId(req.params.adId) }
  var newvalues = { $set: {tripStatus: req.params.status} };
  database.collection(table).updateOne(query, newvalues, function(err, res) {
    if (err) throw err;
    // res.send(true)
  });
  let mailOptions={}
  //send email notification
  if(req.params.status==='S'){ //trip started
    mailOptions={
      'from': 'haulshare2019@gmail.com',
      'to': req.params.reqId,
      'subject': 'Trip started',
      'html':'Greetings! <br/>Your trip has been started and is on route.<br/>' 
    }
  }
  else{ //trip ended
    mailOptions={
      'from': 'haulshare2019@gmail.com',
      'to': req.params.reqId,
      'subject': 'Trip ended',
      'html':'Greetings! <br/>Your trip has been ended.<br/>' 
    }
  }
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      res.send(error)
    } else {
      res.send(info.response)
    }
  })
  
})

//end trip

app.get("/response/:status/:adId/:requestorId", cors(corsHost), (req, res) => {  
  let requestorId=''
  let mailOptions={}
  let accepted=0
  if(req.params.status==='accept'){
    requestorId=encodeURI(req.params.requestorId)
    accepted=1
    mailOptions={
      'from': 'haulshare2019@gmail.com',
      'to': req.params.requestorId,
      'subject': 'Request has been accepted',
      'html':'Greetings! <br/>Your request has been accepted!<br/>Check the application to get trip details.' 
    }
  }
  else{
    mailOptions={
      'from': 'haulshare2019@gmail.com',
      'to': req.params.requestorId,
      'subject': 'Request has been rejected',
      'html':'Hello,<br/> We regret to inform you that your request has been rejected.<br/> Please try making a request with another user' 
    }
  }
  console.log(requestorId);
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

  var table = 'Advertisements'
  var query={_id: ObjectId(req.params.adId) }
  var newvalues = { $set: { requestorId: requestorId, accepted: accepted} };
  database.collection(table).updateOne(query, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
  });
  if(accepted===0){
    res.send("Request is rejected");
  }
  else{
    res.send("Request is accepted");
  }
  
}); 

app.listen(API_PORT, () => {
    console.log('Go to http://localhost:5000/getData to see posts');
  });

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-type,Accept');
  next();
});  
