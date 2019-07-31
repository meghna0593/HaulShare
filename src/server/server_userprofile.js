const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongo = require('mongodb').MongoClient
const { ObjectId } = require('mongodb');
const PORT = process.env.PORT || 2344;

app.use(cors());
app.use(bodyParser.json());


var m;
mongo.connect('mongodb+srv://HaulShare:aakmv@cluster0-9pfpk.mongodb.net/test?retryWrites=true&w=majority', (error, data) => {
    if (!error) {
        console.log('connected')
        m = data;
    } else {

    }
})
app.get('/data/:table/:id/', (req, res) => {
  var mongo_url = 'mongodb+srv://HaulShare:aakmv@cluster0-9pfpk.mongodb.net/test?retryWrites=true&w=majority';
  mongo.connect(mongo_url, function(err, db) {
      if (err) throw err;

      var dbo = db.db("Db_HaulShare");
      var email = encodeURI(req.params.id);
      var table = req.params.table

      var query = {};
       query["service_id"] = email;

      dbo
    .collection(table)
    .find(query)
    .toArray(function(err, result) {
      if (err) console.log(err);
      console.log(result);
      res.send(result);
      db.close();
      });
  })


});
app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});
