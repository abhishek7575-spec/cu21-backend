const express = require('express')
const app = express()
const path = require('path')
const bodyparser = require('body-parser')
const cors= require('cors')
const mongoose = require('mongoose')
/// Middlewares
mongoose.connect('mongodb+srv://abhishek:abhishek@cluster0.mjrgwuo.mongodb.net/accounts?retryWrites=true&w=majority')
    .then(() => {console.log(`connection with mongodb established >>`)})
    .catch((err) => {console.log(`connection with mongodb result in error : ${err}`)})

app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())

app.use(cors())

/// Static and dynamic files
app.use(express.static(path.join(__dirname,'public')))

app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')


/// Routes

// Homepage route
const homepage=require('./routes/homepage')
app.use('/',homepage)


// login route
const login =require('./routes/login')
app.use('/login',login)

// signup route
const signup=require('./routes/signup')
app.use('/signup',signup)

const blog=require('./routes/blog');
app.use('/blog',blog)


app.use( (req, res) => {
    res.status(404).send("404 PAGE NOT FOUND")
})

module.exports=app;