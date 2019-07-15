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
    // database = client.db("haulShare");
    database = client.db("Db_HaulShare")
})


app.get('/getAdsList', cors(corsHost), function (req, res) {
    MongoClient.connect(url_mongo, function (err, db) {
      if (err) throw err;
    //   var dbo = db.db("haul"); //database
      var table = 'Advertisements' //collections or table
      var query = {}; 
      database.collection(table).find(query).toArray(function (err, result) { //make api call
          if (err) throw err;
        console.log(result);
        res.send(result);
        db.close();
      });
    });
});
app.post("/postAnAd", (req, res) => {

      var table = 'Advertisements'
      database.collection(table).insertOne(req.body, function(err, records) {
          if (err) throw err;
        console.log(records);
        res.send(records);
        // database.close();
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

