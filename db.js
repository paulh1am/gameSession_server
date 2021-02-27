// db.js

const mongoose = require('mongoose')
const MongoClient = require("mongodb").MongoClient;

const connectionString = "mongodb+srv://cryptoZed:crypto11@czzero.gtlm6.mongodb.net/czgames?retryWrites=true&w=majority";
// const client = new MongoClient(connectionString);
const dbName = "czgames";

function initialize() {
     
    MongoClient.connect(connectionString, { useUnifiedTopology: true })
    .then(client => {
        console.log('Connected to Database~ meow')
        const db = client.db('czgames')
    })

}



module.exports = {
    initialize
};