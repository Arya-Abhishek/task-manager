const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

// //model created 
// const User = mongoose.model('User', {
//     name: {
//         type: String,
//         reqired: true,

//         trim: true
//     },
//     password: {
//         type: String,
//         trim: true,
//         required: true,
//         validate(value) {
//             if (!validator.isLength(value, { min: 6 })) { 
//                 throw new Error('provide the length of password grater than 6')
//             }

//             if (validator.contains(value, 'password')) {
//                 throw new Error('password must not contain string password!')
//             }
//         }
//     },
//     email: {
//         type: String,
//         required: true,
//         trim: true,
//         lowercase: true,
//         validate(value) {
//             if (!validator.isEmail(value)) {
//                 throw new Error('Email is invalid!')
//             }
//         }
//     },
//     age: {
//         type: Number,
//         dafault: 0,
//         validate(value) {
//             if (value < 0) {
//                 throw new Error('Age must be a positive number!')
//             } 
//         }
//     }
// })

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

//Another model creation: Tasks
const Tasks = mongoose.model('Tasks', {
    description: {
        type: String,
        required: true,
        trim: true
    }, 
    completed: {
        type: Boolean,
        default: false
    }
})

//instance creation for saving it to database
const task_1 = new Tasks({
    description: '    wash the car',
    completed: true
    
})

task_1.save().then(() => {
    console.log(task_1)
}).catch((error) => {
    console.log('Error!', error)
})