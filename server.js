var express = require('express');
var router = express.Router()
const cors = require('cors');
const app = express();

//app.use(cors());
var client = require('mongodb').MongoClient; 
//const corsHost = { origin: 'http://localhost:8080' }
var url = 'mongodb://localhost:27017/'; 

client.connect(url,{ useNewUrlParser: true }, function(err,db) 
{     
        var dbo=db.db("admin") 

        var conn = dbo.collection('haulshare');
    //conn.insert({user: 'qwe', password: '456'});


    var cursor = dbo.collection('haulshare').find();    
    cursor.each(function (err,doc) 
    { 
        if(doc!=null) 
        console.log(doc); 
    }); 
   
    db.close(); 

    
}); 
app.listen(5000, () => {
    console.log(`Server running on port 5000`)
  });