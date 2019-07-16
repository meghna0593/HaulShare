//Meghna Ramachandra Holla , B00812604
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var MongoClient = require('mongodb').MongoClient;

// const API_PORT  = 3001;
const app = express();
app.use(bodyParser.json()) //application/json
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(cors());
// const router = express.Router();

const corsHost = { origin: '*' }
const mongo_url_local = "mongodb://localhost:27017/";
const mongo_url="mongodb+srv://HaulShare:aakmv@cluster0-9pfpk.mongodb.net/test?retryWrites=true&w=majority";
var database;
MongoClient.connect(mongo_url,function(err,client){
    if (err) {
        console.log(err);
        return;
    }
    // database = client.db("haulShare"); //local mongodb
    database = client.db("Db_HaulShare") //remote mongodb
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
    if (err) throw err;
  console.log(result);
  res.send(result);
  db.close();
});
}); 

app.listen(5000, () => {
    console.log('Go to http://localhost:5000/getData to see posts');
  });

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-type,Accept');
  next();
});  
