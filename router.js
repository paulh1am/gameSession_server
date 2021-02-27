const express = require('express')
const router = express.Router()


//  ==== DB init ===

const dbName = "czzero";

const collectionName = "users";

const db = require("./db");


db.initialize();

    // << db CRUD routes >>




router.get('/', (req, res) => {
    res.send('server is up and running')
})



module.exports = router