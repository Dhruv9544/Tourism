const mongoose = require('mongoose')
const validator = require('validator')

const AdminSchema = new mongoose.Schema({

    Name : {
        type:String,
        required:[true,'Please Enter your firstname'],
        trim:true
    },

    email:{
        type:String,
        required:[true,'Please Enter your email'],
        trim:true,
        unique:true,
        validate:[validator.isEmail,'please enter a valid email']
     },

     password:{
        type:String,
        require:true,
        minlength:8,
        trim:true
     },

     confirm_password : {
        type:String,
        require:true,
        minlength:8,
        trim:true
     },

     createdAt: {
        type: Date,
        default: Date.now(),
      },
})

module.exports = mongoose.model('Admin',AdminSchema)