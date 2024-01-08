const mongoose = require('../database')
const bcrypt = require('bcryptjs')

const UserSchema =  new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    password: {
        type: String,
        select: false,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})


const User = mongoose.model('twest', UserSchema)

module.exports = User