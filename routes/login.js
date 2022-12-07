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
               return res.status(403).send({message:`No such email is present in our database`})
            }
            if (result.password===req.body.passkey){
              return  res.status(201).json({message:`Welcome to our site ${result.fullName}`})
            }
            else{
              return  res.status(401).json({message:`Invalid password for ${result.email}`})
            }
        })
        .catch((error) =>  {res.status(500).send({failed:'there is some error in our side',errs:error})})
})


module.exports = router;