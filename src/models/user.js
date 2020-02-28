const mongoose = require('mongoose')
const validator = require('validator')

//model created 
const User = mongoose.model('User', {
    name: {
        type: String,
        reqired: true,

        trim: true
    },
    password: {
        type: String,
        trim: true,
        required: true,
        validate(value) {
            if (!validator.isLength(value, { min: 6 })) { 
                throw new Error('provide the length of password grater than 6')
            }

            if (validator.contains(value, 'password')) {
                throw new Error('password must not contain string password!')
            }
        }
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid!')
            }
        }
    },
    age: {
        type: Number,
        dafault: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive number!')
            } 
        }
    }
})

module.exports = User