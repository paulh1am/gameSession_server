const express = require('express')
const router = express.Router()


//  ==== DB init ===

// const dbName = "czzero";

// const collectionName = "users";

const db = require("./db");


db.initialize().then(client => {
        console.log('Connected to Database~ meowz')
        const db = client.db('czgames')
    });

    // 'route issue - need middleware to allow router.use - - fix and add crud routes'




router.get('/', (req, res) => {
    res.send('server is up and running')
})

router.post('/users', (req, res) => {
  console.log(req.body)
})



module.exports = router