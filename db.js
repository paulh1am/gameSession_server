// db.js

const mongoose = require('mongoose')
const MongoClient = require("mongodb").MongoClient;

const connectionString = "mongodb+srv://cryptoZed:crypto11@czzero.gtlm6.mongodb.net/czgames?retryWrites=true&w=majority";
// const client = new MongoClient(connectionString);
const dbName = "czgames";

function initialize() {
     
   return MongoClient.connect(connectionString, { useUnifiedTopology: true })
        
    

}



module.exports = {
    initialize
};