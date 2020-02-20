// CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

//using destructuring 
const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
console.log(id)
console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to the database!')
    }

    const db = client.db(databaseName)

    db.collection('users-2').updateMany({
        isCompleted: false
    }, {
        $set: {
            isCompleted: true
        }
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

    // db.collection('users').updateOne({ 
    //     _id: new ObjectID("5e4b81a9b5e15123c87a9fc2")
    //  }, {
    //      $inc: {
    //          age: 1
    //      }
    //  }).then((result) => {
    //      console.log(result)
    //  }).catch((error) => {
    //      console.log(error)
    //  })


        //find method
    // db.collection('users-2').findOne({ _id: new ObjectID("5e4c23669d9ff845ec9e00c8")}, (error, user) => {
    //     if (error) {
    //         console.log(error)
    //     }

    //     console.log(user)
    // })

    // db.collection('users-2').find({ isCompleted: false }).toArray((error, users) => {
    //     console.log(users)
    // })

    // db.collection('users-2').find({ isCompleted: false }).count((error, count) => {
    //     console.log(count)
    // })


    // db.collection('users').findOne({ _id: new ObjectID("5e4b81a9b5e15123c87a9fc2") }, (error, user) => {
    //     if (error) {
    //         console.log(error)
    //     }

    //     console.log(user)
    // })

        //insert method
    // db.collection('users').insertOne({
    //     //_id: id,
    //     name: 'Rahul',
    //     age: 27
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })


    // db.collection('users').insertMany([
    //     {
    //         name: 'hritik',
    //         age: 21
    //     }, {
    //         name: 'ankit',
    //         age: '20'
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents!')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users-2').insertMany([
    //     {
    //         task: 'need to finish control systems today first root locus',
    //         isCompleted: false
    //     }, {
    //         task: 'After that study for LIC viva tomorrow',
    //         isCompleted: false
    //     }, {
    //         task: 'complete day-12 of coding challenge to make it a habit',
    //         isCompleted: true
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert new user documents!')
    //     }

    //     console.log(result.ops)
    // })
})