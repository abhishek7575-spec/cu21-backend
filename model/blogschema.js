const mongoose = require('mongoose')

const blogschema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    fullName: mongoose.Schema.Types.String,
    email:  mongoose.Schema.Types.String,
    phone:  mongoose.Schema.Types.String,
    message: mongoose.Schema.Types.String,
})

module.exports =mongoose.model("Blog",blogschema)
