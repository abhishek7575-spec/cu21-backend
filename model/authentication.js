const mongoose = require('mongoose')

const userschema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    fullName: mongoose.Schema.Types.String,
    email:  mongoose.Schema.Types.String,
    password: mongoose.Schema.Types.String,
})

module.exports =mongoose.model("User",userschema)

