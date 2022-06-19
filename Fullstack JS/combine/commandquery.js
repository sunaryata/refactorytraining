
const user = require('./models/user');


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";



const listUser = ()=>{
   MongoClient.connect(url, function(err, db) {
       if (err) throw err;
       var dbo = db.db("facebookauth");
       dbo.collection("auth").find({}).toArray(function(err, result) {
         if (err) throw err;
         console.info(result);
     
         db.close();
       });
     });
    
}


const countUser = ()=>{
   MongoClient.connect(url, function(err, db) {
       if (err) throw err;
       var dbo = db.db("facebookauth");
       dbo.collection("auth").find({}).toArray(function(err, result) {
         if (err) throw err;
         console.log(`Jumlah Seluruh User : ${result.length}`);
         db.close();
       });
     });
    
}

const facebookUser = ()=>{
   MongoClient.connect(url, function(err, db) {
       if (err) throw err;
       var dbo = db.db("facebookauth");
       dbo.collection("auth").find({auth_cat:'facebook'}).toArray(function(err, result) {
         if (err) throw err;
         console.info(result);
         console.log(`Jumlah Pengguna : ${result.length}`);
         db.close();
       });
     });
    
}

const googleUser = ()=>{
   MongoClient.connect(url, function(err, db) {
       if (err) throw err;
       var dbo = db.db("facebookauth");
       dbo.collection("auth").find({auth_cat:'google'}).toArray(function(err, result) {
         if (err) throw err;
         console.info(result);
         console.log(`Jumlah Pengguna : ${result.length}`);
         db.close();
       });
     });
    
}


module.exports = {
  listUser,
   countUser,
   facebookUser,
   googleUser
}