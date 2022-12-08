const express = require('express');
const router = express.Router()
const mongoose = require('mongoose')
const User=require('../model/authentication')
router.get('/',(req,res) => {
    res.status(201).render('loginpage')
})

router.post('/',(req,res) => {

    User.findOne({email:req.body.account})
        .then((result) => {

            if(result == null){
               return res.status(200).send(`check your email or password`)
            }
           else if (result.password===req.body.passkey){
              return  res.status(201).send(`Welcome to our site ${result.fullName}`)
            }
            else{
              return  res.status(200).send(`check your email or password`)
            }
        })
        .catch((error) =>  {res.status(500).send(`there is some error in our side${error}`)})
})


module.exports = router;