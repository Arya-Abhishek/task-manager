const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

// //model created 
// const User = mongoose.model('User', {
//     name: {
//         type: String
//     },
//     age: {
//         type: Number
//     }
// })

// // instance created
// const me = new User({
//     name: 'Abhishek',
//     age: 20
// })

// //nothing will happen until here until we console log or save it to our database

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!', error)
// })

//Another model creation: Tasks
const Tasks = mongoose.model('Tasks', {
    description: {
        type: String
    }, 
    completed: {
        type: Boolean
    }
})

// instance creation for saving it to database
const task_1 = new Tasks({
    description: 'water the plants',
    completed: false
})

task_1.save().then(() => {
    console.log(task_1)
}).catch((error) => {
    console.log('Error!', error)
})