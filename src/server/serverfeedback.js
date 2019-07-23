// Archanaapriya -B00811602
const cors = require('cors');
const express = require('express');
const app = express();
const corsHost = { origin: '*' };
app.use(cors());
const bodyParser = require("body-parser");

var MongoClient = require('mongodb').MongoClient;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//connecting to mongodb remote
const mongo_url_local = "mongodb+srv://HaulShare:aakmv@cluster0-9pfpk.mongodb.net/test?retryWrites=true&w=majority"; //local server
MongoClient.connect(mongo_url_local,function(err,client){
    if (err) {
        console.log(err);
        return;
    }
    database = client.db("Db_HaulShare") // Database name in remote mongodb
})
//app.get('/', cors(corsHost), async(req, res) => {
//res.send('hi received')

app.use(express.json());
//POST method to add feedback to the db
app.post("/feedbackandrating", cors(corsHost), (req, res) => {
      var table = 'Feedbackandrating'
      database.collection(table).insertOne(req.body, function(err, records) {
          if (err) throw err;
        console.log(records);
        res.send(records);

      });
    });

  app.get("/getUname/:id", cors(corsHost), (req, res) => {
      var email = encodeURI(req.params.id)
      var table = 'users'
      console.log(email);
      query={}
      query['email_reg'] = email
      database.collection(table).find(query).toArray(function (err, result) {
        if (err);
        console.log(err);
        console.log(result);
      res.send(result);
      db.close();
    });
  });

app.post("/userprofileform", cors(corsHost), (req, res) => {
        var table = 'users'
        database.collection(table).insertOne(req.body, function(err, records) {
            if (err) throw err
          console.log(records);
          res.send(records);
        });
      });


  app.delete('/delete/:email_reg', cors(corsHost), (req, res) => {
          const email_reg = req.params.email_reg;
          console.log(email_reg)
          database.collection('users').findOneAndDelete({email_reg: email_reg}),
          database.collection('Advertisements').findOneAndDelete({user_id: email_reg},
          (err, result) => {
          if (err) return res.send(500, err)
          console.log('got deleted');
          res.send(true);
          });
      });

//running on port 17650
const port = process.env.PORT || 17650;
app.listen(port, () => console.log(`Listening on port ${port}...`));
//setting headers..
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-type,Accept');
    next();
});
