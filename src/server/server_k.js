//required libraries
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongo = require('mongodb').MongoClient
const {ObjectId} = require('mongodb');
const PORT = 4000;

app.use(cors());// express as middleware
app.use(bodyParser.json());


var m;
// [1,8]
mongo.connect('mongodb+srv://kushal_96:ktr41096@assignment4-qjd36.mongodb.net/test?retryWrites=true&w=majority', (error, data) => {
    if (!error) {
        console.log('connected')//shows mongodb atlas is connected
        m = data;
    } else {
       
    }
})
// [6]
app.get('/data/:table/:column/:id/', (req, res) => {//get mwthod which fetches the data from mongodb atlas using table name column as parameters
    var mongo_url = 'mongodb+srv://kushal_96:ktr41096@assignment4-qjd36.mongodb.net/test?retryWrites=true&w=majority';//connection string
    mongo.connect(mongo_url, function(err,db){
        if (err) throw err;
        // [7]
        var dbo = db.db("haul_share");
        var table = req.params.table
        var query = {};
        query[req.params.column] = ObjectId(req.params.id)//mapping parameters using ObjectId of Mongodb
        dbo.collection(table).find(query).toArray(function(err,result){//query
            if(err) throw err;
        console.log(result);
        res.send(result);//gets the result
        });
    })
        

});


app.listen(PORT, function () {
    console.log("Server is running on Port: " + PORT);
});