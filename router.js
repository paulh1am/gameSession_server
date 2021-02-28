const express = require('express')
const router = express.Router()


//  ==== DB init ===

// const dbName = "czzero";

// const collectionName = "users";

const db = require("./db");


db.initialize().then(client => {
    console.log('Connected to Database~ meow3')
    const db = client.db('czGames')
    const usersCollection = db.collection('Users');
    // router.use(/* ... */)
    // router.get(/* ... */)
    // router.post(/* ... */)
    // router.listen(/* ... */)

    router.post('/users', (req, res) => {
    usersCollection.insertOne(req.body)
    .then(result => {
      console.log(result)
    })
    .catch(error => console.error(error))
    })

}).catch(error => console.error(error));





router.get('/', (req, res) => {
    res.send('server is up and running')
})

// router.post('/users', (req, res) => {
//   console.log(req.body)
// })



module.exports = router