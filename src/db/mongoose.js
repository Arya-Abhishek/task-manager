const mongoose = require('mongoose')
// const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

// // instance created
// const me = new User({
//     name: '  Nike   ',
//     password: ' nikpassCode123   ',
//     email: '    NEW1234MAIL@GITHUB.IO  ',
//     age: 28
// })

//nothing will happen until here until we console log or save it to our database

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!', error)
// })


// //instance creation for saving it to database
// const task_1 = new Tasks({
//     description: '    wash the car',
//     completed: true
    
// })

// task_1.save().then(() => {
//     console.log(task_1)
// }).catch((error) => {
//     console.log('Error!', error)
// })