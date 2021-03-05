const express = require('express')
const router = express.Router()


//  ==== DB init ===


const db = require("./db");


db.initialize().then(client => {
    console.log('~Connected to Database~')
    const db = client.db('czGames')
    
    const gamesCollection = db.collection('games');

// router.use(/* ... */)
// router.get(/* ... */)

    router.get('/', (req, res) => {
        res.send('server is up and running')
    })


    router.get('/games', (req, res) => {
        gamesCollection.find().toArray()
        .then(results => {
            console.log(results);
            res.send(results);
        })
        .catch(error => console.error(error))
      // ...
    })

// router.post(/* ... */)

    router.post('/games', (req, res) => {
    gamesCollection.insertOne(req.body)
    .then(result => {
      console.log(result)
    })
    .catch(error => console.error(error))
    })

}).catch(error => console.error(error));



module.exports = router