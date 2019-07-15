const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongo = require('mongodb').MongoClient
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());


var m;
mongo.connect('mongodb://localhost:27017/haul_share', (error, data) => {
    if (!error) {
        console.log('connected')
        m = data;
    } else {
       
    }
})
app.get('/data/:table/:column/:id/', (req, res) => {
    var mongo_url = 'mongodb://localhost:27017/';
    mongo.connect(mongo_url, function(err,db){
        if (err) throw err;
        
        var dbo = db.db("haul_share");
        var table = req.params.table
        var query = {};
        query[req.params.column] = req.params.id
        dbo.collection(table).find(query).toArray(function(err,result){
            if(err) throw err;
        console.log(result);
        res.send(result);
        });
    })
        

});
// connection.once('open', function () {
//     console.log("MongoDB database connection established successfully");
// })

const vehicleinfobackRouter = require('./routes/vehicleinfoback');
app.use('/vehicleinfoback', vehicleinfobackRouter);


app.listen(PORT, function () {
    console.log("Server is running on Port: " + PORT);
});