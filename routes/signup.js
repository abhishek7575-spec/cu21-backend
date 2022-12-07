const express = require('express')
const  mongoose  = require('mongoose')
const router=express.Router()
const User = require('../model/authentication')

router.get('/',(req,res)=>{
    res.status(200).render('signuppage')
})

router.post('/',(req,res)=>{
    User.findOne({email: req.body.account})
        .then((response)=>{
            if(response===null){
              
                 const accountuser=new User({
                    _id: mongoose.Types.ObjectId(),
                    fullName: req.body.fullname,
                    email: req.body.account,
                    password: req.body.passkey
                })
                accountuser.save()
                    .then((results)=>{res.status(201).send({message:`Thank you for registering ${results.fullName}`})})
                    .catch((err)=>{res.status(500).send({message:`Sorry but there is some error in our side ${err}`})})
            }
            else{
                res.status(403).send({message:"This email is already in use "})
            }

        })
        .catch(err=>{
            res.status(500).send({message:`Sorry but there is some error in our side ${err}`})
        })
})


module.exports = router