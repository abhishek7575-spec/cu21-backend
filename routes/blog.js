const express = require('express')
const router=express.Router()
const Blog=require('../model/blogschema')
const mongoose  = require('mongoose')



router.post('/',(req,res)=>{

    Blog.findOne({email: req.body.account})
        .then((result)=>{

            if(result===null){
                const userblog=new Blog({
                    _id: mongoose.Types.ObjectId(),
                    fullName: req.body.fullname,
                    email: req.body.account,
                    phone:req.body.phoneno,
                    message: req.body.text
                })
                userblog.save()
                    .then((results)=>{res.status(201).send(`Thank you we will contact you ${results.fullName}`)})
                    .catch((err)=>{res.status(500).send(`Sorry but there is some error in our side ${err}`)})
            }
            else{
                res.status(200).send(`You have already contacted us `)
            }

        }).catch((err)=>{res.status(500).send(`there is some error in our side ${err}`)})
})


module.exports= router;